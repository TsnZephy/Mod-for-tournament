IDRegistry.genItemID("rubbleIron");
Item.createItem("rubbleIron", "Iron Rubble", {name: "iron_rubble"});
Translation.addTranslation("Iron Rubble", {ru: "Железный щебень"});

IDRegistry.genItemID("rubbleGold");
Item.createItem("rubbleGold", "Gold Rubble", {name: "gold_rubble"});
Translation.addTranslation("Gold Rubble", {ru: "Золотой щебень"});

IDRegistry.genItemID("rubbleCopper");
Item.createItem("rubbleCopper", "Copper Rubble", {name: "copper_rubble"});
Translation.addTranslation("Copper Rubble", {ru: "Медный щебень"});

IDRegistry.genItemID("rubbleLead");
Item.createItem("rubbleLead", "Lead Rubble", {name: "lead_rubble"});
Translation.addTranslation("Lead Rubble", {ru: "Свинцовый щебень"});

IDRegistry.genItemID("rubbleZinc");
Item.createItem("rubbleZinc", "Zinc Rubble", {name: "zinc_rubble"});
Translation.addTranslation("Zinc Rubble", {ru: "Цинковый щебень"});

IDRegistry.genItemID("rubbleTin");
Item.createItem("rubbleTin", "Tin Rubble", {name: "tin_rubble"});
Translation.addTranslation("Tin Rubble", {ru: "Оловянный щебень"});

IDRegistry.genItemID("rubbleAluminium");
Item.createItem("rubbleAluminium", "Aluminium Rubble", {name: "aluminium_rubble"});
Translation.addTranslation("Aluminium Rubble", {ru: "Алюминиевый щебень"});

IDRegistry.genItemID("rubbleSilver");
Item.createItem("rubbleSilver", "Silver Rubble", {name: "silver_rubble"});
Translation.addTranslation("Silver Rubble", {ru: "Серебрянный щебень"});

IDRegistry.genItemID("rubbleNickel");
Item.createItem("rubbleNickel", "Nickel Rubble", {name: "nickel_rubble"});
Translation.addTranslation("Nickel Rubble", {ru: "Никелевый щебень"});

IDRegistry.genItemID("rubbleOsmium");
Item.createItem("rubbleOsmium", "Osmium Rubble", {name: "osmium_rubble"});
Translation.addTranslation("Osmium Rubble", {ru: "Осмиевый щебень"});

Item.addCreativeGroup("rubbleMetal", Translation.translate("Metal Rubbles"), [
	ItemID.rubbleCopper,
	ItemID.rubbleTin,
	ItemID.rubbleOsmium,
	ItemID.rubbleLead,
	ItemID.rubbleSilver,
	ItemID.rubbleNickel,
    ItemID.rubbleAluminium
]);