Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
}, "ore");

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
	{name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 2, true);
Block.setDestroyLevel("oreCopper", 2);
ToolLib.addBlockDropOnExplosion("oreCopper");
Translation.addTranslation("Copper Ore", {ru: "Медная руда"});

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
	{name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone", 2, true);
Block.setDestroyLevel("oreTin", 2);
ToolLib.addBlockDropOnExplosion("oreTin");
Translation.addTranslation("Tin Ore", {ru: "Оловянная руда"});

IDRegistry.genBlockID("oreAluminium");
Block.createBlock("oreAluminium", [
	{name: "Aluminium Ore", texture: [["ore_aluminium", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreAluminium, "stone", 2, true);
Block.setDestroyLevel("oreAluminium", 2);
ToolLib.addBlockDropOnExplosion("oreAluminium");
Translation.addTranslation("Aluminium Ore", {ru: "Алюминиевая руда"});

IDRegistry.genBlockID("oreZinc");
Block.createBlock("oreZinc", [
	{name: "Zinc Ore", texture: [["ore_zinc", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreZinc, "stone", 2, true);
Block.setDestroyLevel("oreZinc", 2);
ToolLib.addBlockDropOnExplosion("oreZinc");
Translation.addTranslation("Zinc Ore", {ru: "Цинковая руда"});

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
	{name: "Lead Ore", texture: [["ore_lead", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreLead, "stone", 2, true);
Block.setDestroyLevel("oreLead", 2);
ToolLib.addBlockDropOnExplosion("oreLead");
Translation.addTranslation("Lead ore", {ru: "Свинцовая руда"});

IDRegistry.genBlockID("oreOsmium");
Block.createBlock("oreOsmium", [
	{name: "Osmium Ore", texture: [["ore_osmium", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreOsmium, "stone", 3, true);
Block.setDestroyLevel("oreOsmium", 3);
ToolLib.addBlockDropOnExplosion("oreOsmium");
Translation.addTranslation("Osmium Ore", {ru: "Осмиевая руда"});

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
	{name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 2, true);
Block.setDestroyLevel("oreSilver", 2);
ToolLib.addBlockDropOnExplosion("oreSilver");
Translation.addTranslation("Silver ore", {ru: "Серебряная руда"});

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
	{name: "Nickel Ore", texture: [["ore_nickel", 0]], inCreative: true}
], "ore");
ToolAPI.registerBlockMaterial(BlockID.oreNickel, "stone", 2, true);
Block.setDestroyLevel("oreNickel", 2);
ToolLib.addBlockDropOnExplosion("oreNickel");
Translation.addTranslation("Nickel Ore", {ru: "Никелевая руда"});

Item.addCreativeGroup("ores", Translation.translate("Ores"), [
	BlockID.oreCopper,
	BlockID.oreTin,
	BlockID.oreLead,
	BlockID.oreZinc,
	BlockID.oreSilver,
    BlockID.oreNickel,
    BlockID.oreOsmium,
    BlockID.oreAluminium
]);

var OreGenerator = {
	copper: {
		enabled: __config__.getBool("copper_ore.enabled"),
		count: __config__.getNumber("copper_ore.count"),
		size: __config__.getNumber("copper_ore.size"),
		minHeight: __config__.getNumber("copper_ore.minHeight"),
		maxHeight: __config__.getNumber("copper_ore.maxHeight")
	},
	tin: {
		enabled: __config__.getBool("tin_ore.enabled"),
		count: __config__.getNumber("tin_ore.count"),
		size: __config__.getNumber("tin_ore.size"),
		minHeight: __config__.getNumber("tin_ore.minHeight"),
		maxHeight: __config__.getNumber("tin_ore.maxHeight")
	},
	aluminium: {
		enabled: __config__.getBool("aluminium_ore.enabled"),
		count: __config__.getNumber("aluminium_ore.count"),
		size: __config__.getNumber("aluminium_ore.size"),
		minHeight: __config__.getNumber("aluminium_ore.minHeight"),
		maxHeight: __config__.getNumber("aluminium_ore.maxHeight")
	},
	zinc: {
		enabled: __config__.getBool("zinc_ore.enabled"),
		count: __config__.getNumber("zinc_ore.count"),
		size: __config__.getNumber("zinc_ore.size"),
		minHeight: __config__.getNumber("zinc_ore.minHeight"),
		maxHeight: __config__.getNumber("zinc_ore.maxHeight")
	},
	nickel: {
		enabled: __config__.getBool("nickel_ore.enabled"),
		count: __config__.getNumber("nickel_ore.count"),
		size: __config__.getNumber("nickel_ore.size"),
		minHeight: __config__.getNumber("nickel_ore.minHeight"),
		maxHeight: __config__.getNumber("nickel_ore.maxHeight")
	},
	osmium: {
		enabled: __config__.getBool("osmium_ore.enabled"),
		count: __config__.getNumber("osmium_ore.count"),
		size: __config__.getNumber("osmium_ore.size"),
		minHeight: __config__.getNumber("osmium_ore.minHeight"),
		maxHeight: __config__.getNumber("osmium_ore.maxHeight")
	},
	lead: {
		enabled: __config__.getBool("lead_ore.enabled"),
		count: __config__.getNumber("lead_ore.count"),
		size: __config__.getNumber("lead_ore.size"),
		minHeight: __config__.getNumber("lead_ore.minHeight"),
		maxHeight: __config__.getNumber("lead_ore.maxHeight")
	},
	
	addFlag: function(name, flag, disableOre){
		if(this[name].enabled){
			var flag = !Flags.addFlag(flag)
			if(disableOre) this[name].enabled = flag;
		}
	},

	randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
		minHeight = minHeight || 0;
		maxHeight = maxHeight || 128;
		var x = chunkX*16 + random.nextInt(16);
		var z = chunkZ*16 + random.nextInt(16);
		var y = random.nextInt(maxHeight - minHeight + 1) - minHeight;
		return {x: x, y: y, z: z};
	}
}

OreGenerator.addFlag("copper", "oreGenCopper");
OreGenerator.addFlag("tin", "oreGenTin");
OreGenerator.addFlag("lead", "oreGenLead", true);
OreGenerator.addFlag("silver", "oreGenSilver", true);
OreGenerator.addFlag("nickel", "oreGenNickel", true);
OreGenerator.addFlag("osmium", "oreGenOsmium", true);
OreGenerator.addFlag("zinc", "oreGenZinc", true);
OreGenerator.addFlag("aluminium", "oreGenAluminium", true);

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ, random){
	if(OreGenerator.copper.enabled){
		for(var i = 0; i < OreGenerator.copper.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.copper.minHeight, OreGenerator.copper.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 0, OreGenerator.copper.size, false, random.nextInt());
		}
	}

	if(OreGenerator.tin.enabled){
		for(var i = 0; i < OreGenerator.tin.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.tin.minHeight, OreGenerator.tin.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTin, 0, OreGenerator.tin.size, false, random.nextInt());
		}
	}
	
	if(OreGenerator.lead.enabled){
		for(var i = 0; i < OreGenerator.lead.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.lead.minHeight, OreGenerator.lead.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreLead, 0, OreGenerator.lead.size, false, random.nextInt());
		}
	}
    
    if(OreGenerator.silver.enabled){
		for(var i = 0; i < OreGenerator.silver.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.silver.minHeight, OreGenerator.silver.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilver, 0, OreGenerator.silver.size, false, random.nextInt());
		}
	}

	if(OreGenerator.nickel.enabled){
		for(var i = 0; i < OreGenerator.nickel.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.nickel.minHeight, OreGenerator.nickel.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreNickel, 0, OreGenerator.nickel.size, false, random.nextInt());
		}
	}
	
	if(OreGenerator.zinc.enabled){
		for(var i = 0; i < OreGenerator.zinc.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.zinc.minHeight, OreGenerator.zinc.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreZinc, 0, OreGenerator.zinc.size, false, random.nextInt());
		}
	}
    
    
	
	if(OreGenerator.aluminium.enabled){
		for(var i = 0; i < OreGenerator.aluminium.count; i++){
			var coords = OreGenerator.randomCoords(random, chunkX, chunkZ, OreGenerator.aluminium.minHeight, OreGenerator.aluminium.maxHeight);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAluminium, 0, OreGenerator.aluminium.size, false, random.nextInt());
		}
	}
	
	
});