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
	('poisonous'),
  ('tough/sturdy'),
  ('magical');

-- HABITAT INSTERTS
INSERT INTO "habitat" ("label", "terrain")
VALUES
	('auqatic/amphibious', 'oceans, lakes, ponds, swamps, marshes'),
	('burrowing', 'tunnling in dirt or rock but can also include wood or dens'),
	('desert', 'dry climates with wide open spaces does not have to be completely desolate'),
	('tropical/equatorial', 'moist atmospheres with plentiful vegitation'),
	('fridged', 'primarily cold climates with extreme chill could include ice snow or glaciers'),
	('temperate', 'moderate climates with minimal temprature fluctuations');

-- CREATURE DATA INSERTS
INSERT INTO "creatures" ("name", "physical_description", "background", "img_path", "type_id")
VALUES
  (
    'Unicorn',
    'A horse with a single large, pointed, spiraling horn projecting from its forehead. The unicorn most often has a white coat with different varieties of color in their main and tail with cloven hooves.',
    'The unicorn is a legendary creature that has been around since antiquity. It is an eternal fey meaning that the soul will never truly die',
    'unicorn.jpeg',
    7
  ),
  (
    'Sphinx',
    'Gigantic creature standing nearly 40 feet tall with the body of a lion and the face of an egyptian pharaoh. Although it has a human face it has the teeth of a pure carnavour. In some rare cases they have also been know to manifest wings but it is not the norm.',
    'Originating in egypt the Sphinx is a very inteligen creature with an extremely long life span. In most cases the Sphinx was used as a gaurd to protext something of great value.',
    'sphinx.jpg',
    11
  ),
  (
    'Kappa',
    'Humanoid turtle like creature. Resembles a snapping turtle but with a head of hair in with a monk like bald spot on the top of the head. Instead of a balhead showing through however there is a small pool of water in a bowl shaped area at the top of the head They are around the size of a 10 to 14 year old child.',
    'A type of vampirelike lecherous creature that is more intelligent than the devilish oni and less malevolent toward men. Kappa are credited with having taught the art of bonesetting to humans. If the water on the tops of their head is spilled, they lose their supernatural powers. Encounters with kappa invariably include some kind of promise. These promises are extracted from them after forcing their heads down or by tricking them into bowing low, thus spilling out the water. They have a taste for cucumbers, and a standard way of placating kappa is to throw a cucumber into the water where they live.',
    'kappa.jpg',
    7
  ),
  (
    'Kitsune',
    'For the most part they look exactly like a fox except that they have multiple tales. Their size however varies as they are able to change their size. They can have anywhere from one to nine tails. Although they present as a fox they can have mnay different colors for their fur such as the standard fox red-orange, white, yellow, gold, black, or silver. They can also sometimes present with markings on their head or back that look like symbols. Even though they normally look like a fox they can also change forms to a humanoid creature. Some can look almost completely human but there is usually some sine that they are indeed the kitsune be it ears, tail, nails, teeth, or eyes.',
    'A fox spirit of Chinese and Japanese origin. Although they may have up to nine different tails this is not random. The number of tails signifies the age and strength of the kitsune. Those that reach a full nine tails are at the pinicle of their power. Kitsune are intelligent tricksters that have also been known to seduce humans. On the other hand a kitsune is extremely loyal. The specific origin of the kitsune remains a mystery and it is unclear just how old the creatures lineage may be. Kitsune possess superior intelligence, long life, and magical powers. They posses the ability to shapeshift into a humanoid form and even change into various sizes of their fox form. Kitsune usually have one of two temperaments either they are benevolent, celestial foxes associated with giving compasionate gods or they are nogitsune, mischievous or even malicious. Most kitsune are females and it is very rare to see a male kitsune.Their other abilities include the creation of illusions, possession, mind manipulation, and a special magic called "Fox Fire".',
    'kitsune.jpg',
    7
  ),
  (
    'Niffler',
    'Nifflers are rodent-like creatures with a long snout similar to that of a platypus bill. Their coat consists of a black fur that can whick away water and at a closer glance shines with other colors as it catches the ligh. at the front of their stomach is a conceiled pounch which has a deceptively large amount of storage space.',
    'Native to Britain, they lived in burrows as deep as twenty feet below ground, and females produced six to eight young in a single litter. A Niffler''s pouch can hold numerous items, which is where they store their snatched treasures. The niffler is a cleptomaniach when it comes to treasures, gold in particular being a favorite of theirs. Nifflers are gentle by nature and could even be affectionate towards their owners. However, they could destroy belongings looking for sparkly objects, and for that reason it is inadvisable to keep them as house pets. It is also possible that they could turn vicious if provoked.',
    'niffler.jpeg',
    2
  ),
  (
    'Murtlap',
    'Murtlaps are hairless rodents about the size of a medium sized dog. The only thing they have resembling hair are fleshy tendrals that run from the top of their head down their spine. Their skin is pale in color much like a new born rat.',
    'Murtlaps are a species of magical rat-like creatures found in the coasts of the British Isles, where they habitually feed on crustaceans as well as attacking the feet of people who accidentally step on them. They have a fleshy growth on the back which resembles a sea anemone. Said protrusion might be pickled and eaten. Those that eat the tendrals swear that it confers enhanced resistance to jinxes and curses. Overdoses may result in "unsightly purple ear hair". Murtlaps also seem have a mildly venomous bite which can cause hallucinations and potentially death.',
    'murtlap.jpeg',
    2
  ),
  (
    'Swooping Evil',
    'It appears similar to an extremely large butterfly but with a wolf-like skull in place of an ordinary head. When it is not flying with its spiked wings, the Swooping Evil shrinks into a green spiny cocoon. Its back and the back of its wings possess the same green spinny shell as its cacoon form. The cacoon is only about the size of a haci-sack while in its winged form it has a nearly 6 foot wing span.',
    'It can be quite dangerous, as it is an encephalophage — it feeds on people''s brains — and its tough green skin has the ability to deflect at least some spells. It secretes venom that, when properly diluted, can be used to erase bad memories.',
    'swooping-evil.png',
    2
  ),
  (
    'Thunderbird',
    'A vary large falcon like bird. It sports multiple wings of varying sizes and a long almost lion like tail coming out from its tail feathers. It has anywhere from four to six wings and once full grone is the size of a bus. The feather plumage on its head froms two horn like shape coming off of its brow. Usually they are a mixture of white and gold sandy tones the sparkle ever so slightly when the light catches its form just right. In rare cases it can be a dark balck and silver coloring.',
    'Native tribes all across North America, especially along the Pacific coast and in the Great Lakes area, have stories depicting enormous birds of prey. Some stories told that these birds were so large and powerful that when they flapped their wings, thunder was created. Lightning flashed out of their eyes, and water fell off their backs, creating rain. The tribes used thunderbirds to explain some of the things that happened naturally, such as storms and other forms of weather. The legend of Passamaquoddies, for example, describes the quest of two Native Americans in search of the source of thunder high in the mountains. Other stories said that there was a thunderbird who battled an enormous killer whale. When the two beasts fought, they destroyed much of the land, knocking down trees and causing much destruction. Although dangerous and powerful beings, thunderbirds were also seen as benevolent nature spirits, and they sometimes assisted the tribes in their search for food during periods of famine. The igneous rocks known as thunderstones are the eggs of these creatures according to some legends.',
    'thunderbird.jpg',
    7
  ),
  (
    'Bowtruckles',
    'The Bowtruckle was a hand-sized, insect-eating, tree dwelling magical beast with long sharp fingers (two on each hand), brown eyes, and a general appearance of a flat-faced stick figure made of bark and twigs, which served well as camouflage in its natural habitat. They were immensely difficult to spot.',
    'The Bowtruckle could be found in western England, southern Germany, and certain Scandinavian forests. A Bowtruckle served as a tree guardian for its home tree, which was usually a tree whose wood was of wand quality (such as a Wiggentree). The twig-like fingers were well adapted for digging out wood lice in trees and can also be used as a weapon against a foe when aimed at the eyes.\n It was generally a peaceful creature, but it may attempt to gouge out an attacker''s eyes if anything threatened its tree or itself, and is adept at dodging most types of charms. In order to take leaves or wood from a Bowtruckle''s tree one would have to offer it wood lice or fairy eggs as a distraction. A group of Bowtruckles was called a branch.',
    'bowtruckles.jpg',
    13
  ),
  (
    'Demiguise',
    'Covered from head to tail in fur the only parts of the demiguise that reveal its skin are its hands and face. It has large round dark eyes decorated with long hari eye brows that actually trail off of its face. It has a short sheep dog like tail. It is bipedal but its hands and feet are like that of an ape except its hands have long slinder fingers.',
    'The Demiguise is a peaceful, herbivorous magical beast that can make itself invisible and tell the future which makes it very hard to catch.\n It is found in the Far East, but only wizards and witches trained in their capture can even see them. It resembles a cross between a sloth and an ape with large, black eyes and long, silky hair.\n Demiguise pelts are highly sought after as the hair can be woven into Invisibility cloaks. Cloaks made from their hair eventually turn opaque, losing their invisibility effects as time passes.\n Demiguises have precognitive sight so that the only way to catch them is to do something completely unpredictable.\n The Demiguise''s ability to make itself invisible is used to symbolise the number zero, in the runic alphabet.',
    'demiguise.jpg',
    7
  ),
  (
    'Ancient Bronze Dragon',
    'It is approximately 90 feet in length from nose to tail. Decorated with bronze colored scale that have green stripping on its back almost like a patina. Walking on all fours its wings that start at the shoulders of its front legs nearly spans all the way to its hind legs. The wingspan itself is nearly double the dragon''s total length. It also has a spinny fin protrusion running down its back.',
    'A bronze dragon lairs in coastal caves. It might salvage a wrecked ship, reconstruct it within the confines of its lair, and use it as a treasure vault or nest for its eggs. The region containing a legendary bronze dragon''s lair is warped by the dragon''s magic. The dragon can magically polymorph into a humanoid or beast, or back into its true form. This dragon has two very different breath attacks; one is its lightning breath which is like shooting a larg lightning bolt from its mouth in a relatively straight line, or the second breath attack which is a repulsion breath that is a dense energy that pushes people and object in its path away with a considerable force. When within its domain it can call down a thunderclap to a location of its choosing within its field of vision',
    'ancient-bronze-dragon.jpg',
    5
  ),
  (
    'Stone Golem',
    'Human like figure usually with a large almost hulk like frame. Although it is a bipedal humanoid figure it cannot be said that it looks like a human. Its rigid stone exterior is like battle tested armor. Usually a single magic sygil decorates its forehead giving it life. They are not very intelegent usually driven to a single predefined task.',
    'These are stone humanoids summoned by magicians. Their low intelegence can make them hard to control but also garuntee that they will not turn on their creators. They are not very agile but they are extremely strong and sturdy. Often they are created as protectors.',
    'stone-golem.jpg',
    4
  );

