IDRegistry.genItemID("pebbelsIron");
Item.createItem("pebbelsIron", "Iron Pebbels", {name: "pebbels_iron"});
Translation.addTranslation("Iron Pebbels", {ru: "Железная галька"});

IDRegistry.genItemID("pebbelsGold");
Item.createItem("pebbelsGold", "Gold Pebbels", {name: "pebbels_gold"});
Translation.addTranslation("Gold Pebbels", {ru: "Золотая галька"});

IDRegistry.genItemID("pebbelsCopper");
Item.createItem("pebbelsCopper", "Copper Pebbels", {name: "pebbels_copper"});
Translation.addTranslation("Copper Pebbels", {ru: "Медная галька"});

IDRegistry.genItemID("pebbelsLead");
Item.createItem("pebbelsLead", "Lead Pebbels", {name: "pebbels_lead"});
Translation.addTranslation("Lead Pebbels", {ru: "Свинцовая галька"});

IDRegistry.genItemID("pebbelsZinc");
Item.createItem("pebbelsZinc", "Zinc Pebbels", {name: "pebbels_zinc"});
Translation.addTranslation("Zinc Pebbels", {ru: "Цинковая галька"});

IDRegistry.genItemID("pebbelsTin");
Item.createItem("pebbelsTin", "Tin Pebbels", {name: "pebbels_tin"});
Translation.addTranslation("Tin Pebbels", {ru: "Оловянная галька"});

IDRegistry.genItemID("pebbelsAluminium");
Item.createItem("pebbelsAluminium", "Aluminium Pebbels", {name: "pebbels_aluminium"});
Translation.addTranslation("Aluminium Pebbels", {ru: "Алюминиевая галька"});

IDRegistry.genItemID("pebbelsSilver");
Item.createItem("pebbelsSilver", "Silver Pebbels", {name: "pebbels_silver"});
Translation.addTranslation("Silver Pebbels", {ru: "Серебрянная галька"});

IDRegistry.genItemID("pebbelsNickel");
Item.createItem("pebbelsNickel", "Nickel Pebbels", {name: "pebbels_nickel"});
Translation.addTranslation("Nickel Pebbels", {ru: "Никелевая галька"});

IDRegistry.genItemID("pebbelsOsmium");
Item.createItem("pebbelsOsmium", "Osmium Pebbels", {name: "pebbels_osmium"});
Translation.addTranslation("Osmium Pebbels", {ru: "Осмиевая галька"});

Item.addCreativeGroup("pebbelsMetal", Translation.translate("Metal Pebbels"), [
	ItemID.pebbelsIron,
	ItemID.pebbelsGold,
    ItemID.pebbelsCopper,
	ItemID.pebbelsTin,
	ItemID.pebbelsOsmium,
	ItemID.pebbelsLead,
	ItemID.pebbelsSilver,
	ItemID.pebbelsNickel,
    ItemID.pebbelsZinc,
    ItemID.pebbelsAluminium
]);