let player_build;
let build_powders;

function getItemNameFromID(id) { return idMap.get(id); }
function getTomeNameFromID(id) {
    let res = tomeIDMap.get(id);
    if (res === undefined) { console.log('WARN: Deleting unrecognized tome, id='+id); return ""; }
    return res;
}

function parsePowdering(powder_info) {
    // TODO: Make this run in linear instead of quadratic time... ew
    let powdering = [];
    for (let i = 0; i < 5; ++i) {
        let powders = "";
        let n_blocks = Base64.toInt(powder_info.charAt(0));
        // console.log(n_blocks + " blocks");
        powder_info = powder_info.slice(1);
        for (let j = 0; j < n_blocks; ++j) {
            let block = powder_info.slice(0,5);
            let six_powders = Base64.toInt(block);
            for (let k = 0; k < 6 && six_powders != 0; ++k) {
                powders += powderNames.get((six_powders & 0x1f) - 1);
                six_powders >>>= 5;
            }
            powder_info = powder_info.slice(5);
        }
        powdering[i] = powders;
    }
    return [powdering, powder_info];
}

let atree_data = null;
const wynn_version_names = [
    '2.0.1.1',
    '2.0.1.2',
    '2.0.2.1',
    '2.0.2.3',
    '2.0.3.1',
    '2.0.4.1',
    '2.0.4.3',
    '2.0.4.4',
    '2.1.0.0',
    '2.1.0.1',
    '2.1.1.0'
];
const WYNN_VERSION_LATEST = wynn_version_names.length - 1;
// Default to the newest version.
let wynn_version_id = WYNN_VERSION_LATEST;

let MAJOR_IDS = null;
async function load_major_id_data(version_str) {
    let getUrl = window.location;
    let baseUrl = `${getUrl.protocol}//${getUrl.host}/`;
    // No random string -- we want to use caching
    let url = `${baseUrl}/data/${version_str}/majid.json`;
    MAJOR_IDS = await (await fetch(url)).json();
    console.log("Loaded major id data");
}

let ASPECTS = null;
async function load_aspect_data(version_str) {
    let getUrl = window.location;
    let baseUrl = `${getUrl.protocol}//${getUrl.host}/`;
    // No random string -- we want to use caching
    let url = `${baseUrl}/data/${version_str}/aspects.json`;
    try {
        ASPECTS = await (await fetch(url)).json();
        console.log("Loaded aspects data");
    } catch (error) {
        ASPECTS = null;
        console.log("Could not load aspect data -- maybe an older version?");
        console.log(error);
    }
}

/*
 * Populate fields based on url, and calculate build.
 * TODO: THIS CODE IS GOD AWFUL result of being lazy
 * fix all the slice() and break into functions or do something about it... its inefficient, ugly and error prone
 */
