import { GameConfig } from "../../gameConfig.ts";
import { util } from "../../utils/util.ts";
import { v2 } from "../../utils/v2.ts";
import type { MapDef } from "../mapDefs.ts";
import { MapId } from "../types/misc.ts";
import { Main, type PartialMapDef } from "./baseDefs.ts";

const mapDef: PartialMapDef = {
    mapId: MapId.Long,
    desc: {
        name: "Long",
        icon: "",
        buttonCss: "btn-mode-long",
        backgroundImg: "img/main_splash.png",
    },
    gameMode: {
        maxPlayers: 150,
        killLeaderEnabled: true,
    },
    gameConfig: {
        planes: {
            timings: [
                {
                    circleIdx: 0,
                    wait: 30,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 1,
                    wait: 20,
                    options: {
                        type: GameConfig.Plane.Airdrop,
                        numPlanes: [
                            { count: 2, weight: 1 },
                            { count: 3, weight: 0.5 },
                        ],
                    },
                },
                {
                    circleIdx: 2,
                    wait: 10,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 3,
                    wait: 5,
                    options: {
                        type: GameConfig.Plane.Airdrop,
                        numPlanes: [
                            { count: 2, weight: 1 },
                        ],
                    },
                },
                {
                    circleIdx: 4,
                    wait: 2,
                    options: { type: GameConfig.Plane.Airdrop },
                },
            ],
            crates: [
                { name: "airdrop_crate_01", weight: 10 },
                { name: "airdrop_crate_02", weight: 3 },
            ],
        },
        bagSizes: {},
        bleedDamage: 2,
        bleedDamageMult: 1,
    },
    mapGen: {
        map: {
            baseWidth: 1020,
            baseHeight: 1020,
            scale: { small: 1.1875, large: 1.28125 },
            extension: 112,
            shoreInset: 48,
            grassInset: 18,
            rivers: {
                lakes: [
                    {
                        odds: 1,
                        innerRad: 40,
                        outerRad: 120,
                        spawnBound: {
                            pos: v2.create(0.2, 0.2),
                            rad: 200,
                        },
                    },
                    {
                        odds: 1,
                        innerRad: 40,
                        outerRad: 120,
                        spawnBound: {
                            pos: v2.create(0.8, 0.8),
                            rad: 200,
                        },
                    },
                    {
                        odds: 0.5,
                        innerRad: 30,
                        outerRad: 80,
                        spawnBound: {
                            pos: v2.create(0.5, 0.5),
                            rad: 150,
                        },
                    },
                ],
                weights: [
                    { weight: 0.1, widths: [4] },
                    { weight: 0.15, widths: [8] },
                    { weight: 0.25, widths: [8, 4] },
                    { weight: 0.21, widths: [16] },
                    { weight: 0.09, widths: [16, 8] },
                    { weight: 0.2, widths: [16, 8, 4] },
                    { weight: 1e-4, widths: [16, 16, 8, 6, 4] },
                ],
                smoothness: 0.45,
                spawnCabins: true,
                masks: [],
            },
        },
        places: [
            { name: "The Killpit",    pos: v2.create(0.53, 0.64) },
            { name: "Sweatbath",      pos: v2.create(0.84, 0.18) },
            { name: "Tarkhany",       pos: v2.create(0.15, 0.11) },
            { name: "Ytyk-Kyuyol",    pos: v2.create(0.25, 0.42) },
            { name: "Todesfelde",     pos: v2.create(0.81, 0.85) },
            { name: "Pineapple",      pos: v2.create(0.21, 0.79) },
            { name: "Fowl Forest",    pos: v2.create(0.73, 0.47) },
            { name: "Ranchito Pollo", pos: v2.create(0.53, 0.25) },
            { name: "The Sprawl",     pos: v2.create(0.1,  0.5)  },
            { name: "Deadwater",      pos: v2.create(0.9,  0.5)  },
            { name: "Iron Reach",     pos: v2.create(0.5,  0.9)  },
            { name: "The Mire",       pos: v2.create(0.5,  0.1)  },
            { name: "Coldbrook",      pos: v2.create(0.35, 0.65) },
            { name: "Ember Ridge",    pos: v2.create(0.65, 0.35) },
        ],
        bridgeTypes: {
            medium: "bridge_md_structure_01",
            large: "bridge_lg_structure_01",
            xlarge: "",
        },
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "club_complex_01",
                    pos: v2.create(0.5, 0.5),
                    rad: 150,
                    retryOnFailure: true,
                },
            ],
            placeSpawns: [
                "warehouse_01",
                "house_red_01",
                "house_red_02",
                "barn_01",
            ],
        },
        densitySpawns: [
            {
                stone_01: 300,
                barrel_01: 70,
                silo_01: 7,
                crate_01: 45,
                crate_02: 5,
                crate_03: 8,
                bush_01: 75,
                cache_06: 12,
                tree_01: 300,
                tree_13: 28,
                hedgehog_01: 22,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 22,
                loot_tier_beach: 3,
            },
        ],
        fixedSpawns: [
            {
                mansion_structure_01: 3,
                dock_01: 2,
                warehouse_01: { small: 4, large: 6 },
                warehouse_03: 3,
                warehouse_complex_01: 2,
                house_red_01: { small: 10, large: 14 },
                house_red_02: { small: 10, large: 14 },
                barn_01: { small: 4, large: 8 },
                barn_02: 3,
                hut_01: 10,
                hut_02: 4,
                hut_03: 4,
                shack_03a: 8,
                shack_03b: { small: 8, large: 12 },
                greenhouse_01: 3,
                cache_01: 3,
                cache_02: 3,
                cache_04: 3,
                cache_07: 3,
                bunker_structure_01: { odds: 0.2 },
                bunker_structure_02: 2,
                bunker_structure_03: 2,
                bunker_structure_04: 2,
                bunker_structure_05: 2,
                chest_01: 4,
                chest_03: { odds: 0.5 },
                mil_crate_02: { odds: 0.5 },
                tree_02: 12,
                stone_04: 4,
                teahouse_complex_01su: { small: 3, large: 5 },
                police_01: 2,
                bank_01: 2,
            },
        ],
        randomSpawns: [
            {
                spawns: ["mansion_structure_01", "police_01", "bank_01"],
                choose: 3,
            },
        ],
        spawnReplacements: [{}],
        importantSpawns: ["club_complex_01"],
    },
};

export const Long = util.mergeDeep({}, Main, mapDef) as MapDef;
