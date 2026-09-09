ServerEvents.recipes(event => {
    // This deserves its own file
    // Completely remove energy pipes
    event.remove("mekanism:transmitter/universal_cable/basic")
    event.remove("mekanism:transmitter/universal_cable/advanced")
    event.remove("mekanism:transmitter/universal_cable/elite")
    event.remove("mekanism:transmitter/universal_cable/atomic")

    // Fluid pipe rebalance - making it earlier
    event.remove("mekanism:transmitter/mechanical_pipe/basic")
    event.shaped(
        Item.of("8x mekanism:basic_mechanical_pipe"),
        [
            "   ",
            "GPG",
            "   "
        ],
        {
            G: "minecraft:glass",
            P: "create:mechanical_pump"
        }
    )

    // Item pipe rebalance
    event.remove("mekanism:transmitter/logistical_transporter/basic")
    event.shaped(
        Item.of("8x mekanism:basic_logistical_transporter"),
        [
            "   ",
            "BGB",
            "   "
        ],
        {
            B: "create:brass_ingot",
            G: "mekanism:basic_control_circuit"
        }
    )

    // Funny wrench
    event.remove("mekanism:configurator")
    event.smithing(
        "mekanism:configurator",
        "mekanism:ingot_osmium",
        "create:wrench",
        "mekanism:ingot_steel"
    )
})