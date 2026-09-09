ServerEvents.recipes(event => {
    // Recycling recipes for backpacks
    let base = ["minecraft:chest", "4x minecraft:string", "4x minecraft:leather"]
    let copper = base.concat("8x minecraft:copper_ingot")
    let iron = copper.concat("4x minecraft:iron_ingot")
    let gold = iron.concat("8x minecraft:gold_ingot")
    let diamond = gold.concat("8x minecraft:diamond")
    // Hitting max outputs possible for a Create recipe means I have to do this
    let netherite = ["sophisticatedbackpacks:diamond_backpack", "minecraft:netherite_ingot", "minecraft:netherite_upgrade_smithing_template"]

    event.recipes.create.crushing(base, "sophisticatedbackpacks:backpack")
    event.recipes.create.crushing(copper, "sophisticatedbackpacks:copper_backpack")
    event.recipes.create.crushing(iron, "sophisticatedbackpacks:iron_backpack")
    event.recipes.create.crushing(gold, "sophisticatedbackpacks:gold_backpack")
    event.recipes.create.crushing(diamond, "sophisticatedbackpacks:diamond_backpack")
    event.recipes.create.crushing(netherite, "sophisticatedbackpacks:netherite_backpack")
})