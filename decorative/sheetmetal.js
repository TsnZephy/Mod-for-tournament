IDRegistry.genBlockID("sheetmetalCopper");
Block.createBlock("sheetmetalCopper", [
	{name: "Copper Sheetmetal", texture: [["sheetmetal_copper", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalCopper, "stone", 2, true);
Block.setDestroyLevel("sheetmetalCopper", 2);
ToolLib.addBlockDropOnExplosion("sheetmetalCopper");
Translation.addTranslation("Copper Sheetmetal", {ru: "Блок Листовой Меди"});

IDRegistry.genBlockID("sheetmetalTin");
Block.createBlock("sheetmetalTin", [
	{name: "Tin Sheetmetal", texture: [["sheetmetal_tin", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalTin, "stone", 2, true);
Block.setDestroyLevel("sheetmetalTin", 2);
ToolLib.addBlockDropOnExplosion("sheetmetalTin");
Translation.addTranslation("Tin Sheetmetal", {ru: "Блок Листового Олова"});

IDRegistry.genBlockID("sheetmetalOsmium");
Block.createBlock("sheetmetalOsmium", [
	{name: "Osmium Sheetmetal", texture: [["sheetmetal_osmium", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalOsmium, "stone", 2, true);
Block.setDestroyLevel("sheetmetalOsmium", 3);
ToolLib.addBlockDropOnExplosion("sheetmetalOsmium");
Translation.addTranslation("Osmium Sheetmetal", {ru: "Блок Листового Осмия"});

IDRegistry.genBlockID("sheetmetalLead");
Block.createBlock("sheetmetalLead", [
	{name: "Lead Sheetmetal", texture: [["sheetmetal_lead", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalLead, "stone", 2, true);
Block.setDestroyLevel("sheetmetalLead", 3);
ToolLib.addBlockDropOnExplosion("sheetmetalLead");
Translation.addTranslation("Lead Sheetmetal", {ru: "Блок Листовго Свинца"});

IDRegistry.genBlockID("sheetmetalSteel");
Block.createBlock("sheetmetalSteel", [
	{name: "Steel Sheetmetal", texture: [["sheetmetal_steel", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalSteel, "stone", 2, true);
Block.setDestroyLevel("sheetmetalSteel", 3);
ToolLib.addBlockDropOnExplosion("sheetmetalSteel");
Translation.addTranslation("Steel Sheetmetal", {ru: "Блок Листовой Стали"});

IDRegistry.genBlockID("sheetmetalSilver");
Block.createBlock("sheetmetalSilver", [
	{name: "Silver Sheetmetal", texture: [["sheetmetal_silver", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalSilver, "stone", 3, true);
Block.setDestroyLevel("sheetmetalSilver", 3);
ToolLib.addBlockDropOnExplosion("sheetmetalSilver");
Translation.addTranslation("Silver Sheetmetal", {ru: "Блок Листового Серебра"});

IDRegistry.genBlockID("sheetmetalNickel");
Block.createBlock("sheetmetalNickel", [
	{name: "Nickel Sheetmetal", texture: [["sheetmetal_nickel", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalNickel, "stone", 2, true);
Block.setDestroyLevel("sheetmetalNickel", 2);
ToolLib.addBlockDropOnExplosion("sheetmetalNickel");
Translation.addTranslation("Nickel Sheetmetal", {ru: "Блок Листового Никеля"});

IDRegistry.genBlockID("sheetmetalAluminium");
Block.createBlock("sheetmetalAluminium", [
	{name: "Aluminium Sheetmetal", texture: [["sheetmetal_aluminium", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalAluminium, "stone", 2, true);
Block.setDestroyLevel("sheetmetalAluminium", 2);
ToolLib.addBlockDropOnExplosion("sheetmetalAluminium");
Translation.addTranslation("Aluminium Sheetmetal", {ru: "Блок Листового Алюминия"});

Item.addCreativeGroup("sheetmetalMetal", Translation.translate("Sheetmetal Blocks"), [
	BlockID.sheetmetalCopper,
	BlockID.sheetmetalTin,
	BlockID.sheetmetalOsmium,
	BlockID.sheetmetalLead,
	BlockID.sheetmetalSteel,
	BlockID.sheetmetalSilver,
	BlockID.sheetmetalNickel,
    BlockID.sheetmetalAluminium
]);