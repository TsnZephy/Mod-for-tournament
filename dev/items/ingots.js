IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper"});
Translation.addTranslation("Copper Ingot", {ru: "Медный слиток"});

IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead", "Lead Ingot", {name: "ingot_lead"});
Translation.addTranslation("Lead Ingot", {ru: "Свинцовый слиток"});

IDRegistry.genItemID("ingotZinc");
Item.createItem("ingotZinc", "Zinc Ingot", {name: "ingot_zinc"});
Translation.addTranslation("Zinc Ingot", {ru: "Цинковый слиток"});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin"});
Translation.addTranslation("Tin Ingot", {ru: "Оловянный слиток"});

IDRegistry.genItemID("ingotAluminium");
Item.createItem("ingotAluminium", "Aluminium Ingot", {name: "ingot_aluminium"});
Translation.addTranslation("Aluminium Ingot", {ru: "Алюминиевый слиток"});

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver"});
Translation.addTranslation("Silver Ingot", {ru: "Серебрянный слиток"});

IDRegistry.genItemID("ingotNickel");
Item.createItem("ingotNickel", "Nickel Ingot", {name: "ingot_nickel"});
Translation.addTranslation("Nickel Ingot", {ru: "Никелевый слиток"});

IDRegistry.genItemID("ingotOsmium");
Item.createItem("ingotOsmium", "Osmium Ingot", {name: "ingot_osmium"});
Translation.addTranslation("Osmium Ingot", {ru: "Осмиевый слиток"});

IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Steel Ingot", {name: "ingot_steel"});
Translation.addTranslation("Steel Ingot", {ru: "Стальной слиток"});

Item.addCreativeGroup("ingotMetal", Translation.translate("Metal Ingots"), [
	ItemID.ingotCopper,
	ItemID.ingotTin,
	ItemID.ingotOsmium,
	ItemID.ingotLead,
	ItemID.ingotSteel,
	ItemID.ingotSilver,
	ItemID.ingotNickel,
    ItemID.ingotAluminium
]);