// tile entity prototype (grinder)

IDRegistry.genBlockID("grinderCore");
Block.createBlock("grinderCore", [
	{name: "Grinder Control Monitor", texture: [["monitor_2", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.grinderCore, "stone", 2, true);
Block.setDestroyLevel("grinderCore", 2);
ToolLib.addBlockDropOnExplosion("grinderCore");
Translation.addTranslation("Grinder Control Monitor", {ru: "Управляющий Монитор Шлифовщика"});

var grinderModelMesh = new RenderMesh("model/grinder.obj", "obj");
grinderModelMesh.rebuild();

 
TileEntity.registerPrototype(BlockID.grinderCore, {
init: function() {
// find structure variant
this.variantIndex = findStructureVariant(grinderStructure, this.x, this.y, this.z);
if (this.variantIndex == -1) {
this.selfDestroy();
return;
}

// other init
},

load: function() {
// check if structure was built correctly
if (this.variantIndex == -1) {
return;
}

// show model
this.createModel();
},

unload: function() {
// hide model if unloaded
this.destroyModel();
},

destroy: function() {
// hide model if destroyed
this.destroyModel();
},

createModel: function() {
// destroy old model
if (this.modelAnimation) {
this.modelAnimation.destroy();
this.modelAnimation = null;
}

// show model
this.modelAnimation = new Animation.Base(this.x, this.y, this.z);
this.modelAnimation.describe({
mesh: grinderModelMesh,
skin: "model/grinder.png"
});
this.modelAnimation.load();

// hide all blocks
forEachStructureBlock(grinderStructure, this.variantIndex, this.x, this.y, this.z, function(x, y, z) {
BlockRenderer.mapAtCoords(x, y, z, emptyBlockModel);
});
},

destroyModel: function() {
// destroy model
if (this.modelAnimation) {
this.modelAnimation.destroy();
this.modelAnimation = null;
}

// show all blocks
forEachStructureBlock(grinderStructure, this.variantIndex, this.x, this.y, this.z, function(x, y, z) {
BlockRenderer.unmapAtCoords(x, y, z);
});
},

tick: function() {
// check structure
if (!continuousStructureCheck(grinderStructure, this.variantIndex, this.x, this.y, this.z)) {
this.selfDestroy();
this.variantIndex = -1;
return;
}

// do other things in tick

}
});