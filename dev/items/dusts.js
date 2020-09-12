IDRegistry.genItemID("dustIron");
Item.createItem("dustIron", "Iron Dust", {name: "iron_dust"});
Translation.addTranslation("Iron Dust", {ru: "Железная пыль"})

IDRegistry.genItemID("dustGold");
Item.createItem("dustGold", "Gold Dust", {name: "gold_dust"});
Translation.addTranslation("Gold Dust", {ru: "Золотая пыль"})

IDRegistry.genItemID("dustCopper");
Item.createItem("dustCopper", "Copper Dust", {name: "copper_dust"});
Translation.addTranslation("Copper Dust", {ru: "Медная пыль"})

IDRegistry.genItemID("dustLead");
Item.createItem("dustLead", "Lead Dust", {name: "lead_dust"});
Translation.addTranslation("Lead Dust", {ru: "Свинцовая пыль"})

IDRegistry.genItemID("dustZinc");
Item.createItem("dustZinc", "Zinc Dust", {name: "zinc_dust"});
Translation.addTranslation("Zinc Dust", {ru: "Цинковая пыль"})

IDRegistry.genItemID("dustTin");
Item.createItem("dustTin", "Tin Dust", {name: "tin_dust"});
Translation.addTranslation("Tin Dust", {ru: "Оловянная пыль"})

IDRegistry.genItemID("dustAluminium");
Item.createItem("dustAluminium", "Aluminium Dust", {name: "aluminium_dust"});
Translation.addTranslation("Aluminium Dust", {ru: "Алюминиевая пыль"})

IDRegistry.genItemID("dustSilver");
Item.createItem("dustSilver", "Silver Dust", {name: "silver_dust"});
Translation.addTranslation("Silver Dust", {ru: "Серебрянная пыль"})

IDRegistry.genItemID("dustNickel");
Item.createItem("dustNickel", "Nickel Dust", {name: "nickel_dust"});
Translation.addTranslation("Nickel Dust", {ru: "Никелевая пыль"})

IDRegistry.genItemID("dustOsmium");
Item.createItem("dustOsmium", "Osmium Dust", {name: "osmium_dust"});
Translation.addTranslation("Osmium Dust", {ru: "Осмиевая пыль"})

IDRegistry.genItemID("dustSteel");
Item.createItem("dustSteel", "Steel Dust", {name: "steel_dust"});
Translation.addTranslation("Steel Dust", {ru: "Стальная пыль"})

Item.addCreativeGroup("dustMetal", Translation.translate("Metal Dusts"), [
	ItemID.dustCopper,
	ItemID.dustTin,
	ItemID.dustOsmium,
	ItemID.dustLead,
	ItemID.dustSteel,
	ItemID.dustSilver,
	ItemID.dustNickel,
    ItemID.dustAluminium
]);