async function parse_hash(url_tag) {
    let latest_ver_name = wynn_version_names[WYNN_VERSION_LATEST];
    const default_load_promises = [ load_atree_data(latest_ver_name), load_major_id_data(latest_ver_name),
                                    load_init(), load_ing_init(), load_tome_init()];
    if (!url_tag) {
        await Promise.all(default_load_promises);
        return;
    }
    //default values
    let equipment = [null, null, null, null, null, null, null, null, null];
    let tomes = [null, null, null, null, null, null, null, null];
    let powdering = ["", "", "", "", ""];
    let info = url_tag.split("_");
    let version = info[0];
    // Whether skillpoints are manually updated. True if they should be set to something other than default values
    let save_skp = false;
    let skillpoints = [0, 0, 0, 0, 0];
    let level = 106;

    let version_number = parseInt(version);
    let data_str = info[1];
    if (version_number >= 8) {
        // parse query parameters
        // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
        const url_params = new URLSearchParams(window.location.search);
        const version_id = url_params.get('v');
        wynn_version_id = parseInt(version_id);
        if (isNaN(wynn_version_id) || wynn_version_id > WYNN_VERSION_LATEST || wynn_version_id < 0) {
            // TODO: maybe make the NAN try to use the human readable version?
            // NOTE: Failing silently... do we want to raise a loud error?
            console.log("Explicit version not found or invalid, using latest version");
            wynn_version_id = WYNN_VERSION_LATEST;
        }
        else {
            console.log(`Build link for wynn version ${wynn_version_id} (${wynn_version_names[wynn_version_id]})`);
        }
    }
    else {
        // Change the default to oldest. (A time before v8)
        wynn_version_id = 0;
    }

    // the deal with this is because old versions should default to 0 (oldest wynn item version), and v8+ defaults to latest.
    // its ugly... but i think this is the behavior we want...
    if (wynn_version_id != WYNN_VERSION_LATEST) {
        // force reload item database and such.
        // TODO MUST: display a warning showing older version!
        const msg = 'This build was created in an older version of wynncraft '
                    + `(${wynn_version_names[wynn_version_id]} < ${wynn_version_names[WYNN_VERSION_LATEST]}). `
                    + 'Would you like to update to the latest version? Updating may break the build and ability tree.';

        if (confirm(msg)) {
            wynn_version_id = WYNN_VERSION_LATEST;
        }
        else {
            version_name = wynn_version_names[wynn_version_id];
            const load_promises = [ load_atree_data(version_name),
                                    load_major_id_data(version_name),
                                    load_aspect_data(version_name),
                                    load_old_version(version_name),
                                    load_ings_old_version(version_name),
                                    load_tome_old_version(version_name) ];
            console.log("Loading old version data...", version_name)
            await Promise.all(load_promises);
        }
    }

    if (wynn_version_id == WYNN_VERSION_LATEST) {
        await Promise.all(default_load_promises);
    }

    //equipment (items)
    // TODO: use filters
    if (version_number < 4) {
        let equipments = info[1];
        for (let i = 0; i < 9; ++i ) {
            let equipment_str = equipments.slice(i*3,i*3+3);
            equipment[i] = getItemNameFromID(Base64.toInt(equipment_str));
        }
        data_str = equipments.slice(27);
    }
    else if (version_number == 4) { 
        let info_str = data_str;
        let start_idx = 0;
        for (let i = 0; i < 9; ++i ) {
            if (info_str.charAt(start_idx) === "-") {
                equipment[i] = "CR-"+info_str.slice(start_idx+1, start_idx+18);
                start_idx += 18;
            }
            else {
                let equipment_str = info_str.slice(start_idx, start_idx+3);
                equipment[i] = getItemNameFromID(Base64.toInt(equipment_str));
                start_idx += 3;
            }
        }
        data_str = info_str.slice(start_idx);
    }
    else if (version_number <= 9) {
        let info_str = data_str;
        let start_idx = 0;
        for (let i = 0; i < 9; ++i ) {
            if (info_str.slice(start_idx,start_idx+3) === "CR-") {
                equipment[i] = info_str.slice(start_idx, start_idx+20);
                start_idx += 20;
            } else if (info_str.slice(start_idx+3,start_idx+6) === "CI-") {
                let len = Base64.toInt(info_str.slice(start_idx,start_idx+3));
                equipment[i] = info_str.slice(start_idx+3,start_idx+3+len);
                start_idx += (3+len);
            } else {
                let equipment_str = info_str.slice(start_idx, start_idx+3);
                equipment[i] = getItemNameFromID(Base64.toInt(equipment_str));
                start_idx += 3;
            }
        }
        data_str = info_str.slice(start_idx);
    }
    //constant in all versions
    for (let i in equipment) {
        setValue(equipment_inputs[i], equipment[i]);
    }

    //level, skill point assignments, and powdering
    if (version_number == 0) {
        // do nothing! lol
    } else if (version_number == 1) {
        let powder_info = data_str;
        let res = parsePowdering(powder_info);
        powdering = res[0];
    } else if (version_number == 2) {
        save_skp = true;
        let skillpoint_info = data_str.slice(0, 10);
        for (let i = 0; i < 5; ++i ) {
            skillpoints[i] = Base64.toIntSigned(skillpoint_info.slice(i*2,i*2+2));
        }

        let powder_info = data_str.slice(10);
        let res = parsePowdering(powder_info);
        powdering = res[0];
    } else if (version_number <= 9){
        level = Base64.toInt(data_str.slice(10,12));
        setValue("level-choice",level);
        save_skp = true;
        let skillpoint_info = data_str.slice(0, 10);
        for (let i = 0; i < 5; ++i ) {
            skillpoints[i] = Base64.toIntSigned(skillpoint_info.slice(i*2,i*2+2));
        }

        let powder_info = data_str.slice(12);

        let res = parsePowdering(powder_info);
        powdering = res[0];
        data_str = res[1];
    }
    // Tomes.
    if (version_number >= 6) {
        //tome values do not appear in anything before v6.
        if (version_number < 8) {
            for (let i = 0; i < 7; ++i) {
                let tome_str = data_str.charAt(i);
                let tome_name = getTomeNameFromID(Base64.toInt(tome_str));
                setValue(tomeInputs[i], tome_name);
            }
            data_str = data_str.slice(7);
        }
        else {
            // 2chr tome encoding to allow for more tomes.

            // Lootrun tome was added in v9.
            let num_tomes = 7;
            if (version_number <= 8) {
                num_tomes = 7;
            }
            else {
                num_tomes = 8;
            }
            for (let i = 0; i < num_tomes; ++i) {
                let tome_str = data_str.slice(2*i, 2*i+2);
                let tome_name = getTomeNameFromID(Base64.toInt(tome_str));
                setValue(tomeInputs[i], tome_name);
            }
            data_str = data_str.slice(num_tomes*2);
        }
    }

    if (version_number >= 7) {
        // ugly af. only works since its the last thing. will be fixed with binary decode
        atree_data = new BitVector(data_str);
    }
    else {
        atree_data = null;
    }

    for (let i in powder_inputs) {
        setValue(powder_inputs[i], powdering[i]);
    }
    for (let i in skillpoints) {
        setValue(skp_order[i] + "-skp", skillpoints[i]);
    }

    return save_skp;
}

