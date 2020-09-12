IDRegistry.genItemID("chunkIron");
Item.createItem("chunkIron", "Iron Chunk", {name: "iron_chunk"});
Translation.addTranslation("Iron Chunk", {ru: "Железные куски"});

IDRegistry.genItemID("chunkGold");
Item.createItem("chunkGold", "Gold Chunk", {name: "gold_chunk"});
Translation.addTranslation("Gold Chunk", {ru: "Золотые куски"});

IDRegistry.genItemID("chunkCopper");
Item.createItem("chunkCopper", "Copper Chunk", {name: "copper_chunk"});
Translation.addTranslation("Copper Chunk", {ru: "Медные куски"});

IDRegistry.genItemID("chunkLead");
Item.createItem("chunkLead", "Lead Chunk", {name: "lead_chunk"});
Translation.addTranslation("Lead Chunk", {ru: "Свинцовые куски"});

IDRegistry.genItemID("chunkZinc");
Item.createItem("chunkZinc", "Zinc Chunk", {name: "zinc_chunk"});
Translation.addTranslation("Zinc Chunk", {ru: "Цинковые куски"});

IDRegistry.genItemID("chunkTin");
Item.createItem("chunkTin", "Tin Chunk", {name: "tin_chunk"});
Translation.addTranslation("Tin Chunk", {ru: "Оловянные куски"});

IDRegistry.genItemID("chunkAluminium");
Item.createItem("chunkAluminium", "Aluminium Chunk", {name: "aluminium_chunk"});
Translation.addTranslation("Aluminium Chunk", {ru: "Алюминиевые куски"});

IDRegistry.genItemID("chunkSilver");
Item.createItem("chunkSilver", "Silver Chunk", {name: "silver_chunk"});
Translation.addTranslation("Silver Chunk", {ru: "Серебрянные куски"});

IDRegistry.genItemID("chunkNickel");
Item.createItem("chunkNickel", "Nickel Chunk", {name: "nickel_chunk"});
Translation.addTranslation("Nickel Chunk", {ru: "Никелевые куски"});

IDRegistry.genItemID("chunkOsmium");
Item.createItem("chunkOsmium", "Osmium Chunk", {name: "osmium_chunk"});
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