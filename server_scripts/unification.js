ServerEvents.recipes(event => {
    // Convert BOP Rose Quartz into Create Rose Quartz
    event.shapeless(
        "create:rose_quartz", // arg 1: output
        [
            "9x biomesoplenty:rose_quartz_block"
        ]
    )

    // Remove duplicate steel from Create Nuclear
    event.remove("createnuclear:crafting/crafting/steel_ingot_from_decompacting")
    event.remove("createnuclear:crafting/steel_ingot_from_decompacting")
    event.remove("createnuclear:crafting/crafting/steel_ingot_from_compacting")
    event.remove("createnuclear:mixing/steel")
})