Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 5,
	explosionres: 30,
	lightopacity: 15,
	renderlayer: 2
}, "stone");

IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper", [
	{name: "Copper Block", texture: [["block_copper", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockCopper, "stone", 2, true);
Block.setDestroyLevel("blockCopper", 2);
ToolLib.addBlockDropOnExplosion("blockCopper");
Translation.addTranslation("Copper Block", {ru: "Медный блок"});

IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin", [
	{name: "Tin Block", texture: [["block_tin", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockTin, "stone", 2, true);
Block.setDestroyLevel("blockTin", 2);
ToolLib.addBlockDropOnExplosion("blockTin");
Translation.addTranslation("Tin Block", {ru: "Оловянный блок"});

IDRegistry.genBlockID("blockOsmium");
Block.createBlock("blockOsmium", [
	{name: "Osmium Block", texture: [["block_osmium", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockOsmium, "stone", 2, true);
Block.setDestroyLevel("blockOsmium", 3);
ToolLib.addBlockDropOnExplosion("blockOsmium");
Translation.addTranslation("Osmium Block", {ru: "Осмиевый блок"});

IDRegistry.genBlockID("blockLead");
Block.createBlock("blockLead", [
	{name: "Lead Block", texture: [["block_lead", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockLead, "stone", 2, true);
Block.setDestroyLevel("blockLead", 3);
ToolLib.addBlockDropOnExplosion("blockLead");
Translation.addTranslation("Lead Block", {ru: "Свинцовый блок"});

IDRegistry.genBlockID("blockSteel");
Block.createBlock("blockSteel", [
	{name: "Steel Block", texture: [["block_steel", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockSteel, "stone", 2, true);
Block.setDestroyLevel("blockSteel", 3);
ToolLib.addBlockDropOnExplosion("blockSteel");
Translation.addTranslation("Steel Block", {ru: "Стальной блок"});

IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver", [
	{name: "Silver Block", texture: [["block_silver", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockSilver, "stone", 3, true);
Block.setDestroyLevel("blockSilver", 3);
ToolLib.addBlockDropOnExplosion("blockSilver");
Translation.addTranslation("Silver Block", {ru: "Серебрянный блок"});

IDRegistry.genBlockID("blockNickel");
Block.createBlock("blockNickel", [
	{name: "Nickel Block", texture: [["block_nickel", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockNickel, "stone", 2, true);
Block.setDestroyLevel("blockNickel", 2);
ToolLib.addBlockDropOnExplosion("blockNickel");
Translation.addTranslation("Nickel Block", {ru: "Никелевый блок"});

IDRegistry.genBlockID("blockAluminium");
Block.createBlock("blockAluminium", [
	{name: "Aluminium Block", texture: [["block_aluminium", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.blockAluminium, "stone", 2, true);
Block.setDestroyLevel("blockAluminium", 2);
ToolLib.addBlockDropOnExplosion("blockAluminium");
Translation.addTranslation("Aluminium Block", {ru: "Алюминиевый блок"});

Item.addCreativeGroup("blockMetal", Translation.translate("Metal Blocks"), [
	BlockID.blockCopper,
	BlockID.blockTin,
	BlockID.blockOsmium,
	BlockID.blockLead,
	BlockID.blockSteel,
	BlockID.blockSilver,
	BlockID.blockNickel,
    BlockID.blockAluminium
]);