-- CREATURE / ATTRIBUTE RELATIONAL DATA
INSERT INTO "creatures_attributes" ("creatures_id", "attributes_id")
VALUES
  -- 1 Unicorn
  (1, 1),
  (1, 5),
  (1, 12),
  -- 2 Sphinx
  (2, 3),
  (2, 4),
  (2, 6),
  (2, 7),
  -- 3 Kappa
  (3, 2),
  (3, 7),
  (3, 12),
  -- 4 Kitsune
  (4, 2),
  (4, 6),
  (4, 7),
  (4, 12),
  -- 5 Niffler
  (5, 2),
  (5, 1),
  (5, 7),
  (5, 12),
  -- 6 Murtlap
  (6, 2),
  (6, 6),
  (6, 8),
  -- 7 Swooping Evil
  (7, 3),
  (7, 4),
  (7, 5),
  (7, 6),
  (7, 8),
  -- 8 Thunderbird
  (8, 3),
  (8, 4),
  (8, 7),
  (8, 12),
  -- 9 Bowtruckles
  (9, 1),
  -- 10 Demiguise
  (10, 2),
  (10, 1),
  (10, 12),
  -- 11 Ancient Bronze Dragon
  (11, 3),
  (11, 4),
  (11, 12),
  (11, 5),
  (11, 6),
  (11, 7),
  -- 12 Stone Golem
  (12, 11),
  (12, 12);

-- CREATURE / HABITAT RELATIONAL DATA
INSERT INTO "creatures_habitat" ("creatures_id", "habitat_id")
VALUES
  -- 1 Unicorn
  (1, 4),
  (1, 6),
  -- 2 Sphinx
  (2, 3),
  (2, 6),
  -- 3 Kappa
  (3, 1),
  (3, 4),
  -- 4 Kitsune
  (4, 4),
  (4, 5),
  (4, 6),
  -- 5 Niffler
  (5, 2),
  -- 6 Murtlap
  (6, 2),
  -- 7 Swooping Evil
  (7, 4),
  -- 8 Thunderbird
  (8, 3),
  (8, 6),
  -- 9 Bowtruckles
  (9, 1),
  (9, 4),
  -- 10 Demiguise
  (10, 4),
  (10, 6),
  -- 11 Ancient Bronze Dragon
  (11, 1),
  (11, 2),
  (11, 6),
  -- 12 Stone Golem
  (12, 5),
  (12, 4),
  (12, 6),
  (12, 3);