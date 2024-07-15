const atrees = {
    "Archer": [
        {
            "display_name": "Arrow Bomb",
            "desc": "Shoots a long-ranged arrow that explodes and deals high damage over a large area. (Self-damage for 10% of your DPS)",
            "parents": [],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 0,
                "col": 4,
                "icon": "node_archer"
            },
            "properties": {
                "aoe": 4.5,
                "range": 26
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Arrow Bomb",
                    "cost": 45,
                    "base_spell": 3,
                    "spell_type": "damage",
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Arrow Bomb",
                            "type": "damage",
                            "multipliers": [
                                130,
                                0,
                                0,
                                0,
                                20,
                                0
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Arrow Bomb": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Bow Proficiency",
            "desc": "Improve your Main Attack's damage and range when using a bow.",
            "base_abil": 999,
            "parents": [
                "Arrow Bomb"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {"range": 6},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Single Shot",
                    "multipliers": [
                        5,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Arrow Bomb",
            "desc": "Reduce the Mana cost of Arrow Bomb.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Bow Proficiency"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -10
                }
            ]
        },
        {
            "display_name": "Heart Shatter",
            "desc": "Hitting a mob directly with Arrow Bomb will shatter its heart and deal additional damage.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Bow Proficiency"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 4,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Heart Shatter",
                    "multipliers": [
                        100,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Total Damage",
                    "hits": {
                        "Heart Shatter": 1
                    }
                }
            ]
        },
        {
            "display_name": "Double Shots",
            "desc": "Doubles Main Attack arrows and reduces their damage by 30%. (harder to hit far enemies)",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "base_abil": 999,
            "parents": [
                "Escape"
            ],
            "dependencies": [],
            "blockers": [
                "Power Shots"
            ],
            "cost": 1,
            "display": {
                "row": 7,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Single Shot",
                    "multipliers": [
                        -40,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Total Damage",
                    "hits": {
                        "Single Shot": 2
                    },
                    "display": "Total Damage"
                }
            ]
        },
        {
            "display_name": "Escape",
            "desc": "Throw yourself backward to avoid danger. (Hold shift while escaping to cancel)",
            "parents": [
                "Heart Shatter"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 7,
                "col": 4,
                "icon": "node_archer"
            },
            "properties": {
                "aoe": 0,
                "range": 0
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Escape",
                    "cost": 20,
                    "base_spell": 2,
                    "display": "",
                    "parts": []
                }
            ]
        },
        {
            "display_name": "Power Shots",
            "desc": "Your Main Attack arrows have increased speed and knockback.",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "base_abil": 999,
            "parents": [
                "Escape"
            ],
            "dependencies": [],
            "blockers": [
                "Double Shots"
            ],
            "cost": 1,
            "display": {
                "row": 7,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Arrow Storm",
            "desc": "Shoots a stream of 8 arrows, dealing significant damage to close mobs and pushing them away.",
            "parents": [
                "Double Shots",
                "Cheaper Escape I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 2,
                "icon": "node_archer"
            },
            "properties": {
                "range": 16
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Arrow Storm",
                    "cost": 35,
                    "base_spell": 1,
                    "spell_type": "damage",
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Single Arrow",
                            "multipliers": [
                                30,
                                0,
                                10,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "Single Stream",
                            "hits": {
                                "Single Arrow": 8
                            }
                        },
                        {
                            "name": "Total Damage",
                            "hits": {
                                "Single Stream": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Escape I",
            "desc": "Reduce the Mana cost of Escape.",
            "base_abil": "Escape",
            "parents": [
                "Arrow Storm",
                "Arrow Shield"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Arrow Shield",
            "desc": "Forms a shield around you that deals damage and knocks away mobs when they touch it. (3 Charges)",
            "parents": [
                "Power Shots",
                "Cheaper Escape I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 6,
                "icon": "node_archer"
            },
            "properties": {
                "charges": 3,
                "duration": 60,
                "range": 2.3
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Arrow Shield",
                    "cost": 30,
                    "base_spell": 4,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Shield Damage",
                            "type": "damage",
                            "multipliers": [
                                90,
                                0,
                                0,
                                0,
                                0,
                                10
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Shield Damage": "Arrow Shield.charges"
                            }
                        }
                    ]
                },
                {
                    "type": "raw_stat",
                    "toggle": "Arrow Defense",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "defMult.ArrowShield",
                            "value": 20
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Windy Feet",
            "desc": "Casting Escape grants a 20% speed buff for 120 seconds to you and nearby players.",
            "base_abil": "Escape",
            "parents": [
                "Arrow Storm"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 8,
                "duration": 120,
                "speed": 0.2
            },
            "effects": []
        },
        {
            "display_name": "Air Mastery",
            "base_abil": 998,
            "desc": "Increase your base damage from all Air attacks",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "parents": [
                "Arrow Storm"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "aDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Thunder Mastery",
            "base_abil": 998,
            "desc": "Increase your base damage from all Thunder attacks.",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "parents": [
                "Arrow Storm",
                "Fire Mastery",
                "Cheaper Escape I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "tDamPct",
                            "value": 10
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMin",
                            "value": 1
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMax",
                            "value": 8
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Fire Mastery",
            "base_abil": 998,
            "desc": "Increase your base damage from all Fire attacks",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "parents": [
                "Thunder Mastery",
                "Arrow Shield",
                "Cheaper Escape I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "fDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMax",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Water Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Water attacks",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "parents": [
                "Arrow Shield"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "wDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Earth Mastery",
            "base_abil": 998,
            "desc": "Increase your base damage from all Earth attacks",
            "archetype": "Trapper",
            "archetype_req": 0,
            "parents": [
                "Thunder Mastery",
                "Cheaper Escape I",
                "Fire Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 14,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "eDamPct",
                            "value": 20
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Nimble String",
            "desc": "Doubles the speed of Arrow Storm and shoots +6 arrows per stream.",
            "base_abil": "Arrow Storm",
            "parents": [
                "Air Mastery",
                "Arrow Rain"
            ],
            "dependencies": [
                "Arrow Storm"
            ],
            "blockers": [
                "Phantom Ray"
            ],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Arrow",
                    "multipliers": [
                        -5,
                        0,
                        -5,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Stream",
                    "hits": {
                        "Single Arrow": 6
                    }
                }
            ]
        },
        {
            "display_name": "Arrow Rain",
            "desc": "When Arrow Shield loses its last charge, spew 150 arrows around you to rain down on enemies.",
            "base_abil": "Arrow Shield",
            "parents": [
                "Nimble String",
                "Thunder Mastery"
            ],
            "dependencies": [
                "Arrow Shield"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 15,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Arrow Rain",
                    "multipliers": [
                        150,
                        0,
                        0,
                        0,
                        0,
                        100
                    ]
                }
            ]
        },
        {
            "display_name": "Bryophyte Roots",
            "desc": "Hitting an enemy with Arrow Storm will create an area that slows them down and deals damage every 0.4s.",
            "base_abil": "Arrow Storm",
            "archetype": "Trapper",
            "archetype_req": 1,
            "parents": [
                "Fire Creep",
                "Earth Mastery"
            ],
            "dependencies": [
                "Arrow Storm"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 16,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 2,
                "duration": 5,
                "slowness": 0.4
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Bryophyte Roots",
                    "cost": 0,
                    "multipliers": [
                        30,
                        10,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Total Roots Damage",
                    "hits": {
                        "Bryophyte Roots": 12
                    }
                }
            ]
        },
        {
            "display_name": "Fire Creep",
            "desc": "Arrow Bomb will leave a trail of fire for 6s. (3s cooldown) Enemies that walk into it take damage every 0.4s.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Phantom Ray",
                "Fire Mastery",
                "Bryophyte Roots"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 16,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {
                "duration": 6
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Fire Creep",
                    "multipliers": [
                        30,
                        0,
                        0,
                        0,
                        20,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Total Burn Damage",
                    "hits": {
                        "Fire Creep": 15
                    }
                }
            ]
        },
        {
            "display_name": "Phantom Ray",
            "desc": "Condense Arrow Storm into a single ray that damages enemies 10 times per second",
            "base_abil": "Arrow Storm",
            "parents": [
                "Water Mastery",
                "Fire Creep"
            ],
            "dependencies": [
                "Arrow Storm"
            ],
            "blockers": [
                "Windstorm",
                "Nimble String",
                "Arrow Hurricane"
            ],
            "cost": 2,
            "display": {
                "row": 16,
                "col": 8,
                "icon": "node_2"
            },
            "properties": {
                "range": 16,
                "duration": 1.2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Phantom Ray",
                    "base_spell": 1,
                    "spell_type": "damage",
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Single Arrow",
                            "type": "damage",
                            "multipliers": [
                                25,
                                0,
                                0,
                                5,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Single Arrow": 12
                            }
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Triple Shots",
            "desc": "Triples Main Attack arrows but they deal -20% of normal Main Attack arrow damage.",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "base_abil": 999,
            "parents": [
                "Nimble String",
                "Frenzy"
            ],
            "dependencies": [
                "Double Shots"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 17,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Single Shot",
                    "multipliers": [
                        -10,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Total Damage",
                    "hits": {
                        "Single Shot": 1
                    },
                    "display": "Total Damage"
                }
            ]
        },
        {
            "display_name": "Frenzy",
            "desc": "Hitting an enemy will give you a brief buff of +3% Walk Speed. (Max +70%) -10% of the bonus decays every second.",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "parents": [
                "Triple Shots",
                "Arrow Rain"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 17,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Hits dealt",
                    "slider_max": 24,
                    "output": {
                        "type": "stat",
                        "name": "spd"
                    },
                    "scaling": [
                        3
                    ],
                    "max": 70
                }
            ]
        },
        {
            "display_name": "Guardian Angels",
            "desc": "Your Arrow Shield arrows turn into sentient bows that attack nearby enemies up to 8 times each. (Arrow Shield will no longer knock mobs away)",
            "archetype": "Boltslinger",
            "archetype_req": 3,
            "base_abil": "Arrow Shield",
            "parents": [
                "Triple Shots",
                "Frenzy"
            ],
            "dependencies": [
                "Arrow Shield"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 19,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "range": 6,
                "duration": 60,
                "shots": 8
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Guardian Angels",
                    "base_spell": 4,
                    "display": "DPS",
                    "parts": [
                        {
                            "name": "Single Shot",
                            "type": "damage",
                            "multipliers": [
                                30,
                                0,
                                0,
                                0,
                                0,
                                10
                            ]
                        },
                        {
                            "name": "Single Bow",
                            "type": "total",
                            "hits": { "Single Shot": "Arrow Shield.shots" },
                            "display": false
                        },
                        {
                            "name": "Single Volley",
                            "type": "total",
                            "hits": { "Single Shot": "Arrow Shield.charges" },
                            "display": false
                        },
                        {
                            "name": "DPS",
                            "type": "total",
                            "hits": { "Single Volley": 2 }
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Single Bow": "Arrow Shield.charges"
                            }
                        }
                    ]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Arrow Shield",
                            "name": "charges",
                            "value": -1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Basaltic Trap",
            "desc": "When you hit the ground with Arrow Bomb, leave a Trap that damages enemies. (Max 2 Traps)",
            "archetype": "Trapper",
            "archetype_req": 2,
            "parents": [
                "Bryophyte Roots"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 19,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {
                "aoe": 7,
                "traps": 2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Basaltic Trap",
                    "base_spell": 7,
                    "display": "Trap Damage",
                    "parts": [
                        {
                            "name": "Trap Damage",
                            "type": "damage",
                            "multipliers": [
                                210,
                                20,
                                0,
                                0,
                                20,
                                0
                            ]
                        },
                        {
                            "name": "Burst Damage",
                            "type": "total",
                            "hits": {
                                "Trap Damage": "Basaltic Trap.traps"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Focus",
            "desc": "When hitting an aggressive enemy 5+ blocks away, gain +1 Focus. (Max 3, 1.1s cooldown, Focus resets if you miss once, +15% damage bonus per focus)",
            "archetype": "Sharpshooter",
            "archetype_req": 2,
            "parents": [
                "Phantom Ray"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 19,
                "col": 8,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Focus",
                    "output": {
                        "type": "stat",
                        "name": "damMult.Focus"
                    },
                    "scaling": [
                        12
                    ],
                    "slider_max": 3
                }
            ]
        },
        {
            "display_name": "Windstorm",
            "desc": "Arrow Storm will shoot +1 stream of arrows and +2 extra arrows per stream.",
            "base_abil": "Arrow Storm",
            "parents": [
                "Guardian Angels",
                "Cheaper Arrow Storm I"
            ],
            "dependencies": [],
            "blockers": [
                "Phantom Ray"
            ],
            "cost": 2,
            "display": {
                "row": 21,
                "col": 1,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Arrow",
                    "multipliers": [
                        -9,
                        0,
                        -3,
                        0,
                        0,
                        2
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Total Damage",
                    "hits": {
                        "Single Stream": 1
                    }
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Stream",
                    "cost": 0,
                    "hits": {
                        "Single Arrow": 2
                    }
                }
            ]
        },
        {
            "display_name": "Cheaper Arrow Storm I",
            "desc": "Reduce the Mana cost of Arrow Storm.",
            "base_abil": "Arrow Storm",
            "parents": [
                "Implosion",
                "Windstorm",
                "Basaltic Trap"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Implosion",
            "desc": "Arrow bomb pulls enemies towards you. If a trap is nearby, it will pull them towards it instead. Increase Heart Shatter's damage.",
            "archetype": "Trapper",
            "archetype_req": 0,
            "base_abil": "Arrow Bomb",
            "parents": [
                "Cheaper Arrow Storm I",
                "Basaltic Trap",
                "More Shields"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Heart Shatter",
                    "multipliers": [
                        40,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
                {
            "display_name": "More Shields",
            "desc": "Gives Arrow Shield and Guardian Angels +2 extra charges. Reduces Guardian Angels' damage.",
            "base_abil": "Arrow Shield",
            "parents": [
                "Focus",
                "Implosion"
            ],
            "dependencies": [
                "Arrow Shield"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {
                "charges": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Single Shot",
                    "multipliers": [
                        -13,
                        0,
                        0,
                        0,
                        0,
                        -5
                    ]
                }
            ]
        },
        {
            "display_name": "Patient Hunter",
            "desc": "Your Traps will deal +20% more damage for every second it's active. (Max +100%)",
            "archetype": "Trapper",
            "archetype_req": 0,
            "base_abil": "Basaltic Trap",
            "parents": [
                "Cheaper Arrow Storm I",
                "Implosion",
                "Grappling Hook"
            ],
            "dependencies": [
                "Basaltic Trap"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 22,
                "col": 4,
                "icon": "node_1"
            },
            "properties": { "max": 100 },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Trap Wait Time",
                    "output": {
                        "type": "stat",
                        "name": "damMult.Basaltic:7.Trap Damage"
                    },
                    "slider_max": 5,
                    "scaling": [20]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Basaltic Trap",
                            "name": "traps",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Grappling Hook",
            "base_abil": "Escape",
            "desc": "When casting Escape, throw a hook that pulls you when hitting a block. If you hit an enemy, pull them towards you instead. (Escape will not throw you backward anymore)",
            "archetype": "Trapper",
            "archetype_req": 0,
            "parents": [
                "Implosion",
                "More Shields",
                "Patient Hunter"
            ],
            "dependencies": [],
            "blockers": [
                "Escape Artist"
            ],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 6,
                "icon": "node_0"
            },
            "properties": { "range": 30 },
            "effects": []
        },
        {
            "display_name": "More Focus I",
            "desc": "Increase your maximum Focus by +2.",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "base_abil": "Focus",
            "parents": [
                "More Shields"
            ],
            "dependencies": [
                "Focus"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Focus",
                    "slider_max": 2,
                    "output": {
                        "type": "stat",
                        "name": "damMult.Focus"
                    },
                    "scaling": [
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Stormy Feet",
            "desc": "Windy Feet will last longer and grant a stronger speed buff. (+20% speed, +60s)",
            "archetype": "Boltslinger",
            "base_abil": "Escape",
            "parents": [
                "Windstorm"
            ],
            "dependencies": [
                "Windy Feet"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 23,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {
                "duration": 60
            },
            "effects": []
        },
        {
            "display_name": "Call of the Hound",
            "desc": "Arrow Shield summons a Hound that will attack aggressive enemies every 0.25s and drag them towards your traps.",
            "archetype": "Trapper",
            "archetype_req": 0,
            "base_abil": "Arrow Shield",
            "parents": [
                "Patient Hunter"
            ],
            "dependencies": [
                "Arrow Shield"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 3,
                "icon": "node_2"
            },
            "properties": {
                "vision": 18,
                "duration": 60
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Call of the Hound",
                    "base_spell": 8,
                    "display": "DPS",
                    "parts": [
                        {
                            "name": "Single Hit",
                            "multipliers": [40, 0, 0, 0, 0, 0]
                        },
                        {
                            "name": "DPS",
                            "hits": {
                                "Single Hit": 3.333333333333333
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Leap",
            "desc": "Leap forward when you double jump. (2s Cooldown)",
            "archetype": "Boltslinger",
            "archetype_req": 4,
            "parents": [
                "Traveler",
                "Windstorm"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {
                "cooldown": 2
            },
            "effects": []
        },
        {
            "display_name": "Traveler",
            "desc": "For every 1% Walk Speed you have from items, gain +1 Raw Spell Damage (Max 100)",
            "parents": [
                "Leap",
                "Bouncing Bomb"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 25,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "spd"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "sdRaw"
                    },
                    "scaling": [
                        1
                    ],
                    "max": 100
                }
            ]
        },
        {
            "display_name": "Bouncing Bomb",
            "desc": "Arrow Bomb will bounce once when hitting a block or enemy.",
            "base_abil": "Arrow Bomb",
            "parents": [
        "Patient Hunter",
                "Traveler",
                "Ivyroot Mamba"
            ],
            "archetype_req": 0,
            "req_archetype": "Trapper",
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Ivyroot Mamba",
            "desc": "Bryophyte Roots summons a Snake after disappearing that will spit weakening venom at aggressive enemies. (Max 1) Enemies will be weakened for 1.5s.",
            "archetype": "Trapper",
            "archetype_req": 3,
            "base_abil": "Arrow Storm",
            "parents": [
                "Bouncing Bomb",
        "Twain's Arc"
            ],
            "dependencies": [
                "Bryophyte Roots"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {
                "vision": 12,
                "duration": 18
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Ivyroot Mamba",
                    "base_spell": 9,
                    "display": "Total DPS",
                    "parts": [
                        {
                            "name": "Single Hit",
                            "multipliers": [
                                80,
                                20,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "Per Snake DPS",
                            "hits": {
                                "Single Hit": 0.6666666666667
                            }
                        },
                        {
                            "name": "Total DPS",
                            "hits": {
                                "Per Snake DPS": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Twain's Arc",
            "desc": "When you have 2+ Focus, holding shift will summon the Twain's Arc. Charge it up to shoot a destructive long-range beam. (Damage is dealt as Main Attack Damage)",
            "archetype": "Sharpshooter",
            "archetype_req": 4,
            "parents": [
                "More Focus I",
                "Ivyroot Mamba"
            ],
            "dependencies": [
                "Focus"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 8,
                "icon": "node_2"
            },
            "properties": {
                "range": 64,
                "focusReq": 2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Twain's Arc",
                    "base_spell": 5,
                    "scaling": "melee",
                    "use_atkspd": false,
                    "display": "Single Shot",
                    "parts": [
                        {
                            "name": "Single Shot",
                            "type": "damage",
                            "multipliers": [
                                220,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Rocket Jump",
            "desc": "Arrow Bomb's recoil is increased and it's self-damage is reduced to 5%.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Ivyroot Mamba",
                "Bouncing Bomb"
            ],
            "dependencies": [
                "Arrow Bomb"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 26,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Scorched Earth",
            "desc": "Fire Creep becomes much stronger.",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "parents": [
                "Twain's Arc",
                "Ivyroot Mamba"
            ],
            "dependencies": [
                "Fire Creep"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 26,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {
                "duration": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Fire Creep",
                    "multipliers": [
                        10,
                        0,
                        0,
                        0,
                        5,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "More Traps",
            "desc": "Increase the maximum amount of active Traps you can have by +3.",
            "archetype": "Trapper",
            "archetype_req": 0,
            "base_abil": "Basaltic Trap",
            "parents": [
                "Bouncing Bomb",
                "Traveler"
            ],
            "dependencies": [
                "Basaltic Trap"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 27,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Basaltic Trap",
                            "name": "traps",
                            "value": 3
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Refined Gunpowder",
            "desc": "Increase the damage of Arrow Bomb.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Leap",
                "Fierce Stomp"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Arrow Bomb",
                    "multipliers": [
                        50,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Fierce Stomp",
            "desc": "When using Escape, hold shift to quickly drop down and deal damage.",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "base_abil": "Escape",
            "parents": [
                "Refined Gunpowder",
                "Cheaper Arrow Shield I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 4
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Fierce Stomp",
                    "cost": 0,
                    "multipliers": [
                        120,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Total Damage",
                    "cost": 0,
                    "hits": {
                        "Fierce Stomp": 1
                    },
                    "display": "Total Damage"
                }
            ]
        },
        {
            "display_name": "Cheaper Arrow Shield I",
            "desc": "Reduce the Mana cost of Arrow Shield.",
            "base_abil": "Arrow Shield",
            "parents": [
                "Fierce Stomp",
                "Better Arrow Shield",
                "More Traps"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Better Arrow Shield",
            "desc": "Arrow Shield's radius, knockback, and damage is increased. Guardian Angels' damage is increased.",
            "base_abil": "Arrow Shield",
            "parents": [
                "Ivyroot Mamba",
                "Cheaper Arrow Shield I",
                "Shocking Bomb"
            ],
            "dependencies": [
                "Arrow Shield"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {
                "knockback": 0.5
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Arrow Shield",
                    "behavior": "modify",
                    "multipliers": [
                        40,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Arrow Shield",
                            "behavior": "modify",
                            "name": "aoe",
                            "value": 1
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Single Shot",
                    "multipliers": [
                        3,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "behavior": "modify"
                }
            ]
        },
        {
            "display_name": "Shocking Bomb",
            "desc": "Arrow Bomb will be unaffected by gravity and increase its explosion damage.",
            "archetype": "Sharpshooter",
            "archetype_req": 4,
            "base_abil": "Arrow Bomb",
            "parents": [
                "Twain's Arc",
                "Better Arrow Shield"
            ],
            "dependencies": [
                "Arrow Bomb"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {
                "gravity": 0
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Arrow Bomb",
                    "multipliers": [20, 0, 20, 0, 0, 0]
                }
            ]
        },
        {
            "display_name": "Better Leap",
            "desc": "Reduce leap's cooldown by 1s.",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "base_abil": "Leap",
            "parents": [
                "Refined Gunpowder",
                "Fierce Stomp"
            ],
            "dependencies": [
                "Leap"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 29,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Leap",
                            "name": "cooldown",
                            "value": -1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Homing Shots",
            "desc": "Your Main Attack arrows will follow nearby enemies and be unaffected by gravity",
            "archetype": "Sharpshooter",
            "archetype_req": 2,
            "base_abil": 999,
            "parents": [
                "Cheaper Arrow Shield I",
                "Better Arrow Shield"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 29,
                "col": 5,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Mana Trap",
            "desc": "Your Traps will give you 0.5 Mana per second and 10 Mana when they explode. Increase your maximum Traps by +1.",
            "archetype": "Trapper",
            "archetype_req": 6,
            "base_abil": "Basaltic Trap",
            "parents": [
                "Fierce Stomp",
                "Cheaper Arrow Shield I",
                "Cheaper Arrow Storm II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 31,
                "col": 3,
                "icon": "node_3"
            },
            "properties": {
                "range": 16,
                "manaRegen": 0.5,
                "explosionMana": 10
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": 10
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Basaltic Trap",
                            "name": "traps",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Arrow Storm II",
            "desc": "Reduce the Mana cost of Arrow Storm.",
            "base_abil": "Arrow Storm",
            "parents": [
                "Initiator",
                "Mana Trap"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Initiator",
            "desc": "If you do not damage an enemy for 4s or more, your next sucessful hit will deal +60% damage and add +1 Focus.",
            "archetype": "Sharpshooter",
            "parents": [
                "Cheaper Arrow Storm II",
                "Better Arrow Shield",
                "Shocking Bomb"
            ],
            "dependencies": [
                "Focus"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 31,
                "col": 7,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Initiator",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Initiator",
                            "value": 60
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Better Guardian Angels",
            "desc": "Your Guardian Angels gain increased range and can shoot +4 extra arrows before disappearing.",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "base_abil": "Arrow Shield",
            "parents": [
                "Escape Artist",
                "Refined Gunpowder"
            ],
            "dependencies": [
                "Guardian Angels"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 32,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {
                "range": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Single Bow",
                    "hits": {
                        "Single Shot": 4
                    }
                }
            ]
        },
        {
            "display_name": "Escape Artist",
            "desc": "When casting Escape, release 100 arrows towards the ground.",
            "base_abil": "Escape",
            "parents": [
                "Better Guardian Angels",
                "Fierce Stomp",
                "Murder Flock"
            ],
            "dependencies": [],
            "blockers": [
                "Grappling Hook"
            ],
            "cost": 1,
            "display": {
                "row": 32,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Escape Artist Arrow",
                    "multipliers": [
                        100,
                        0,
                        50,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Total Damage",
                    "hits": {
                        "Escape Artist Arrow": 1
                    },
                    "display": "Total Damage"
                }
            ]
        },
        {
            "display_name": "Murder Flock",
            "desc": "Basaltic Trap summons a Crow upon detonation that will peck at aggressive enemies every 0.9s. (Max 2) Enemies will be distracted for 0.2s.",
            "archetype": "Trapper",
            "archetype_req": 5,
            "base_abil": "Arrow Shield",
            "parents": [
                "Mana Trap",
                "Cheaper Arrow Storm II",
                "Escape Artist"
            ],
            "dependencies": [
                "Basaltic Trap"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 32,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "vision": 18,
                "duration": 12
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Murder Flock",
                    "base_spell": 10,
                    "display": "Total DPS",
                    "parts": [
                        {
                            "name": "Single Hit",
                            "multipliers": [
                                60,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "Crow DPS",
                            "hits": {
                                "Single Hit": 1.1111111111
                            }
                        },
                        {
                            "name": "Total DPS",
                            "hits": {
                                "Crow DPS": 2
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Decimator",
            "desc": "Phantom Ray will increase its damage by 10% everytime you do not miss with it. (Max 70%)",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "base_abil": "Arrow Storm",
            "parents": [
                "Initiator",
                "Phasing Beam",
                "Cheaper Arrow Storm II"
            ],
            "dependencies": [
                "Phantom Ray"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 32,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Phantom Ray hits",
                    "slider_max": 7,
                    "output": {
                        "type": "stat",
                        "name": "damMult.Decimator:1.Single Arrow"
                    },
                    "scaling": [
                        10
                    ]
                }
            ]
        },
        {
            "display_name": "Phasing Beam",
            "desc": "Twain's Arc charges 20% faster, and can now pierce through up to 5 enemies, dealing reduced damage after piercing. (Damage is dealt as Main Attack Damage)",
            "archetype": "Sharpshooter",
            "base_abil": "Twain's Arc",
            "parents": [
                "Decimator",
                "Initiator"
            ],
            "dependencies": [
                "Twain's Arc"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 32,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 5,
                "target_part": "Pierce Damage",
                "multipliers": [
                    110,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }]
        },
        {
            "display_name": "Recycling",
            "desc": "When any of your projectiles miss, gain +0.08 Mana.",
            "archetype": "Boltslinger",
            "parents": [
                "Better Guardian Angels",
                "Shrapnel Bomb"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Shrapnel Bomb",
            "desc": "Arrow Bomb's explosion will fling 30 shrapnel, dealing damage in a large area",
            "archetype": "Boltslinger",
            "archetype_req": 2,
            "base_abil": "Arrow Bomb",
            "parents": [
                "Recycling",
                "Escape Artist",
                "Cheaper Escape II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Shrapnel Bomblet",
                    "multipliers": [
                        40,
                        0,
                        0,
                        0,
                        20,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Escape II",
            "desc": "Reduce the Mana cost of Escape.",
            "base_abil": "Escape",
            "parents": [
                "Murder Flock",
                "Shrapnel Bomb",
                "Cheaper Arrow Shield II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Cheaper Arrow Shield II",
            "desc": "Reduce the Mana cost of Arrow Shield.",
            "base_abil": "Arrow Shield",
            "parents": [
                "Phasing Beam",
                "Cheaper Escape II",
                "Decimator"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Stronger Hook",
            "desc": "Increase your Grappling Hook's range, speed and strength.",
            "archetype": "Trapper",
            "archetype_req": 2,
            "base_abil": "Escape",
            "parents": [
                "Cheaper Escape II",
                "Cheaper Arrow Shield II"
            ],
            "dependencies": [
                "Grappling Hook"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 35,
                "col": 5,
                "icon": "node_0"
            },
            "properties": { "range": 8 },
            "effects": []
        },
        {
            "display_name": "Coursing Restraints",
            "desc": "Shocking Bomb will temporarily shock enemies reducing their defences. (12s cooldown)",
            "archetype": "Sharpshooter",
            "parents": [
                "Cheaper Arrow Shield II"
            ],
            "dependencies": [
                "Shocking Bomb"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 35,
                "col": 8,
                "icon": "node_2"
            },
            "properties": {
                "duration": 4,
                "cooldown": 12
            },
            "effects": [ 
                {
                    "type": "raw_stat",
                    "toggle": "Coursing Restraints",
                    "bonuses": [ {"type": "stat", "name": "damMult.CoursingRestraints", "value": 15} ]
                }
            ]
        },
        {
            "display_name": "Arrow Hurricane",
            "desc": "Arrow Storm will shoot +2 extra streams of arrows.",
            "archetype": "Boltslinger",
            "archetype_req": 10,
            "base_abil": "Arrow Storm",
            "parents": [
                "Recycling",
                "Shrapnel Bomb"
            ],
            "dependencies": ["Windstorm"],
            "blockers": [
                "Phantom Ray"
            ],
            "cost": 2,
            "display": {
                "row": 37,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Arrow",
                    "multipliers": [
                        -3,
                        0,
                        -1,
                        0,
                        0,
                        -1
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Total Damage",
                    "hits": {
                        "Single Stream": 2
                    }
                }
            ]
        },
        {
            "display_name": "Tangled Traps",
            "desc": "Your Traps will be connected by a rope that deals damage to enemies every 0.2s. Increase your maximum Traps by +1.",
            "archetype": "Trapper",
            "archetype_req": 0,
            "base_abil": "Basaltic Trap",
            "parents": [
                "Shrapnel Bomb",
                "Cheaper Escape II"
            ],
            "dependencies": [
                "Basaltic Trap"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 37,
                "col": 3,
                "icon": "node_1"
            },
            "properties": {
                "attackSpeed": 0.2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 7,
                    "target_part": "Line Damage Tick",
                    "multipliers": [
                        20,
                        0,
                        0,
                        0,
                        0,
                        20
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 7,
                    "target_part": "DPS",
                    "hits": {
                        "Line Damage Tick": 5
                    }
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Basaltic Trap",
                            "name": "traps",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Beast Lore",
            "desc": "Increase your maximum Snakes by +1. Increase your maximum Crows by +2. Increase the damage of your Hound.",
            "base_abil": "Call of the Hound",
            "archetype": "Trapper",
            "archetype_req": 7,
            "parents": [
                "Tangled Traps"
            ],
            "dependencies": [
                "Call of the Hound"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 37,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 8,
                    "target_part": "Single Hit",
                    "multipliers": [40, 0, 0, 0, 0, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 10,
                    "target_part": "Total DPS",
                    "hits": { "Crow DPS": 2 }
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 9,
                    "target_part": "Total DPS",
                    "hits": { "Per Snake DPS": 1 }
                }
            ]
        },
        {
            "display_name": "Crepuscular Ray",
            "desc": "If you have 5+ Focus, casting Arrow Storm while 4+ blocks above the ground cause you to levitate and shoot 20 homing arrows per second until you run out of Focus. While in this state, you will lose 1 Focus per second.",
            "archetype": "Sharpshooter",
            "archetype_req": 10,
            "parents": [
                "Cheaper Arrow Shield II"
            ],
            "dependencies": [
                "Arrow Storm"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 37,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Crepuscular Ray",
                    "base_spell": 6,
                    "display": "DPS",
                    "parts": [
                        {
                            "name": "Single Arrow",
                            "multipliers": [
                                35,
                                0,
                                0,
                                15,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "DPS",
                            "hits": {
                                "Single Arrow": 20
                            }
                        },
                        {
                            "name": "Max Damage",
                            "hits": {
                                "DPS": 7
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Chilling Snare",
            "desc": "Attach an icy snare to Basaltic Trap, drastically inhibiting and damaging nearby enemies every 0.2s after it detonates.",
            "archetype": "Trapper",
            "archetype_req": 11,
            "base_abil": "Basaltic Trap",
            "parents": [
                "Tangled Traps",
                "Beast Lore"
            ],
            "dependencies": [
                "Basaltic Trap"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 38,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 7,
                    "target_part": "Trap Damage",
                    "cost": 0,
                    "multipliers": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Basaltic Trap",
                            "name": "traps",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "All-Seeing Panoptes",
            "desc": "Your bows from Guardian Angels become all-seeing, increasing their range, damage and letting them shoot up to +4 times each.",
            "archetype": "Boltslinger",
            "base_abil": "Arrow Shield",
            "parents": [
                "Arrow Hurricane"
            ],
            "dependencies": [
                "Guardian Angels"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 39,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {
                "range": 4,
                "shots": 4
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Single Shot",
                    "multipliers": [
                        5,
                        0,
                        0,
                        0,
                        2,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Stronger Patient Hunter",
            "desc": "Increase Patient Hunter's damage gain per second by +10% and add increase its Max Damage by +100%",
            "archetype": "Trapper",
            "archetype_req": 0,
            "base_abil": "Basaltic Trap",
            "parents": [
                "Chilling Snare"
            ],
            "dependencies": [
                "Patient Hunter"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 39,
                "col": 3,
                "icon": "node_0"
            },
            "properties": { "max": 100 },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Trap Wait Time",
                    "output": {
                        "type": "stat",
                        "name": "damMult.Basaltic:7.Trap Damage"
                    },
                    "slider_max": 2,
                    "scaling": [10],
                    "max": 60
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Basaltic Trap",
                            "name": "traps",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Snow Storm",
            "desc": "Enemies near you will be slowed down.",
            "parents": [
                "Chilling Snare",
                "More Focus II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 39,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {
                "range": 3,
                "slowness": 0.3
            },
            "effects": []
        },
        {
            "display_name": "More Focus II",
            "desc": "Add +2 max Focus",
            "archetype": "Sharpshooter",
            "archetype_req": 0,
            "base_abil": "Focus",
            "parents": [
                "Crepuscular Ray",
                "Snow Storm"
            ],
            "dependencies": [
                "Focus"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 39,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Focus",
                    "slider_max": 2,
                    "output": {
                        "type": "stat",
                        "name": "damMult.Focus"
                    },
                    "scaling": [
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Elusive",
            "desc": "If you do not get hit for 4+ seconds, become immune to self-damage and Arrow Storm's loses its recoil. (Dodging counts as not getting hit)",
            "archetype": "Boltslinger",
            "archetype_req": 0,
            "parents": [
                "Arrow Hurricane"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 40,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Geyser Stomp",
            "desc": "Fierce Stomp will create geysers, dealing more damage and pushing enemies away vertically.",
            "base_abil": "Escape",
            "parents": [
                "Arrow Hurricane",
                "Grape Bomb"
            ],
            "dependencies": [
                "Fierce Stomp"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 41,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Geyser Stomp",
                    "multipliers": [
                        50,
                        0,
                        0,
                        30,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Total Damage",
                    "hits": {
                        "Geyser Stomp": 1
                    }
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Escape",
                            "name": "aoe",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Grape Bomb",
            "desc": "Arrow bomb will throw 2 additional smaller bombs when exploding.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Geyser Stomp",
                "Stronger Patient Hunter",
                "Cheaper Arrow Bomb II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 41,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {
                "aoe": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Grape Bomb",
                    "multipliers": [
                        60,
                        0,
                        0,
                        0,
                        20,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Arrow Bomb II",
            "desc": "Reduce the Mana cost of Arrow Bomb.",
            "base_abil": "Arrow Bomb",
            "parents": [
                "Grape Bomb",
                "More Focus II",
                "Snow Storm"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 41,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -5
                }
            ]
        }
    ],
    "Warrior": [
        {
            "display_name": "Bash",
            "desc": "Violently bash the ground, dealing high damage in a large area",
            "parents": [],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 0,
                "col": 4,
                "icon": "node_warrior"
            },
            "properties": {
                "aoe": 4,
                "range": 3,
                "hits": 1
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Bash",
                    "cost": 40,
                    "base_spell": 1,
                    "spell_type": "damage",
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Single Hit",
                            "type": "damage",
                            "multipliers": [
                                150,
                                30,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Single Hit": "Bash.hits"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Spear Proficiency 1",
            "desc": "Improve your Main Attack's damage and range w/ spear",
            "base_abil": 999,
            "parents": [
                "Bash"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {
                "melee_range": 1
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Melee",
                    "multipliers": [ 5, 0, 0, 0, 0, 0 ]
                }
            ]
        },
        {
            "display_name": "Cheaper Bash",
            "desc": "Reduce the Mana cost of Bash",
            "base_abil": "Bash",
            "parents": [
                "Spear Proficiency 1"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -10
                }
            ]
        },
        {
            "display_name": "Double Bash",
            "desc": "Bash will hit a second time at a farther range",
            "parents": [
                "Spear Proficiency 1"
            ],
            "base_abil": "Bash",
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 4,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "range": 3,
                "hits": 1
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Hit",
                    "cost": 0,
                    "multipliers": [ -40, 0, 0, 0, 0, 0 ]
                }
            ]
        },
        {
            "display_name": "Charge",
            "desc": "Charge forward at high speed (hold shift to cancel)",
            "parents": [
                "Double Bash"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 4,
                "icon": "node_warrior"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Charge",
                    "cost": 25,
                    "base_spell": 2,
                    "spell_type": "damage",
                    "display": "",
                    "parts": []
                }
            ]
        },
        {
            "display_name": "Heavy Impact",
            "desc": "After using Charge, violently crash down into the ground and deal damage",
            "base_abil": "Charge",
            "parents": [
                "Uppercut"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {
                "range": 4,
                "angle": 40
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Heavy Impact",
                    "cost": 0,
                    "multipliers": [
                        120,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Contact Damage",
                    "display": "Contact Damage",
                    "hits": {
                        "Heavy Impact": 1
                    }
                }
            ]
        },
        {
            "display_name": "Vehement",
            "desc": "For every 1% or 1 Raw Main Attack Damage you have from items, gain +2% Walk Speed (Max 20%)",
            "archetype": "Fallen",
            "archetype_req": 0,
            "parents": [
                "Charge"
            ],
            "dependencies": [],
            "blockers": [
                "Tougher Skin"
            ],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "mdPct"
                        },
                        {
                            "type": "stat",
                            "name": "mdRaw"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "spd"
                    },
                    "scaling": [
                        2,
                        2
                    ],
                    "max": 20
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damRaw",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Tougher Skin",
            "desc": "Harden your skin and become permanently +5% more resistant. For every 1% or 1 Raw Heath Regen you have from items, gain +10 Health (Max 100)",
            "archetype": "Paladin",
            "archetype_req": 0,
            "parents": [
                "Charge"
            ],
            "dependencies": [],
            "blockers": [
                "Vehement"
            ],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "defMult.Base",
                            "value": 5
                        }
                    ]
                },
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "hprRaw"
                        },
                        {
                            "type": "stat",
                            "name": "hprPct"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "hpBonus"
                    },
                    "scaling": [
                        10,
                        10
                    ],
                    "max": 100
                }
            ]
        },
        {
            "display_name": "Uppercut",
            "desc": "Rocket enemies in the air and deal massive damage",
            "parents": [
                "Vehement",
                "Cheaper Charge"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 2,
                "icon": "node_warrior"
            },
            "properties": {
                "aoe": 3,
                "range": 5.5
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Uppercut",
                    "cost": 40,
                    "base_spell": 3,
                    "spell_type": "damage",
                    "scaling": "spell",
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Uppercut",
                            "multipliers": [
                                260,
                                40,
                                40,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "hits": {
                                "Uppercut": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Charge",
            "desc": "Reduce the Mana cost of Charge",
            "base_abil": "Charge",
            "parents": [
                "Uppercut",
                "War Scream"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "War Scream",
            "desc": "Emit a terrorizing roar that deals damage, pull nearby enemies, and add damage resistance to yourself and allies",
            "parents": [
                "Tougher Skin",
                "Cheaper Charge"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 6,
                "icon": "node_warrior"
            },
            "properties": {
                "duration": 30,
                "aoe": 12,
                "defense_bonus": 20
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "War Scream",
                    "cost": 30,
                    "base_spell": 4,
                    "spell_type": "damage",
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "War Scream",
                            "multipliers": [
                                75,
                                0,
                                0,
                                0,
                                25,
                                0
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "hits": {
                                "War Scream": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Earth Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Earth attacks",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "parents": ["Uppercut"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 10,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        { "type": "stat", "name": "eDamPct", "value": 20 },
                        { "type": "stat", "name": "eDamAddMin", "value": 2 },
                        { "type": "stat", "name": "eDamAddMax", "value": 4 }
                    ]
                }
            ]  
        },

        {
            "display_name": "Thunder Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Thunder attacks",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "parents": ["Uppercut", "Air Mastery", "Cheaper Charge"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 10,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        { "type": "stat", "name": "tDamPct", "value": 10 },
                        { "type": "stat", "name": "tDamAddMin", "value": 1 },
                        { "type": "stat", "name": "tDamAddMax", "value": 8 }
                    ]
                }
            ]  
        },

        {
            "display_name": "Water Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Water attacks",
            "archetype": "Battle Monk", 
            "archetype_req": 0, 
            "parents": ["Cheaper Charge", "Thunder Mastery", "Air Mastery"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 11,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        { "type": "stat", "name": "wDamPct", "value": 15 },
                        { "type": "stat", "name": "wDamAddMin", "value": 2 },
                        { "type": "stat", "name": "wDamAddMax", "value": 4 }
                    ]
                }
            ]  
        },

        {
            "display_name": "Air Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Air attacks",
            "archetype": "Battle Monk", 
            "archetype_req": 0, 
            "parents": ["War Scream", "Thunder Mastery", "Cheaper Charge"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 10,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        { "type": "stat", "name": "aDamPct", "value": 15 },
                        { "type": "stat", "name": "aDamAddMin", "value": 3 },
                        { "type": "stat", "name": "aDamAddMax", "value": 4 }
                    ]
                }
            ]  
        },

        {
            "display_name": "Fire Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Fire attacks",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "parents": ["War Scream"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 10,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        { "type": "stat", "name": "fDamPct", "value": 15 },
                        { "type": "stat", "name": "fDamAddMin", "value": 3 },
                        { "type": "stat", "name": "fDamAddMax", "value": 5 }
                    ]
                }
            ]  
        },

        {
            "display_name": "Quadruple Bash",
            "desc": "Bash will hit 4 times at an even larger range",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "base_abil": "Bash",
            "parents": ["Earth Mastery", "Fireworks"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 12,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {
                "range": 6,
                "hits": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Hit",
                    "multipliers": [-20, 0, 0, 0, 0, 0] 
                }
            ]  
        },

        {
            "display_name": "Fireworks",
            "desc": "Mobs hit by Uppercut will explode mid-air and receive additional damage",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "base_abil": "Uppercut",
            "parents": ["Thunder Mastery", "Quadruple Bash"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 12,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Fireworks",
                    "multipliers": [80, 0, 20, 0, 0, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Total Damage",
                    "hits": {
                        "Fireworks": 1
                    }
                }
            ]  
        },

        {
            "display_name": "Half-Moon Swipe",
            "desc": "Uppercut will deal a footsweep attack at a longer and wider angle.",
            "archetype": "Battle Monk", 
            "archetype_req": 1, 
            "base_abil": "Uppercut",
            "parents": ["Water Mastery"], 
            "dependencies": ["Uppercut"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 13,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "range": 1.5,
                "angle": 10
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Uppercut",
                    "cost": -5,
                    "multipliers": [-70, 0, 0, 30, 0, 0]
                }
            ]  
        },
        {
            "display_name": "Flyby Jab",
            "desc": "Damage enemies in your way when using Charge",
            "base_abil": "Charge",
            "parents": ["Air Mastery", "Flaming Uppercut"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 12,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {
                "aoe": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Flyby Jab",
                    "multipliers": [100, 0, 0, 0, 0, 20]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Contact Damage",
                    "display": "Contact Damage",
                    "hits": { "Flyby Jab": 1 }
                }
            ]  
        },

        {
            "display_name": "Flaming Uppercut",
            "desc": "Uppercut will light mobs on fire, dealing damage every 0.6 seconds",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "base_abil": "Uppercut",
            "parents": ["Fire Mastery", "Flyby Jab"], 
            "dependencies": ["Uppercut"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 12,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {
                "duration": 3,
                "rate": 1.66666666666666666666666666666
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Flaming Uppercut",
                    "base_spell": 8,
                    "display": "DPS",
                    "parts": [
                        {
                            "name": "Damage Tick",
                            "multipliers": [35, 0, 0, 0, 15, 0]
                        },
                        {
                            "name": "DPS",
                            "hits": { "Damage Tick": "Uppercut.rate" }
                        },
                        {
                            "name": "Total Damage",
                            "hits": {
                                "Damage Tick": 5
                            }
                        }
                    ]
                }
            ]  
        },

        {
            "display_name": "Iron Lungs",
            "desc": "War Scream deals more damage",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "base_abil": "War Scream",
            "parents": ["Flyby Jab", "Flaming Uppercut"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 13,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "War Scream",
                    "multipliers": [30, 0, 0, 0, 0, 30]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Air Shout",
                    "multipliers": [15, 0, 0, 0, 0, 15]
                }
            ]  
        },
        {
            "display_name": "Generalist",
            "desc": "After casting 3 different spells in a row, your next spell will cost 1 mana",
            "archetype": "Battle Monk", 
            "archetype_req": 3, 
            "parents": ["Air Shout"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 15,
                "col": 2,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []  
        },
        {
            "display_name": "Air Shout",
            "desc": "War Scream will fire a projectile that can go through walls and deal damage multiple times",
            "archetype": "Battle Monk", 
            "base_abil": "War Scream",
            "parents": ["Half-Moon Swipe"], 
            "dependencies": ["War Scream"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 15,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {"attackRate": 2},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Air Shout",
                    "multipliers": [40, 0, 0, 0, 0, 10]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Total Damage",
                    "hits": {
                        "Air Shout": 1
                    }
                }
            ]  
        },
        {
            "display_name": "Mantle of the Bovemists",
            "desc": "When casting War Scream, create a holy shield around you that reduces all incoming damage by 70% for 3 hits. (25s cooldown)",
            "archetype": "Paladin", 
            "archetype_req": 3, 
            "parents": ["Iron Lungs"], 
            "dependencies": ["War Scream"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 15,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {
                "duration": 0.25,
                "charges": 3
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Mantle",
                    "bonuses": [{ "type": "stat", "name": "defMult.Mantle", "value": 70}]
                }
            ]
        },
        {
            "display_name": "Bak'al's Grasp",
            "desc": "After casting War Scream, become Corrupted (10s Cooldown). You cannot heal while in that state. While Corrupted, every 2% of Health you lose will add +4 Raw Damage to your attacks (Max 120)",
            "archetype": "Fallen", 
            "archetype_req": 2, 
            "parents": ["Quadruple Bash", "Fireworks"], 
            "dependencies": ["War Scream"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 16,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "cooldown": 15
            },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Corrupted",
                    "slider_max": 100,
                    "slider_step": 1,
                    "output": {
                        "type": "stat",
                        "name": "damRaw" 
                    },
                    "max": 120,
                    "scaling": [2]
                }
            ]  
        },
        {
            "display_name": "Spear Proficiency II",
            "desc": "Improve your Main Attack's damage and range w/ spear",
            "base_abil": 999,
            "parents": ["Bak'al's Grasp", "Cheaper Uppercut"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 17,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {
                "melee_range": 1
            },
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 0,
                "target_part": "Melee",
                "multipliers": [5, 0, 0, 0, 0, 0]
            }]
        },
        {
            "display_name": "Cheaper Uppercut",
            "desc": "Reduce the Mana Cost of Uppercut",
            "base_abil": "Uppercut",
            "parents": ["Spear Proficiency II", "Aerodynamics", "Air Shout", "Generalist"],
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 17,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -5
                }
            ]  
        },
        {
            "display_name": "Aerodynamics",
            "desc": "During Charge, you can steer and change direction",
            "archetype": "Battle Monk", 
            "archetype_req": 0, 
            "base_abil": "Charge",
            "parents": ["Cheaper Uppercut", "Provoke"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 17,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []  
        },
        {
            "display_name": "Provoke",
            "desc": "Mobs damaged by War Scream will target only you for at least 8s (10s cooldown). Reduce the Mana cost of War Scream",
            "base_abil": "War Scream",
            "parents": ["Aerodynamics", "Mantle of the Bovemists"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 17,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]  
        },
        {
            "display_name": "Counter",
            "desc": "Gain a 30% chance to take no damage and instantly attack back when dodging an enemy attack with Agility.",
            "archetype": "Battle Monk", 
            "parents": ["Aerodynamics", "Cheaper Uppercut", "Manachism"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 18,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "chance": 30
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Counter",
                    "base_spell": 5,
                    "display": "Counter Damage",
                    "parts": [
                        {
                            "name": "Counter Damage",
                            "multipliers": [60, 0, 20, 0, 0, 20]
                        }
                    ]
                }
            ]  
        },
        {
            "display_name": "Manachism",
            "desc": "If you receive a hit that's less than 5% of your max HP, gain 10 Mana (1s Cooldown)",
            "archetype": "Paladin", 
            "archetype_req": 3, 
            "parents": ["Aerodynamics", "Counter", "Provoke"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 18,
                "col": 6,
                "icon": "node_2"
            },
            "properties": {
                "cooldown": 1
            },
            "effects": []  
        },
        {
            "display_name": "Blood Pact",
            "desc": "If you do not have enough mana to cast a spell, spend health instead (0.35% health per mana)",
            "archetype": "Fallen", 
            "archetype_req": 4, 
            "parents": ["Spear Proficiency II"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 20,
                "col": 0,
                "icon": "node_3"
            },
            "properties": {
                "health_cost": 0.4
            },
            "effects": []  
        },
        {
            "display_name": "Flying Kick",
            "desc": "When using Charge, mobs hit will halt your momentum and get knocked back",
            "archetype": "Battle Monk", 
            "archetype_req": 1, 
            "base_abil": "Charge",
            "parents": ["Cheaper Uppercut", "Stronger Mantle"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 20,
                "col": 3,
                "icon": "node_1"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Flying Kick",
                    "multipliers": [150, 0, 0, 20, 0, 30]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Flying Kick Max Damage",
                    "hits": { "Flying Kick": 1 },
                    "display": "Flying Kick Max Damage"
                }
            ]  
        },
        {
            "display_name": "Stronger Mantle",
            "desc": "Add +2 additional charges to Mantle of the Bovemists. Reduce its cooldown by 5s.",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "base_abil": "Mantle of the Bovemists",
            "parents": ["Sacred Surge", "Flying Kick"], 
            "dependencies": ["Mantle of the Bovemists"], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 20,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Mantle of the Bovemists",
                            "name": "mantle_charge",
                            "value": 2
                        }
                    ]
                }
            ]  
        },
        {
            "display_name": "Sacred Surge",
            "desc": "Gain the ability to unleash a Sacred Surge. Whenever any of your spells or abilities are triggered, increase your holy power by 1%. Bash and Uppercut will spend 25% of Sacred Surge to smite enemies with holy energy, dealing extra damage.",
            "archetype": "Paladin", 
            "archetype_req": 5, 
            "parents": ["Stronger Mantle", "Provoke"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 20,
                "col": 8,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Sacred Surge",
                    "base_spell": 9,
                    "display": "Smite Damage",
                    "parts": [
                        {
                            "name": "Smite Damage",
                            "multipliers": [100, 0, 20, 0, 0, 0]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Enraged Blow",
            "desc": "While Corrupted, every 1% of Health you lose will increase your damage by +1.5% (Max 80%)",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "base_abil": "Bak'al's Grasp",
            "parents": ["Blood Pact"], 
            "dependencies": ["Bak'al's Grasp"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 21,
                "col": 1,
                "icon": "node_2"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider_name": "Corrupted", 
                    "slider": true,
                    "output": {
                        "type": "stat",
                        "name": "damMult.Enraged" 
                    },
                    "max": 80,
                    "scaling": [1.5]
                }
            ]
        },
        {
            "display_name": "Riposte",
            "desc": "Increase your chance to attack with Counter by +30%",
            "base_abil": "Counter",
            "parents": ["Stronger Mantle", "Flying Kick"], 
            "dependencies": ["Counter"], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 21,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "raw_stat",
                "bonuses": [ {"type": "prop", "abil": "Counter", "name": "chance", "value": 30} ]
            }]
        },
        {
            "display_name": "Exhilarate",
            "desc": "After leaving Corrupted, Restore 30% of your Corrupted bar as max health.",
            "parents": ["Blood Pact"],
            "dependencies": ["Intoxicating Blood"], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 22,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []  
        },
        {
            "display_name": "Cheaper War Scream I",
            "desc": "Reduce the Mana cost of War Scream",
            "base_abil": "War Scream",
            "parents": ["Stronger Mantle", "Flying Kick", "Cleansing Breeze"],
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 22,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]  
        },
        {
            "display_name": "Cleansing Breeze",
            "desc": "Charge will cleanse you of all negative effects and fire, as well as any allies you pass through. (3s Cooldown)",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "parents": ["Cheaper War Scream I", "Stronger Bash"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 22,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Stronger Bash",
            "desc": "Increase the damage of Bash",
            "base_abil": "Bash",
            "parents": ["Cleansing Breeze", "Sacred Surge"],
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 22,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Hit",
                    "multipliers": [30, 0, 0, 0, 0, 0]
                }
            ]  
        },
        {
            "display_name": "Boiling Blood",
            "desc": "Bash leaves a trail of boiling blood behind its first explosion, slowing down and damaging enemies above it every 0.4 seconds",
            "base_abil": "Bash",
            "parents": [ "Enraged Blow", "Ragnarokkr" ],
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 23,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {
                "duration": 3,
                "rate": 2.5
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Boiling Blood Tick",
                    "cost": 0,
                    "multipliers": [25, 0, 0, 0, 5, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Boiling Blood DPS",
                    "hits": { "Boiling Blood Tick": "Bash.rate" }
                }
            ]
        },
        {
            "display_name": "Ragnarokkr",
            "desc": "War Scream become deafening, increasing its duration and giving damage bonus to players",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "base_abil": "War Scream",
            "parents": ["Boiling Blood", "Flying Kick", "Cheaper War Scream I"],
            "dependencies": ["War Scream"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 23,
                "col": 3,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": 5
                }
            ]  
        },
        {
            "display_name": "Intoxicating Blood",
            "desc": "After leaving Corrupted, gain 5% of the health lost back for each enemy killed while Corrupted",
            "archetype": "Fallen", 
            "base_abil": "Bak'al's Grasp",
            "parents": ["Spear Proficiency II", "Cheaper Uppercut"],
            "dependencies": ["Bak'al's Grasp"],
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 18,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []  
        },
        {
            "display_name": "Comet",
            "desc": "After being hit by Fireworks, enemies will crash into the ground and receive more damage",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "base_abil": "Uppercut",
            "parents": ["Boiling Blood", "Ragnarokkr"],
            "dependencies": ["Fireworks"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 24,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Comet",
                    "cost": 0,
                    "multipliers": [80, 20, 0, 0, 0, 0]
                },
                {
                    "type":"add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Total Damage",
                    "cost": 0, 
                    "hits": {
                        "Comet": 1
                    }
                }
            ]  
        },
        {
            "display_name": "Collide",
            "desc": "Mobs thrown into walls from Flying Kick will explode and receive additonal damage",
            "archetype": "Battle Monk", 
            "archetype_req": 4, 
            "base_abil": "Charge",
            "parents": ["Cheaper War Scream I", "Cleansing Breeze"],
            "dependencies": ["Flying Kick"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 23,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 4
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Collide",
                    "cost": 0,
                    "multipliers": [150, 0, 0, 0, 50, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Flying Kick Max Damage",
                    "hits": { "Collide": 1 }
                }
            ]  
        },
        {
            "display_name": "Rejuvenating Skin",
            "desc": "Regain back 30% of the damage you take as healing over 30s",
            "archetype": "Paladin", 
            "archetype_req": 5, 
            "parents": ["Cleansing Breeze", "Stronger Bash"],
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 23,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []  
        },
        {
            "display_name": "Uncontainable Corruption",
            "desc": "Reduce the cooldown of Bak'al's Grasp by -5s, and increase the raw damage gained for every 2% of health lost by +1",
            "base_abil": "Bak'al's Grasp",
            "parents": ["Boiling Blood", "Radiant Devotee"], 
            "dependencies": ["Bak'al's Grasp"], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 26,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Corrupted",
                    "output": {
                        "type": "stat",
                        "name": "damRaw" 
                    },
                    "scaling": [0.5]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [ {"type": "prop", "abil": "Bak'al's Grasp", "name": "cooldown", "value": -5} ]
                }
            ]  
        },

        {
            "display_name": "Radiant Devotee",
            "desc": "For every 4% Reflection you have from items, gain +1/5s Mana Regen (Max 10/5s)",
            "archetype": "Battle Monk", 
            "archetype_req": 1, 
            "parents": ["Whirlwind Strike", "Uncontainable Corruption"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 26,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "ref"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "mr"
                    },
                    "scaling": [0.25],
                    "max": 10
                }
            ]  
        },

        {
            "display_name": "Whirlwind Strike",
            "desc": "Uppercut will create a strong gust of air, launching you upward with enemies (Hold shift to stay grounded)",
            "archetype": "Battle Monk", 
            "archetype_req": 6, 
            "base_abil": "Uppercut",
            "parents": ["Cheaper War Scream I", "Radiant Devotee"], 
            "dependencies": ["Uppercut"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 26,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {
                "range": 1
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Uppercut",
                    "multipliers": [-70, 0, 0, 0, 0, 30]
                }
            ]  
        },

        {
            "display_name": "Mythril Skin",
            "desc": "Gain +5% Base Resistance and become immune to knockback",
            "archetype": "Paladin", 
            "parents": ["Rejuvenating Skin"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 26,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "defMult.Base",
                            "value": 5
                        }
                    ]
                }
            ]  
        },

        {
            "display_name": "Armour Breaker",
            "desc": "While Corrupted, losing 30% Health will make your next Uppercut destroy enemies' defense, rendering them weaker to damage",
            "archetype": "Fallen", 
            "archetype_req": 0, 
            "base_abil": "Uppercut",
            "parents": ["Uncontainable Corruption", "Radiant Devotee"], 
            "dependencies": ["Bak'al's Grasp"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 27,
                "col": 1,
                "icon": "node_2"
            },
            "properties": {
                "duration": 8
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Armour Breaker",
                    "bonuses": [ {"type": "stat", "name": "damMult.ArmorBreaker", "value": 20} ]
                }
            ]  
        },
        {
            "display_name": "Shield Strike",
            "desc": "When your Mantle of the Bovemist loses all charges, deal damage around you for each Mantle individually lost",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "base_abil": "Mantle of the Bovemists",
            "parents": ["Mythril Skin", "Sparkling Hope"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 27,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Shield Strike",
                    "base_spell": 6,
                    "display": "Damage per Shield",
                    "parts": [
                        {
                            "name": "Damage per Shield",
                            "multipliers": [70, 0, 30, 0, 0, 0]
                        }
                    ]
                }
            ]  
        },
        {
            "display_name": "Sparkling Hope",
            "desc": "Everytime you heal 5% of your max health, deal damage to all nearby enemies",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "parents": ["Mythril Skin"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 27,
                "col": 8,
                "icon": "node_2"
            },
            "properties": {
                "aoe": 6
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Sparkling Hope",
                    "base_spell": 7,
                    "display": "Damage Tick",
                    "parts": [
                        {
                            "name": "Damage Tick",
                            "multipliers": [40, 0, 20, 0, 0, 0]
                        }
                    ]
                }
            ]  
        },
        {
            "display_name": "Massive Bash",
            "desc": "While Corrupted, every 3% Health you lose will add +1 AoE to Bash (Max 10)",
            "archetype": "Fallen", 
            "archetype_req": 7, 
            "base_abil": "Bak'al's Grasp",
            "parents": ["Tempest", "Uncontainable Corruption"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 28,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Corrupted",
                    "output": {
                        "type": "prop",
                        "abil": "Bash",
                        "name": "aoe"
                    },
                    "scaling": [0.3333333333333333],
                    "max": 10
                }
            ]  
        },{
            "display_name": "Tempest",
            "desc": "War Scream will ripple the ground and deal damage 3 times in a large area",
            "archetype": "Battle Monk", 
            "archetype_req": 0, 
            "base_abil": "War Scream",
            "parents": ["Massive Bash", "Spirit of the Rabbit"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 28,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 16
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Tempest",
                    "multipliers": [30, 10, 0, 0, 0, 10]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Tempest Total Damage",
                    "hits": {
                        "Tempest": 3
                    }
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Total Damage",
                    "hits": { "Tempest Total Damage": 1 }
                }
            ]  
        },
        {
            "display_name": "Spirit of the Rabbit",
            "desc": "Reduce the Mana cost of Charge and increase your Walk Speed by +20%",
            "archetype": "Battle Monk", 
            "archetype_req": 5, 
            "base_abil": "Charge",
            "parents": ["Tempest", "Whirlwind Strike"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 28,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                },
                {
                    "type": "raw_stat",
                    "bonuses": [{ "type": "stat", "name": "spd", "value": 20 }]
                }
            ]  
        },{
            "display_name": "Massacre",
            "desc": "While Corrupted, if your effective attack speed is Slow or lower, hitting an enemy with your Main Attack will add +4% to your Corrupted bar",
            "archetype": "Fallen", 
            "archetype_req": 5, 
            "base_abil": 999,
            "parents": ["Tempest", "Massive Bash", "Axe Kick"], 
            "dependencies": ["Bak'al's Grasp"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 29,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {
                "cooldown": 2
            },
            "effects": []  
        },
        {
            "display_name": "Axe Kick",
            "desc": "Increase the damage of Uppercut, but also increase its mana cost",
            "base_abil": "Uppercut",
            "parents": ["Tempest", "Spirit of the Rabbit", "Massacre"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 29,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Uppercut",
                    "cost": 15,
                    "multipliers": [150, 0, 0, 0, 0, 0]
                }
            ]  
        },
        {
            "display_name": "Radiance",
            "desc": "Bash will buff your allies' positive IDs. (15s Cooldown)",
            "archetype": "Paladin", 
            "archetype_req": 3, 
            "base_abil": "Bash",
            "parents": ["Spirit of the Rabbit", "Cheaper Bash II"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 29,
                "col": 5,
                "icon": "node_2"
            },
            "properties": {
                "cooldown": 15
            },
            "effects": []  
        },

        {
            "display_name": "Cheaper Bash II",
            "desc": "Reduce the Mana cost of Bash",
            "base_abil": "Bash",
            "parents": ["Radiance", "Shield Strike", "Sparkling Hope"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 29,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]  
        },
        {
            "display_name": "Cheaper War Scream II",
            "desc": "Reduce the Mana cost of War Scream",
            "base_abil": "War Scream",
            "parents": ["Massive Bash"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 31,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]  
        },
        {
            "display_name": "Better Enraged Blow",
            "desc": "Increases the cap of Enraged Blow by +60%.",
            "base_abil": "Bak'al's Grasp",
            "parents": ["Cheaper War Scream II"], 
            "dependencies": ["Bak'al's Grasp"], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 32,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider_name": "Corrupted", 
                    "slider": true,
                    "output": {
                        "type": "stat",
                        "name": "damMult.Enraged" 
                    },
                    "max": -80,
                    "scaling": [-1.5]
                },
                {
                    "type": "stat_scaling",
                    "slider_name": "Corrupted", 
                    "slider": true,
                    "output": {
                        "type": "stat",
                        "name": "damMult.Enraged" 
                    },
                    "max": 140,
                    "scaling": [1.5]
                }
            ]
        },
        {
            "display_name": "Discombobulate",
            "desc": "Damaging enemies will inflict them with +5 Discombobulated. (Max 100) You will deal +1 neutral and elemental damage to enemies for every Discombobulated they have. -5 of the bonus decays every second.",
            "archetype": "Battle Monk", 
            "archetype_req": 11, 
            "parents": ["Cyclone"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 31,
                "col": 2,
                "icon": "node_3"
            },
            "properties": {
            },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Hits dealt",
                    "slider_max": 15,
                    "output": [
                        { "type": "stat", "name": "nDamAddMin" }, { "type": "stat", "name": "nDamAddMax" },
                        { "type": "stat", "name": "eDamAddMin" }, { "type": "stat", "name": "eDamAddMax" },
                        { "type": "stat", "name": "tDamAddMin" }, { "type": "stat", "name": "tDamAddMax" },
                        { "type": "stat", "name": "wDamAddMin" }, { "type": "stat", "name": "wDamAddMax" },
                        { "type": "stat", "name": "fDamAddMin" }, { "type": "stat", "name": "fDamAddMax" },
                        { "type": "stat", "name": "aDamAddMin" }, { "type": "stat", "name": "aDamAddMax" }
                    ],
                    "scaling": [4],
                    "max": 60
                }
            ]  
        },

        {
            "display_name": "Thunderclap",
            "desc": "Bash will cast at the player's position and gain additional AoE.",
            "archetype": "Battle Monk", 
            "archetype_req": 6, 
            "parents": ["Cyclone"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 32,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Single Hit",
                    "multipliers": [-30, 0, 20, 0, 0, 0]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [{
                        "type": "prop",
                        "abil": "Bash",
                        "name": "aoe",
                        "value": 3
                    }]
                }
            ]  
        },

        {
            "display_name": "Cyclone",
            "desc": "After casting War Scream, envelop yourself with a vortex that damages nearby enemies every 0.5s",
            "archetype": "Battle Monk", 
            "archetype_req": 0, 
            "parents": ["Spirit of the Rabbit", "Stronger Sacred Surge"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 31,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 4,
                "duration": 20
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Cyclone",
                    "multipliers": [10, 0, 0, 0, 5, 10]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Cyclone Total Damage",
                    "hits": {
                        "Cyclone": 40
                    }
                    
                }
            ]  
        },
    {
            "display_name": "Stronger Sacred Surge",
            "desc": "Increases the damage of Sacred Surge",
            "archetype": "Paladin", 
            "archetype_req": 8, 
            "parents": ["Cheaper Bash II", "Cyclone"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 31,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 9,
                "target_part": "Smite Damage",
                "multipliers": [70, 0, 10, 0, 0, 0]
            }]  
        },
        {
            "display_name": "Second Chance",
            "desc": "When you receive a fatal blow, survive and regain 30% of your Health (10m Cooldown)",
            "archetype": "Paladin", 
            "archetype_req": 12, 
            "parents": ["Stronger Sacred Surge"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 33,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []  
        },
        {
            "display_name": "Brink of Madness",
            "desc": "If your health is 25% full or less, gain +40% Resistance",
            "parents": ["Bloodlust", "Cheaper Uppercut 2"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 34,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Brink",
                    "bonuses": [{ "type": "stat", "name": "defMult.Brink", "value": 40}]
                }
            ]
        },
        {
            "display_name": "Bloodlust",
            "desc": "After leaving corrupting, annihilate all enemies around you, for every 1% Corrupted you had, damage increases by 5%",
            "archetype": "Fallen",
            "archetype_req": 10,
            "parents": [
                "Cheaper War Scream II"
            ],
            "dependencies": ["Bak'al's Grasp"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 0,
                "icon": "node_3"
            },
            "properties": {
                "aoe": 8
            },
            "effects": [{
                "type": "replace_spell",
                "name": "Bloodlust Damage",
                "base_spell": 10,
                "display": "Damage",
                "parts": [
                    {
                        "name": "Damage",
                        "multipliers": [150, 0, 0, 0, 50, 0]
                    }
                ]
            }]
        },

        {
            "display_name": "Cheaper Uppercut 2",
            "desc": "Reduce the Mana cost of Uppercut",
            "base_abil": "Uppercut",
            "parents": ["Second Chance", "Brink of Madness"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 1, 
            "display": {
                "row": 34,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -5
                }
            ]  
        },

        {
            "display_name": "Martyr",
            "desc": "When you receive a fatal blow, all nearby allies become invincible",
            "archetype": "Paladin", 
            "archetype_req": 0, 
            "parents": ["Second Chance"], 
            "dependencies": [], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 34,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {
                "duration": 3,
                "aoe": 12
            },
            "effects": []  
        },
        {
            "display_name": "Haemorrhage",
            "desc": "Reduce Blood Pact's health cost. (0.25% health per mana)",
            "archetype": "Fallen",
            "archetype_req": 0,
            "base_abil": "Blood Pact",
            "parents": [
                "Bloodlust"
            ],
            "dependencies": [
                "Blood Pact"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Blood Pact",
                            "name": "health_cost",
                            "value": -0.25
                        }
                    ]
                }
            ]
        }
    ],
    "Mage": [
        {
            "display_name": "Meteor",
            "desc": "Summons a slow but powerful meteor from the sky, dealing massive damage over a large area.",
            "parents": [],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 0,
                "col": 4,
                "icon": "node_mage"
            },
            "properties": {
                "aoe": 5,
                "range": 18
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Meteor",
                    "cost": 50,
                    "base_spell": 3,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Meteor Damage",
                            "multipliers": [330, 70, 0, 0, 0, 0 ]
                        },
                        {
                            "name": "Total Damage",
                            "hits": {
                                "Meteor Damage": 1,
                                "Breathless Damage": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Wand Proficiency I",
            "desc": "Improve your Main Attack's damage and range when using a wand.",
            "base_abil": 999,
            "parents": [
                "Meteor"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "mdPct",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Meteor",
            "desc": "Reduce the Mana cost of Meteor.",
            "base_abil": "Meteor",
            "parents": [
                "Wand Proficiency I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -10
                }
            ]
        },
        {
            "display_name": "Shooting Star",
            "desc": "Drastically increase the speed of your Meteor ability.",
            "base_abil": 3,
            "parents": [
                "Wand Proficiency I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 4,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Wand Proficiency II",
            "desc": "Improve your Main Attack's damage and range when using a wand.",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "base_abil": 999,
            "parents": [
                "Teleport"
            ],
            "dependencies": [],
            "blockers": [
                "Wisdom"
            ],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "mdPct",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Teleport",
            "desc": "Instantly teleport in the direction you're facing",
            "parents": [
                "Shooting Star"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 4,
                "icon": "node_mage"
            },
            "properties": {
                "range": 16
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Teleport",
                    "cost": 25,
                    "base_spell": 2,
                    "display": "",
                    "parts": []
                }
            ]
        },
        {
            "display_name": "Wisdom",
            "desc": "For every 2% or 2 Raw Spell Damage you have from items, gain +1/5s mana regen (Max 5/5s)",
            "archetype": "Arcanist",
            "parents": [
                "Teleport"
            ],
            "dependencies": [],
            "blockers": [
                "Wand Proficiency II"
            ],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "sdPct"
                        },
                        {
                            "type": "stat",
                            "name": "sdRaw"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "mr"
                    },
                    "scaling": [
                        0.5,
                        0.5
                    ],
                    "max": 5
                }
            ]
        },
        {
            "display_name": "Heal",
            "desc": "Heal yourself and nearby allies in a large area around you. (When healing an ally, you can't heal more than 30% of their max health)",
            "parents": [
                "Wand Proficiency II",
                "Cheaper Teleport"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 2,
                "icon": "node_mage"
            },
            "properties": {
                "aoe": 5
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Heal",
                    "cost": 35,
                    "base_spell": 1,
                    "display": "Heal",
                    "parts": [
                        {
                            "name": "Heal",
                            "power": 0.15
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Teleport",
            "desc": "Reduce the Mana cost of Teleport.",
            "base_abil": "Teleport",
            "parents": [
                "Heal",
                "Ice Snake"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Ice Snake",
            "desc": "Summon a fast-moving ice snake that reduces your enemies' speed and damage them.",
            "parents": [
                "Wisdom",
                "Cheaper Teleport"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 6,
                "icon": "node_mage"
            },
            "properties": {
                "range": 18,
                "effects": 40,
                "duration": 3
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Ice Snake",
                    "cost": 30,
                    "base_spell": 4,
                    "display": "Ice Snake Damage",
                    "parts": [
                        {
                            "name": "Ice Snake Damage",
                            "multipliers": [
                                70,
                                0,
                                0,
                                30,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Air Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Air attacks",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "parents": [
                "Heal"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "aDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Thunder Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Thunder attacks",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "parents": [
                "Heal",
                "Cheaper Teleport"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "tDamPct",
                            "value": 10
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMin",
                            "value": 1
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMax",
                            "value": 8
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Water Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Water attacks",
            "archetype": "Light Bender",
            "archetype_req": 0,
            "parents": [
                "Cheaper Teleport",
                "Thunder Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 11,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "wDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Fire Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Fire attacks",
            "archetype": "Arcanist",
            "archetype_req": 0,
            "parents": [
                "Ice Snake"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "fDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMax",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Earth Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Earth attacks",
            "archetype": "Arcanist",
            "archetype_req": 0,
            "parents": [
                "Ice Snake"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "eDamPct",
                            "value": 20
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Wind Slash",
            "desc": "When using Teleport, slash through the air and deal damage to enemies you pierce.",
            "archetype": "Riftwalker",
            "base_abil": "Teleport",
            "parents": [
                "Air Mastery",
                "Thunderstorm"
            ],
            "dependencies": [
                "Teleport"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 12,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Wind Slash",
                    "base_spell": 2,
                    "multipliers": [
                        75,
                        0,
                        0,
                        0,
                        0,
                        25
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "target_part": "Total Damage",
                    "base_spell": 2,
                    "display": "Total Damage",
                    "hits": {
                        "Wind Slash": 1
                    }
                }
            ]
        },
        {
            "display_name": "Thunderstorm",
            "desc": "After casting Meteor, summon 3 lightning strikes and deal additional damage. Meteor will add -3 less Mana to your Mana Bank for every hit",
            "base_abil": "Meteor",
            "parents": [
                "Wind Slash",
                "Thunder Mastery"
            ],
            "dependencies": [
                "Meteor"
            ],
            "blockers": [
                "Ophanim",
                "Arcane Power"
            ],
            "cost": 2,
            "display": {
                "row": 12,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 2
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Lightning Damage",
                    "base_spell": 3,
                    "multipliers": [30, 0, 15, 0, 0, 0]
                },
                {
                    "type": "add_spell_prop",
                    "target_part": "Total Damage",
                    "base_spell": 3,
                    "hits": {
                        "Lightning Damage": 3,
                        "Breathless Damage": 3
                    }
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "behavior": "modify",
                    "output": {
                        "type": "stat",
                        "name": "nConvBase:3.Breathless Damage"
                    },
                    "scaling": [-17]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "behavior": "modify",
                    "output": {
                        "type": "stat",
                        "name": "eConvBase:3.Breathless Damage"
                    },
                    "scaling": [-3]
                }
            ]
        },
        {
            "display_name": "Burning Sigil",
            "desc": "Meteor will leave a sigil of fire on the ground that damages enemies every 0.4s.",
            "base_abil": "Meteor",
            "parents": [
                "Fire Mastery",
                "Earth Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 12,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 7,
                "duration": 8
            },
            "effects": [{
                "type": "replace_spell",
                "name": "Burning Sigil",
                "base_spell": 6,
                "display": "DPS",
                "parts": [
                    {
                        "name": "Tick Damage",
                        "multipliers": [25, 0, 0, 0, 15, 0]
                    },
                    {
                        "name": "DPS",
                        "hits": { "Tick Damage": 2.5 }
                    },
                    {
                        "name": "Total Burn Damage",
                        "hits": { "Tick Damage": 20 }
                    }
                ]
            }]
        },
        {
            "display_name": "Sunshower",
            "desc": "Heal emits a strong light, damaging nearby enemies.",
            "archetype": "Light Bender",
            "base_abil": "Heal",
            "parents": [ "Water Mastery" ],
            "dependencies": [ "Heal" ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 13,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Sunshower Damage",
                    "multipliers": [70, 0, 0, 30, 0, 0]
                }
            ]
        },
        {
            "display_name": "Stronger Meteor",
            "desc": "Increase the damage of Meteor.",
            "base_abil": "Meteor",
            "archetype": "Arcanist",
            "archetype_req": 2,
            "parents": [ "Burning Sigil" ],
            "dependencies": [ "Meteor" ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 3,
                "target_part": "Meteor Damage",
                "behavior": "modify",
                "multipliers": [90, 30, 0, 0, 0, 0]
            }]
        },
        {
            "display_name": "Windsweeper",
            "desc": "Your Main Attack will add +1 Winded to enemies you hit. (Max 10, 0.5s cooldown) Ice Snake will deal additional damage to enemies for every Winded they have.",
            "archetype": "Riftwalker",
            "archetype_req": 3,
            "parents": [
                "Wind Slash",
                "Thunderstorm"
            ],
            "dependencies": [ "Ice Snake" ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "max": 10
            },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": {
                        "type": "stat",
                        "name": "nConvBase:4.Ice Snake Damage"
                    },
                    "scaling": [10],
                    "slider_step": 1,
                    "slider_max": 10
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": {
                        "type": "stat",
                        "name": "wConvBase:4.Ice Snake Damage"
                    },
                    "scaling": [5]
                }
            ]
        },
        {
            "display_name": "Ophanim",
            "desc": "When casting Meteor, instead summon 2 orbs of light with 200 Health that will attack when you use your Main Attack. When they damage an enemy, they lose 20% of their Health. They can be healed back.",
            "archetype": "Light Bender",
            "archetype_req": 2,
            "parents": [ "Sunshower" ],
            "dependencies": [],
            "blockers": [
                "Thunderstorm",
                "Psychokinesis"
            ],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {
                "health": 200,
                "num_orbs": 2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Ophanim",
                    "base_spell": 3,
                    "display": "Per Melee (max)",
                    "parts": [
                        {
                            "name": "Per Orb",
                            "multipliers": [90, 0, 15, 15, 0, 0]
                        },
                        {
                            "name": "Per Melee (max)",
                            "hits": {
                                "Per Orb": "Ophanim.num_orbs",
                                "Breathless Damage": "Ophanim.num_orbs"
                            }
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": 30
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "behavior": "modify",
                    "output": {
                        "type": "stat",
                        "name": "nConvBase:3.Breathless Damage"
                    },
                    "scaling": [-22]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "behavior": "modify",
                    "output": {
                        "type": "stat",
                        "name": "eConvBase:3.Breathless Damage"
                    },
                    "scaling": [-4]
                }
            ]
        },
        {
            "display_name": "Arcane Transfer",
            "desc": "Meteor and Ice Snake will add +7 Mana to a Mana Bank for every aggressive enemy you hit. Heal will now transfer the content of your Mana Bank into usable Mana instead of healing.",
            "archetype": "Arcanist",
            "archetype_req": 2,
            "parents": [
                "Burning Sigil"
            ],
            "dependencies": [ "Heal" ],
            "blockers": [
                "Larger Heal",
                "Orphion's Pulse",
                "Timelock"
            ],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {
                "bank": 90
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Arcane Transfer",
                    "base_spell": 1,
                    "parts": [],
                    "display": ""
                }
            ]
        },
        {
            "display_name": "Cheaper Heal",
            "desc": "Reduce the Mana cost of Heal.",
            "base_abil": "Heal",
            "parents": [
                "Windsweeper",
                "Purification"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 17,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Purification",
            "desc": "Heal and Arcane Transfer will purify you of all negative effects and fire. (3s Cooldown)",
            "base_abil": "Heal",
            "parents": [
                "Ophanim",
                "Cheaper Heal",
                "Sentient Snake"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 17,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Sentient Snake",
            "desc": "Ice Snake will follow the direction you're facing, allowing you to control it.",
            "base_abil": "Ice Snake",
            "parents": [
                "Arcane Transfer",
                "Purification"
            ],
            "dependencies": [
                "Ice Snake"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 17,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Ice Snake Damage",
                    "base_spell": 4,
                    "multipliers": [20, 0, 0, 10, 0, 0]
                }
            ]
        },
        {
            "display_name": "Eye Piercer",
            "desc": "Teleport will blind enemies, confusing them for a brief period of time.",
            "base_abil": "Teleport",
            "parents": [
                "Cheaper Heal"
            ],
            "dependencies": [
                "Teleport"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 18,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Breathless",
            "desc": "Meteor and Ophanim will deal additional damage to enemies for every Winded they have.",
            "base_abil": "Windsweeper",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "parents": [
                "Cheaper Heal",
                "Purification"
            ],
            "dependencies": [
                "Windsweeper"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 18,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": {
                        "type": "stat",
                        "name": "nConvBase:3.Breathless Damage"
                    },
                    "scaling": [25]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": {
                        "type": "stat",
                        "name": "eConvBase:3.Breathless Damage"
                    },
                    "scaling": [5]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Breathless Damage",
                    "multipliers": [0, 0, 0, 0, 0, 0]
                }
            ]
        },
        {
            "display_name": "Larger Heal",
            "desc": "Increase your Heal's range.",
            "base_abil": 1,
            "archetype": "Light Bender",
            "archetype_req": 0,
            "parents": [
                "Purification",
                "Sentient Snake"
            ],
            "dependencies": [
                "Heal"
            ],
            "blockers": [
                "Arcane Transfer"
            ],
            "cost": 1,
            "display": {
                "row": 18,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Heal",
                            "name": "aoe",
                            "value": 2
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Larger Mana Bank",
            "desc": "Increase your maximum Mana Bank by +30.",
            "base_abil": 1,
            "archetype": "Arcanist",
            "archetype_req": 0,
            "parents": [
                "Sentient Snake"
            ],
            "dependencies": [
                "Arcane Transfer"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 18,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Arcane Transfer",
                            "name": "bank",
                            "value": 30
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Ice Snake",
            "desc": "Reduce the Mana cost of Ice Snake.",
            "base_abil": "Ice Snake",
            "parents": [
                "Eye Piercer",
                "Fortitude"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 20,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Fortitude",
            "desc": "Healing 120% of your max health within 10s will apply a damage bonus to every player you've healed. (15s Cooldown)",
            "base_abil": "Heal",
            "archetype": "Light Bender",
            "archetype_req": 2,
            "parents": [
                "Cheaper Ice Snake",
                "Cheaper Teleport II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 20,
                "col": 2,
                "icon": "node_2"
            },
            "properties": {
                "duration": 7
            },
            "effects": []
        },
        {
            "display_name": "Cheaper Teleport II",
            "desc": "Reduce the Mana cost of Teleport.",
            "base_abil": "Teleport",
            "parents": [
                "Fortitude",
                "Purification",
                "Pyrokinesis"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 20,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Pyrokinesis",
            "desc": "When your Mana Bank reaches 30, your Main Attack will explode upon impact with enemies. (Damage is dealt as Main Attack Damage)",
            "base_abil": 4,
            "archetype": "Arcanist",
            "archetype_req": 4,
            "parents": [
                "Sentient Snake",
                "Cheaper Teleport II"
            ],
            "dependencies": ["Arcane Transfer"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 20,
                "col": 7,
                "icon": "node_2"
            },
            "properties": {},
            "__TODO": "replace_spell pyrokinesis damage",
            "effects": []
        },
        {
            "display_name": "Blink",
            "desc": "Teleport will trigger 2 times in quick succession.",
            "base_abil": "Teleport",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "parents": [
                "Fortitude",
                "Cheaper Ice Snake"
            ],
            "dependencies": [
                "Teleport"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Teleport",
                            "name": "range",
                            "value": -4
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "behavior": "modify",
                    "target_part": "Total Damage",
                    "base_spell": 2,
                    "hits": {
                        "Wind Slash": 1,
                        "Explosion Damage": 1
                    }
                }
            ]
        },
        {
            "display_name": "Freezing Sigil",
            "desc": "Ice Snake will leave a sigil of ice beneath you that slows and damages enemies every 0.8s. Allies standing on the sigil will be immune to knockback.",
            "archetype": "Light Bender",
            "base_abil": "Ice Snake",
            "parents": [
                "Cheaper Teleport II",
                "Pyrokinesis"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 21,
                "col": 6,
                "icon": "node_2"
            },
            "properties": {
                "aoe": 7,
                "duration": 8
            },
            "effects": [{
                "type": "replace_spell",
                "name": "Freezing Sigil",
                "base_spell": 7,
                "display": "DPS",
                "parts": [
                    {
                        "name": "Tick Damage",
                        "multipliers": [15, 0, 0, 5, 0, 0]
                    },
                    {
                        "name": "DPS",
                        "hits": { "Tick Damage": 1.25 }
                    },
                    {
                        "name": "Total Freeze Damage",
                        "hits": { "Tick Damage": 8 }
                    }
                ]
            }]
        },
        {
            "display_name": "Healthier Ophanim I",
            "desc": "Increases the health of Ophanim's orbs by +800 and reduces the damage they take when attacking by -5%.",
            "archetype": "Light Bender",
            "archetype_req": 0,
            "base_abil": "Ophanim",
            "parents": [
                "Fortitude",
                "Cheaper Teleport II",
                "Snake Nest"
            ],
            "dependencies": [
                "Ophanim"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Snake Nest",
            "desc": "Ice Snake will summon 3 snakes.",
            "base_abil": "Ice Snake",
            "parents": [
                "Seance",
                "Cheaper Teleport II",
                "Healthier Ophanim I"
            ],
            "dependencies": [
                "Ice Snake"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 22,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Ice Snake Damage",
                    "base_spell": 4,
                    "multipliers": [35, 0, 0, 15, 0, 0]
                }
            ]
        },
        {
            "display_name": "Seance",
            "desc": "For every 5/3s Lifesteal you have from items, gain 1% Spell Damage (Max 50%)",
            "parents": [
                "Pyrokinesis",
                "Snake Nest"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "ls"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "sdPct"
                    },
                    "scaling": [
                        0.2
                    ],
                    "max": 50
                }
            ]
        },
        {
            "display_name": "Transonic Warp",
            "desc": "Teleport will deal additional damage to enemies for every Winded they have.",
            "base_abil": "Windsweeper",
            "archetype": "Riftwalker",
            "archetype_req": 5,
            "parents": [
                "Cheaper Ice Snake",
                "Fluid Healing"
            ],
            "dependencies": [
                "Ice Snake",
                "Windsweeper"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": [
                        {
                            "type": "stat",
                            "name": "nConvBase:2.Wind Slash"
                        },
                        {
                            "type": "stat",
                            "name": "nConvBase:2.Explosion Damage"
                        }
                    ],
                    "scaling": [10]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": [
                        {
                            "type": "stat",
                            "name": "tConvBase:2.Wind Slash"
                        },
                        {
                            "type": "stat",
                            "name": "tConvBase:2.Explosion Damage"
                        }
                    ],
                    "scaling": [3]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": [
                        {
                            "type": "stat",
                            "name": "aConvBase:2.Wind Slash"
                        },
                        {
                            "type": "stat",
                            "name": "aConvBase:2.Explosion Damage"
                        }
                    ],
                    "scaling": [3]
                }
            ]
        },
        {
            "display_name": "Fluid Healing",
            "desc": "For every 1% Water Damage Bonus you have, buff Heal's healing power by +0.3%.",
            "archetype": "Light Bender",
            "archetype_req": 0,
            "base_abil": "Heal",
            "parents": [
                "Healthier Ophanim I",
                "Transonic Warp",
                "Orphion's Pulse"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "round": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "wDamPct"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "healMult.FluidHealing"
                    },
                    "scaling": [0.3],
                    "max": 75
                }
            ]
        },
        {
            "display_name": "Orphion's Pulse",
            "desc": "Heal will trigger 2 more times, increasing your overall healing.",
            "archetype": "Light Bender",
            "archetype_req": 5,
            "base_abil": "Heal",
            "parents": [
                "Healthier Ophanim I",
                "Snake Nest",
                "Arcane Restoration",
                "Fluid Healing"
            ],
            "dependencies": [
                "Heal"
            ],
            "blockers": [
                "Arcane Transfer"
            ],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {
                "aoe": 5
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Second and Third Pulses",
                    "power": 0.20
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "display": "Total Heal",
                    "target_part": "Total Heal",
                    "hits": {
                        "Heal": 1,
                        "Second and Third Pulses": 2
                    }
                }
            ]
        },
        {
            "display_name": "Arcane Restoration",
            "desc": "Pyrokinesis will add +4 Mana every 1s to your Mana Bank when hitting an aggressive enemy.",
            "base_abil": 999,
            "archetype": "Arcanist",
            "archetype_req": 0,
            "parents": [
                "Seance",
                "Snake Nest",
                "Orphion's Pulse"
            ],
            "dependencies": [
                "Pyrokinesis"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 23,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {
                "duration": 4
            },
            "effects": []
        },
        {
            "display_name": "Stronger Ophanim",
            "desc": "Increase the damage of Ophanim.",
            "base_abil": "Ophanim",
            "parents": [
                "Orphion's Pulse",
                "Arcane Restoration"
            ],
            "dependencies": [
                "Ophanim"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 24,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Per Orb", 
                    "multipliers": [20, 0, 0, 0, 0, 10]
                }
            ]
        },
        {
            "display_name": "Diffusion",
            "desc": "If you kill an enemy with Winded on them, the leftover Winded will spread to other nearby foes. (Max 10)",
            "archetype": "Riftwalker",
            "archetype_req": 6,
            "base_abil": "Windsweeper",
            "parents": [
                "Transonic Warp",
                "Fluid Healing"
            ],
            "dependencies": [
                "Windsweeper"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "aoe": 8
            },
            "effects": []
        },
        {
            "display_name": "Lightweaver",
            "desc": "Healing 50% of your max health within 10s will summon a rotating orb that damages enemies upon contact. (Max 3 Orbs)",
            "archetype": "Light Bender",
            "archetype_req": 7,
            "parents": [
                "Orphion's Pulse",
                "Arcane Speed"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {
                "range": 7
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Lightweaver",
                    "base_spell": 5,
                    "display": "Orb DPS",
                    "parts": [
                        {
                            "name": "Single Orb",
                            "type": "damage",
                            "multipliers": [150, 0, 0, 0, 50, 0]
                        },
                        {
                            "name": "Orb DPS",
                            "type": "total",
                            "hits": {
                                "Single Orb": 1.5
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Arcane Speed",
            "desc": "You gain an 80% walk speed buff for 4s after casting Heal or Arcane Transfer. (8s cooldown)",
            "base_abil": "Heal",
            "archetype": "Arcanist",
            "parents": [
                "Lightweaver",
                "Larger Mana Bank II"
            ],
            "dependencies": [
                "Heal"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Larger Mana Bank II",
            "desc": "Increase your maximum Mana Bank by +30.",
            "base_abil": 1,
            "archetype": "Arcanist",
            "archetype_req": 0,
            "parents": [
                "Seance",
                "Arcane Speed"
            ],
            "dependencies": [
                "Arcane Transfer"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 25,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "More Winded",
            "desc": "Increase your maximum Winded by +10.",
            "base_abil": "Windsweeper",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "parents": [
                "Diffusion"
            ],
            "dependencies": [
                "Windsweeper"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 26,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Windsweeper",
                            "name": "max",
                            "value": 10
                        }
                    ]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "slider_max": 10
                }
            ]
        },
        {
            "display_name": "Psychokinesis",
            "desc": "Meteor will launch directly from you as a slow projectile.",
            "base_abil": 3,
            "archetype": "Arcanist",
            "archetype_req": 5,
            "parents": [
                "Larger Mana Bank II",
                "Arcane Speed"
            ],
            "dependencies": [ "Meteor" ],
            "blockers": [
                "Ophanim"
            ],
            "cost": 2,
            "display": {
                "row": 26,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {"range": 20},
            "effects": []
        },
        {
            "display_name": "Cheaper Ice Snake II",
            "desc": "Reduce the Mana cost of Ice Snake.",
            "base_abil": "Ice Snake",
            "parents": [
                "Diffusion",
                "Explosive Entrance"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 27,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 4,
                "cost": -5
            }]
        },
        {
            "display_name": "Explosive Entrance",
            "desc": "Deal Damage in an area on the location you Teleport to.",
            "base_abil": "Teleport",
            "parents": [
                "Cheaper Ice Snake II",
                "Cheaper Meteor II"
            ],
            "dependencies": [
                "Teleport"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 27,
                "col": 3,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 3
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Explosion Damage",
                    "base_spell": 2,
                    "multipliers": [60, 0, 0, 0, 20, 0]
                },
                {
                    "type": "add_spell_prop",
                    "behavior": "modify",
                    "target_part": "Total Damage",
                    "base_spell": 2,
                    "hits": { "Explosion Damage": 1 }
                }
            ]
        },
        {
            "display_name": "Cheaper Meteor II",
            "desc": "Reduce the Mana cost of Meteor.",
            "base_abil": "Meteor",
            "parents": [
                "Explosive Entrance",
                "Lightweaver",
                "Arcane Speed"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 27,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 3,
                "cost": -5
            }]
        },
        {
            "display_name": "Chaos Explosion",
            "desc": "When your Mana Bank reaches 120, casting Arcane Transfer will rapidly unleash the last 3 spells you've cast in order.",
            "base_abil": "Arcane Transfer",
            "archetype": "Arcanist",
            "archetype_req": 8,
            "parents": [
                "Larger Mana Bank II"
            ],
            "dependencies": [
                "Arcane Transfer"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 27,
                "col": 8,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Time Dilation",
            "desc": "Creates an area of effect when sprinting that increases the walk speed of all allies the longer they run in it. (Step out or stop running to cancel)",
            "archetype": "Riftwalker",
            "archetype_req": 7,
            "parents": [
                "Cheaper Ice Snake II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [{
                "type": "stat_scaling",
                "slider": true,
                "slider_name": "Time Dilated",
                "slider_max": 30,
                "output": {
                    "type": "stat",
                    "name": "spd"
                },
                "scaling": [
                    10
                ]
            }]
        },
        {
            "display_name": "Gust",
            "desc": "Ice Snake will add +1 Winded to enemies and deal more damage.",
            "base_abil": "Ice Snake",
            "archetype": "Riftwalker",
            "archetype_req": 5,
            "parents": [
                "Cheaper Ice Snake II",
                "Explosive Entrance",
                "Better Ophanim"
            ],
            "dependencies": [
                "Ice Snake"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Ice Snake Damage",
                    "base_spell": 4,
                    "multipliers": [20, 0, 0, 0, 0, 20]
                }
            ]
        },
        {
            "display_name": "Better Ophanim",
            "desc": "Increase your maximum orbs from Ophanim by +1.",
            "archetype": "Light Bender",
            "archetype_req": 0,
            "base_abil": "Ophanim",
            "parents": [
                "Explosive Entrance",
                "Cheaper Meteor II",
                "Gust"
            ],
            "dependencies": [
                "Ophanim"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [{
                        "type": "prop",
                        "abil": "Ophanim",
                        "name": "num_orbs",
                        "value": 1
                    }]
                }
            ]
        },
        {
            "display_name": "Arctic Snake",
            "desc": "Ice Snake will freeze enemies for 2s.",
            "base_abil": "Ice Snake",
            "parents": [
                "Chaos Explosion"
            ],
            "dependencies": [
                "Ice Snake"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Stronger Sunshower",
            "desc": "Increase the damage of Sunshower.",
            "archetype": "Light Bender",
            "base_abil": "Heal",
            "parents": [
                "Gust",
                "Better Ophanim"
            ],
            "dependencies": [
                "Sunshower"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 29,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Sunshower Damage", 
                    "multipliers": [50, 0, 0, 20, 10, 0]
                }
            ]
        },
        {
            "display_name": "Arcane Power",
            "desc": "Meteor and Ice Snake will add +3 Mana to your Mana Bank for each aggressive mob you hit.",
            "base_abil": "Arcane Transfer",
            "archetype": "Arcanist",
            "archetype_req": 0,
            "parents": [
                "Arctic Snake"
            ],
            "dependencies": [
                "Arcane Transfer"
            ],
            "blockers": ["Thunderstorm"],
            "cost": 1,
            "display": {
                "row": 29,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "More Winded II",
            "desc": "Increase your maximum Winded by +10.",
            "base_abil": "Windsweeper",
            "archetype": "Riftwalker",
            "archetype_req": 0,
            "parents": [
                "Time Dilation",
                "Devitalize"
            ],
            "dependencies": [
                "Windsweeper"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Windsweeper",
                            "name": "max",
                            "value": 10
                        }
                    ]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "slider_max": 10
                }
            ]
        },
        {
            "display_name": "Devitalize",
            "desc": "Enemies will deal -0.5% damage for every Winded they have.",
            "base_abil": "Windsweeper",
            "archetype": "Riftwalker",
            "archetype_req": 6,
            "parents": [
                "More Winded II",
                "Healthier Ophanim II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 31,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Winded",
                    "output": {
                        "type": "stat",
                        "name": "defMult.Diffusion"
                    },
                    "scaling": [0.5]
                }
            ]
        },
        {
            "display_name": "Healthier Ophanim II",
            "desc": "Increase the health of your orbs from Ophanim by +3000.",
            "base_abil": "Ophanim",
            "archetype": "Light Bender",
            "archetype_req": 0,
            "parents": [
                "Better Ophanim",
                "Devitalize"
            ],
            "dependencies": [
                "Healthier Ophanim I"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Larger Mana Bank III",
            "desc": "Increase your maximum Mana Bank by +30.",
            "archetype": "Arcanist",
            "archetype_req": 0,
            "base_abil": "Arcane Transfer",
            "parents": [
                "Arctic Snake"
            ],
            "dependencies": [
                "Arcane Transfer"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Divination",
            "desc": "Increase your maximum orbs from Ophanim by +3 and reduce their damage.",
            "base_abil": "Ophanim",
            "archetype": "Light Bender",
            "archetype_req": 0,
            "parents": [
                "Devitalize",
                "Healthier Ophanim II"
            ],
            "dependencies": [
                "Ophanim"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 32,
                "col": 3,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Per Orb", 
                    "multipliers": [-20, 0, -5, -5, 0, 0]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [{
                        "type": "prop",
                        "abil": "Ophanim",
                        "name": "num_orbs",
                        "value": 3
                    }]
                }
            ]
        },
        {
            "display_name": "Sunflare",
            "desc": "Healing 250% of your max health within 10s will make your next heal activate Sunflare. While Sunflare is active, you will restore health and mana to all nearby allies, and your Ophanim orbs will attack constantly.",
            "archetype": "Light Bender",
            "archetype_req": 12,
            "base_abil": "Heal",
            "parents": [
                "Healthier Ophanim II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 32,
                "col": 5,
                "icon": "node_3"
            },
            "properties": {
                "aoe": 12,
                "duration": 5
            },
            "effects": []
        },
        {
            "display_name": "Better Lightweaver",
            "desc": "Increase your Max Orbs from Lightweaver by +2.",
            "archetype": "Light Bender",
            "base_abil": "Lightweaver",
            "parents": [
                "Sunflare"
            ],
            "dependencies": [
                "Lightweaver"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 33,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Orb DPS",
                    "base_spell": 5,
                    "hits": {
                        "Single Orb": 1
                    }
                }
            ]
        },
        {
            "display_name": "Arcane Overflow",
            "desc": "Arcane Transfer will allow you to overflow your mana over its maximum limits. (Max 400)",
            "archetype": "Arcanist",
            "archetype_req": 12,
            "base_abil": "Arcane Transfer",
            "parents": [
                "Larger Mana Bank III"
            ],
            "dependencies": [
                "Arcane Transfer"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Timelock",
            "desc": "Holding shift and casting Heal will absorb all Winded on nearby enemies and make you Timelocked. While Timelocked, your mana will not be depleted and you become immovable from external forces. All enemies will receive damage as if they had the amount of Winded you absorbed. (Max 60)",
            "archetype": "Riftwalker",
            "archetype_req": 12,
            "parents": [
                "More Winded II"
            ],
            "dependencies": [],
            "blockers": ["Arcane Transfer"],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 0,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Cheaper Heal II",
            "desc": "Reduce the Mana cost of Heal.",
            "base_abil": "Heal",
            "parents": [
                "Timelock",
                "Manastorm"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Manastorm",
            "desc": "If you have more than 100 Mana, casting a spell will give you +5 mana over 2s.",
            "archetype": "Arcanist",
            "archetype_req": 4,
            "parents": [
                "Cheaper Heal II",
                "Arcane Overflow",
                "Sunflare"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Memory Recollection",
            "desc": "Chaos Explosion will cast +2 spells.",
            "base_abil": "Arcane Transfer",
            "parents": [
                "Arcane Overflow"
            ],
            "dependencies": [
                "Chaos Explosion"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        }
    ],
    "Assassin": [
        {
            "display_name": "Spin Attack",
            "desc": "Slash rapidly around you, damaging enemies in a large area.",
            "archetype": "",
            "archetype_req": 0,
            "parents": [],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 0,
                "col": 4,
                "icon": "node_assassin"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Spin Attack",
                    "cost": 40,
                    "base_spell": 1,
                    "display": "Spin Attack",
                    "parts": [
                        {
                            "name": "Spin Attack",
                            "type": "damage",
                            "multipliers": [
                                120,
                                0,
                                30,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Dagger Proficiency I",
            "desc": "Increase your speed by +5% and improve your Main Attack's damage when using a dagger.",
            "archetype": "",
            "archetype_req": 0,
            "parents": [
                "Spin Attack"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "spd",
                            "value": 5
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Melee",
                    "multipliers": [ 5, 0, 0, 0, 0, 0 ]
                }
            ]
        },
        {
            "display_name": "Cheaper Spin Attack",
            "desc": "Reduce the Mana cost of Spin Attack.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Spin Attack",
            "parents": [
                "Dagger Proficiency I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -10
                }
            ]
        },
        {
            "display_name": "Double Spin",
            "desc": "Spin Attack will activate a second time with a larger area of effect.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Spin Attack",
            "parents": [
                "Dagger Proficiency I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 4,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Total Damage",
                    "hits": {
                        "Spin Attack": 2
                    },
                    "display": "Total Damage"
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Spin Attack",
                    "behavior": "modify",
                    "multipliers": [-40, 0, 0, 0, 0, 0]
                }
            ]
        },
        {
            "display_name": "Poisoned Blade",
            "desc": "For every 2% or 2 Raw Main Attack Damage you have from items, gain +5/3s Poison Damage (Max 50/3s). Your Main Attack gains additional range (+1 Block).",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "parents": [
                "Dash"
            ],
            "dependencies": [],
            "blockers": [
                "Double Slice"
            ],
            "cost": 1,
            "display": {
                "row": 7,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "mdPct"
                        },
                        {
                            "type": "stat",
                            "name": "mdRaw"
                        }
                    ],
                    "output": [
                        {
                            "type": "stat",
                            "name": "poison"
                        }
                    ],
                    "scaling": [
                        2,
                        2
                    ],
                    "max": 50
                }
            ]
        },
        {
            "display_name": "Dash",
            "desc": "Dash in the direction you're facing.",
            "archetype": "",
            "archetype_req": 0,
            "parents": [
                "Double Spin"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 7,
                "col": 4,
                "icon": "node_assassin"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Dash",
                    "cost": 20,
                    "base_spell": 2,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "None",
                            "type": "damage",
                            "multipliers": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Double Slice",
            "desc": "Your Main Attack will attack twice, but deal -40% damage per hit.",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "base_abil": 999,
            "parents": [
                "Dash"
            ],
            "dependencies": [],
            "blockers": [
                "Poisoned Blade"
            ],
            "cost": 1,
            "display": {
                "row": 7,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "target_part": "Melee",
                    "multipliers": [
                        -40,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 0,
                    "display": "Total Damage",
                    "target_part": "Total Damage",
                    "hits": {"Melee": 2}
                }
            ]
        },
        {
            "display_name": "Smoke Bomb",
            "desc": "Throw a bomb that slowly emits smoke, damaging all enemies in it every 0.5s.",
            "archetype": "",
            "archetype_req": 0,
            "parents": [
                "Poisoned Blade",
                "Cheaper Dash"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 2,
                "icon": "node_assassin"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Smoke Bomb",
                    "cost": 35,
                    "base_spell": 4,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Per Tick",
                            "type": "damage",
                            "multipliers": [
                                25,
                                5,
                                0,
                                0,
                                0,
                                5
                            ]
                        },
                        {
                            "name": "Per Bomb",
                            "type": "total",
                            "hits": {
                                "Per Tick": 10
                            }
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Per Bomb": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Dash",
            "desc": "Reduce the Mana cost of Dash",
            "base_abil": "Dash",
            "parents": [
                "Smoke Bomb",
                "Multihit"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Multihit",
            "desc": "Unleash a rapid flurry of 8 hits to enemies facing you, dealing heavy damage.",
            "parents": [
                "Double Slice",
                "Cheaper Dash"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 9,
                "col": 6,
                "icon": "node_assassin"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Multihit",
                    "cost": 40,
                    "base_spell": 3,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Per Hit",
                            "multipliers": [ 30, 0, 0, 10, 0, 0 ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Per Hit": 8
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Earth Mastery",
            "desc": "Increases base damage from all Earth attacks",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "base_abil": 998,
            "parents": [
                "Smoke Bomb",
                "Thunder Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "eDamPct",
                            "value": 20
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Thunder Mastery",
            "desc": "Increases base damage from all Thunder attacks",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "base_abil": 998,
            "parents": [
                "Earth Mastery",
                "Smoke Bomb"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "tDamPct",
                            "value": 10
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMin",
                            "value": 1
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMax",
                            "value": 8
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Fire Mastery",
            "desc": "Increases base damage from all Fire attacks",
            "archetype": "Trickster",
            "base_abil": 998,
            "parents": [
                "Cheaper Dash",
                "Water Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 14,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "fDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMax",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Water Mastery",
            "desc": "Increases base damage from all Water attacks",
            "archetype": "Acrobat",
            "base_abil": 998,
            "parents": [
                "Cheaper Dash",
                "Multihit",
                "Air Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "wDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Air Mastery",
            "desc": "Increases base damage from all Air attacks",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "base_abil": 998,
            "parents": [
                "Water Mastery",
                "Multihit"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 13,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "aDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Backstab",
            "desc": "Makes Multihit a single devastating hit. If you strike an enemy from behind, it deals double the damage.",
            "archetype": "Shadestepper",
            "archetype_req": 2,
            "base_abil": "Multihit",
            "parents": [
                "Earth Mastery",
                "Thunder Mastery"
            ],
            "dependencies": [
                "Multihit"
            ],
            "blockers": [
                "Stronger Multihit",
                "Fatality"
            ],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Backstab",
                    "base_spell": 3,
                    "display": "Backstab Damage",
                    "parts": [
                        {
                            "name": "Backstab Damage",
                            "type": "damage",
                            "multipliers": [
                                200, 50, 0, 0, 0, 0
                            ]
                        }
                    ]
                },
                {
                    "type": "raw_stat",
                    "toggle": "Activate Backstab",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Backstab:3.Backstab Damage",
                            "value": 100
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Fatality",
            "desc": "Multihit will deal an additional final slash",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Multihit",
            "parents": [
                "Water Mastery",
                "Air Mastery"
            ],
            "dependencies": [
                "Multihit"
            ],
            "blockers": ["Backstab"],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Fatality",
                    "multipliers": [
                        100,
                        0,
                        0,
                        0,
                        0,
                        50
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Total Damage",
                    "hits": {
                        "Fatality": 1
                    }
                }
            ]
        },
        {
            "display_name": "Vanish",
            "desc": "Dash will vanish you into the shadows. You cannot heal or gain mana while in this state. (Attack or get hit to cancel)",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Dash",
            "parents": [
                "Backstab",
                "Sticky Bomb"
            ],
            "dependencies": [
                "Dash"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 16,
                "col": 2,
                "icon": "node_2"
            },
            "properties": {
                "duration": 5,
                "cooldown": 5
            },
            "effects": []
        },
        {
            "display_name": "Sticky Bomb",
            "desc": "Smoke Bomb will stick to enemies and deal additional damage",
            "archetype": "Trickster",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Vanish",
                "Fire Mastery"
            ],
            "dependencies": [
                "Smoke Bomb"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 16,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "behavior": "modify",
                    "target_part": "Per Tick",
                    "multipliers": [0, 0, 0, 0, 10, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "behavior": "modify",
                    "target_part": "Single Bomb",
                    "multipliers": [0, 0, 0, 0, 10, 0]
                }
            ]
        },
        {
            "display_name": "Righting Reflex",
            "desc": "When you hold shift while airborne, slowly glide and become immune to fall damage. (Max 5s)",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "parents": [
                "Fatality"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 16,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Surprise Strike",
            "desc": "Your first hit after casting Vanish will deal +80% more damage.",
            "archetype": "Shadestepper",
            "archetype_req": 3,
            "base_abil": "Dash",
            "parents": [
                "Vanish"
            ],
            "dependencies": [
                "Vanish"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 19,
                "col": 2,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Surprise Strike",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.SurpriseStrike",
                            "value": 80
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Mirror Image",
            "desc": "Summon 3 Clones after reappearing from Vanish that will follow and protect you. When hit, you take 60% less damage. Clones can take 2 hits before dying.",
            "archetype": "Trickster",
            "archetype_req": 2,
            "parents": [
                "Sticky Bomb"
            ],
            "dependencies": [
                "Vanish"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 19,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {
                "clone": 3,
                "cooldown": 15
            },
            "effects": [

                    {
                        "type": "raw_stat",
                        "toggle": "Activate Clones",
                        "bonuses": [{ "type": "stat", "name": "defMult.Clone", "value": 60}]
                    }
            ]
        },
        {
            "display_name": "Lacerate",
            "desc": "Spin Attack will lunge you forward, deal 3 strikes and lunge you upward.",
            "archetype": "Acrobat",
            "archetype_req": 2,
            "base_abil": "Spin Attack",
            "parents": [
                "Fatality"
            ],
            "dependencies": [],
            "blockers": [
                "Echo"
            ],
            "cost": 2,
            "display": {
                "row": 19,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Lacerate",
                    "base_spell": 1,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Per Hit",
                            "type": "damage",
                            "multipliers": [
                                60,
                                0,
                                0,
                                10,
                                0,
                                20
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Per Hit": 3
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Silent Killer",
            "desc": "Resets Vanish's cooldown after killing an enemy.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Dash",
            "parents": [
                "Surprise Strike"
            ],
            "dependencies": [
                "Vanish"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 20,
                "col": 1,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Shenanigans",
            "desc": "For every 2% Stealing you have from items, gain +1/3s Mana Steal (Max 8/3s)",
            "archetype": "Trickster",
            "archetype_req": 0,
            "parents": [
                "Mirror Image",
                "Psithurism"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "eSteal"
                        }
                    ],
                    "output": [
                        {
                            "type": "stat",
                            "name": "ms"
                        }
                    ],
                    "scaling": [
                        0.5
                    ],
                    "max": 8
                }
            ]
        },
        {
            "display_name": "Wall of Smoke",
            "desc": "Smoke Bomb will throw +2 bombs.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Lacerate"
            ],
            "dependencies": [
                "Smoke Bomb"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 20,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "behavior": "modify",
                    "target_part": "Total Damage",
                    "hits": { "Per Bomb": 2 }
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "behavior": "modify",
                    "target_part": "Per Tick",
                    "multipliers": [ -10, 0, 0, 0, 0, 0 ]
                }
            ]
        },
        {
            "display_name": "Better Smoke Bomb",
            "desc": "Increase Smoke Bomb's range and area of effect.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Silent Killer",
                "Shadow Travel"
            ],
            "dependencies": [
                "Smoke Bomb"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Shadow Travel",
            "desc": "Increases your Walk Speed by +120% when in Vanish.",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "base_abil": "Dash",
            "parents": [
                "Better Smoke Bomb",
                "Silent Killer",
                "Cheaper Multihit"
            ],
            "dependencies": [
                "Vanish"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 22,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Cheaper Multihit",
            "desc": "Reduce the Mana cost of Multihit",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Multihit",
            "parents": [
                "Shenanigans",
                "Shadow Travel",
                "Dagger Proficiency II",
                "Psithurism"
            ],
            "dependencies": [ "Multihit" ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Dagger Proficiency II",
            "desc": "Increase your Main Attack's range and add +5 raw damage to all attacks",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": 999,
            "parents": [
                "Cheaper Multihit",
                "Wall of Smoke"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damRaw",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Shadow Siphon",
            "desc": "Reduces Vanish's cooldown by -1.5s after striking an enemy from behind with Backstab.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Vanish",
            "parents": [
                "Better Smoke Bomb",
                "Shadow Travel"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 23,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Last Laugh",
            "desc": "When losing a Clone, it will cast Spin Attack before dying",
            "archetype": "Trickster",
            "archetype_req": 3,
            "base_abil": "Dash",
            "parents": [
                "Mirror Image"
            ],
            "dependencies": [
                "Mirror Image"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 20,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Cheaper Smoke Bomb",
            "desc": "Reduce the Mana cost of Smoke Bomb",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Better Smoke Bomb",
                "Blazing Powder"
            ],
            "dependencies": [
                "Smoke Bomb"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 25,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Blazing Powder",
            "desc": "Spin Attack will blind enemies and deal additional damage",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Spin Attack",
            "parents": [
                "Cheaper Smoke Bomb",
                "Shadow Travel",
                "Cheaper Multihit"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 3,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Per Hit",
                    "behavior": "modify",
                    "multipliers": [0, 0, 0, 0, 20, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Spin Attack",
                    "behavior": "modify",
                    "multipliers": [0, 0, 0, 0, 20, 0]
                }
            ]
        },
        {
            "display_name": "Weightless",
            "desc": "You gain +0.35 Mana if you hit an enemy while airborne. (1.25+ blocks off the ground to be airborne)",
            "archetype": "Acrobat",
            "archetype_req": 3,
            "parents": [
                "Cheaper Multihit",
                "Dagger Proficiency II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 25,
                "col": 7,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Black Hole",
            "desc": "Smoke Bomb will pull nearby enemies.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Cheaper Smoke Bomb",
                "Blazing Powder"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 26,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Sandbagging",
            "desc": "Anytime you get hit for less than 5% of your max hp, reduce your abilities cooldown by -3s. (1s Cooldown)",
            "archetype": "Trickster",
            "archetype_req": 0,
            "parents": [
                "Blazing Powder",
                "Hop"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 26,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {
                "cooldown": 1
            },
            "effects": []
        },
        {
            "display_name": "Hop",
            "desc": "When you double tap jump, leap forward. (2s Cooldown)",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "parents": [
                "Sandbagging",
                "Weightless"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 26,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {
                "cooldown": 2
            },
            "effects": []
        },
        {
            "display_name": "Dancing Blade",
            "desc": "Deal damage to mobs you Dash through",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "base_abil": "Dash",
            "parents": [
                "Far Reach",
                "Shurikens"
            ],
            "dependencies": [
                "Dash"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 29,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Dancing Blade",
                    "multipliers": [70, 0, 0, 0, 0, 10],
                    "display": "Dancing Blade"
                }
            ]
        },
        {
            "display_name": "Violent Vortex",
            "desc": "Dealing over 1.5x of your max health as damage in a single hit will deal 30% of the damage to other nearby enemies.",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "parents": [
                "Cheaper Smoke Bomb"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 27,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {
                "range": 10,
                "cooldown": 2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Violent Vortex",
                    "base_spell": 5,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Total Damage",
                            "type": "damage",
                            "multipliers": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Delirious Gas",
            "desc": "While you're inside Smoke Bomb, increase your damage by +25% and gain Luring for 20s",
            "archetype": "Trickster",
            "archetype_req": 4,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Sandbagging"
            ],
            "dependencies": [
                "Smoke Bomb"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 27,
                "col": 3,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Delirious Gas",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.DeliriousGas",
                            "value": 25
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Stronger Multihit",
            "desc": "Increases Multihit's amount of hits by +3",
            "base_abil": "Multihit",
            "parents": [
                "Sandbagging",
                "Hop"
            ],
            "dependencies": [],
            "blockers": [
                "Backstab"
            ],
            "cost": 1,
            "display": {
                "row": 27,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Total Damage",
                    "hits": {
                        "Per Hit": 3
                    }
                }
            ]
        },
        {
            "display_name": "Marked",
            "desc": "Smoke Bomb will add +1 Mark to enemies it hits. (Max 4, 0.4s Cooldown) Marked enemies will take +6% damage for each mark they have.",
            "archetype": "Shadestepper",
            "archetype_req": 5,
            "parents": [
                "Violent Vortex"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Marked",
                    "slider_step": 1,
                    "slider_max": 4,
                    "output": [
                        {
                            "type": "stat",
                            "name": "damMult.Marked"
                        }
                    ],
                    "scaling": [
                        6
                    ]
                }
            ]
        },
        {
            "display_name": "Echo",
            "desc": "Your Clones will mimic your spells and abilities, but you deal -20% damage for every clone that's alive. (Max -65%) Weightless restores -0.25 less mana per hit. Bamboozle becomes significantly stronger.",
            "archetype": "Trickster",
            "archetype_req": 6,
            "base_abil": "Mirror Image",
            "parents": [
                "Sandbagging",
                "Shurikens"
            ],
            "dependencies": [
                "Mirror Image"
            ],
            "blockers": [
                "Lacerate"
            ],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Clones",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Echo",
                            "value": -65
                        },
                        {
                            "type": "stat",
                            "name": "nConvBase:8.Slash Damage",
                            "value": 720
                        },
                        {
                            "type": "stat",
                            "name": "fConvBase:8.Slash Damage",
                            "value": 80
                        }
                    ]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Spell Copies",
                    "slider_step": 1,
                    "slider_max": 3,
                    "output": [
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:1.Spin Attack"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:0.Melee"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:3.Backstab Damage"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:3.Fatality"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:3.Per Hit"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:4.Per Tick"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:4.Single Bomb"
                        },
                        {
                            "type": "stat",
                            "name": "damMult.EchoCast:6.Per Shuriken"
                        }
                    ],
                    "scaling": [
                        100
                    ]
                }
            ]
        },
        {
            "display_name": "Shurikens",
            "desc": "After using Dash, your next Main Attack will throw 3 shurikens",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "base_abil": "Dash",
            "parents": [
                "Echo",
                "Far Reach"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 6,
                "icon": "node_2"
            },
            "properties": {
                "range": 50
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Shurikens",
                    "base_spell": 6,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Per Shuriken",
                            "type": "damage",
                            "multipliers": [
                                100,
                                0,
                                0,
                                0,
                                20,
                                0
                            ]
                        },
                        {
                            "name": "Total Damage",
                            "type": "total",
                            "hits": {
                                "Per Shuriken": 3
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Far Reach",
            "desc": "Increase the range of Multihit",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Multihit",
            "parents": [
                "Flow State",
                "Shurikens"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Psithurism",
            "desc": "Increase your Walk Speed by +20% and your Jump Height by +1",
            "archetype": "",
            "archetype_req": 0,
            "parents": [
                "Wall of Smoke",
                "Shenanigans"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "spd",
                            "value": 20
                        },
                        {
                            "type": "stat",
                            "name": "jh",
                            "value": 1
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Ambush",
            "desc": "Increase Surprise Strike's damage by +40%",
            "base_abil": "Dash",
            "parents": [
                "Marked"
            ],
            "dependencies": [
                "Surprise Strike"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Surprise Strike",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.SurpriseStrike",
                            "value": 40
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Dash II",
            "desc": "Reduce the Mana cost of Dash",
            "base_abil": "Dash",
            "parents": [
                "Echo",
                "Death Magnet"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Parry",
            "desc": "After dodging damage, gain a brief damage buff, and make your next spell within 1.5s free. (3s Cooldown)",
            "archetype": "Acrobat",
            "archetype_req": 5,
            "parents": [
                "Cheaper Spin Attack II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 31,
                "col": 6,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Parry",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Parry",
                            "value": 30
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Spin Attack II",
            "desc": "Reduce the Mana cost of Spin Attack",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Spin Attack",
            "parents": [
                "Far Reach",
                "Parry"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Death Magnet",
            "desc": "After leaving Vanish, pull all nearby Marked mobs towards where you entered Vanish.",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "base_abil": "Dash",
            "parents": [
                "Marked",
                "Cheaper Dash II"
            ],
            "dependencies": [
                "Vanish",
                "Marked"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 31,
                "col": 2,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Cheaper Multihit II",
            "desc": "Reduce the Mana cost of Multihit",
            "base_abil": "Multihit",
            "parents": [
                "Death Magnet",
                "Nightcloak Knife",
                "Hoodwink"
            ],
            "dependencies": [ "Multihit" ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 33,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Hoodwink",
            "desc": "When hitting enemies with Spin Attack, reduce the duration of your negative effects by 30% per hit and transfer them onto enemies. Lure can be transferred to most enemies. (Bosses and special enemies are immune)",
            "archetype": "Trickster",
            "archetype_req": 1,
            "base_abil": "Spin Attack",
            "parents": [
                "Cheaper Multihit II",
                "Cheaper Dash II",
                "Choke Bomb"
            ],
            "dependencies": [
                "Spin Attack"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Choke Bomb",
            "desc": "Smoke Bomb will slow down enemies while in the smoke",
            "archetype": "Trickster",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Hoodwink",
                "Wall Jump",
                "Parry"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Wall Jump",
            "desc": "Reduce Hop's cooldown by -1s. Using Hop into a wall will bounce you backward. (Hold shift to cancel)",
            "archetype": "Acrobat",
            "archetype_req": 5,
            "parents": [
                "Choke Bomb",
                "Cheaper Spin Attack II"
            ],
            "dependencies": [
                "Hop"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Fatal Spin",
            "desc": "Increases Spin Attack and Lacerate's range and damage, and adds +1 Mark to enemies hit.",
            "archetype": "Shadestepper",
            "archetype_req": 8,
            "base_abil": "Spin Attack",
            "parents": [
                "Nightcloak Knife",
                "Cheaper Multihit II",
                "Dissolution"
            ],
            "dependencies": [
                "Marked"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 1,
                "target_part": "Spin Attack",
                "multipliers": [ 20, 0, 0, 0, 0, 0 ]
            }]
        },
        {
            "display_name": "Stronger Lacerate",
            "desc": "Lacerate will deal +1 slash",
            "archetype": "Acrobat",
            "base_abil": "Spin Attack",
            "parents": [
                "Choke Bomb",
                "Wall Jump"
            ],
            "dependencies": [
                "Lacerate"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Total Damage",
                    "hits": {
                        "Per Hit": 1
                    }
                }
            ]
        },
        {
            "display_name": "Stronger Vortex",
            "desc": "Increases Violent Vortex's damage by +40% and increases the damage requirement to be 2.5x your max health.",
            "archetype": "Shadestepper",
            "archetype_req": 4,
            "parents": [
                "Fatal Spin"
            ],
            "dependencies": [
                "Violent Vortex"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 35,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Violent Vortex",
                    "base_spell": 5,
                    "display": "Total Damage",
                    "parts": [
                        {
                            "name": "Total Damage",
                            "type": "damage",
                            "multipliers": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Harvester",
            "desc": "After killing an enemy, gain +5 Mana for each leftover Mark it had.",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "parents": [
                "Fatal Spin",
                "Cheaper Smoke Bomb II"
            ],
            "dependencies": [
                "Marked"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 37,
                "col": 1,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Cheaper Smoke Bomb II",
            "desc": "Reduce the Mana cost of Smoke Bomb",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Harvester",
                "Hoodwink",
                "Blade Fury"
            ],
            "dependencies": [
                "Smoke Bomb"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 37,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "cost": -5
                }
            ]
        },
        {
            "display_name": "Blade Fury",
            "desc": "While using Multihit on an enemy, lock their position in front of you.",
            "archetype": "Acrobat",
            "archetype_req": 0,
            "base_abil": "Multihit",
            "parents": [
                "Stronger Lacerate",
                "Cheaper Smoke Bomb II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 37,
                "col": 7,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 3,
                "target_part": "Per Hit",
                "multipliers": [ 0, 0, 15, 0, 0, 0 ]
            }]
        },
        {
            "display_name": "More Marks",
            "desc": "Add +2 max Marks",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "base_abil": "Marked",
            "parents": [
                "Harvester",
                "Cheaper Smoke Bomb II"
            ],
            "dependencies": [
                "Marked"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 38,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Marked",
                    "slider_max": 2
                }
            ]
        },
        {
            "display_name": "Stronger Clones",
            "desc": "Improves your damage by +5% per Clone while your Clones are active, and reduce their maximum damage penalty by 5%.",
            "archetype": "Trickster",
            "archetype_req": 7,
            "base_abil": "Mirror Image",
            "parents": [
                "Cheaper Smoke Bomb II",
                "Blade Fury"
            ],
            "dependencies": [
                "Echo"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 38,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [{
                "type": "raw_stat",
                "toggle": "Activate Clones",
                "bonuses": [{
                    "type": "stat",
                    "name": "damMult.Echo",
                    "value": 5
                }]
            }]
        },
        {
            "display_name": "Ricochets",
            "desc": "Your Shurikens will bounce 2 times between enemies upon impact.",
            "archetype": "Acrobat",
            "archetype_req": 8,
            "base_abil": "Dash",
            "parents": [
                "Blade Fury"
            ],
            "dependencies": [
                "Shurikens"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 38,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Satsujin",
            "desc": "If an enemy has 4+ Marks, your next Multihit or Powder Special will deal +100% damage. (15s Cooldown, per enemy)",
            "archetype": "Shadestepper",
            "archetype_req": 12,
            "parents": [
                "Harvester"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 39,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Satsujin",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Satsujin:3.Backstab Damage",
                            "value": 100
                        },
                        {
                            "type": "stat",
                            "name": "damMult.Satsujin:3.Per Hit",
                            "value": 100
                        },
                        {
                            "type": "stat",
                            "name": "damMult.Satsujin:3.Fatality",
                            "value": 100
                        },
                        {
                            "type": "stat",
                            "name": "damMult.Satsujin:0.Powder Special",
                            "value": 100
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Forbidden Art",
            "desc": "Summon +3 additional Clones, but increase your maximum damage penalty by -5% while Clones are active. (+15s Cooldown)",
            "archetype": "Trickster",
            "archetype_req": 8,
            "base_abil": "Mirror Image",
            "parents": [
                "Cheaper Smoke Bomb II"
            ],
            "dependencies": [
                "Mirror Image"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 39,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Spell Copies",
                    "slider_max": 3,
                    "bonuses": [{
                        "type": "stat",
                        "name": "damMult.Echo",
                        "value": -5
                    }]
                }
            ]
        },
        {
            "display_name": "Diversion",
            "desc": "Grant allies within 16 blocks +10% Overhealth whenever you hit a Lured enemy. (9s Cooldown) Overhealth decays over 10s.",
            "archetype": "Trickster",
            "archetype_req": 12,
            "base_abil": "Smoke Bomb",
            "parents": [
                "Forbidden Art"
            ],
            "dependencies": [
                "Delirious Gas"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 40,
                "col": 5,
                "icon": "node_3"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Jasmine Bloom",
            "desc": "After spending 40 Mana, an area underneath you blooms and damages enemies below it every 0.3s. The duration is reset and the radius is increased after every bloom. (Max 10 blocks)",
            "archetype": "Acrobat",
            "archetype_req": 12,
            "parents": [
                "Blade Fury"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 39,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Jasmine Bloom",
                    "base_spell": 7,
                    "display": "DPS",
                    "parts": [
                        {
                            "name": "Per Hit",
                            "multipliers": [ 60, 5, 0, 15, 0, 0 ]
                        },
                        {
                            "name": "DPS",
                            "hits": { "Per Hit": 3.333333333 }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Better Weightless",
            "desc": "Weightless will grant +0.25 more mana.",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Weightless",
            "parents": [
                "Jasmine Bloom"
            ],
            "dependencies": [
                "Weightless"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 40,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Devour",
            "desc": "Harvester will give +5 Mana",
            "archetype": "",
            "archetype_req": 0,
            "parents": [
                "Satsujin"
            ],
            "dependencies": [
                "Harvester"
            ],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 41,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Better Marked",
            "desc": "Increase Marked's damage bonus by +4%",
            "archetype": "",
            "archetype_req": 0,
            "base_abil": "Marked",
            "parents": [
                "Satsujin"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 41,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Marked",
                    "output": [
                        {
                            "type": "stat",
                            "name": "damMult.Marked"
                        }
                    ],
                    "scaling": [
                        4
                    ]
                }
            ]
        },
        {
            "display_name": "Bamboozle",
            "desc": "When Clones are active, casting Multihit while holding shift will instead slay 1 Clone and teleport you forwards with a brutal fiery slash.",
            "archetype": "Trickster",
            "archetype_req": 0,
            "base_abil": "Multihit",
            "parents": [
                "Cheaper Multihit",
                "Shadow Travel"
            ],
            "dependencies": [ "Mirror Image" ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Bamboozle",
                    "base_spell": 8,
                    "display": "Slash Damage",
                    "parts": [
                        {
                            "name": "Slash Damage",
                            "multipliers": [ 360, 0, 0, 0, 40, 0 ]
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Distraction",
            "desc": "When hitting enemies, reduce their damage by -0.1% per hit. (Max -15%) The damage debuff decays at -0.3% per second.",
            "archetype": "Trickster",
            "archetype_req": 0,
            "parents": [
                "Cheaper Multihit",
                "Dagger Proficiency II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Distraction Hits",
                    "output": {
                        "type": "stat",
                        "name": "defMult.Distraction"
                    },
                    "scaling": [0.1],
                    "slider_step": 1,
                    "slider_max": 150
                }
            ]
        },
        {
            "display_name": "Nightcloak Knife",
            "desc": "If cast while in Vanish, Spin Attack will consume all Marks from nearby enemies to summon the Nightcloak Knife.\n The Knife will copy your attacks on enemies near you, dealing 8% of your damage for every 2 Mark consumed. (Max 10 Marks)",
            "archetype": "Shadestepper",
            "archetype_req": 0,
            "parents": [
                "Cheaper Multihit II",
                "Ambush"
            ],
            "dependencies": ["Marked"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {
                "duration": 40,
                "range": 6
            },
            "properties": {
                "duration": 40
            },
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Marks Absorbed",
                    "slider_max": 10,
                    "output": [
                        { "type": "stat", "name": "damMult.Nightcloak" }
                    ],
                    "scaling": [8]
                }
            ]
        },
        {
            "display_name": "Pirouette",
            "desc": "When hitting an enemy with Dancing Blade, you will deal extra damage and vault upwards, resetting Dash as if you touched the ground.",
            "base_abil": "Dash",
            "parents": [
                "Stronger Lacerate",
                "Choke Bomb",
                "Hoodwink"
            ],
            "dependencies": ["Dancing Blade"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 2,
                "target_part": "Dancing Blade",
                "multipliers": [30, 0, 0, 0, 0, 10],
                "display": "Dancing Blade"
            }]
        },
        {
            "display_name": "Dissolution",
            "desc": "When entering and exiting Vanish, become immune to knockback and gain resistance for a brief moment.",
            "archetype": "Shadestepper",
            "archetype_req": 2,
            "base_abil": "Vanish",
            "parents": [
                "Cheaper Multihit II",
                "Hoodwink",
  	            "Fatal Spin"
            ],
            "dependencies": ["Vanish"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 34,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {
                "duration": 0.5
            },
            "effects": [{
                "type": "raw_stat",
                "toggle": "Activate Dissolution",
                "bonuses": [{
                    "type": "stat",
                    "name": "defMult.Dissolution",
                    "value": 75
                }]
            }]
        },
        {
            "display_name": "Flow State",
            "desc": "Landing 60 hits without stopping for over 2s will greatly increase your damage for a short time. (10s Cooldown)",
            "archetype": "Acrobat",
            "archetype_req": 5,
            "parents": [
                "Weightless"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 26,
                "col": 8,
                "icon": "node_3"
            },
            "effects": [{
                "type": "raw_stat",
                "toggle": "Flow State",
                "bonuses": [{
                    "type": "stat",
                    "name": "damMult.FlowState",
                    "value": 35
                }]
            }]
        },
        {
            "display_name": "Even Stronger Clones",
            "desc": "Reduce your maximum damage penalty by -5% while your Clones are active.",
            "archetype": "Trickster",
            "archetype_req": 0,
            "base_abil": "Mirror Image",
            "parents": [
                "Diversion"
            ],
            "dependencies": ["Echo"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 41,
                "col": 4,
                "icon": "node_0"
            },
            "effects": [{
                "type": "raw_stat",
                "toggle": "Activate Clones",
                "bonuses": [{
                    "type": "stat",
                    "name": "damMult.Echo",
                    "value": 10
                }]
            }]
        }
    ],
    "Shaman": [
        {
            "display_name": "Totem",
            "desc": "Summon a totem that damages enemies around it every 0.4s.",
            "parents": [],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 0,
                "col": 4,
                "icon": "node_shaman"
            },
            "properties": {
                "duration": 30,
                "rate": 0.4,
                "aoe": 8,
                "totem_mul": 2.5,
                "num_totems": 1
            },
            "effects": [{
                "type": "replace_spell",
                "name": "Totem",
                "cost": 30,
                "base_spell": 1,
                "display": "Tick DPS",
                "parts": [
                    {
                        "name": "Tick Damage",
                        "multipliers": [6, 0, 0, 0, 0, 6]
                    },
                    {
                        "name": "Tick DPS (Per Totem)",
                        "hits": { "Tick Damage": "Totem.totem_mul" }
                    },
                    {
                        "name": "Heal Rate (Per Totem)",
                        "hits": { "Heal Tick": "Totem.totem_mul" }
                    },
                    {
                        "name": "Tick DPS",
                        "hits": { "Tick DPS (Per Totem)": "Totem.num_totems" }
                    },
                    {
                        "name": "Heal Rate",
                        "hits": { "Heal Rate (Per Totem)": "Totem.num_totems" }
                    }
                ]
            }]
        },
        {
            "display_name": "Relik Proficiency 1",
            "desc": "Double your Main Attack's beam speed and increase your damage when using a reik.",
            "base_abil": 999,
            "parents": ["Totem"],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "replace_spell",
                "name": "Relik Melee",
                "base_spell": 0,
                "scaling": "melee",
                "use_atkspd": false,
                "display": "Total",
                "parts": [
                    { "name": "Single Beam", "multipliers": [35, 0, 0, 0, 0, 0] },
                    { "name": "Total", "hits": { "Single Beam": 3 } }
                ]
            }]
        },
        {
            "display_name": "Cheaper Totem I",
            "desc": "Reduce the Mana cost of Totem.",
            "base_abil": "Totem",
            "parents": ["Relik Proficiency 1"],
            "dependencies": ["Totem"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 2,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 1,
                "cost": -10
            }]
        },
        {
            "display_name": "Totemic Smash",
            "desc": "Your Totem will deal damage where it lands.",
            "base_abil": "Totem",
            "parents": ["Relik Proficiency 1"],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 4,
                "col": 4,
                "icon": "node_1"
            },
            "properties": { "aoe": 3.5 },
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 1,
                "target_part": "Smash Damage",
                "multipliers": [
                    100,
                    0,
                    0,
                    0,
                    30,
                    0
                ]
            }]
        },
        {
            "display_name": "Distant Grasp",
            "desc": "Reduce your Main Attack's spread, and increase its beam speed by +33%.",
            "base_abil": 999,
            "archetype": "Summoner",
            "parents": ["Haul"],
            "dependencies": [],
            "blockers": ["Hand of the Shaman"],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Haul",
            "desc": "Leap towards your Totem.",
            "parents": ["Totemic Smash"],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 4,
                "icon": "node_shaman"
            },
            "properties": {},
            "effects": [{
                "type": "replace_spell",
                "name": "Haul",
                "cost": 15,
                "base_spell": 2,
                "display": "",
                "parts": []
            }]
        },
        {
            "display_name": "Hand of the Shaman",
            "desc": "Your Main Attack will throw +2 beams.",
            "base_abil": 999,
            "archetype": "Acolyte",
            "parents": ["Haul"],
            "dependencies": [],
            "blockers": ["Distant Grasp"],
            "cost": 1,
            "display": {
                "row": 6,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "replace_spell",
                "name": "Relik Melee",
                "base_spell": 0,
                "scaling": "melee",
                "use_atkspd": false,
                "display": "Total",
                "parts": [
                    { "name": "Single Beam", "multipliers": [34, 0, 0, 0, 0, 0] },
                    { "name": "Total", "hits": { "Single Beam": 5 } }
                ]
            }]
        },
        {
            "display_name": "Uproot",
            "desc": "Throw a rapid projectile that will explode and knock enemies away. (Hold shift to pull instead)",
            "parents": [
                "Distant Grasp",
                "Cheaper Haul I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 2,
                "icon": "node_shaman"
            },
            "properties": {
                "range": 18,
                "aoe": 5
            },
            "effects": [{
                "type": "replace_spell",
                "name": "Uproot",
                "cost": 30,
                "base_spell": 4,
                "display": "Total Damage",
                "parts": [
                     {
                         "name": "Single Hit",
                         "multipliers": [
                             80,
                             30,
                             20,
                             0,
                             0,
                             0
                         ]
                     },
                     {
                         "name": "Total Damage",
                         "hits": {
                             "Single Hit": 1
                         }
                     }
                ]
            }]
        },
        {
            "display_name": "Cheaper Haul I",
            "desc": "Reduce the Mana cost of Haul.",
            "base_abil": "Haul",
            "parents": [
                "Uproot",
                "Aura"
            ],
            "dependencies": ["Haul"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 2,
                "cost": -5
            }]
        },
        {
            "display_name": "Aura",
            "desc": "Emit an aura from your Totem that damages enemies.",
            "parents": [
                "Hand of the Shaman",
                "Cheaper Haul I"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 8,
                "col": 6,
                "icon": "node_shaman"
            },
            "properties": {
                "range": 16,
                "num_totems": 1
            },
            "effects": [{
                "type": "replace_spell",
                "name": "Aura",
                "cost": 40,
                "base_spell": 3,
                "display": "First Wave",
                "parts": [
                    {
                        "name": "Single Wave",
                        "multipliers": [150, 0, 0, 30, 0, 0]
                    },
                    {
                        "name": "First Wave",
                        "hits": { "Single Wave": "Aura.num_totems" }
                    },
                    {
                        "name": "First Wave Heal",
                        "hits": { "Heal Amount": "Aura.num_totems" }
                    }
                ]
            }]
        },
        {
            "display_name": "Earth Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Earth attacks.",
            "archetype": "Summoner",
            "parents": [
                "Uproot"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 0,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "eDamPct",
                            "value": 20
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "eDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Air Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Air attacks.",
            "archetype": "Summoner",
            "parents": [
                "Earth Mastery",
                "Uproot",
                "Cheaper Haul I",
                "Thunder Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "aDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "aDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Water Mastery",
            "base_abil": 998,
            "desc": "Increases your base damage from all Water attacks.",
            "archetype": "Ritualist",
            "parents": [
                "Cheaper Haul I",
                "Air Mastery",
                "Thunder Mastery"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 11,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "wDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMin",
                            "value": 2
                        },
                        {
                            "type": "stat",
                            "name": "wDamAddMax",
                            "value": 4
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Thunder Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Thunder attacks.",
            "archetype": "Acolyte",
            "parents": [
                "Air Mastery",
                "Cheaper Haul I",
                "Aura"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 6,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "tDamPct",
                            "value": 10
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMin",
                            "value": 1
                        },
                        {
                            "type": "stat",
                            "name": "tDamAddMax",
                            "value": 8
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Fire Mastery",
            "base_abil": 998,
            "desc": "Increases base damage from all Fire attacks.",
            "archetype": "Acolyte",
            "parents": ["Aura"],
            "dependencies": [],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 10,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "fDamPct",
                            "value": 15
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMin",
                            "value": 3
                        },
                        {
                            "type": "stat",
                            "name": "fDamAddMax",
                            "value": 5
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Nature's Jolt",
            "desc": "When hitting the ground after using Haul, deal damage around you.",
            "base_abil": "Haul",
            "parents": [
                "Air Mastery",
                "Earth Mastery"
            ],
            "dependencies": ["Haul"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 11,
                "col": 1,
                "icon": "node_1"
            },
            "properties": { "aoe": 3.5 },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Nature's Jolt",
                    "base_spell": 2,
                    "multipliers": [110, 40, 0, 0, 0, 0]
                },
                {
                    "type": "add_spell_prop",
                    "target_part": "Total Damage",
                    "base_spell": 2,
                    "display": "Total Damage",
                    "hits": {
                        "Nature's Jolt": 1
                    }
                }
            ]
        },
        {
            "display_name": "Overseer",
            "desc": "Increase Uproot's range, and if you hit your Totem with it, reset its duration.",
            "base_abil": "Uproot",
            "archetype": "Summoner",
            "parents": ["Nature's Jolt"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 13,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Uproot",
                            "name": "range",
                            "value": 6
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Rain Dance",
            "desc": "While mid-air, your Totem will leave a streak of rain that damages enemies under it every 0.4s.",
            "archetype": "Ritualist",
            "base_abil": "Totem",
            "parents": ["Water Mastery"],
            "dependencies": [
                "Totem"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 13,
                "col": 4,
                "icon": "node_1"
            },
            "properties": { 
                "aoe": 2,
                "duration": 6,
                "rate": 0.4
            },
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 1,
                "target_part": "Rain Dance",
                "multipliers": [ 30, 0, 0, 30, 0, 0 ]
            }]
        },
        {
            "display_name": "Shocking Aura",
            "desc": "Aura will travel at a much greater speed and deal additional damage.",
            "base_abil": "Aura",
            "archetype": "Acolyte",
            "parents": [
                "Thunder Mastery",
                "Flaming Tongue"
            ],
            "dependencies": [
                "Aura"
            ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 12,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Single Wave",
                    "multipliers": [
                        0,
                        0,
                        20,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        {
            "display_name": "Flaming Tongue",
            "desc": "Uproot will not explode or knockback enemies, but will deal damage 3 times.",
            "base_abil": "Uproot",
            "archetype": "Acolyte",
            "parents": [
                "Fire Mastery",
                "Shocking Aura"
            ],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 12,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Single Hit",
                    "multipliers": [
                        -15,
                        -30,
                        -15,
                        0,
                        10,
                        0
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 4,
                    "target_part": "Total Damage",
                    "hits": {
                        "Single Hit": 2
                    }
                }
            ]
        },
        {
            "display_name": "Puppet Master",
            "desc": "Your Totem will summon 1 Puppet every 3s (Max 3). They throw knives at nearby enemies every 0.5s.",
            "archetype": "Summoner",
            "archetype_req": 3,
            "parents": ["Overseer"],
            "dependencies": ["Totem"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "duration": 30,
                "range": 16,
                "max_puppets": 3,
                "num_puppets": 0,
                "attack_frequency": 2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Puppet Damage",
                    "base_spell": 6,
                    "display": "Total Puppet DPS",
                    "parts": [
                        {
                            "name": "Puppet Hit",
                            "multipliers": [ 16, 2, 0, 0, 0, 2 ]
                        },
                        {
                            "name": "Puppet DPS",
                            "hits": { "Puppet Hit": "Puppet Master.attack_frequency" }
                        },
                        {
                            "name": "Total Puppet DPS",
                            "hits": { "Puppet DPS": "Puppet Master.num_puppets" }
                        }
                    ]
                },
                {
                    "type": "stat_scaling",
                    "slider": true,
                    "slider_name": "Active Puppets",
                    "slider_step": 1,
                    "slider_max": 3,
                    "slider_default": 3,
                    "output": [
                        {
                            "type": "prop",
                            "abil": "Puppet Master",
                            "name": "num_puppets"
                        }
                    ],
                    "scaling": [1]
                }
            ]
        },
        {
            "display_name": "Mask of the Lunatic",
            "desc": "When casting Uproot, instead wear the Mask of the Lunatic. While wearing this mask, the mana cost of Aura is decreased and you gain damage bonus at the cost of reduced resistance.",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "archetype_req": 2,
            "parents": ["Rain Dance"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Switch Masks",
                    "base_spell": 4,
                    "parts": [],
                    "display": ""
                },
                {
                    "type": "raw_stat",
                    "toggle": "Mask of the Lunatic",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Mask",
                            "value": 35
                        },
                        {
                            "type": "stat",
                            "name": "defMult.Mask",
                            "value": -20
                        },
                        {
                            "type": "stat",
                            "name": "spPct3Final",
                            "value": -30
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Sacrificial Shrine",
            "desc": "Your Totem will siphon 2% of your health every 0.4s and transfer it into a Blood Pool. Aura will use 15% of your Blood Pool to deal +35% damage and heal all allies.",
            "archetype": "Acolyte",
            "archetype_req": 3,
            "parents": [
                "Shocking Aura",
                "Flaming Tongue"
            ],
            "dependencies": ["Totem"],
            "blockers": [ "Regeneration" ],
            "cost": 2,
            "display": {
                "row": 15,
                "col": 7,
                "icon": "node_3"
            },
            "properties": { "blood_pool": 30 },
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Activate Boosted Aura",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.BloodPool:3.Single Wave",
                            "value": 35
                        }
                    ]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Heal Amount",
                    "power": 0.25
                }
            ]
        },
        {
            "display_name": "Stagnation",
            "desc": "Enemies hit by Nature's Jolt will be slowed down by 40%.",
            "base_abil": "Haul",
            "parents": ["Puppet Master", "Cheaper Aura I"],
            "dependencies": ["Nature's Jolt"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 17,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Cheaper Aura I",
            "desc": "Reduce the Mana cost of Aura.",
            "base_abil": "Aura",
            "parents": ["Stagnation", "Cheaper Uproot I"],
            "dependencies": ["Aura"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 17,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 3,
                "cost": -5
            }]
        },
        {
            "display_name": "Cheaper Uproot I",
            "desc": "Reduce the Mana cost of Uproot.",
            "base_abil": "Uproot",
            "parents": ["Cheaper Aura I", "Mask of the Lunatic", "Rebound"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 17,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 4,
                "cost": -5
            }]
        },
        {
            "display_name": "Rebound",
            "desc": "Once Aura reaches its maximum range, it will bounce back and deal its effects a second time.",
            "base_abil": "Aura",
            "parents": ["Sacrificial Shrine", "Cheaper Uproot I"],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 17,
                "col": 7,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Rebound Total Damage",
                    "hits": { "First Wave": 2 }
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Rebound Total Heal",
                    "hits": { "First Wave Heal": 2 }
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 3,
                    "target_part": "Heal Amount",
                    "power": -0.1
                }
            ]
        },
        {
            "display_name": "More Puppets I",
            "desc": "Increase your Max Puppets by +1.",
            "base_abil": "Puppet Master",
            "archetype": "Summoner",
            "parents": ["Stagnation", "Cheaper Aura I"],
            "dependencies": ["Puppet Master"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 18,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {
                "max_puppets": 1
            },
            "effects": [{
                "type": "stat_scaling",
                "slider": true,
                "slider_name": "Active Puppets",
                "slider_max": 1,
                "slider_default": 1,
                "output": [
                    {
                        "type": "prop",
                        "abil": "Puppet Master",
                        "name": "num_puppets"
                    }
                ],
                "scaling": [0]
            }]
        },
        {
            "display_name": "Haunting Memory",
            "desc": "When you switch Masks, throw your previous one forwards. If it hits an enemy, it will attach for a short time and debuff them. You will not receive the effects of your Mask until it returns.",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "parents": ["Cheaper Aura I", "Cheaper Uproot I"],
            "dependencies": ["Mask of the Lunatic"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 18,
                "col": 3,
                "icon": "node_2"
            },
            "properties": {
                "range": 14
            },
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 4,
                "display": "Mask Throw",
                "target_part": "Mask Throw",
                "multipliers": [240, 0, 0, 0, 0, 0]
            }]
        },
        {
            "display_name": "Better Totem",
            "desc": "Increase your Totem's area of effect.",
            "base_abil": "Totem",
            "parents": [
                "Cheaper Uproot I",
                "Rebound"
            ],
            "dependencies": ["Totem"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 18,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "raw_stat",
                "bonuses": [
                    {
                        "type": "prop",
                        "abil": "Totem",
                        "name": "aoe",
                        "value": 4
                    }
                ]
            }]
        },
        {
            "display_name": "Blood Connection",
            "desc": "If you are outside your Totem's range, Haul will teleport you to it.",
            "base_abil": "Haul",
            "archetype": "Acolyte",
            "parents": ["Rebound"],
            "dependencies": ["Haul"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 18,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Exploding Puppets",
            "desc": "When your Puppets have 3s duration left, they will run towards enemies at high speed to explode and deal damage.",
            "base_abil": "Puppet Master",
            "archetype": "Summoner",
            "parents": ["More Puppets I"],
            "dependencies": ["Puppet Master"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 20,
                "col": 1,
                "icon": "node_1"
            },
            "properties": {
                "aoe": 3
            },
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 6,
                "target_part": "Puppet Explosion",
                "multipliers": [150, 0, 0, 0, 50, 0]
            }]
        },
        {
            "display_name": "Hymn of Hate",
            "desc": "When wearing the Mask of the Lunatic, killing an enemy with Aura will cast a new Aura at its location, dealing -50% of its damage.",
            "base_abil": "Aura",
            "archetype": "Ritualist",
            "parents": ["Cheaper Uproot I", "Larger Blood Pool I"],
            "dependencies": ["Mask of the Lunatic"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 20,
                "col": 4,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 3,
                "target_part": "Hymn of Hate",
                "hits": { "Single Wave": 0.5 }
            }]
        },
        {
            "display_name": "Larger Blood Pool I",
            "desc": "Increase your maximum Blood pool by +30%.",
            "archetype": "Acolyte",
            "base_abil": "Sacrificial Shrine",
            "parents": ["Rebound", "Hymn of Hate"],
            "dependencies": ["Sacrificial Shrine"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 20,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {"blood_pool": 30},
            "effects": []
        },
        {
            "display_name": "Bullwhip",
            "desc": "Hitting enemies with Uproot will make your Summons focus them and deal additional damage.",
            "archetype": "Summoner",
            "parents": ["Exploding Puppets"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 21,
                "col": 0,
                "icon": "node_2"
            },
            "properties": {
                "duration": 10
            },
            "effects": [{
                "type": "raw_stat",
                "toggle": "Activate Bullwhip",
                "bonuses": [
                    {
                        "type": "stat",
                        "name": "damMult.Bullwhip:6.Puppet Hit",
                        "value": 20
                    },
                    {
                        "type": "stat",
                        "name": "damMult.Bullwhip:7.Effigy Hit",
                        "value": 20
                    }
                ]
            }]
        },
        {
            "display_name": "More Puppets II",
            "desc": "Increase your Max Puppets by +2.",
            "base_abil": "Puppet Master",
            "archetype": "Summoner",
            "parents": ["Exploding Puppets"],
            "dependencies": ["More Puppets I"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 21,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {
                "max_puppets": 2
            },
            "effects": [{
                "type": "stat_scaling",
                "slider": true,
                "slider_name": "Active Puppets",
                "slider_max": 2,
                "slider_default": 2,
                "output": [
                    {
                        "type": "prop",
                        "abil": "Puppet Master",
                        "name": "num_puppets"
                    }
                ],
                "scaling": [0]
            }]
        },
        {
            "display_name": "Mask of the Fanatic",
            "desc": "When casting Uproot, instead wear the Mask of the Fanatic. While wearing this mask, the mana cost of Totem is decreased and you gain resistance at the cost of reduced walk speed.",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "archetype_req": 3,
            "parents": [
                "Hymn of Hate",
                "Larger Blood Pool I",
                "Vengeful Spirit"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 21,
                "col": 5,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Switch Masks",
                    "base_spell": 4,
                    "parts": [],
                    "display": ""
                },
                {
                    "type": "raw_stat",
                    "toggle": "Mask of the Fanatic",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "spd",
                            "value": -35
                        },
                        {
                            "type": "stat",
                            "name": "defMult.Mask",
                            "value": 35
                        },
                        {
                            "type": "stat",
                            "name": "spPct1Final",
                            "value": -65
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Vengeful Spirit",
            "desc": "Your Totem will give damage bonus to yourself and allies standing inside its range.",
            "base_abil": "Totem",
            "archetype": "Acolyte",
            "parents": ["Larger Blood Pool I", "Mask of the Fanatic"],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 21,
                "col": 8,
                "icon": "node_1"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Masquerade",
            "desc": "After switching from a Mask to another 2 times, gain 30 mana.",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "parents": ["Mask of the Fanatic"],
            "dependencies": ["Mask of the Lunatic"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 22,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {
                "switch_count": 2,
                "mana_gain": 30
            },
            "effects": []
        },
        {
            "display_name": "Double Totem",
            "desc": "Increase your maximum Totem by +1 and reduce Totem and Aura's damage.",
            "base_abil": "Totem",
            "archetype": "Summoner",
            "archetype_req": 2,
            "parents": ["Bullwhip", "Cheaper Totem II"],
            "dependencies": ["Aura"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 0,
                "icon": "node_1"
            },
            "properties": { "num_totems": 1 },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Aura",
                            "name": "num_totems",
                            "value": 1
                        },
                        {
                            "type": "stat",
                            "name": "damMult.MultiTotem:3.Single Wave",
                            "value": -40
                        },
                        {
                            "type": "stat",
                            "name": "damMult.MultiTotem:1.Tick Damage",
                            "value": -40
                        },
                        {
                            "type": "stat",
                            "name": "healMult.MultiTotem",
                            "value": -40
                        },
                        {
                            "type": "stat",
                            "name": "damMult.MultiTotem:5.Explosion Damage",
                            "value": -40
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Totem II",
            "desc": "Reduce the Mana cost of Totem.",
            "base_abil": "Totem",
            "parents": ["More Puppets II", "Double Totem", "Storm Dance"],
            "dependencies": ["Totem"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 23,
                "col": 2,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 1,
                "cost": -5
            }]
        },
        {
            "display_name": "Storm Dance",
            "desc": "Enemies hit by Aura will be pulled towards your totem.",
            "base_abil": "Aura",
            "archetype": "Ritualist",
            "parents": ["Cheaper Totem II", "Mask of the Fanatic", "Cheaper Haul II"],
            "dependencies": ["Aura"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 23,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                "type": "add_spell_prop",
                "base_spell": 3,
                "target_part": "Single Wave",
                "multipliers": [0, 0, 0, 0, 0, 30]
                }
            ]
        },
        {
            "display_name": "Regeneration",
            "desc": "Every 0.4s your Totem will heal every player within its range.",
            "base_abil": "Totem",
            "parents": [
                "Cheaper Totem II",
                "Storm Dance"
            ],
            "dependencies": [],
            "blockers": ["Sacrificial Shrine"],
            "cost": 2,
            "display": {
                "row": 24,
                "col": 3,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Heal Tick",
                    "power": 0.01,
                    "display": "Heal Rate"
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 5,
                    "target_part": "Explosion Heal",
                    "power": 0.1
                }
            ]
        },
        {
            "display_name": "Cheaper Haul II",
            "desc": "Reduce the Mana cost of Haul.",
            "base_abil": "Haul",
            "parents": [
                "Storm Dance",
                "Vengeful Spirit"
            ],
            "dependencies": ["Haul"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 23,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 2,
                "cost": -5
            }]
        },
        {
            "display_name": "Cheaper Aura II",
            "desc": "Reduce the Mana cost of Aura.",
            "base_abil": "Aura",
            "parents": [
                "Double Totem",
                "Cheaper Totem II",
                "Stronger Totem"
            ],
            "dependencies": ["Aura"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 26,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 3,
                "cost": -5
            }]
        },
        {
            "display_name": "Stronger Totem",
            "desc": "Increase Totem's damage.",
            "base_abil": "Totem",
            "parents": [
                "Cheaper Aura II",
                "Storm Dance",
                "Cheaper Totem II"
            ],
            "dependencies": ["Totem"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 26,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 1,
                    "target_part": "Tick Damage",
                    "multipliers": [4, 0, 0, 0, 0, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 5,
                    "target_part": "Explosion Damage",
                    "multipliers": [4, 0, 0, 0, 0, 0]
                }
            ]
        },
        {
            "display_name": "Twisted Tether",
            "desc": "When hitting an enemy with your Main Attack, use 1% from your Blood Pool and add Tether to them. Tethered enemies will take damage for every 2% Health you lose. (Max 20%)",
            "archetype": "Acolyte",
            "archetype_req": 7,
            "parents": [
                "Storm Dance",
                "Cheaper Haul II"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 26,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Twisted Tether",
                    "base_spell": 8,
                    "display": "Tether Tick",
                    "parts": [
                        {
                            "name": "Tether Tick",
                            "multipliers": [ 35, 0, 0, 0, 0, 15 ]
                        },
                        {
                            "name": "Max Tether Damage",
                            "hits": { "Tether Tick": 10 }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Totemic Shatter",
            "desc": "While wearing the Mask of the Fanatic, your Totem will shatter upon impacting the ground, rapidly triggering 8s worth of its effects. Regeneration will only heal 50% of its usual amount.",
            "parents": ["Cheaper Aura II", "Stronger Totem"],
            "dependencies": ["Mask of the Fanatic"],
            "blockers": [],
            "archetype": "Ritualist",
            "cost": 2,
            "display": {
                "row": 27,
                "col": 3,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Totemic Shatter",
                    "base_spell": 5,
                    "display": "Explosion Damage",
                    "parts": [
                        {
                            "name": "Explosion Damage",
                            "multipliers": [6, 0, 0, 0, 0, 6]
                        }
                    ]
                },
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.TotemShatter:5.Explosion Damage",
                            "value": 1900
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Depersonalization",
            "desc": "Masquerade will need -1 Mask switch to trigger. Reduce the mana given by -10.",
            "archetype": "Ritualist",
            "archetype_req": 6,
            "base_abil": "Uproot",
            "parents": ["Stronger Totem"],
            "dependencies": ["Masquerade"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 27,
                "col": 5,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Uproot",
                            "name": "switch_count",
                            "value": -1
                        },
                        {
                            "type": "prop",
                            "abil": "Uproot",
                            "name": "mana_gain",
                            "value": -10
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Crimson Effigy",
            "desc": "Hitting your Totem with Uproot will summon an Effigy that will attack enemies and push them towards your totem.",
            "archetype": "Summoner",
            "archetype_req": 8,
            "parents": ["Cheaper Aura II", "Mask of the Coward"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "duration": 60,
                "max_effigy": 1,
                "attack_frequency": 2
            },
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Crimson Effigy",
                    "base_spell": 7,
                    "display": "Total Effigy DPS",
                    "parts": [
                        {
                            "name": "Effigy Hit",
                            "multipliers": [ 75, 0, 0, 25, 0, 0 ]
                        },
                        {
                            "name": "Single Effigy DPS",
                            "hits": { "Effigy Hit": "Crimson Effigy.attack_frequency" }
                        },
                        {
                            "name": "Total Effigy DPS",
                            "hits": { "Single Effigy DPS": "Crimson Effigy.max_effigy" }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Mask of the Coward",
            "desc": "When casting Uproot, instead wear the Mask of the Coward. While wearing this mask, the mana cost of Haul is reduced and you gain walk speed at the cost of reduced damage.",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "archetype_req": 7,
            "parents": [
                "Stronger Totem",
                "Crimson Effigy",
                "Fluid Healing"
            ],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 4,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Switch Masks",
                    "base_spell": 4,
                    "parts": [],
                    "display": ""
                },
                {
                    "type": "raw_stat",
                    "toggle": "Mask of the Coward",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "spd",
                            "value": 80
                        },
                        {
                            "type": "stat",
                            "name": "damMult.Mask",
                            "value": -10
                        },
                        {
                            "type": "stat",
                            "name": "spPct2Final",
                            "value": -50
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Fluid Healing",
            "desc": "For every 1% Water Damage you have from items, buff Aura's healing power by +0.3%.",
            "parents": ["Twisted Tether", "Mask of the Coward", "Larger Blood Pool II"],
            "dependencies": [ "Sacrificial Shrine" ],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 28,
                "col": 6,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "stat_scaling",
                    "slider": false,
                    "inputs": [
                        {
                            "type": "stat",
                            "name": "wDamPct"
                        }
                    ],
                    "output": {
                        "type": "stat",
                        "name": "healMult.FluidHealing:3.Heal Amount"
                    },
                    "scaling": [ 0.3 ],
                    "max": 75
                }
            ]
        },
        {
            "display_name": "Larger Blood Pool II",
            "desc": "Increase your maximum Blood pool by +30%.",
            "archetype": "Acolyte",
            "base_abil": "Sacrificial Shrine",
            "parents": ["Twisted Tether", "Fluid Healing"],
            "dependencies": ["Sacrificial Shrine"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 28,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {"blood_pool": 30},
            "effects": []
        },
        {
            "display_name": "Maddening Roots",
            "desc": "Uproot will slow down enemies.",
            "base_abil": "Uproot",
            "archetype": "Summoner",
            "parents": ["Crimson Effigy"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 29,
                "col": 0,
                "icon": "node_1"
            },
            "properties": {
                "effects": 40,
                "duration": 3
            },
            "effects": []
        },
        {
            "display_name": "Chant of the Coward",
            "desc": "When switching to the Mask of the Coward, damage and knockback nearby enemies.",
            "archetype": "Ritualist",
            "archetype_req": 0,
            "parents": ["Fluid Healing", "Mask of the Coward"],
            "dependencies": ["Mask of the Coward"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 29,
                "col": 5,
                "icon": "node_1"
            },
            "properties": { "aoe": 8 },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "target_part": "Chant of the Coward",
                    "base_spell": 4,
                    "multipliers": [200, 0, 0, 0, 0, 0],
                    "display": "Chant of the Coward"
                }
            ]
        },     
        {
            "display_name": "Blood Rite",
            "desc": "When yourself or an ally gets hit while standing in your Totem's range, add 35% of the damage taken into your Blood Pool. (Max 10%)",
            "archetype": "Acolyte",
            "archetype_req": 9,
            "parents": ["Fluid Healing", "Larger Blood Pool II"],
            "dependencies": ["Sacrificial Shrine"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 29,
                "col": 7,
                "icon": "node_2"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "More Effigies",
            "desc": "Increase your Max Effigies by +1.",
            "archetype": "Summoner",
            "archetype_req": 8,
            "base_abil": "Crimson Effigy",
            "parents": ["Maddening Roots"],
            "dependencies": ["Crimson Effigy"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 1,
                "icon": "node_0"
            },
            "properties": {
                "max_effigy": 1
            },
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 7,
                    "name": "Effigy Hit",
                    "multipliers": [ -10, 0, 0, -10, 0, 0 ]
                }
            ]
        },
        {
            "display_name": "Chant of the Fanatic",
            "desc": "When switching to Mask of the Fanatic, temporarily give massive resistance to yourself and allies (8s cooldown).",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "archetype_req": 9,
            "parents": ["Chant of the Coward", "Stronger Tether"],
            "dependencies": [],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 31,
                "col": 5,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Chant of the Fanatic",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "defMult.Chant",
                            "value": 70
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Stronger Tether",
            "desc": "Increase Twisted Tether's damage.",
            "archetype": "Acolyte",
            "parents": ["Blood Rite", "Chant of the Fanatic"],
            "dependencies": ["Twisted Tether"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 31,
                "col": 7,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 8,
                    "target_part": "Tether Tick",
                    "multipliers": [20, 0, 0, 0, 0, 0]
                }
            ]
        },
        {
            "display_name": "Triple Totem",
            "desc": "Increase your maximum Totem by +1 and reduce Totem and Aura's damage.",
            "base_abil": "Totem",
            "archetype": "Summoner",
            "archetype_req": 2,
            "parents": ["More Effigies", "Invigorating Wave"],
            "dependencies": ["Double Totem"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 32,
                "col": 0,
                "icon": "node_1"
            },
            "properties": { "num_totems": 1 },
            "effects": [
                {
                    "type": "raw_stat",
                    "bonuses": [
                        {
                            "type": "prop",
                            "abil": "Aura",
                            "name": "num_totems",
                            "value": 1
                        },
                        {
                            "type": "stat",
                            "name": "damMult.MultiTotem:3.Single Wave",
                            "value": -10
                        },
                        {
                            "type": "stat",
                            "name": "damMult.MultiTotem:1.Tick Damage",
                            "value": -10
                        },
                        {
                            "type": "stat",
                            "name": "healMult.MultiTotem",
                            "value": -10
                        },
                        {
                            "type": "stat",
                            "name": "damMult.MultiTotem:5.Explosion Damage",
                            "value": -10
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Invigorating Wave",
            "desc": "Aura will temporarily increase your Summon's attack speed by +30%. Players hit will gain +5 mana.",
            "archetype": "Summoner", 
            "archetype_req": 3, 
            "parents": ["More Effigies", "Triple Totem", "Seeking Totem"], 
            "dependencies": ["Aura"], 
            "blockers": [],
            "cost": 2, 
            "display": {
                "row": 32,
                "col": 2,
                "icon": "node_2"
            },
            "properties": {
                "TODO": "Make this not multiply base damage...",
                "duration": 2.5
            },
            "effects": [
                {
                    "type": "raw_stat",
                    "toggle": "Invigorate Puppets",
                    "bonuses": [
                        { "type": "prop", "abil": "Puppet Master", "name": "attack_frequency", "value": 0.6 },
                        { "type": "prop", "abil": "Crimson Effigy", "name": "attack_frequency", "value": 0.6 }
                    ]
                }
            ]
        },
        {
            "display_name": "Seeking Totem",
            "desc": "When wearing the Mask of the Coward, your Totem will move towards you, unless you are within its range.",
            "base_abil": "Totem",
            "archetype": "Ritualist",
            "parents": [
                "Chant of the Fanatic",
                "Invigorating Wave"
            ],
            "dependencies": ["Mask of the Fanatic"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 32,
                "col": 4,
                "icon": "node_0"
            },
            "properties": {},
            "effects": []
        },
        {
            "display_name": "Frog Dance",
            "desc": "When wearing the Mask of the Coward, Haul will make you bounce off the ground 3 times at increasing speed and deal damage to nearby enemies.",
            "archetype": "Ritualist",
            "base_abil": "Haul",
            "parents": ["Chant of the Fanatic"],
            "dependencies": ["Mask of the Coward"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 33,
                "col": 5,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Hop Damage",
                    "multipliers": [150, 0, 0, 50, 0, 0]
                },
                {
                    "type": "add_spell_prop",
                    "base_spell": 2,
                    "target_part": "Total Damage",
                    "hits": { "Hop Damage": 3 },
                    "display": "Total Damage"
                },
                {
                    "type": "raw_stat",
                    "bonuses": [{
                        "type": "stat",
                        "name": "damMult.Frog:2.Hop Damage",
                        "value": -100
                    }]
                },
                {
                    "type": "raw_stat",
                    "toggle": "Mask of the Coward",
                    "bonuses": [{
                        "type": "stat",
                        "name": "damMult.Frog:2.Hop Damage",
                        "value": 100
                    }]
                }
            ]
        },
        {
            "display_name": "Chant of the Lunatic",
            "desc": "When switching to Mask of the Lunatic, reduce the defenses of nearby enemies. (8s Cooldown)",
            "archetype": "Ritualist",
            "base_abil": "Uproot",
            "parents": ["Frog Dance"],
            "dependencies": ["Mask of the Lunatic"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 4,
                "icon": "node_1"
            },
            "properties": {},
            "effects": [{
                "type": "raw_stat",
                "toggle": "Chant of the Lunatic",
                "bonuses": [
                    {
                        "type": "stat",
                        "name": "damMult.LunaticChant",
                        "value": 15
                    }
                ]
            }]
        },
        {
            "display_name": "Larger Blood Pool III",
            "desc": "Increase your maximum Blood pool by +30%.",
            "archetype": "Acolyte",
            "base_abil": "Sacrificial Shrine",
            "parents": ["Stronger Tether"],
            "dependencies": ["Sacrificial Shrine"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 33,
                "col": 8,
                "icon": "node_0"
            },
            "properties": {"blood_pool": 30},
            "effects": []
        },
        {
            "display_name": "Shepherd",
            "desc": "When you or your Summons kill an enemy, gain +1 Max Puppets for 15s. (Max +8)",
            "archetype": "Summoner",
            "archetype_req": 12,
            "base_abil": "Puppet Master",
            "parents": ["Triple Totem", "Invigorating Wave"],
            "dependencies": ["Puppet Master"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 1,
                "icon": "node_3"
            },
            "properties": {
                "max_puppets": 8
            },
            "effects": [{
                "type": "stat_scaling",
                "slider": true,
                "slider_name": "Active Puppets",
                "slider_max": 8,
                "output": [
                    {
                        "type": "prop",
                        "abil": "Puppet Master",
                        "name": "num_puppets"
                    }
                ],
                "scaling": [0]
            }]
        },
        {
            "display_name": "Awakened",
            "desc": "After saving 150 Mana from your Masks' mana reductions, casting Uproot will make you wear the Mask of the Awakened for 25s, giving the power of all Masks at once without any downsides.",
            "base_abil": "Uproot",
            "archetype": "Ritualist",
            "archetype_req": 11,
            "parents": ["Frog Dance", "Cheaper Uproot II"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 35,
                "col": 5,
                "icon": "node_2"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Switch Masks",
                    "base_spell": 4,
                    "parts": [],
                    "display": ""
                },
                {
                    "type": "raw_stat",
                    "toggle": "Awakened",
                    "bonuses": [
                        {
                            "type": "stat",
                            "name": "damMult.Mask",
                            "value": 35
                        },
                        {
                            "type": "stat",
                            "name": "defMult.Mask",
                            "value": 35
                        },
                        {
                            "type": "stat",
                            "name": "spd",
                            "value": 80
                        },
                        {
                            "type": "stat",
                            "name": "spPct1Final",
                            "value": -65
                        },
                        {
                            "type": "stat",
                            "name": "spPct2Final",
                            "value": -50
                        },
                        {
                            "type": "stat",
                            "name": "spPct3Final",
                            "value": -30
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Blood Sorrow",
            "desc": "Uproot or Haunting Memory will use 80% of your Blood Pool to cast a destructive beam that damages enemies every 0.2s. You cannot attack while in that state. Yourself and allies will receive +2% health as extra overflowing health instead. Decay -1.5% of the bonus health every second.",
            "base_abil": "Uproot",
            "archetype": "Acolyte",
            "archetype_req": 12,
            "parents": ["Larger Blood Pool III"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 2,
            "display": {
                "row": 34,
                "col": 7,
                "icon": "node_3"
            },
            "properties": {},
            "effects": [
                {
                    "type": "replace_spell",
                    "name": "Blood Sorrow",
                    "base_spell": 9,
                    "display": "Beam DPS",
                    "parts": [
                        {
                            "name": "Beam Tick Damage",
                            "multipliers": [100, 0, 0, 20, 0, 0]
                        },
                        {
                            "name": "Beam DPS",
                            "hits": {
                                "Beam Tick Damage": 5
                            }
                        },
                        {
                            "name": "Total Damage",
                            "hits": {
                                "Beam DPS": 4
                            }
                        }
                    ]
                }
            ]
        },
        {
            "display_name": "Cheaper Uproot II",
            "desc": "Reduce the Mana cost of Uproot.",
            "base_abil": "Uproot",
            "parents": ["Shepherd", "Awakened"],
            "dependencies": ["Uproot"],
            "blockers": [],
            "cost": 1,
            "display": {
                "row": 35,
                "col": 3,
                "icon": "node_0"
            },
            "properties": {},
            "effects": [{
                "type": "add_spell_prop",
                "base_spell": 4,
                "cost": -5
            }]
        }
    ]
}
