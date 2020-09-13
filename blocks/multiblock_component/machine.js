Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 5,
	explosionres: 30,
	lightopacity: 0,
	renderlayer: 2
}, "mb_machine");

IDRegistry.genBlockID("machineBlockLight");
Block.createBlock("machineBlockLight", [
	{name: "Light Construction Block", texture: [["machine_light", 0]], inCreative: true}
], "mb_machine");
ToolAPI.registerBlockMaterial(BlockID.machineBlockLight, "stone", 1, true);
Block.setDestroyLevel("machineBlockLight", 1);
ToolLib.addBlockDropOnExplosion("machineBlockLight");
Translation.addTranslation("Light Construction Block", {ru: "Лёгкий Конструкционный Блок"});

IDRegistry.genBlockID("machineBlockHeavy");
Block.createBlock("machineBlockHeavy", [
	{name: "Heavy Construction Block", texture: [["machine_heavy", 0]], inCreative: true}
], "mb_machine");
ToolAPI.registerBlockMaterial(BlockID.machineBlockHeavy, "stone", 1, true);
Block.setDestroyLevel("machineBlockHeavy", 1);
ToolLib.addBlockDropOnExplosion("machineBlockHeavy");
Translation.addTranslation("Heavy Construction Block", {ru: "Тяжёлый Конструкционный Блок"});

IDRegistry.genBlockID("machineScaffolding");
Block.createBlock("machineScaffolding", [
	{name: "Steel Scaffolding", texture: [["scaffold_bottom", 0], ["scaffold_top", 0], ["scaffold_side", 0], ["scaffold_side", 0], ["scaffold_side", 0], ["scaffold_side", 0]], inCreative: true}
], "mb_machine");
ToolAPI.registerBlockMaterial(BlockID.machineScaffolding, "stone", 1, true);
Block.setDestroyLevel("machineScaffolding", 1);
ToolLib.addBlockDropOnExplosion("machineScaffolding");
Translation.addTranslation("Steel Scaffolding", {ru: "Стальные Строительные Леса"});

IDRegistry.genBlockID("fenceSteel");
Block.createBlock("fenceSteel", [
	{name: "Steel Fence", texture: [["block_steel", 0]], inCreative: true}
],{rendertype: 32});
ToolAPI.registerBlockMaterial(BlockID.fenceSteel, "stone", 1, true);
Block.setDestroyLevel("fenceSteel", 1);
ToolLib.addBlockDropOnExplosion("fenceSteel");
Translation.addTranslation("Steel Fence", {ru: "Стальной Забор"});


IDRegistry.genBlockID("sheetmetalSteel");
Block.createBlock("sheetmetalSteel", [
	{name: "Steel Sheetmetal", texture: [["sheetmetal_steel", 0]], inCreative: true}
], "mb_machine");
ToolAPI.registerBlockMaterial(BlockID.sheetmetalSteel, "stone", 2, true);
Block.setDestroyLevel("sheetmetalSteel", 3);
ToolLib.addBlockDropOnExplosion("sheetmetalSteel");
Translation.addTranslation("Steel Sheetmetal", {ru: "Блок Листовой Стали"});


function enableICRenderCoordMapping(id) {
var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBlock(id);
render.addEntry(model);
BlockRenderer.enableCoordMapping(id, -1, render);
}

enableICRenderCoordMapping(BlockID.machineBlockLight);
enableICRenderCoordMapping(BlockID.machineBlockHeavy);
enableICRenderCoordMapping(BlockID.machineScaffolding);
enableICRenderCoordMapping(BlockID.fenceSteel);
enableICRenderCoordMapping(BlockID.sheetmetalSteel);
enableICRenderCoordMapping(154);

Item.addCreativeGroup("blockMachine", Translation.translate("Machine Blocks"), [
	BlockID.machineBlockLight,
    BlockID.machineBlockHeavy,
    BlockID.machineScaffolding,
    BlockID.fenceSteel
]);