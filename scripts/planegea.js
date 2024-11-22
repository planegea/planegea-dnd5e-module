Hooks.once("init", () => {
    CONFIG.DND5E.tools.butcher =
        "Compendium.planegea.items.Item.9KM8gNt3FsNh7iI4";
    CONFIG.DND5E.tools.gather =
        "Compendium.planegea.items.Item.8P3VsvqHWJmRnanY";
    CONFIG.DND5E.currencies = {
        ps: {
            label: "Salt",
            abbreviation: "ps",
            conversion: 1,
            icon: "modules/planegea/media/icons/currency/salt.webp",
        },
    };
    CONFIG.DND5E.languages.standard.children.saurian = "Saurian";
});
