ServerEvents.recipes(event => {
    if (Platform.isLoaded("createfood")) {
        // Remove Rich Soil recipe using eggshells
        event.remove("createfood:minecraft/crafting/rich_soil_from_crafting")
        event.shaped(
            "farmersdelight:organic_compost",
            [
                "DEE",
                "SSE",
                "EEE"
            ],
            {
                D: "minecraft:dirt",
                E: "createfood:eggshell",
                S: "minecraft:bone_meal"
            }
        )
    }

    // Modify the recipe of the Handheld Saw to be consistent with the Drill
    event.remove("dndesires:crafting/handheld_saw")
    event.shaped(
        "dndesires:handheld_saw",
        [
            "DHI",
            "ACS",
            "   "
        ],
        {
            D: "create:andesite_alloy",
            A: "create:andesite_casing",

            H: "create:hand_crank",
            C: "create:cogwheel",

            I: "create:iron_sheet",
            S: "create:mechanical_saw"
        }
    )

    // Make the Handheld Drill harder
    event.remove("dndesires:crafting/handheld_drill")
    event.recipes.create.mechanical_crafting(
        "dndesires:handheld_drill",
        [
            "DHI",
            "ACS",
        ],
        {
            D: "create:brass_block",
            A: "create:brass_casing",

            H: "create:precision_mechanism",
            C: "create_connected:crank_wheel",

            I: "create:brass_sheet",
            S: "create:mechanical_drill"
        }
    )

    // Severely nerf generator crafting
    let previous = "stone"
    let types = ["copper", "iron", "gold", "emerald", "diamond", "netherite"]

    event.remove("cobblegengalore:crafting/block_gen_stone")
    event.shaped(
        "cobblegengalore:block_gen_stone",
        [
            "SSS",
            "GWG",
            "SSS"
        ],
        {
            S: "minecraft:smooth_stone",
            G: "minecraft:glass",
            W: "infinitewaterblock:infinite_water"
        }
    )

    types.forEach((type) => {
        event.remove(`cobblegengalore:crafting/block_gen_${type}`)
        event.shaped(
            `cobblegengalore:block_gen_${type}`,
            [
                "BBB",
                "GPG",
                "BBB"
            ],
            {
                B: `minecraft:${type}_block`,
                G: "minecraft:glass",
                P: `cobblegengalore:block_gen_${previous}`
            }
        )
        previous = type
    });

    // Absolutely annihilate generators
    let removedBlockTypes = [
        "diorite",
        "basalt",
        "netherrack",
        "end_stone",
        // "obsidian",
        "granite",
        // "cobbled_deepslate",
        "create/ochrum",
        "tuff",
        "create/limestone",
        // "cobblestone",
        "blackstone",
        "calcite",
        "create/veridium",
        "create/scoria",
        "mud",
        // "stone",
        "andesite",
        "create/crimsite",
        "create/asurine"
    ]

    removedBlockTypes.forEach((toRemove) => {
        event.remove(`cobblegengalore:blockgen/${toRemove}`)
    })
})