/*
  * Assumptions:
  * - We make things a little extra bloated so the encoding can last for a couple versions at least
  * - The decoder will not need to peek at the items while decoding to extract information, so we can't
  *   escape storing information about existence or quantity of powders.
  * - Most items in a build will not be crafted.
  * - Most builds made will contain all items, Hence there's no need to store an additional flag to indicate
  *   that an item exists and we might as well just use a special ID to indicate no item.
  * - Most builds made will not contain tomes, as it's usually too much of a bother to put on a build.
  * - Builds are most commonly made for max level. Make a single bit flag to indicat max level or not.
  * - Skill points are unpredictable - however, most users don't assign multiple skillpoints on every build.
  *   if we can only store that it would be for the best.
  * - TODO: Aspect encoding.
  *
  * UNFINISHED
  * Header: 32 bits
  * - 16 bit version (up to 2^16 versions)
  * - 16 bits reserved
  *
  * UNFINISHED
  * Item type: max 1 bit flag, 3 bits (up to 1 + 8 item types encoded)
  * - 1 bit flag (0 = normal, 1 = other)
  * - if flag is set, followup is a 3 bit type:
  * -   000 crafted
  * -   010 custom
  * -   ...
  *
  * DONE
  * Item id: 13 bits (up to 8k items encoded)
  * - 2^13 - 1 (0b11111111111111111) means no item (:ANGRYFACE: id 0 is already in use in the db.)
  * - ...
  * - 1 big flag - has powders, doesn't have powders
  *
  * DONE
  * powders: max 2 bit flag, 6 bits (64 powder choices, infinite powders per item)
  * - First powder is 6 bits powder ID.
  * - 2 bit powder header:
  *   00 next item               [no extra bits],
  *   01 repeat powder           [no extra bits],
  *   10 only repeat powder tier [4 bit powder element],
  *   11 new powder              [6 bit powder ID]
  *
  * DONE
  * tomes: 1 bit flag, 6 bits
  * - 0 - no tome.
  * - 1 - tomes here.
  *     3 bits tome type
  *     8 bits tome ID
  *
  *   followed by the same flag - 1 for an extra tome, 0 for no more tomes.
  *
  *   tome type:
  *   00 weapon
  *   01 armor
  *   10 guild
  *   11 lootrun
  *
  *   tome_id - 8 bits (256 tomes)
  *
  * DONE
  * level: max 1 bit flag, 8 bits (256 levels)
  * - 0 = max level
  * - 1 = 8 bit level number follows
  *
  * DONE
  * manually assigned skp:
  * - 1 bit flag (0 = no user assigned, 1 = has user assigned)
  * - if flag then
  *   0 - no sp in current element, continue parsing
  *   1 - has sp in current element, parse next 8 bits as assigned count
  *
  *   elements are ordered etwfa
  *
  *
  * Ability tree done last
  * courtesy of sockmower and hpp
*/

