IDRegistry.genItemID("pebbelsIron");
Item.createItem("pebbelsIron", "Iron Pebbels", {name: "iron_pebbels"});
Translation.addTranslation("Iron Pebbels", {ru: "Железная галька"});

IDRegistry.genItemID("pebbelsGold");
Item.createItem("pebbelsGold", "Gold Pebbels", {name: "gold_pebbels"});
Translation.addTranslation("Gold Pebbels", {ru: "Золотая галька"});

IDRegistry.genItemID("pebbelsCopper");
Item.createItem("pebbelsCopper", "Copper Pebbels", {name: "copper_pebbels"});
Translation.addTranslation("Copper Pebbels", {ru: "Медная галька"});

IDRegistry.genItemID("pebbelsLead");
Item.createItem("pebbelsLead", "Lead Pebbels", {name: "lead_pebbels"});
Translation.addTranslation("Lead Pebbels", {ru: "Свинцовая галька"});

IDRegistry.genItemID("pebbelsZinc");
Item.createItem("pebbelsZinc", "Zinc Pebbels", {name: "zinc_pebbels"});
Translation.addTranslation("Zinc Pebbels", {ru: "Цинковая галька"});

IDRegistry.genItemID("pebbelsTin");
Item.createItem("pebbelsTin", "Tin Pebbels", {name: "tin_pebbels"});
Translation.addTranslation("Tin Pebbels", {ru: "Оловянная галька"});

IDRegistry.genItemID("pebbelsAluminium");
Item.createItem("pebbelsAluminium", "Aluminium Pebbels", {name: "aluminium_pebbels"});
Translation.addTranslation("Aluminium Pebbels", {ru: "Алюминиевая галька"});

IDRegistry.genItemID("pebbelsSilver");
Item.createItem("pebbelsSilver", "Silver Pebbels", {name: "silver_pebbels"});
Translation.addTranslation("Silver Pebbels", {ru: "Серебрянная галька"});

IDRegistry.genItemID("pebbelsNickel");
Item.createItem("pebbelsNickel", "Nickel Pebbels", {name: "nickel_pebbels"});
Translation.addTranslation("Nickel Pebbels", {ru: "Никелевая галька"});

IDRegistry.genItemID("pebbelsOsmium");
Item.createItem("pebbelsOsmium", "Osmium Pebbels", {name: "osmium_pebbels"});
Translation.addTranslation("Osmium Pebbels", {ru: "Осмиевая галька"});

Item.addCreativeGroup("pebbelsMetal", Translation.translate("Metal Pebbels"), [
	ItemID.pebbelsCopper,
	ItemID.pebbelsTin,
	ItemID.pebbelsOsmium,
	ItemID.pebbelsLead,
	ItemID.pebbelsSilver,
	ItemID.pebbelsNickel,
    ItemID.pebbelsAluminium
]);