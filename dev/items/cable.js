IDRegistry.genItemID("cableLV");
Item.createItem("cableLV", "LV Cable", {name: "cable_LV", meta: 0});

IDRegistry.genItemID("cableMV");
Item.createItem("cableMV", "MV Cable", {name: "cable_MV", meta: 0});

IDRegistry.genItemID("cableHV");
Item.createItem("cableHV", "HV Cable", {name: "cable_HV", meta: 0});

Item.addCreativeGroup("cableEU", Translation.translate("Cables"), [
	ItemID.cableLV,
	ItemID.cableMV,
	ItemID.cableHV,
]);


function registerCablePlaceFunc(nameID, blockID, blockData){
	Item.registerUseFunction(nameID, function(coords, item, block){
		var place = coords;
		if(!World.canTileBeReplaced(block.id, block.data)){
			place = coords.relative;
			block = World.getBlock(place.x, place.y, place.z);
			if(!World.canTileBeReplaced(block.id, block.data)){
				return;
			}
		}
		World.setBlock(place.x, place.y, place.z, blockID, blockData);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		EnergyTypeRegistry.onWirePlaced(place.x, place.y, place.z);
	});
}

for(var i = 0; i < 2; i++){
	registerCablePlaceFunc("cableLV"+i, BlockID["cableLV"+i], 0);
	Item.registerNameOverrideFunction(ItemID["cableLV"+i], function(item, name){
		return name + "\n§7" + Translation.translate("Max voltage: ") + "128 EU/t";
	});
}

for(var i = 0; i < 3; i++){
	registerCablePlaceFunc("cableMV"+i, BlockID["cableMV"+i], 0);
	Item.registerNameOverrideFunction(ItemID["cableMV"+i], function(item, name){
		return name + "\n§7" + Translation.translate("Max voltage: ") + "512 EU/t";
	});
}

for(var i = 0; i < 4; i++){
	registerCablePlaceFunc("cableHV"+i, BlockID["cableHV"+i], 0);
	Item.registerNameOverrideFunction(ItemID["cableHV"+i], function(item, name){
		return name + "\n§7" + Translation.translate("Max voltage: ") + "2048 EU/t";
	});
}