/*
 * This function mutates bitvec.
 */

// ENCODING CONSTANTS

// powders
const CONTINUE = 0b00;
const REPEAT_POWDER = 0b01;
const REPEAT_TIER = 0b10;
const NEW_POWDER = 0b11;

const NEXT_POWDER_FLAG_LEN = 2;
const POWDER_TIERS = 6;
const BITS_PER_ELEMENT = 4;
const BITS_PER_POWDER = 6;

// items
const ITEM_KIND_REGULAR = 0b0;
const ITEM_KIND_IRREGULAR = 0b1;
const ITEM_KIND_LEN = 1;

const ITEM_TYPE_CRAFTED = 0b000;
const ITEM_TYPE_CUSTOM = 0b001;
const ITEM_TYPE_LEN = 3;

const NO_POWDERS = 0b0;
const HAS_POWDERS = 0b1
const POWDER_FLAG_LEN = 1;

const ITEM_ID_LEN = 13;

const POWDERABLES = [0, 1, 2, 3, 16];

// skill points
const NO_USER_ASSIGNED_SKP = 0b0
const USER_ASSIGNED_SKP = 0b1
const USER_ASSIGNED_SKP_FLAG_LEN = 1;

const NO_ELEMENT_SKP_ASSIGNED = 0b0;
const ELEMENT_SKP_ASSIGNED = 0b1;
const ELEMENT_SKP_FLAG_LEN = 1;

const SKP_BITLEN = 8; // max assign 256 SKP

// Tomes
const NO_MORE_TOMES = 0b0;
const HAS_TOME = 0b1;
const TOME_FLAG_LEN = 1;

const TOME_KIND_WEAPON = 0b000;
const TOME_KIND_ARMOR = 0b001;
const TOME_KIND_GUILD = 0b010;
const TOME_KIND_LOOTRUN = 0b011;

const TOME_KIND_LEN = 3;

const TOME_ID_LEN = 8;

// Levels
const MAX_LEVEL = 106;
const LEVEL_MAX = 0b0;
const LEVEL_NOT_MAX = 0b1;
const LEVEL_FLAG_LEN = 1;

// 256 levels
const LEVEL_BIT_LEN = 8;


/**
  * @param {BitVector} bitvec
  * @param { {current_index: number} } cursor
  * @param {number} amount
  *
  * @TODO: This can be a method on BitVector
  *
  * @returns the result of read_bit(idx);
  */
function bitvec_read_advance_cursor(bitvec, cursor) {
  const idx = cursor.idx;
  cursor.idx += 1;
  return bitvec.read_bit(idx);
}

/**
  * @param {BitVector} bitvec
  * @param { {current_index: number} } cursor
  * @param {number} end
  *
  * @TODO: This can be a method on BitVector
  *
  * @returns the result of slice(cursor.current_index, amount);
  */
function bitvec_slice_advance_cursor(bitvec, cursor, end) {
  const idx = cursor.idx;
  cursor.idx += end;
  return bitvec.slice(idx, idx + end);
}

