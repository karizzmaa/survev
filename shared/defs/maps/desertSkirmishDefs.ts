import { GameConfig } from "../../gameConfig";
import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";

// Desert Skirmish — 4v4, half-size desert map, naked spawns, buffed loot
const mapDef: PartialMapDef = {
    mapId: MapId.Desert,
    desc: {
        name: "Desert Skirmish",
        icon: "img/loot/loot-weapon-flare-gun.svg",
        buttonCss: "btn-mode-desert",
        backgroundImg: "img/main_splash_desert_01.png",
        buttonText: "desert-skirmish",
    },
    assets: {
        audio: [
            { name: "piano_02",       channel: "sfx"     },
            { name: "log_03",         channel: "sfx"     },
            { name: "log_04",         channel: "sfx"     },
            { name: "piano_music_01", channel: "ambient" },
        ],
        atlases: ["gradient", "loadout", "shared", "desert"],
    },
    biome: {
        colors: {
            background:    0x6a7543,
            water:         0x8a9b4e,
            waterRipple:   0xd1e685,
            beach:         0xc9843a,
            riverbank:     0xb25e24,
            grass:         0xdfa757,
            underground:   0x3d0d03,
            playerSubmerge: 0x4e9b8f,
            playerGhillie: 0xdfa761,
        },
        particles: {},
    },
    gameMode: {
        maxPlayers: 8,
        desertMode: true,
        nakedSpawn: true,
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    gameConfig: {
        planes: {
            timings: [
                { circleIdx: 1, wait: 10, options: { type: GameConfig.Plane.Airdrop } },
                { circleIdx: 3, wait: 4,  options: { type: GameConfig.Plane.Airdrop } },
            ],
            crates: [
                { name: "airdrop_crate_01",   weight: 10 },
                { name: "airdrop_crate_02de", weight: 1  },
            ],
        },
    },
    lootTable: {
        // Good guns up, trash guns slightly down
        tier_guns: [
            { name: "mosin",        count: 1, weight: 0.35 }, // ↑ was 0.05
            { name: "spas12",       count: 1, weight: 3.5  }, // ↑ was 1
            { name: "saiga",        count: 1, weight: 1.0  }, // ↑ was 0.1
            { name: "sv98",         count: 1, weight: 0.08 }, // ↑ was 0.01
            { name: "famas",        count: 1, weight: 0.9  },
            { name: "hk416",        count: 1, weight: 3.5  },
            { name: "mk12",         count: 1, weight: 0.2  }, // ↑
            { name: "ak47",         count: 1, weight: 2.5  },
            { name: "scar",         count: 1, weight: 0.05 }, // ↑
            { name: "dp28",         count: 1, weight: 0.5  },
            { name: "bar",          count: 1, weight: 0.12 }, // ↑
            { name: "m39",          count: 1, weight: 0.2  }, // ↑
            { name: "deagle",       count: 1, weight: 0.15 }, // ↑
            { name: "groza",        count: 1, weight: 1.2  }, // ↑
            { name: "scout_elite",  count: 1, weight: 0.3  }, // ↑
            { name: "mkg45",        count: 1, weight: 0.2  }, // ↑
            // Trash/common slightly reduced
            { name: "m1a1",         count: 1, weight: 6    }, // ↓ was 10
            { name: "m870",         count: 1, weight: 5    }, // ↓ was 9
            { name: "m1100",        count: 1, weight: 3.5  }, // ↓ was 6
            { name: "mp220",        count: 1, weight: 1.5  },
            { name: "ot38",         count: 1, weight: 4    }, // ↓ was 8
            { name: "m1911",        count: 1, weight: 10   }, // ↓ was 19
            { name: "flare_gun",    count: 1, weight: 8    }, // ↓ was 14.5
            { name: "flare_gun_dual", count: 1, weight: 0.25 },
            { name: "qbb97",        count: 1, weight: 0.01 },
        ],
        // More health and adrenaline in drops
        tier_medical: [
            { name: "bandage",    count: 5, weight: 14 },
            { name: "healthkit",  count: 1, weight: 6  }, // ↑ was ~4
            { name: "soda",       count: 1, weight: 18 }, // ↑ was ~15
            { name: "painkiller", count: 1, weight: 8  }, // ↑ was ~5
        ],
        // More mirv
        tier_throwables: [
            { name: "frag",   count: 2, weight: 1    },
            { name: "smoke",  count: 1, weight: 1    },
            { name: "strobe", count: 1, weight: 0.2  },
            { name: "mirv",   count: 2, weight: 0.3  }, // ↑ was 0.05
        ],
        // Airdrop uncommon — bump priority guns
        tier_airdrop_uncommon: [
            { name: "mosin",       count: 1, weight: 3.0  }, // ↑
            { name: "saiga",       count: 1, weight: 2.5  }, // ↑
            { name: "sv98",        count: 1, weight: 1.5  }, // ↑
            { name: "mk12",        count: 1, weight: 2.5  },
            { name: "scar",        count: 1, weight: 0.75 },
            { name: "m39",         count: 1, weight: 2.5  },
            { name: "deagle",      count: 1, weight: 1.5  }, // ↑
            { name: "qbb97",       count: 1, weight: 1.5  },
            { name: "scout_elite", count: 1, weight: 2.5  },
            { name: "model94",     count: 1, weight: 2    },
            { name: "colt45",      count: 1, weight: 1    },
            { name: "mkg45",       count: 1, weight: 2.5  },
        ],
        tier_airdrop_rare: [
            { name: "garand",    count: 1, weight: 6    },
            { name: "awc",       count: 1, weight: 3    },
            { name: "pkp",       count: 1, weight: 0.08 },
            { name: "m249",      count: 1, weight: 0.1  },
            { name: "m4a1",      count: 1, weight: 4    },
            { name: "ots38_dual",count: 1, weight: 4.5  },
        ],
        // Chest — boost premium guns
        tier_chest: [
            { name: "mosin",    count: 1, weight: 1.5  }, // ↑
            { name: "spas12",   count: 1, weight: 3.0  }, // ↑
            { name: "saiga",    count: 1, weight: 1.0  }, // ↑
            { name: "sv98",     count: 1, weight: 0.4  }, // ↑
            { name: "famas",    count: 1, weight: 1.15 },
            { name: "hk416",    count: 1, weight: 4    },
            { name: "mk12",     count: 1, weight: 0.8  }, // ↑
            { name: "ak47",     count: 1, weight: 4    },
            { name: "scar",     count: 1, weight: 0.5  }, // ↑
            { name: "dp28",     count: 1, weight: 0.55 },
            { name: "bar",      count: 1, weight: 0.4  }, // ↑
            { name: "m39",      count: 1, weight: 0.8  }, // ↑
            { name: "groza",    count: 1, weight: 1.5  }, // ↑
            { name: "deagle",   count: 1, weight: 0.3  }, // ↑
            { name: "mp220",    count: 1, weight: 1.2  },
            { name: "helmet02", count: 1, weight: 1    },
            { name: "helmet03", count: 1, weight: 0.4  }, // ↑
            { name: "chest02",  count: 1, weight: 1    },
            { name: "chest03",  count: 1, weight: 0.4  }, // ↑
            { name: "4xscope",  count: 1, weight: 0.8  }, // ↑
            { name: "8xscope",  count: 1, weight: 0.4  }, // ↑
        ],
        tier_ammo: [
            { name: "45acp",   count: 60, weight: 3 },
            { name: "762mm",   count: 60, weight: 3 },
            { name: "556mm",   count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
        ],
        tier_ammo_crate: [
            { name: "45acp",   count: 60, weight: 3 },
            { name: "762mm",   count: 60, weight: 3 },
            { name: "556mm",   count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "50AE",    count: 21, weight: 1 },
            { name: "308sub",  count: 5,  weight: 1 },
            { name: "flare",   count: 1,  weight: 1 },
        ],
        tier_airdrop_outfits: [
            { name: "",             count: 1, weight: 20  },
            { name: "outfitMeteor", count: 1, weight: 5   },
            { name: "outfitHeaven", count: 1, weight: 1   },
            { name: "outfitGhillie",count: 1, weight: 0.5 },
        ],
        tier_airdrop_melee: [
            { name: "",             count: 1, weight: 19 },
            { name: "stonehammer", count: 1, weight: 1  },
            { name: "pan",         count: 1, weight: 1.2  },
        ],
        tier_perks: [
            { name: "broken_arrow", count: 1, weight: 1 },
            { name: "fabricate",    count: 1, weight: 1 },
            { name: "flak_jacket",  count: 1, weight: 1 },
            { name: "bonus_45",     count: 1, weight: 1 },
        ],
    },
    mapGen: {
        map: {
            // scale = (targetSize - extension) / baseWidth = (300 - 112) / 50 = 3.76
            // Results in ~300x300 game unit map for both team sizes
            scale: { small: 5, large: 5 },
            shoreInset: 10,
            grassInset: 14,
            rivers: {
                weights: [
                    { weight: 0.1,  widths: [4]          },
                    { weight: 0.15, widths: [8]          },
                    { weight: 0.25, widths: [8, 4]       },
                    { weight: 0.21, widths: [8]          },
                    { weight: 0.09, widths: [8, 8]       },
                    { weight: 0.2,  widths: [8, 8, 4]    },
                    { weight: 1e-4, widths: [8, 8, 8, 6, 4] },
                ],
                masks: [{ pos: v2.create(0.5, 0.5), rad: 80 }],
            },
        },
        places: [
            { name: "Blood Gulch", pos: v2.create(0.5, 0.5), dontSpawnObjects: true },
            { name: "Southhaven", pos: v2.create(0.3, 0.75)  },
            { name: "Atonement",  pos: v2.create(0.75, 0.35) },
        ],
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "river_town_02",
                    pos: v2.create(0.51, 0.5),
                    rad: 50,
                    retryOnFailure: true,
                },
            ],
            placeSpawns: ["desert_town_02", "desert_town_01"],
        },
        // Density scaled for ~300x300 (~64% of full desert's 1.1875 scale area)
        densitySpawns: [
            {
                stone_01:    180,
                barrel_01:   48,
                silo_01:     3,
                crate_01:    32,
                crate_03:    5,
                bush_01:     58,
                tree_06:     140,
                tree_05c:    92,
                tree_09:     26,
                hedgehog_01: 8,
                container_01: 3,
                container_02: 3,
                container_03: 3,
                container_04: 3,
                shack_01:    5,
                outhouse_01: 3,
                loot_tier_1: 16,
                loot_tier_beach: 3,
            },
        ],
        // Scaled fixed spawns — removed 1-2 houses vs full desert
        fixedSpawns: [
            {
                warehouse_01:        3,               // ↓ from 4
                house_red_01:        2,               // ↓ from 3
                house_red_02:        1,
                barn_01:             1,
                barn_02d:            1,
                cache_01:            1,
                cache_02d:           1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_03: 1,
                chest_01:            1,
                chest_03d:           { odds: 1 },
                mil_crate_02:        { odds: 0.25 },
                crate_18:            8,               // ↓ from 12
                tree_02:             2,
                desert_town_01:      1,
                desert_town_02:      1,
                greenhouse_02:       1,
                stone_05:            4,               // ↓ from 6
            },
        ],
        randomSpawns: [],
        spawnReplacements: [
            {
                tree_01:  "tree_06",
                bush_01:  "bush_05",
                crate_02: "crate_18",
                stone_01: "stone_01b",
                stone_03: "stone_03b",
            },
        ],
        importantSpawns: ["desert_town_01", "desert_town_02", "river_town_02"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};

export const DesertSkirmish = util.mergeDeep({}, Main, mapDef) as MapDef;
