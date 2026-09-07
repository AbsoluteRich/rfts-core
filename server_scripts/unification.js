ServerEvents.recipes(event => {
    // Todo: Convert BOP Rose Quartz into Create Rose Quartz

    // Remove duplicate steel from Create Nuclear
    event.remove("createnuclear:crafting/crafting/steel_ingot_from_decompacting")
    event.remove("createnuclear:crafting/steel_ingot_from_decompacting")
    event.remove("createnuclear:crafting/crafting/steel_ingot_from_compacting")
    event.remove("createnuclear:mixing/steel")
})