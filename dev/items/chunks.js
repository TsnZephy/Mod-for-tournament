IDRegistry.genItemID("chunkIron");
Item.createItem("chunkIron", "Iron Chunk", {name: "chunk_iron"});
Translation.addTranslation("Iron Chunk", {ru: "Железные куски"});

IDRegistry.genItemID("chunkGold");
Item.createItem("chunkGold", "Gold Chunk", {name: "chunk_gold"});
Translation.addTranslation("Gold Chunk", {ru: "Золотые куски"});

IDRegistry.genItemID("chunkCopper");
Item.createItem("chunkCopper", "Copper Chunk", {name: "chunk_copper"});
Translation.addTranslation("Copper Chunk", {ru: "Медные куски"});

IDRegistry.genItemID("chunkLead");
Item.createItem("chunkLead", "Lead Chunk", {name: "chunk_lead"});
Translation.addTranslation("Lead Chunk", {ru: "Свинцовые куски"});

IDRegistry.genItemID("chunkZinc");
Item.createItem("chunkZinc", "Zinc Chunk", {name: "chunk_zinc"});
Translation.addTranslation("Zinc Chunk", {ru: "Цинковые куски"});

IDRegistry.genItemID("chunkTin");
Item.createItem("chunkTin", "Tin Chunk", {name: "chunk_tin"});
Translation.addTranslation("Tin Chunk", {ru: "Оловянные куски"});

IDRegistry.genItemID("chunkAluminium");
Item.createItem("chunkAluminium", "Aluminium Chunk", {name: "chunk_aluminium"});
Translation.addTranslation("Aluminium Chunk", {ru: "Алюминиевые куски"});

IDRegistry.genItemID("chunkSilver");
Item.createItem("chunkSilver", "Silver Chunk", {name: "chunk_silver"});
Translation.addTranslation("Silver Chunk", {ru: "Серебрянные куски"});

IDRegistry.genItemID("chunkNickel");
Item.createItem("chunkNickel", "Nickel Chunk", {name: "chunk_nickel"});
Translation.addTranslation("Nickel Chunk", {ru: "Никелевые куски"});

IDRegistry.genItemID("chunkOsmium");
Item.createItem("chunkOsmium", "Osmium Chunk", {name: "chunk_osmium"});
Translation.addTranslation("Osmium Chunk", {ru: "Осмиевые куски"});

Item.addCreativeGroup("chunkMetal", Translation.translate("Metal Chunks"), [
	ItemID.chunkCopper,
	ItemID.chunkTin,
	ItemID.chunkOsmium,
	ItemID.chunkLead,
	ItemID.chunkSilver,
	ItemID.chunkNickel,
    ItemID.chunkAluminium
]);