import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";

// Cobalt Battle — 2v2, ~362x362 cobalt map, naked spawns, buffed loot, no role crates
const mapDef: PartialMapDef = {
    mapId: MapId.Cobalt,
    desc: {
        name: "Cobalt Battle",
        icon: "img/gui/cobalt.svg",
        buttonCss: "btn-mode-cobalt",
        backgroundImg: "img/main_splash_cobalt.png",
        buttonText: "cobalt-battle",
    },
    assets: {
        audio: [
            { name: "spawn_01",       channel: "ui"      },
            { name: "ping_unlock_01", channel: "ui"      },
            { name: "ambient_lab_01", channel: "ambient" },
            { name: "log_13",         channel: "sfx"     },
            { name: "log_14",         channel: "sfx"     },
        ],
        atlases: ["gradient", "loadout", "shared", "cobalt"],
    },
    biome: {
        colors: {
            background:     0x020e18,
            water:          0x003571,
            beach:          0x684836,
            riverbank:      0x443d3a,
            grass:          0x4d5a68,
            underground:    0x1b0d03,
            playerSubmerge: 0x123049,
            playerGhillie:  0x4b5866,
        },
        particles: {},
    },
    gameMode: {
        maxPlayers: 4,
        nakedSpawn: true,
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    gameConfig: {
        planes: {
            // More frequent airdrops to compensate for no role crates
            timings: [
                { circleIdx: 1, wait: 8,  options: { type: 1 } },
                { circleIdx: 2, wait: 10, options: { type: 1 } },
                { circleIdx: 3, wait: 4,  options: { type: 1 } },
                { circleIdx: 4, wait: 6,  options: { type: 1 } },
            ],
            crates: [
                { name: "airdrop_crate_01", weight: 10 },
                { name: "airdrop_crate_02", weight: 1  },
            ],
        },
    },
    lootTable: {
        // Good guns up, trash guns slightly down
        tier_guns: [
            { name: "mosin",       count: 1, weight: 0.4  }, // ↑ was 0.05
            { name: "spas12",      count: 1, weight: 3.5  }, // ↑ was ~1
            { name: "saiga",       count: 1, weight: 1.2  }, // ↑ was 0.1
            { name: "sv98",        count: 1, weight: 0.15 }, // ↑ was 0.01
            { name: "famas",       count: 1, weight: 0.9  },
            { name: "hk416",       count: 1, weight: 3.5  },
            { name: "mk12",        count: 1, weight: 0.25 }, // ↑
            { name: "ak47",        count: 1, weight: 2.5  },
            { name: "scar",        count: 1, weight: 0.08 }, // ↑
            { name: "dp28",        count: 1, weight: 0.5  },
            { name: "groza",       count: 1, weight: 1.2  }, // ↑
            { name: "m39",         count: 1, weight: 0.25 }, // ↑
            { name: "deagle",      count: 1, weight: 0.15 }, // ↑
            { name: "scout_elite", count: 1, weight: 0.3  }, // ↑
            // Trash/common slightly reduced
            { name: "mp5",   count: 1, weight: 4   },
            { name: "mac10", count: 1, weight: 3   },
            { name: "ump9",  count: 1, weight: 2   },
            { name: "m870",  count: 1, weight: 5   }, // ↓ was 9
            { name: "m1100", count: 1, weight: 3.5 }, // ↓ was 6
            { name: "mp220", count: 1, weight: 1.5 },
            { name: "ot38",  count: 1, weight: 4   }, // ↓ was 8
            { name: "m9",    count: 1, weight: 8   }, // ↓ was ~19
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
            { name: "frag",  count: 2, weight: 1   },
            { name: "smoke", count: 1, weight: 1   },
            { name: "mirv",  count: 2, weight: 0.3 }, // ↑ was 0.05
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
            { name: "scout_elite", count: 1, weight: 2.5  },
            { name: "model94",     count: 1, weight: 2    },
            { name: "colt45",      count: 1, weight: 1    },
        ],
        tier_airdrop_rare: [
            { name: "garand", count: 1, weight: 6    },
            { name: "awc",    count: 1, weight: 3    },
            { name: "pkp",    count: 1, weight: 0.08 },
            { name: "m249",   count: 1, weight: 0.1  },
            { name: "m4a1",   count: 1, weight: 4    },
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
        tier_airdrop_outfits: [
            { name: "outfitGhillie", count: 1, weight: 1 },
        ],
        tier_airdrop_melee: [
            { name: "",            count: 1, weight: 19 },
            { name: "stonehammer", count: 1, weight: 1  },
            { name: "pan",         count: 1, weight: 1  },
        ],
        // Cobalt outfit overrides — no random outfits from structures
        tier_outfits: [
            { name: "chest02",  count: 1, weight: 1 },
            { name: "helmet02", count: 1, weight: 1 },
        ],
        tier_mansion_floor: [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_vault_floor:   [{ name: "tier_outfits", count: 1, weight: 1 }],
        tier_police_floor:  [{ name: "tier_outfits", count: 1, weight: 1 }],
    },
    mapGen: {
        map: {
            // scale = (targetSize - extension) / baseWidth = (362 - 112) / 50 = 5
            // Matches desert skirmish map size (~362x362)
            scale: { small: 5, large: 5 },
            shoreInset: 16,
            grassInset: 10,
            rivers: {
                weights: [
                    { weight: 1, widths: [16, 14, 12, 10, 8, 6, 4] },
                ],
                spawnCabins: false,
                masks: [
                    { pos: v2.create(0.5, 0.5), rad: 100 },
                    { rad: 100, genOnShore: true },
                    { rad: 100, genOnShore: true },
                ],
            },
        },
        customSpawnRules: {
            locationSpawns: [],
            placeSpawns: [],
        },
        // Density scaled for ~362x362 map
        densitySpawns: [
            {
                stone_01cb:    224,
                barrel_01:      48,
                silo_01:         5,
                crate_01:       32,
                crate_02:        3,
                crate_03:        5,
                bush_01cb:      50,
                cache_06:        8,
                tree_01cb:     205,
                hedgehog_01:    15,
                container_01:    3,
                container_02:    3,
                container_03:    3,
                container_04:    3,
                shack_01:        4,
                outhouse_01:     3,
                loot_tier_1:    16,
                loot_tier_beach: 3,
            },
        ],
        // Scaled fixed spawns — removed 1-2 houses, NO class_shell (role crates)
        fixedSpawns: [
            {
                warehouse_01:          2,
                house_red_01:          { small: 2, large: 3 }, // ↓ from 3/4
                house_red_02:          { small: 2, large: 3 }, // ↓ from 3/4
                barn_01:               { small: 1, large: 2 },
                barn_02:               1,
                hut_01:                2,
                hut_02:                1,
                hut_03:                1,
                shack_03a:             1,
                shack_03b:             { small: 1, large: 2 },
                cache_01cb:            1,
                cache_02cb:            1,
                cache_07:              1,
                bunker_structure_02:   1,
                bunker_structure_03:   1,
                bunker_structure_04:   1,
                warehouse_complex_01:  1,
                chest_01cb:            1,
                chest_03cb:            { odds: 0.2 },
                mil_crate_02:          { odds: 0.25 },
                teahouse_complex_01su: { small: 1, large: 1 },
                stone_04:              1,
                // class_shell_01/02/03 intentionally omitted — no perk role crates
            },
        ],
        spawnReplacements: [
            {
                tree_01:  "tree_01cb",
                stone_01: "stone_01cb",
                bush_01:  "bush_01cb",
                bush_04:  "bush_04cb",
                stone_03: "stone_03cb",
            },
        ],
        importantSpawns: ["warehouse_complex_01", "warehouse_01"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};

export const CobaltBattle = util.mergeDeep({}, Main, mapDef) as MapDef;
