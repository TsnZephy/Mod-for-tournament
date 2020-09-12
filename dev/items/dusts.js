IDRegistry.genItemID("dustIron");
Item.createItem("dustIron", "Iron Dust", {name: "dust_iron"});
Translation.addTranslation("Iron Dust", {ru: "Железная пыль"})

IDRegistry.genItemID("dustGold");
Item.createItem("dustGold", "Gold Dust", {name: "dust_gold"});
Translation.addTranslation("Gold Dust", {ru: "Золотая пыль"})

IDRegistry.genItemID("dustCopper");
Item.createItem("dustCopper", "Copper Dust", {name: "dust_copper"});
Translation.addTranslation("Copper Dust", {ru: "Медная пыль"})

IDRegistry.genItemID("dustLead");
Item.createItem("dustLead", "Lead Dust", {name: "dust_lead"});
Translation.addTranslation("Lead Dust", {ru: "Свинцовая пыль"})

IDRegistry.genItemID("dustZinc");
Item.createItem("dustZinc", "Zinc Dust", {name: "dust_zinc"});
Translation.addTranslation("Zinc Dust", {ru: "Цинковая пыль"})

IDRegistry.genItemID("dustTin");
Item.createItem("dustTin", "Tin Dust", {name: "dust_tin"});
Translation.addTranslation("Tin Dust", {ru: "Оловянная пыль"})

IDRegistry.genItemID("dustAluminium");
Item.createItem("dustAluminium", "Aluminium Dust", {name: "dust_aluminium"});
Translation.addTranslation("Aluminium Dust", {ru: "Алюминиевая пыль"})

IDRegistry.genItemID("dustSilver");
Item.createItem("dustSilver", "Silver Dust", {name: "dust_silver"});
Translation.addTranslation("Silver Dust", {ru: "Серебрянная пыль"})

IDRegistry.genItemID("dustNickel");
Item.createItem("dustNickel", "Nickel Dust", {name: "dust_nickel"});
Translation.addTranslation("Nickel Dust", {ru: "Никелевая пыль"})

IDRegistry.genItemID("dustOsmium");
Item.createItem("dustOsmium", "Osmium Dust", {name: "dust_osmium"});
Translation.addTranslation("Osmium Dust", {ru: "Осмиевая пыль"})

IDRegistry.genItemID("dustSteel");
Item.createItem("dustSteel", "Steel Dust", {name: "dust_steel"});
Translation.addTranslation("Steel Dust", {ru: "Стальная пыль"})

Item.addCreativeGroup("dustMetal", Translation.translate("Metal Dusts"), [
	ItemID.dustIron,
    ItemID.dustGold,    
    ItemID.dustCopper,
	ItemID.dustTin,
	ItemID.dustOsmium,
	ItemID.dustLead,
	ItemID.dustSteel,
	ItemID.dustSilver,
	ItemID.dustNickel,
    ItemID.dustAluminium
]);