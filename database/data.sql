-- BEAST TYPES INSERTS
INSERT INTO "type" ("label", "description")
VALUES
	('Aberration', E'Utterly alien beings. Many of them have innate magical abilities drawn from the creature\'s alien mind rather than the mystical forces of the world. The quintessential aberrations are aboleths, and slaadi.'),
	('Beast', 'Nonhumanoid creatures that are a natural part of the fantasy ecology. Some of them have magical powers, but most are unintelligent and lack any society or language. Beasts include all varieties of ordinary animals, dinosaurs, and giant versions of animals.'),
	('Celestial', 'Creatures native to the Upper Planes. Many of them are the servants of deities, employed as messengers or agents in the mortal realm and throughout the planes. Celestials are good by nature, so the exceptional celestial who strays from a good alignment is a horrifying rarity. Celestials include angels, couatls, and pegasi.'),
	('Construct', 'Creatures made, not born. Some are programmed by their creators to follow a simple set of instructions, while others are imbued with sentience and capable of independent thought. Golems are the iconic constructs. Many creatures native to the outer plane of Mechanus, such as modrons, are constructs shaped from the raw material of the plane by the will of more powerful creatures.'),
	('Dragon', 'Large reptilian creatures of ancient origin and tremendous power. True dragons, including the good metallic dragons and the evil chromatic dragons, are highly intelligent and have innate magic. Also in this category are creatures distantly related to true dragons, but less powerful, less intelligent, and less magical, such as wyverns and pseudodragons.'),
	('Elemental', 'Creatures native to the elemental planes. Some creatures of this type are little more than animate masses of their respective elements, including the creatures simply called elementals. Others have biological forms infused with elemental energy. The races of genies, including djinn and efreet, form the most important civilizations on the elemental planes. Other elemental creatures include azers, invisible stalkers, and water weirds.'),
	('Fey', 'Magical creatures closely tied to the forces of nature. They dwell in twilight groves and misty forests. In some worlds, they are closely tied to the Feywild, also called the Plane of Faerie. Some are also found in the Outer Planes, particularly the planes of Arborea and the Beastlands. Fey include dryads, pixies, and satyrs.'),
	('Fiend', 'Creatures of wickedness that are native to the Lower Planes. A few are the servants of deities, but many more labor under the leadership of archdevils and demon princes. Evil priests and mages sometimes summon fiends to the material world to do their bidding. If an evil celestial is a rarity, a good fiend is almost inconceivable. Fiends include demons, devils, hell hounds, rakshasas, and yugoloths.'),
	('Giant', 'Tower over humans and their kind. They are humanlike in shape, though some have multiple heads (ettins) or deformities (fomorians). The six varieties of true giant are hill giants, stone giants, frost giants, fire giants, cloud giants, and storm giants. Besides these, creatures such as ogres and trolls are giants.'),
	('Humanoid', 'Both civilized and savage, including humans and a tremendous variety of other species. They have language and culture, few if any innate magical abilities (though most humanoids can learn spellcasting), and a bipedal form. The most common humanoid races are the ones most suitable as player characters: humans, dwarves, elves, and halflings. Almost as numerous but far more savage and brutal, and almost uniformly evil, are the races of goblinoids (goblins, hobgoblins, and bugbears), orcs, gnolls, lizardfolk, and kobolds.'),
	('Monstrosity', 'Monsters in the strictest sense--frightening creatures that are not ordinary, not truly natural, and almost never benign. Some are the results of magical experimentation gone awry (such as owlbears), and others are the product of terrible curses (including minotaurs). They defy categorization, and in some sense serve as a catch-all category for creatures that do not fit into any other type.'),
	('Ooze', 'Gelatinous creatures that rarely have a fixed shape. They are mostly subterranean, dwelling in caves and dungeons and feeding on refuse, carrion, or creatures unlucky enough to get in their way. Black puddings and gelatinous cubes are among the most recognizable oozes.'),
	('Plant', 'Plants in this context are vegetable creatures, not ordinary flora. Most of them are ambulatory, and some are carnivorous. The quintessential plants are the shambling mound and the treant. Fungal creatures such as the gas spore and the myconid also fall into this category.'),
	('Undead', 'Once-living creatures brought to a horrifying state of undeath through the practice of necromantic magic or some unholy curse. Undead include walking corpses, such as vampires and zombies, as well as bodiless spirits, such as ghosts and specters.');
	
-- ATTRIBUTES INSERTS
INSERT INTO "attributes" ("tag")
VALUES
	('herbivorous'),
	('omnivorous'),
	('carnivorous'),
	('winged'),
	('horned'),
	('fang'),
	('claw'),
	('venomous'),
	('acidic'),
	('poisonous');

-- HABITAT INSTERTS
INSERT INTO "habitat" ("label", "terrain")
VALUES
	('auqatic/amphibious', 'oceans, lakes, ponds, swamps, marshes'),
	('burrowing', 'tunnling in dirt or rock but can also include wood or dens'),
	('desert', 'dry climates with wide open spaces does not have to be completely desolate'),
	('tropical/equatorial', 'moist atmospheres with plentiful vegitation'),
	('fridged', 'primarily cold climates with extreme chill could include ice snow or glaciers'),
	('temperate', 'moderate climates with minimal temprature fluctuations');