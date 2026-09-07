ServerEvents.recipes(event => {
    // Unpress coins into nuggets
    event.shapeless("minecraft:gold_nugget", "createdeco:gold_coin")
    event.shapeless("createdeco:netherite_nugget", "createdeco:netherite_coin")
    event.shapeless("create:brass_nugget", "createdeco:brass_coin")
    event.shapeless("minecraft:iron_nugget", "createdeco:iron_coin")
    event.shapeless("create:copper_nugget", "createdeco:copper_coin")
    event.shapeless("createdeco:industrial_iron_nugget", "createdeco:industrial_iron_coin")
    event.shapeless("create:zinc_nugget", "createdeco:zinc_coin")

    // Unfill belts
    event.shapeless("dndecor:belt_connector", "create:belt_connector")
})