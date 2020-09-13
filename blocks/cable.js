Block.createSpecialType({
	destroytime: 0.05,
	explosionres: 0.5,
	renderlayer: 1,
}, "cable");

IDRegistry.genBlockID("cableLV");
Block.createBlock("cableLV", [
	{name: "tile.cableLV.name", texture: [["cable_LV", 0]], inCreative: false},
], "cable");
ToolAPI.registerBlockMaterial(BlockID.cableLV, "stone");


IDRegistry.genBlockID("cableMV");
Block.createBlock("cableMV", [
	{name: "tile.cableMV.name", texture: [["cable_MV", 0]], inCreative: false},
], "cable");
ToolAPI.registerBlockMaterial(BlockID.cableMV, "stone");


IDRegistry.genBlockID("cableHV");
Block.createBlock("cableHV", [
	{name: "tile.cableHV.name", texture: [["cable_HV", 0]], inCreative: false},
], "cable");
CableRegistry.createBlock("cableHV", {name: "tile.cableHV.name", texture: "cable_HV"}, "cable");
ToolAPI.registerBlockMaterial(BlockID.cableHV, "stone");

// energy net

CableRegistry.registerCable("cableLV", 128, 1);
CableRegistry.registerCable("cableMV", 512, 2);
CableRegistry.registerCable("cableHV", 2048, 3);

// block model

TileRenderer.setupWireModel(BlockID.cableLV, -1, 4/16, "ic-wire");
TileRenderer.setupWireModel(BlockID.cableMV, -1, 3/16, "ic-wire");
TileRenderer.setupWireModel(BlockID.cableHV, -1, 6/16, "ic-wire");