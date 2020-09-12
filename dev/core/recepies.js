Callback.addCallback("PreLoaded", function(){
	
    // furnace
    // vanila furnace
    // from ore
	Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(BlockID.oreLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
    Recipes.addFurnace(BlockID.oreZinc, ItemID.ingotZinc, 0);
    Recipes.addFurnace(BlockID.oreAluminium, ItemID.ingotAluminium, 0);
    Recipes.addFurnace(BlockID.oreOsmium, ItemID.ingotOsmium, 0);
    Recipes.addFurnace(BlockID.oreNickel, ItemID.ingotNickel, 0);
    // from chunk
    Recipes.addFurnace(ItemID.chunkGold, 266, 0);
    Recipes.addFurnace(ItemID.chunkIron, 265, 0);
	Recipes.addFurnace(ItemID.chunkCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.chunkTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.chunkLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(ItemID.chunkSilver, ItemID.ingotSilver, 0);
    Recipes.addFurnace(ItemID.chunkZinc, ItemID.ingotZinc, 0);
    Recipes.addFurnace(ItemID.chunkAluminium, ItemID.ingotAluminium, 0);
    Recipes.addFurnace(ItemID.chunkOsmium, ItemID.ingotOsmium, 0);
    Recipes.addFurnace(ItemID.chunkNickel, ItemID.ingotNickel, 0);
    // from rubble
    Recipes.addFurnace(ItemID.rubbleGold, 266, 0);
    Recipes.addFurnace(ItemID.rubbleIron, 265, 0);
	Recipes.addFurnace(ItemID.rubbleCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.rubbleTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.rubbleLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(ItemID.rubbleSilver, ItemID.ingotSilver, 0);
    Recipes.addFurnace(ItemID.rubbleZinc, ItemID.ingotZinc, 0);
    Recipes.addFurnace(ItemID.rubbleAluminium, ItemID.ingotAluminium, 0);
    Recipes.addFurnace(ItemID.rubbleOsmium, ItemID.ingotOsmium, 0);
    Recipes.addFurnace(ItemID.rubbleNickel, ItemID.ingotNickel, 0);
    // from pebbles
    Recipes.addFurnace(ItemID.pebblesGold, 266, 0);
    Recipes.addFurnace(ItemID.pebblesIron, 265, 0);
	Recipes.addFurnace(ItemID.pebblesCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.pebblesTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.pebblesLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(ItemID.pebblesSilver, ItemID.ingotSilver, 0);
    Recipes.addFurnace(ItemID.pebblesZinc, ItemID.ingotZinc, 0);
    Recipes.addFurnace(ItemID.pebblesAluminium, ItemID.ingotAluminium, 0);
    Recipes.addFurnace(ItemID.pebblesOsmium, ItemID.ingotOsmium, 0);
    Recipes.addFurnace(ItemID.pebblesNickel, ItemID.ingotNickel, 0);
    // from dust
    Recipes.addFurnace(ItemID.dustGold, 266, 0);
    Recipes.addFurnace(ItemID.dustIron, 265, 0);
    Recipes.addFurnace(ItemID.dustSteel, ItemID.ingotSteel, 0);
	Recipes.addFurnace(ItemID.dustCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.dustTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.dustLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(ItemID.dustSilver, ItemID.ingotSilver, 0);
    Recipes.addFurnace(ItemID.dustZinc, ItemID.ingotZinc, 0);
    Recipes.addFurnace(ItemID.dustAluminium, ItemID.ingotAluminium, 0);
    Recipes.addFurnace(ItemID.dustOsmium, ItemID.ingotOsmium, 0);
    Recipes.addFurnace(ItemID.dustNickel, ItemID.ingotNickel, 0);
    
	
	//steel dust (early game)
	Recipes.addShaped({id: ItemID.dustSteel, count: 2, data: 0}, [
		" c ",
		"cic",
		" c "
	], ['i', 265, 0, 'c', 263, 0]);
    
    //decorative blocks
	Recipes.addShaped({id: BlockID.blockCopper, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotCopper, 0]);
	
	Recipes.addShaped({id: BlockID.blockTin, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotTin, 0]);
	
	Recipes.addShaped({id: BlockID.blockOsmium, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotOsmium, 0]);
	
	Recipes.addShaped({id: BlockID.blockLead, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotLead, 0]);
	
	Recipes.addShaped({id: BlockID.blockSteel, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotSteel, 0]);
	
	Recipes.addShaped({id: BlockID.blockSilver, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotSilver, 0]);
	
	Recipes.addShaped({id: BlockID.blockNickel, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotNickel, 0]);
	
	Recipes.addShaped({id: BlockID.blockAluminium, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotAluminium, 0]);
	
    // from blocks to ingots
	Recipes.addShapeless({id: ItemID.ingotCopper, count: 9, data: 0}, [{id: BlockID.blockCopper, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotTin, count: 9, data: 0}, [{id: BlockID.blockTin, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotOsmium, count: 9, data: 0}, [{id: BlockID.blockOsmium, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotLead, count: 9, data: 0}, [{id: BlockID.blockLead, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotSteel, count: 9, data: 0}, [{id: BlockID.blockSteel, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotSilver, count: 9, data: 0}, [{id: BlockID.blockSilver, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotNickel, count: 9, data: 0}, [{id: BlockID.blockNickel, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotAluminium, count: 9, data: 0}, [{id: BlockID.blockAluminium, data: 0}]);
});
	

});