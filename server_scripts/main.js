ServerEvents.recipes(event => {
    // Todo: Convert BOP Rose Quartz into Create Rose Quartz

    // Create Chromatic Compound
    event.recipes.create.mixing("create:chromatic_compound", ["create:zinc_ingot", "minecraft:white_dye"]).heated()

    // Create White Pearls
    // There is an intended way of making this
    // event.shaped(
    //     "abyssal_decor:white_pearl",
    //     [
    //         " W ",
    //         "WGW",
    //         " W "
    //     ],
    //     {
    //         G: "minecraft:glass",
    //         W: "minecraft:white_dye"
    //     }
    // )

    // Todo: Recycling recipes for backpacks

    // Nerf the Rich Soil recipe using eggshells
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

    // Unpress coins into nuggets
    event.shapeless("minecraft:gold_nugget", "createdeco:gold_coin")
    event.shapeless("createdeco:netherite_nugget", "createdeco:netherite_coin")
    event.shapeless("create:brass_nugget", "createdeco:brass_coin")
    event.shapeless("minecraft:iron_nugget", "createdeco:iron_coin")
    event.shapeless("create:copper_nugget", "createdeco:copper_coin")
    event.shapeless("createdeco:industrial_iron_nugget", "createdeco:industrial_iron_coin")
    event.shapeless("create:zinc_nugget", "createdeco:zinc_coin")

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

    // Buff the recipe of the Handheld Drill
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

    // Fuckass Slingshot recipe
    event.shaped(
        "supplementaries:slingshot",
        [
            "SLS",
            "TMT",
            " T "
        ],
        {
            S: "minecraft:string",
            L: "minecraft:leather",
            T: "minecraft:stick",
            M: "minecraft:slime_ball"
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

    // Seabrass ore recipe
    event.shaped(
        "abyssal_decor:seabrass_ore",
        [
            "GSG",
            "SBS",
            "GSG"
        ],
        {
            B: "create:brass_block",
            S: "minecraft:stone",
            G: "minecraft:seagrass"
        }
    )

    // New netherite recipe
    // Just a recreation of the Ultimate Factory one
    event.recipes.create.crushing(
        [
            "minecraft:nether_brick",
            CreateItem.of("minecraft:nether_brick", 0.25),
            CreateItem.of("minecraft:netherite_scrap", 0.005)
        ],  // Outputs
        "minecraft:nether_bricks"  // Inputs
    ).processingTime(350)

    // Full belts re-exchange
    event.shapeless("dndecor:belt_connector", "create:belt_connector")
})