ServerEvents.recipes(event => {
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

    // Seabrass ore recipe
    // Not required anymore
    // event.shaped(
    //     "abyssal_decor:seabrass_ore",
    //     [
    //         "GSG",
    //         "SBS",
    //         "GSG"
    //     ],
    //     {
    //         B: "create:brass_block",
    //         S: "minecraft:stone",
    //         G: "minecraft:seagrass"
    //     }
    // )

    // Music disc production
    event.recipes.create.sequenced_assembly(
        // Outputs:
        [
            CreateItem.of("etched:blank_music_disc")
        ],
        // Input:
        "createdeco:industrial_iron_ingot",
        // Sequence:
        [
            event.recipes.create.deploying("createdeco:industrial_iron_ingot", ["createdeco:industrial_iron_ingot", "minecraft:amethyst_shard",]),
            event.recipes.create.deploying("createdeco:industrial_iron_ingot", ["createdeco:industrial_iron_ingot", "minecraft:emerald",]),
            event.recipes.create.cutting("createdeco:industrial_iron_ingot", "createdeco:industrial_iron_ingot"),
        ]
    )
        .transitionalItem("createdeco:industrial_iron_ingot")
        .loops(3) // Set the number of loops
})