/**
 * @param {Base64} b64_data_string
 */
function parseHashStr(b64_data_string) {
  const bitvec = new BitVector(b64_data_string);
  cursor = {idx: 0};

  const ITEM_FIELDS = 9;
  const ITEM_ID_LEN = 13;
  // parse items

  const POWDERABLES_INNER = [0, 1, 2, 3, 8]; // JANK [helmet, chestplate, leggings, boots, weapon]

  const NUM_SKP = 5;

  const items = [];
  const powders = [];
  const tomes = [];
  const skp = [];
  let level = 0;

  for (let i = 0; i < ITEM_FIELDS; ++i) {

    // Parse item type and ID
    switch (bitvec_slice_advance_cursor(bitvec, cursor, ITEM_KIND_LEN)) {
      case ITEM_KIND_REGULAR: {
        items.push(bitvec_slice_advance_cursor(bitvec, cursor, ITEM_ID_LEN));
        break;
      }
      case ITEM_KIND_IRREGULAR: {
        console.error(`WE DON"T HANDLE IRREGULAR ITEMS ATM!`);
      }
    }

    if (!POWDERABLES_INNER.includes(i)) { // JANK
      continue;
    };

    // Parse powders
    if (bitvec_slice_advance_cursor(bitvec, cursor, POWDER_FLAG_LEN) === NO_POWDERS) { 
      powders.push([]);
      continue;
    } else {
      const powderset = [];
      let powder_id = bitvec_slice_advance_cursor(bitvec, cursor, BITS_PER_POWDER); // first powder
      powderset.push(powder_id);
      let powder_flag = bitvec_slice_advance_cursor(bitvec, cursor, NEXT_POWDER_FLAG_LEN);

      while (powder_flag !== CONTINUE) {
        switch (powder_flag) {
          case REPEAT_POWDER:
            break;
          case REPEAT_TIER:
            const element = bitvec_slice_advance_cursor(bitvec, cursor, BITS_PER_ELEMENT); 
            const tier = (((powder_id - 1) % POWDER_TIERS) + 1);
            powder_id = element * POWDER_TIERS + tier;
            break;
          case NEW_POWDER:
            powder_id = bitvec_slice_advance_cursor(bitvec, cursor, BITS_PER_POWDER);
            break;
          default:
            throw new Error(`Unknown powder flag: ${powder_flag}`);
        }
        powderset.push(powder_id);
        powder_flag = bitvec_slice_advance_cursor(bitvec, cursor, NEXT_POWDER_FLAG_LEN);
      }
      powders.push(powderset);
    }
  }

  // Parse tomes
  while (bitvec_slice_advance_cursor(bitvec, cursor, TOME_FLAG_LEN) === HAS_TOME) {
    const tome_kind = bitvec_slice_advance_cursor(bitvec, cursor, TOME_KIND_LEN);
    const tome_id = bitvec_slice_advance_cursor(bitvec, cursor, TOME_ID_LEN);
    tomes.push([tome_kind, tome_id]);
  }

  // Parse skp
  if (bitvec_slice_advance_cursor(bitvec, cursor, USER_ASSIGNED_SKP_FLAG_LEN) === USER_ASSIGNED_SKP) {
    for (let i = 0; i < NUM_SKP; ++i) {
      if (bitvec_slice_advance_cursor(bitvec, cursor, ELEMENT_SKP_FLAG_LEN) === ELEMENT_SKP_ASSIGNED) 
        skp.push([i, bitvec_slice_advance_cursor(bitvec, cursor, SKP_BITLEN)]);
    }
  }

  // Parse level
  if (bitvec_slice_advance_cursor(bitvec, cursor, LEVEL_FLAG_LEN) === LEVEL_MAX) {
    level = MAX_LEVEL;
  } else {
    level = bitvec_slice_advance_cursor(bitvec, cursor, LEVEL_BIT_LEN);
  }

  const atree_vec = new BitVector(0, 0)

  while (bitvec.length - cursor.idx >= 32) {
    atree_vec.append(bitvec_slice_advance_cursor(bitvec, cursor, 32), 32);
  }

  const atree_bitlen = bitvec.length - cursor.idx;
  atree_vec.append(bitvec_slice_advance_cursor(bitvec, cursor, atree_bitlen), atree_bitlen);

  console.log("items:", items);
  console.log("powders:", powders);
  console.log("tomes:", tomes);
  console.log("skillpoints", skp);
  console.log("level:", level);
  console.log("atree:", atree_vec.toString());
}

