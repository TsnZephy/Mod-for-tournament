IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron"});
Translation.addTranslation("Iron Plate", {ru: "Железный лист"});

IDRegistry.genItemID("plateGold");
Item.createItem("plateGold", "Gold Plate", {name: "plate_gold"});
Translation.addTranslation("Gold Plate", {ru: "Золотой лист"});

IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper", "Copper Plate", {name: "plate_copper"});
Translation.addTranslation("Copper Plate", {ru: "Медный лист"});

IDRegistry.genItemID("plateLead");
Item.createItem("plateLead", "Lead Plate", {name: "plate_lead"});
Translation.addTranslation("Lead Plate", {ru: "Свинцовый лист"});

IDRegistry.genItemID("plateZinc");
Item.createItem("plateZinc", "Zinc Plate", {name: "plate_zinc"});
Translation.addTranslation("Zinc Plate", {ru: "Цинковый лист"});

IDRegistry.genItemID("plateTin");
Item.createItem("plateTin", "Tin Plate", {name: "plate_tin"});
Translation.addTranslation("Tin Plate", {ru: "Оловянный лист"});

IDRegistry.genItemID("plateAluminium");
Item.createItem("plateAluminium", "Aluminium Plate", {name: "plate_aluminium"});
Translation.addTranslation("Aluminium Plate", {ru: "Алюминиевый лист"});

IDRegistry.genItemID("plateSilver");
Item.createItem("plateSilver", "Silver Plate", {name: "plate_silver"});
Translation.addTranslation("Silver Plate", {ru: "Серебрянный лист"});

IDRegistry.genItemID("plateNickel");
Item.createItem("plateNickel", "Nickel Plate", {name: "plate_nickel"});
Translation.addTranslation("Nickel Plate", {ru: "Никелевый лист"});

IDRegistry.genItemID("plateOsmium");
Item.createItem("plateOsmium", "Osmium Plate", {name: "plate_osmium"});
Translation.addTranslation("Osmium Plate", {ru: "Осмиевый лист"});

IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel", "Steel Plate", {name: "plate_steel"});
Translation.addTranslation("Steel Plate", {ru: "Стальной лист"});

Item.addCreativeGroup("plateMetal", Translation.translate("Metal Plates"), [
	ItemID.plateIron,
    ItemID.plateGold,
    ItemID.plateCopper,
	ItemID.plateTin,
	ItemID.plateZinc,
	ItemID.plateOsmium,
	ItemID.plateLead,
	ItemID.plateSteel,
	ItemID.plateSilver,
	ItemID.plateNickel,
    ItemID.plateAluminium
]);