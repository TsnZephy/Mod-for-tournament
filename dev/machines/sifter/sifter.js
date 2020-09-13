// tile entity prototype (sifter)

IDRegistry.genBlockID("sifterCore");
Block.createBlock("sifterCore", [
	{name: "Sifter Control Monitor", texture: [["monitor_3", 0]], inCreative: true}
], "stone");
ToolAPI.registerBlockMaterial(BlockID.sifterCore, "stone", 2, true);
Block.setDestroyLevel("sifterCore", 2);
ToolLib.addBlockDropOnExplosion("sifterCore");
Translation.addTranslation("Sifter Control Monitor", {ru: "Управляющий Монитор Просеевателя"});

var sifterModelMesh = new RenderMesh("model/sifter.obj", "obj");
sifterModelMesh.rebuild();

 
TileEntity.registerPrototype(BlockID.sifterCore, {
init: function() {
// find structure variant
this.variantIndex = findStructureVariant(sifterStructure, this.x, this.y, this.z);
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
mesh: sifterModelMesh,
skin: "model/sifter.png"
});
this.modelAnimation.load();

// hide all blocks
forEachStructureBlock(sifterStructure, this.variantIndex, this.x, this.y, this.z, function(x, y, z) {
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
forEachStructureBlock(sifterStructure, this.variantIndex, this.x, this.y, this.z, function(x, y, z) {
BlockRenderer.unmapAtCoords(x, y, z);
});
},

tick: function() {
// check structure
if (!continuousStructureCheck(sifterStructure, this.variantIndex, this.x, this.y, this.z)) {
this.selfDestroy();
this.variantIndex = -1;
return;
}

// do other things in tick

}
});