function encodePowders(bitvec, powderset) {
  if (powderset.length === 0) {
    // An item with no powders should have it's powdered flag set to 0.
    throw new Error("Bad implementation of encodeItem, called encodePowders on an item with no powders.");
  };

  bitvec.append(powderset[0], BITS_PER_POWDER);

  let i = 0;
  let mask;
  let mask_len;
  let flag;
  while (i < powderset.length - 1) {
    if (powderset[i] == powderset[i + 1]) {
      flag = REPEAT_POWDER;;
      mask = 0;
      mask_len = 0;
    } else if (powderset[i] % POWDER_TIERS === powderset[i + 1] % POWDER_TIERS) {
      flag = REPEAT_TIER;
      mask = Math.floor(powderset[i + 1] / POWDER_TIERS);
      mask_len = BITS_PER_ELEMENT
    } else {
      flag = NEW_POWDER;
      mask = powderset[i + 1];
      mask_len = BITS_PER_POWDER;
    }
    bitvec.append(flag, NEXT_POWDER_FLAG_LEN);
    bitvec.append(mask, mask_len)
    i += 1;
  }

  bitvec.append(CONTINUE, NEXT_POWDER_FLAG_LEN);
}

function encodeCustom(bitvec, item) {
    console.error("encodeCustom is unimplemented")
}

function encodeCrafted(bitvec, item) {
    console.error("encodeCrafted is unimplemented");
}
/*
 * This function mutates bitvec.
 */
function encodeRegular(bitvec, item) {
    if (item.statMap.get("NONE") !== undefined) {
      // NOTE(orgold): (1 << 13) - 1 instead of ~0, because ~0 breaks the bitvec.
      // Most likely because of signedness.
      bitvec.append((1 << 13) - 1, ITEM_ID_LEN);
      return;
    }

    bitvec.append(item.statMap.get("id"), ITEM_ID_LEN);
}

function encodeSkp(bitvec, build, skillpoints) {
    const extra_skp = skillpoints.map((user_total, i) => user_total - build.total_skillpoints[i])

    if (extra_skp.every(skp => skp === 0)) {
        bitvec.append(NO_USER_ASSIGNED_SKP, USER_ASSIGNED_SKP_FLAG_LEN);
    } else {
        bitvec.append(USER_ASSIGNED_SKP, USER_ASSIGNED_SKP_FLAG_LEN);
        for (const skp of extra_skp) {
            if (skp > 0) {
                bitvec.append(ELEMENT_SKP_ASSIGNED, ELEMENT_SKP_FLAG_LEN);
                bitvec.append(skp, SKP_BITLEN);
            } else {
                bitvec.append(NO_ELEMENT_SKP_ASSIGNED, ELEMENT_SKP_FLAG_LEN);
            }
        }
    }
}

function encodeAtree(head, atree_state, visited, bitvec) {
    for (const child of head.children) {
        if (visited.has(child.ability.id)) { continue; }
        visited.add(child.ability.id, true);
        if (atree_state.get(child.ability.id).active) {
            bitvec.append(1, 1);
            encodeAtree(child, atree_state, visited, bitvec);
        }
        else {
            bitvec.append(0, 1);
        }
    }
}

