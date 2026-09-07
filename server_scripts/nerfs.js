ServerEvents.recipes(event => {
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

    // Todo: Change Cobblegen Galore
    // event.custom({
    //     type: "cobblegengalore:blockgen",
    //     result: {
    //         id: "minecraft:andesite",
    //         count: 1
    //     },
    //     speed: 2,
    //     left: {
    //         Name: "minecraft:water"
    //     },
    //     right: {
    //         Name: "minecraft:lava"
    //     },
    //     modifier: {
    //         Name: "minecraft:andesite"
    //     }
    // })
})