import PlanegeaJournalSheet from "./apps/journal-sheet.mjs";

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */
Hooks.once("init", () => {
  game.settings.register("planegea", "lastVersion", {
    name: "PLANEGEA.SETTING.VERSION.name",
    hint: "PLANEGEA.SETTING.VERSION.hint",
    scope: "world",
    config: false,
    type: String,
    default: "1.0.0",
  });

  // Register Journal Sheet
  DocumentSheetConfig.registerSheet(
    JournalEntry,
    "planegea",
    PlanegeaJournalSheet,
    {
      types: ["base"],
      label: "PLANEGEA.JOURNAL.Label",
      makeDefault: false,
    },
  );

  CONFIG.DND5E.tools.butcher = {
    ability: "dex",
    id: "Compendium.planegea.items.Item.9KM8gNt3FsNh7iI4",
  };
  CONFIG.DND5E.tools.gather = {
    ability: "wis",
    id: "Compendium.planegea.items.Item.8P3VsvqHWJmRnanY",
  };
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

Hooks.once("ready", async () => {
  // Handle showing changelog
  const currentVersion = game.modules.get("planegea").version;
  const lastVersion = game.settings.get("planegea", "lastVersion");

  if (foundry.utils.isNewerVersion(currentVersion, lastVersion)) {
    const journal = await fromUuid(
      "Compendium.planegea.content.JournalEntry.Changelog",
    );
    const page = journal.pages.contents[journal.pages.contents.length - 1];
    journal.sheet.render(true, { pageId: page.id });
    game.settings.set("planegea", "lastVersion", currentVersion);
  }
});