function encodeBuildBinary(build, powders, skillpoints, atree, atree_state) {
    const bitvec = new BitVector(0, 0);

    const tomes = []

    // Encode items and their respective powders
    for (const [i, item] of build.items.entries()) {
        // Encode item
        switch (item.statMap.get("category")) {
            case "tome": {
                // Tome encoding - save and encode later
                if (!item.statMap.get("NONE")) {
                  tomes.push(item);
                }
                break;
            }
            case "crafted": {
                // Crafted item encoding
                bitvec.append(ITEM_KIND_IRREGULAR, ITEM_KIND_LEN);
                bitvec.append(ITEM_TYPE_CRAFTED, ITEM_TYPE_LEN);
                encodeCrafted(bitvec, item);
                break;
            }
            case "custom": {
                // Custom item encoding.
                bitvec.append(ITEM_KIND_IRREGULAR, ITEM_KIND_LEN);
                bitvec.append(ITEM_TYPE_CUSTOM, ITEM_TYPE_LEN);
                encodeCustom(bitvec, item);
                break;
            }
            default:
                bitvec.append(ITEM_KIND_REGULAR, ITEM_KIND_LEN);
                encodeRegular(bitvec, item);
                break;
        }

      // Encode item powders
      if (POWDERABLES.includes(i)) {
          const powderset_index = POWDERABLES.indexOf(i);
          if (powders[powderset_index].length > 0) {
              bitvec.append(HAS_POWDERS, POWDER_FLAG_LEN);
              encodePowders(bitvec, powders[powderset_index])
          } else {
              bitvec.append(NO_POWDERS, POWDER_FLAG_LEN);
          }
        }
    }

    // Encode tomes
    if (tomes.length > 0) {
        for (const tome of tomes) {
            bitvec.append(HAS_TOME, TOME_FLAG_LEN);
            let tome_kind;
            switch (tome.statMap.get("type")) {
                case "weaponTome": tome_kind = TOME_KIND_WEAPON; break;
                case "armorTome": tome_kind = TOME_KIND_ARMOR; break;
                case "guildTome": tome_kind = TOME_KIND_GUILD; break;
                case "lootrunTome": tome_kind = TOME_KIND_LOOTRUN; break;
            }
            bitvec.append(tome_kind, TOME_KIND_LEN);
            bitvec.append(tome.statMap.get("id"), TOME_ID_LEN);
        }
    }
    bitvec.append(NO_MORE_TOMES, TOME_FLAG_LEN);

    // Encode skillpoints
    encodeSkp(bitvec, build, skillpoints);

    // Encode level
    if (build.level === MAX_LEVEL) {
        bitvec.append(LEVEL_MAX, LEVEL_FLAG_LEN);
    } else {
        bitvec.append(LEVEL_NOT_MAX, LEVEL_FLAG_LEN);
        bitvec.append(build.level, LEVEL_BIT_LEN);
    }

    // Encode ability tree
    if (atree.length > 0 && atree_state.get(atree[0].ability.id).active) {
      encodeAtree(atree[0], atree_state, new Set(), bitvec);
    }

    return [bitvec, bitvec.length, bitvec.toB64()];
}


