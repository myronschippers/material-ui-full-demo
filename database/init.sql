-- CREATE DATABASE "fantastic_bestiary";

-- CREATE ALL NECESSARY TABLES
-- STAND ALONE DATA TABLES

CREATE TABLE "type" (
	"id" SERIAL PRIMARY KEY,
	"label" VARCHAR(40),
	"description" TEXT
);

-- herbivorous
-- omnivorous
-- carnivorous
-- winged
-- horned
-- fang
-- claw
-- venomous
-- acidic
-- poisonous
CREATE TABLE "attributes" (
	"id" SERIAL PRIMARY KEY,
	"tag" VARCHAR(100) NOT NULL
);

-- auqatic/amphibious
-- burrowing
-- desert
-- tropical/equatorial
-- temperate
CREATE TABLE "habitat" (
	"id" SERIAL PRIMARY KEY,
	"label" VARCHAR(100) NOT NULL,
	"terrain" TEXT 
);

-- DATA TABLES with RELATIONAL INFO

CREATE TABLE "creatures" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(200) NOT NULL,
	"physical_description" TEXT NOT NULL,
	"background" TEXT,
	"img_path" VARCHAR(300),
	"type_id" INT REFERENCES "type"
);

-- JUNCTION TABLES

CREATE TABLE "creatures_attributes" (
	"id" SERIAL PRIMARY KEY,
	"attributes_id" INT REFERENCES "attributes" NOT NULL,
	"creatures_id" INT REFERENCES "creatures" NOT NULL
);

CREATE TABLE "creatures_habitat" (
	"id" SERIAL PRIMARY KEY,
	"habitat_id" INT REFERENCES "habitat" NOT NULL,
	"creatures_id" INT REFERENCES "creatures" NOT NULL
);