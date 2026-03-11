import { GameConfig } from "../../gameConfig";
import type { DeepPartial } from "../../utils/util";
import { v2 } from "../../utils/v2";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";

export const WinterDuel: MapDef = {
    mapId: MapId.Main,
    desc: {
        name: "Winter Duel",
        icon: "",
        buttonCss: "",
        backgroundImg: "img/main_splash.png",
    },
    assets: {
        audio: [
            { name: "ambient_steam_01", channel: "ambient" },
            { name: "log_11", channel: "sfx" },
            { name: "log_12", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "main"],
    },
    biome: {
        colors: {
            background: 0x0a1a2e,   // deep navy night sky
            water: 0x1a3a5c,        // dark icy water
            waterRipple: 0xa8d8f0,  // pale frost ripple
            beach: 0xd6e8f0,        // snow-dusted shore
            riverbank: 0x8aa8c0,    // frozen riverbank
            grass: 0xc8dde8,        // snow-covered ground
            underground: 0x0d0d1a,  // frozen dark underground
            playerSubmerge: 0x1a4a6e,
            playerGhillie: 0xcfe0ea, // winter ghillie blends with snow
        },
        valueAdjust: 0.9,
        sound: { riverShore: "sand" },
        particles: { camera: "" },
        tracerColors: {},
        airdrop: {
            planeImg: "map-plane-01.img",
            planeSound: "plane_01",
            airdropImg: "map-chute-01.img",
        },
    },
    gameMode: {
        maxPlayers: 2,
        killLeaderEnabled: false,
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    gameConfig: {
        planes: {
            timings: [],    // no airdrops — pure 1v1 duel
            crates: [
                { name: "airdrop_crate_01", weight: 0 },
                { name: "airdrop_crate_02", weight: 0 },
            ],
        },
        bagSizes: {},
        bleedDamage: 2,
        bleedDamageMult: 1,
    },
    lootTable: {
        // Most tables emptied — only bare essentials kept for the duel arena
        tier_world: [],
        tier_surviv: [],
        tier_container: [],
        tier_leaf_pile: [],
        tier_soviet: [],
        tier_toilet: [],
        tier_scopes: [
            { name: "2xscope", count: 1, weight: 1 },
        ],
        tier_armor: [
            { name: "helmet01", count: 1, weight: 1 },
            { name: "chest01", count: 1, weight: 1 },
        ],
        tier_packs: [
            { name: "backpack01", count: 1, weight: 1 },
        ],
        tier_medical: [
            { name: "bandage", count: 5, weight: 4 },
            { name: "healthkit", count: 1, weight: 1 },
        ],
        tier_throwables: [
            { name: "frag", count: 1, weight: 1 },
        ],
        tier_ammo: [
            { name: "9mm", count: 60, weight: 1 },
            { name: "762mm", count: 60, weight: 1 },
            { name: "556mm", count: 60, weight: 1 },
            { name: "12gauge", count: 10, weight: 1 },
        ],
        tier_ammo_crate: [],
        tier_vending_soda: [],
        tier_sv98: [],
        tier_scopes_sniper: [],
        tier_mansion_floor: [],
        tier_vault_floor: [],
        tier_police_floor: [],
        tier_fragtastic: [],
        tier_turkey_outfit: [],
        tier_chrys_01: [],
        tier_chrys_02: [],
        tier_chrys_03: [],
        tier_chrys_case: [],
        tier_crow_case_melee: [],
        tier_crow_case_skin: [],
        tier_eye_02: [],
        tier_eye_block: [],
        tier_eye_stone: [],
        tier_barn_melee: [],
        tier_chest_04: [],
        tier_woodaxe: [],
        tier_club_melee: [],
        // Duel-worthy guns only — clean, balanced pool
        tier_guns: [
            { name: "ak47",   count: 1, weight: 3 },
            { name: "m870",   count: 1, weight: 3 },
            { name: "mp5",    count: 1, weight: 3 },
            { name: "ot38",   count: 1, weight: 2 },
            { name: "mosin",  count: 1, weight: 1 },
            { name: "m9",     count: 1, weight: 2 },
        ],
        tier_police: [],
        tier_ring_case: [],
        tier_chest: [],
        tier_conch: [],
        tier_noir_outfit: [],
        tier_khaki_outfit: [],
        tier_pirate_melee: [],
        tier_hatchet: [],
        tier_lmgs: [],
        tier_shotguns: [],
        tier_snipers: [],
        tier_hatchet_melee: [],
        tier_pavilion: [],
        tier_safe: [],
        tier_safe_throwables: [],
        tier_forest_helmet: [],
        tier_outfits: [],
        tier_egg_outfits: [],
        tier_pirate_outfits: [],
        tier_islander_outfit: [],
        tier_imperial_outfit: [],
        tier_pineapple_outfit: [],
        tier_tarkhany_outfit: [],
        tier_spetsnaz_outfit: [],
        tier_lumber_outfit: [],
        tier_verde_outfit: [],
        tier_coconut_outfit: [],
        tier_guns_common_scout: [],
        tier_guns_common_sniper: [],
        tier_guns_common_healer: [],
        tier_guns_common_demo: [],
        tier_guns_common_assault: [],
        tier_guns_common_tank: [],
        tier_guns_rare_scout: [],
        tier_guns_rare_sniper: [],
        tier_guns_rare_demo: [],
        tier_guns_rare_healer: [],
        tier_guns_rare_assault: [],
        tier_guns_rare_tank: [],
        tier_class_crate_mythic: [],
        tier_scavenger_adv: [],
        tier_pirate: [],
        tier_pirate_rare: [],
        tier_airdrop_uncommon: [],
        tier_airdrop_rare: [],
        tier_airdrop_mythic: [],
        tier_airdrop_ammo: [],
        tier_airdrop_outfits: [],
        tier_airdrop_throwables: [],
        tier_airdrop_melee: [],
        tier_airdrop_armor: [],
        tier_airdrop_scopes: [],
        tier_katanas: [],
        tier_stonehammer: [],
        tier_saloon: [],
        tier_cattle_crate: [],
        tier_cloud_02: [],
        tier_pumpkin_candy: [],
        tier_pumpkin_perks: [],
        tier_xp_uncommon: [],
        tier_xp_rare: [],
        tier_xp_mythic: [],
        tier_fruit_xp: [],
        tier_airdrop_xp: [],
        tier_halloween_mystery_perks: [],
        tier_faction_outfits: [],
        tier_airdrop_faction_outfits: [],
        tier_airdrop_faction_melee: [],
        tier_perks: [],
        tier_potato_perks: [],
        tier_knives: [],
    },
    mapGen: {
        map: {
            // Tiny arena — just big enough for a fast 1v1
            baseWidth: 20,
            baseHeight: 20,
            scale: { small: 1.0, large: 1.0 },
            extension: 32,
            shoreInset: 24,
            grassInset: 12,
            rivers: {
                lakes: [],
                weights: [{ weight: 0, widths: [4] }],
                smoothness: 0.45,
                spawnCabins: false,
                masks: [],
            },
        },
        places: [
            {
                name: "Frostfall Arena",
                pos: v2.create(0.5, 0.5),
            },
        ],
        bridgeTypes: {
            medium: "bridge_md_structure_01",
            large: "bridge_lg_structure_01",
            xlarge: "",
        },
        customSpawnRules: {
            locationSpawns: [],
            placeSpawns: [],
        },
        densitySpawns: [
            {
                // Sparse obstacles for cover — frozen rocks and a few barrels
                stone_01: 10,   // frozen boulders scattered across the arena
                barrel_01: 4,   // frozen/rusted barrels for cover
                silo_01: 0,
                crate_01: 2,    // a couple of crates with minimal loot
                crate_02: 0,
                crate_03: 0,
                bush_01: 0,     // no bushes — nowhere to hide on tundra
                cache_06: 0,
                tree_01: 4,     // bare winter trees (visual only)
                tree_13: 0,
                hedgehog_01: 3, // tank traps / ice barricades
                container_01: 0,
                container_02: 0,
                container_03: 0,
                container_04: 0,
                shack_01: 0,
                outhouse_01: 0,
                loot_tier_1: 0,
                loot_tier_beach: 0,
            },
        ],
        fixedSpawns: [
            {
                warehouse_01: 0,
                warehouse_03: 0,
                house_red_01: { small: 0, large: 0 },
                house_red_02: { small: 0, large: 0 },
                barn_01: { small: 0, large: 0 },
                barn_02: 0,
                hut_01: 0,
                hut_02: 0,
                hut_03: 0,
                shack_03a: 0,
                shack_03b: { small: 0, large: 0 },
                greenhouse_01: 0,
                cache_01: 0,
                cache_02: 0,
                cache_07: 0,
                bunker_structure_01: { odds: 0 },
                bunker_structure_02: 0,
                bunker_structure_03: 0,
                bunker_structure_04: 0,
                bunker_structure_05: 0,
                warehouse_complex_01: 0,
                chest_01: 0,
                chest_03: { odds: 0 },
                mil_crate_02: { odds: 0 },
                tree_02: 0,
                teahouse_complex_01su: { small: 0, large: 0 },
                stone_04: 0,
            },
        ],
        randomSpawns: [
            {
                spawns: [],
                choose: 0,
            },
        ],
        spawnReplacements: [{}],
        importantSpawns: [],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};

export type PartialMapDef = DeepPartial<MapDef>;