/*  Stores the entire build in a string using B64 encoding and adds it to the URL.
*/
function encodeBuild(build, powders, skillpoints, atree, atree_state) {
    const [v, len, data] = encodeBuildBinary(build, powders, skillpoints, atree, atree_state);
    console.log(data);
    parseHashStr(data);

    if (build) {
        let build_string;
        
        //V6 encoding - Tomes
        //V7 encoding - ATree
        //V8 encoding - wynn version
        //V9 encoding - lootrun tome
        build_version = 9;
        build_string = "";
        tome_string = "";

        for (const item of build.items) {
            if (item.statMap.get("custom")) {
                let custom = "CI-"+encodeCustom(item, true);
                build_string += Base64.fromIntN(custom.length, 3) + custom;
                //build_version = Math.max(build_version, 5);
            } else if (item.statMap.get("crafted")) {
                build_string += "CR-"+encodeCraft(item);
            } else if (item.statMap.get("category") === "tome") {
                let tome_id = item.statMap.get("id");
                //if (tome_id <= 60) {
                    // valid normal tome. ID 61-63 is for NONE tomes.
                    //build_version = Math.max(build_version, 6);
                //}
                tome_string += Base64.fromIntN(tome_id, 2);
            } else {
                build_string += Base64.fromIntN(item.statMap.get("id"), 3);
            }
        }

        for (const skp of skillpoints) {
            build_string += Base64.fromIntN(skp, 2); // Maximum skillpoints: 2048
        }
        build_string += Base64.fromIntN(build.level, 2);
        for (const _powderset of powders) {
            let n_bits = Math.ceil(_powderset.length / 6);
            build_string += Base64.fromIntN(n_bits, 1); // Hard cap of 378 powders.
            // Slice copy.
            let powderset = _powderset.slice();
            while (powderset.length != 0) {
                let firstSix = powderset.slice(0,6).reverse();
                let powder_hash = 0;
                for (const powder of firstSix) {
                    powder_hash = (powder_hash << 5) + 1 + powder; // LSB will be extracted first.
                }
                build_string += Base64.fromIntN(powder_hash, 5);
                powderset = powderset.slice(6);
            }
        }
        build_string += tome_string;

        if (atree.length > 0 && atree_state.get(atree[0].ability.id).active) {
            //build_version = Math.max(build_version, 7);
            const bitvec = encode_atree(atree, atree_state);
            build_string += bitvec.toB64();
        }

        return build_version.toString() + "_" + build_string;
    }
}

function get_full_url() {
    return `${url_base}?v=${wynn_version_id.toString()}${location.hash}`
}

function copyBuild() {
    copyTextToClipboard(get_full_url());
    document.getElementById("copy-button").textContent = "Copied!";
}

function shareBuild(build) {
    if (build) {
        let text = get_full_url()+"\n"+
            "WynnBuilder build:\n"+
            "> "+build.items[0].statMap.get("displayName")+"\n"+
            "> "+build.items[1].statMap.get("displayName")+"\n"+
            "> "+build.items[2].statMap.get("displayName")+"\n"+
            "> "+build.items[3].statMap.get("displayName")+"\n"+
            "> "+build.items[4].statMap.get("displayName")+"\n"+
            "> "+build.items[5].statMap.get("displayName")+"\n"+
            "> "+build.items[6].statMap.get("displayName")+"\n"+
            "> "+build.items[7].statMap.get("displayName")+"\n"+
            "> "+build.items[16].statMap.get("displayName")+" ["+build_powders[4].map(x => powderNames.get(x)).join("")+"]\n";
        for (let tomeslots = 8; tomeslots < 16; tomeslots++) {
            if (!build.items[tomeslots].statMap.has('NONE')) {
                text += ">"+' (Has Tomes)' ;
                break;
            }
        }
        copyTextToClipboard(text);
        document.getElementById("share-button").textContent = "Copied!";
    }
}

/**
 * Ability tree encode and decode functions
 *
 * Based on a traversal, basically only uses bits to represent the nodes that are on (and "dark" outgoing edges).
 * credit: SockMower
 */

/**
 * Return: BitVector
 */
function encode_atree(atree, atree_state) {
    let ret_vec = new BitVector(0, 0);

    function traverse(head, atree_state, visited, ret) {
        for (const child of head.children) {
            if (visited.has(child.ability.id)) { continue; }
            visited.add(child.ability.id, true);
            if (atree_state.get(child.ability.id).active) {
                ret.append(1, 1);
                traverse(child, atree_state, visited, ret);
            }
            else {
                ret.append(0, 1);
            }
        }
    }

    traverse(atree[0], atree_state, new Set(), ret_vec);
    return ret_vec;
}

/**
 * Return: List of active nodes
 */
function decode_atree(atree, bits) {
    let i = 0;
    let ret = [];
    ret.push(atree[0]);
    function traverse(head, visited, ret) {
        for (const child of head.children) {
            if (visited.has(child.ability.id)) { continue; }
            visited.add(child.ability.id, true);
            if (bits.read_bit(i)) {
                i += 1;
                ret.push(child);
                traverse(child, visited, ret);
            }
            else {
                i += 1;
            }
        }
    }
    traverse(atree[0], new Set(), ret);
    return ret;
}
