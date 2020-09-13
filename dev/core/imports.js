IMPORT("flags");
IMPORT("ToolLib");
IMPORT("EnergyNet");
IMPORT("TileRender");

function makeAllStructureVariants(structure) {
	var structureVariants = [];

	var mirroredStructure = structure.map(function(block) {
		return {x: -block.x, y: block.y, z: block.z, id: block.id};
	});

	for (var i = 0; i < 4; i++) {
		structureVariants.push(structure);
		structureVariants.push(mirroredStructure);

		var rotateBy90 = function(block) {
			return {x: block.z, y: block.y, z: -block.x, id: block.id};
		}
		structure = structure.map(rotateBy90);
		mirroredStructure = mirroredStructure.map(rotateBy90);
	}

	return structureVariants;
}

function findStructureVariant(structureVariants, x, y, z) {
	for (var i in structureVariants) {
		var variant = structureVariants[i];

		var match = true;
		for (var j in variant) {
			var block = variant[j];
			if (World.getBlockID(x + block.x, y + block.y, z + block.z) != block.id) {
				match = false;
				break;
			}
		}

		if (match) {
			return i;
		}
	}
	return -1;
}

function continuousStructureCheck(structureVariants, variantIndex, x, y, z) {
	if (variantIndex == -1) {
		return false;
	}
	var variant = structureVariants[variantIndex];
	if (variant) {
		var block = variant[Updatable.getSyncTime() % variant.length];
		if (block && World.getBlockID(x + block.x, y + block.y, z + block.z) != block.id) {
			return false;
		}
	}
	return true;
}

function forEachStructureBlock(structureVariants, variantIndex, x, y, z, func) {
	var variant = structureVariants[variantIndex];
	if (variant) {
		for (var i in variant) {
			var block = variant[i];
			func(block.x + x, block.y + y, block.z + z, block.id);
		}
	}
}

var emptyBlockModel = new ICRender.Model();