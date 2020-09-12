IDRegistry.genItemID("rubbleIron");
Item.createItem("rubbleIron", "Iron Rubble", {name: "rubble_iron"});
Translation.addTranslation("Iron Rubble", {ru: "Железный щебень"});

IDRegistry.genItemID("rubbleGold");
Item.createItem("rubbleGold", "Gold Rubble", {name: "rubble_gold"});
Translation.addTranslation("Gold Rubble", {ru: "Золотой щебень"});

IDRegistry.genItemID("rubbleCopper");
Item.createItem("rubbleCopper", "Copper Rubble", {name: "rubble_copper"});
Translation.addTranslation("Copper Rubble", {ru: "Медный щебень"});

IDRegistry.genItemID("rubbleLead");
Item.createItem("rubbleLead", "Lead Rubble", {name: "rubble_lead"});
Translation.addTranslation("Lead Rubble", {ru: "Свинцовый щебень"});

IDRegistry.genItemID("rubbleZinc");
Item.createItem("rubbleZinc", "Zinc Rubble", {name: "rubble_zinc"});
Translation.addTranslation("Zinc Rubble", {ru: "Цинковый щебень"});

IDRegistry.genItemID("rubbleTin");
Item.createItem("rubbleTin", "Tin Rubble", {name: "rubble_tin"});
Translation.addTranslation("Tin Rubble", {ru: "Оловянный щебень"});

IDRegistry.genItemID("rubbleAluminium");
Item.createItem("rubbleAluminium", "Aluminium Rubble", {name: "rubble_aluminium"});
Translation.addTranslation("Aluminium Rubble", {ru: "Алюминиевый щебень"});

IDRegistry.genItemID("rubbleSilver");
Item.createItem("rubbleSilver", "Silver Rubble", {name: "rubble_silver"});
Translation.addTranslation("Silver Rubble", {ru: "Серебрянный щебень"});

IDRegistry.genItemID("rubbleNickel");
Item.createItem("rubbleNickel", "Nickel Rubble", {name: "rubble_nickel"});
Translation.addTranslation("Nickel Rubble", {ru: "Никелевый щебень"});

IDRegistry.genItemID("rubbleOsmium");
Item.createItem("rubbleOsmium", "Osmium Rubble", {name: "rubble_osmium"});
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