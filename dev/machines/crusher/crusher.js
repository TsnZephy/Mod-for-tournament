// tile entity prototype (crusher)
IDRegistry.genBlockID("crusherCore");
Block.createBlock("crusherCore", [{
    name: "Crusher Control Monitor",
    texture: [
        ["monitor_1", 0]
    ],
    inCreative: true
}], "stone");
ToolAPI.registerBlockMaterial(BlockID.crusherCore, "stone", 2, true);
Block.setDestroyLevel("crusherCore", 2);
ToolLib.addBlockDropOnExplosion("crusherCorer");
Translation.addTranslation("Crusher Control Monitor", {
    ru: "Управляющий Монитор Дробителя"
});

var crusherModelMesh = new RenderMesh("model/crusher.obj", "obj");
crusherModelMesh.rebuild();

TileEntity.registerPrototype(BlockID.crusherCore, {
    init: function() {
        // find structure variant
        this.variantIndex = findStructureVariant(crusherStructure, this.x, this.y, this.z);
        if (this.variantIndex == -1) {
            this.selfDestroy();
            alert("init, no variant");
            return;
        }

        alert("init, variant " + this.variantIndex);
        // other init
    },

    load: function() {
        // check if structure was built correctly
        if (this.variantIndex == -1) {
            alert("variant is -1, failed to load");
            return;
        }


        alert("loaded");
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

        alert("showing model");

        // show model
        this.modelAnimation = new Animation.Base(this.x, this.y, this.z);
        this.modelAnimation.describe({
            mesh: crusherModelMesh,
            skin: "model/crusher.png"
        });
        this.modelAnimation.load();

        // hide all blocks
        forEachStructureBlock(crusherStructure, this.variantIndex, this.x, this.y, this.z, function(x, y, z) {
            BlockRenderer.mapAtCoords(x, y, z, emptyBlockModel);
        });


        alert("showed model");
    },

    destroyModel: function() {
        // destroy model
        if (this.modelAnimation) {
            this.modelAnimation.destroy();
            this.modelAnimation = null;
        }

        // show all blocks
        forEachStructureBlock(crusherStructure, this.variantIndex, this.x, this.y, this.z, function(x, y, z) {
            BlockRenderer.unmapAtCoords(x, y, z);
        });
        
        alert("destroyed model");
    },

    tick: function() {
        // check structure
        if (!continuousStructureCheck(crusherStructure, this.variantIndex, this.x, this.y, this.z)) {
            this.selfDestroy();
            this.variantIndex = -1;
        	alert("destroyed in tick");
            return;
        }

        // do other things in tick

    }
});