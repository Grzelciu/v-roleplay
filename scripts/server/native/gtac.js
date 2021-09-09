// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: gtac.js
// DESC: Provides natives for GTA Connected (GTA III, VC, SA, & IV)
// TYPE: Server (JavaScript)
// ===========================================================================

// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: game-data.js
// DESC: Provides coords, ids, names, and other data for the games
// TYPE: Shared (JavaScript)
// ===========================================================================

let gameData = {
    weaponNames: [
        ["Unknown"], // Game 0 is invalid (GTA 3 is the first game, and is ID 1)

        [ // GTA III
            "Fist",
            "Bat",
            "Pistol",
            "Uzi",
            "Shotgun",
            "AK47",
            "M16",
            "Sniper Rifle",
            "Rocket Launcher",
            "Flamethrower",
            "Molotov",
            "Grenade"
        ],

        [ // GTA VC
            "Fist",
            "Brass Knuckles",
            "Screwdriver",
            "Golf Club",
            "Nitestick",
            "Knife",
            "Baseball Bat",
            "Hammer",
            "Meat Cleaver",
            "Machete",
            "Katana",
            "Chainsaw",
            "Grenade",
            "Remote Grenade",
            "Teargas",
            "Molotov Cocktail",
            "Missile",
            "Colt .45",
            "Python",
            "Shotgun",
            "Spaz Shotgun",
            "Stubby Shotgun",
            "Tec-9",
            "Uzi",
            "Ingram",
            "MP5",
            "M4",
            "Ruger",
            "Sniper Rifle",
            "Laser Sniper",
            "RPG",
            "Flame Thrower",
            "M60",
            "Minigun"
        ],

        [ // GTA San Andreas
            "Fist",
            "Brass Knuckles",
            "Golf Club",
            "Nightstick",
            "Knife",
            "Baseball Bat",
            "Shovel",
            "Pool Cue",
            "Katana",
            "Chainsaw",
            "Purple Dildo",
            "Dildo",
            "Vibrator",
            "Silver Vibrator",
            "Flowers",
            "Cane",
            "Grenade",
            "Teargas",
            "Molotov Cocktail",
            "Unknown",
            "Unknown",
            "Unknown",
            "9mm",
            "Silenced 9mm",
            "Desert Eagle",
            "Shotgun",
            "Sawnoff Shotgun",
            "Combat Shotgun",
            "Uzi",
            "MP5",
            "AK-47",
            "M4",
            "Tec-9",
            "Country Rifle",
            "Sniper Rifle",
            "RPG",
            "HS Rocket",
            "Flamethrower",
            "Minigun",
            "Satchel Charge",
            "Detonator",
            "Spraycan",
            "Fire Extinguisher",
            "Camera",
            "Night Vision Goggles",
            "Thermal Goggles",
            "Parachute",
            "Cellphone",
            "Jetpack",
            "Skateboard"
        ],

        [ // GTA Underground
            "Fist",
            "Brass Knuckles",
            "Golf Club",
            "Nightstick",
            "Knife",
            "Baseball Bat",
            "Shovel",
            "Pool Cue",
            "Katana",
            "Chainsaw",
            "Purple Dildo",
            "Dildo",
            "Vibrator",
            "Silver Vibrator",
            "Flowers",
            "Cane",
            "Grenade",
            "Teargas",
            "Molotov Cocktail",
            "Unknown",
            "Unknown",
            "Unknown",
            "9mm",
            "Silenced 9mm",
            "Desert Eagle",
            "Shotgun",
            "Sawnoff Shotgun",
            "Combat Shotgun",
            "Uzi",
            "MP5",
            "AK-47",
            "M4",
            "Tec-9",
            "Country Rifle",
            "Sniper Rifle",
            "RPG",
            "HS Rocket",
            "Flamethrower",
            "Minigun",
            "Satchel Charge",
            "Detonator",
            "Spraycan",
            "Fire Extinguisher",
            "Camera",
            "Night Vision Goggles",
            "Thermal Goggles",
            "Parachute",
            "Cellphone",
            "Jetpack",
            "Skateboard",
        ],

        [ // GTA IV
            "Fist",
            "Bat",
            "Pool Cue",
            "Knife",
            "Grenade",
            "Molotov",
            "Rocket",
            "Pistol",
            "UNUSED",
            "Desert Eagle",
            "Stubby Shotgun",
            "Baretta Shotgun",
            "Micro Uzi",
            "MP5",
            "AK-47",
            "M4",
            "Combat Sniper",
            "M40A1",
            "RPG",
            "Flamethrower",
            "Minigun",
            "EFLC Weapon 1",
            "EFLC Weapon 2",
            "EFLC Weapon 3",
            "EFLC Weapon 4",
            "EFLC Weapon 5",
            "EFLC Weapon 6",
            "EFLC Weapon 7",
            "EFLC Weapon 8",
            "EFLC Weapon 9",
            "EFLC Weapon 10",
            "EFLC Weapon 11",
            "EFLC Weapon 12",
            "EFLC Weapon 13",
            "EFLC Weapon 14",
            "EFLC Weapon 15",
            "EFLC Weapon 16",
            "EFLC Weapon 17",
            "EFLC Weapon 18",
            "EFLC Weapon 19",
            "EFLC Weapon 20",
            "EFLC Weapon 21",
            "EFLC Weapon 22",
            "EFLC Weapon 23",
            "EFLC Weapon 24",
            "Camera",
        ],

        [ // GTA IV (EFLC)
            "Fist",
            "Bat",
            "Pool Cue",
            "Knife",
            "Grenade",
            "Molotov",
            "UNUSED",
            "Pistol",
            "Desert Eagle",
            "Stubby Shotgun",
            "Baretta Shotgun",
            "Shotgun",
            "Micro Uzi",
            "MP5",
            "AK-47",
            "M4",
            "Combat Sniper",
            "M40A1",
            "RPG",
            "Flamethrower",
            "Minigun",
            "EFLC Weapon 1",
            "EFLC Weapon 2",
            "EFLC Weapon 3",
            "EFLC Weapon 4",
            "EFLC Weapon 5",
            "EFLC Weapon 6",
            "EFLC Weapon 7",
            "EFLC Weapon 8",
            "EFLC Weapon 9",
            "EFLC Weapon 10",
            "EFLC Weapon 11",
            "EFLC Weapon 12",
            "EFLC Weapon 13",
            "EFLC Weapon 14",
            "EFLC Weapon 15",
            "EFLC Weapon 16",
            "EFLC Weapon 17",
            "EFLC Weapon 18",
            "EFLC Weapon 19",
            "EFLC Weapon 20",
            "EFLC Weapon 21",
            "EFLC Weapon 22",
            "EFLC Weapon 23",
            "EFLC Weapon 24",
            "Camera",
        ],
    ],
	gameAnnounceColours: [
		COLOUR_BLACK,					// Invalid
		COLOUR_WHITE,					// GTA III
		COLOUR_AQUA,					// GTA Vice City
		COLOUR_ORANGE,					// GTA San Andreas
		COLOUR_ORANGE,					// GTA Underground
		COLOUR_SILVER,				    // GTA IV
		COLOUR_SILVER					// GTA IV (EFLC)
	],
	weatherNames: [
		["Unknown"],
		[ // GTA III
			"Clear",
			"Overcast",
			"Thunderstorm",
			"Fog",
			"Clear",
			"Rainy",
			"Dark/Cloudy",
			"Light/Cloudy",
			"Overcast/Cloudy",
			"Grey/Cloudy"
		],
		[ // GTA Vice City
			"Clear",
			"Overcast",
			"Thunderstorm",
			"Fog",
			"Clear",
			"Rainy",
			"Dark/Cloudy",
			"Light/Cloudy",
			"Overcast/Cloudy",
			"Grey/Cloudy"
		],
		[ // GTA San Andreas
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Thunderstorm",
			"Cloudy/Foggy",
			"Clear Blue Skies",
			"Heatwave",
			"Dull/Colorless",
			"Dull/Colorless",
			"Dull/Colorless",
			"Dull/Colorless",
			"Dull/Rainy",
			"Heatwave",
			"Heatwave",
			"Sandstorm",
			"Greenish/Foggy"
		],
		[ // GTA Underground
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Blue Skies",
			"Thunderstorm",
			"Cloudy/Foggy",
			"Clear Blue Skies",
			"Heatwave",
			"Dull/Colorless",
			"Dull/Colorless",
			"Dull/Colorless",
			"Dull/Colorless",
			"Dull/Rainy",
			"Heatwave",
			"Heatwave",
			"Sandstorm",
			"Greenish/Foggy"
		],
		[ // GTA IV
			"Extra Sunny",
			"Sunny",
			"Sunny/Windy",
			"Cloudy",
			"Rain",
			"Light Rain",
			"Foggy",
			"Thunderstorm",
			"Extra Sunny",
			"Sunny/Windy",
		],
	],
	gameNames: [
		"Unknown",
		"GTA III",
		"GTA Vice City",
		"GTA San Andreas",
		"GTA Underground",
		"GTA IV",
		"GTA IV: Episodes from Liberty City",
	],
	vehicleWheelStateNames: [
		"normal",
		"flat",
		"gone"
	],
	vehicleDoorStateNames: [
		"closed",
		"closed",
		"swinging",
		"open"
	],
	vehicleWheelNames: [
		"front left",
		"rear left",
		"front right",
		"rear right"
	],
	vehicleLightNames: [
		"front left",
		"rear left",
		"front right",
		"rear right"
	],
	vehicleRadioStationNames: [
		[],
		[  // GTA III
			"Head Radio",
			"Double Cleff FM",
			"Jah Radio",
			"Rise FM",
			"Lips 106",
			"Flashback FM",
			"Chatterbox 109",
			"MP3 Player"
		],
		[ // GTA Vice City
			"Wildstyle",
			"Flash FM",
			"K CHAT",
			"Fever 105",
			"VROCK",
			"VCPR",
			"Espantoso",
			"Emotion 98.3",
			"Wave 103",
			"MP3 Player"
		],
		[ // GTA San Andreas
			"KROSE",
			"KDST",
			"Bounce FM",
			"SFUR",
			"Radio Los Santos",
			"Radio X",
			"CSR Radio",
			"KJAH West",
			"Master Sounds",
			"WCTR",
			"User Track Player"
		]
	],
	vehicleModelIdStart: [
		0,
		90, 	// GTA III
		130, 	// GTA Vice City
		400, 	// GTA San Andreas
		400		// GTA Underground
	],
	vehicleNames: [
		[],
		[ // GTA III
			"Landstalker",
			"Idaho",
			"Stinger",
			"Linerunner",
			"Perennial",
			"Sentinel",
			"Patriot",
			"Fire Truck",
			"Trashmaster",
			"Stretch",
			"Manana",
			"Infernus",
			"Blista",
			"Pony",
			"Mule",
			"Cheetah",
			"Ambulance",
			"FBI Car",
			"Moonbeam",
			"Esperanto",
			"Taxi",
			"Kuruma",
			"Bobcat",
			"Mr. Whoopee",
			"BF Injection",
			"Manana (Corpse)",
			"Police Car",
			"Enforcer",
			"Securicar",
			"Banshee",
			"Predator",
			"Bus",
			"Rhino",
			"Barracks OL",
			"Train",
			"Police Helicopter",
			"Dodo",
			"Coach",
			"Cabbie",
			"Stallion",
			"Rumpo",
			"RC Bandit",
			"Bellyup",
			"Mr. Wongs",
			"Mafia Sentinel",
			"Yardie Lobo",
			"Yakuza Stinger",
			"Diablo Stallion",
			"Cartel Cruiser",
			"Hoods Rumpo XL",
			"Air Train",
			"Dead Dodo",
			"Speeder",
			"Reefer",
			"Panlantic",
			"Flatbed",
			"Yankee",
			"Escape",
			"Borgnine Taxi",
			"Toyz Van",
			"Ghost"
		],
		[ // GTA Vice City
			"Landstalker",
			"Idaho",
			"Stinger",
			"Linerunner",
			"Perennial",
			"Sentinel",
			"Rio",
			"Firetruck",
			"Trashmaster",
			"Stretch",
			"Manana",
			"Infernus",
			"Voodoo",
			"Pony",
			"Mule",
			"Cheetah",
			"Ambulance",
			"FBI Washington",
			"Moonbeam",
			"Esperanto",
			"Taxi",
			"Washington",
			"Bobcat",
			"Mr.Whoopee",
			"BF-Injection",
			"Hunter",
			"Police Car",
			"Enforcer",
			"Securicar",
			"Banshee",
			"Predator",
			"Bus",
			"Rhino",
			"Barracks OL",
			"Cuban Hermes",
			"Helicopter",
			"Angel",
			"Coach",
			"Cabbie",
			"Stallion",
			"Rumpo",
			"RC Bandit",
			"Romero's Hearse",
			"Packer",
			"Sentinel XS",
			"Admiral",
			"Squalo",
			"Sea Sparrow",
			"Pizza Boy",
			"Gang Burrito",
			"Airtrain",
			"Deaddodo",
			"Speeder",
			"Reefer",
			"Tropic",
			"Flatbed",
			"Yankee",
			"Caddy",
			"Zebra Cab",
			"Top Fun",
			"Skimmer",
			"PCJ-600",
			"Faggio",
			"Freeway",
			"Rcbaron",
			"RC Raider",
			"Glendale",
			"Oceanic",
			"Sanchez",
			"Sparrow",
			"Patriot",
			"Love Fist",
			"Coast Guard",
			"Dinghy",
			"Hermes",
			"Sabre",
			"Sabre Turbo",
			"Phoenix",
			"Walton",
			"Regina",
			"Comet",
			"Deluxo",
			"Burrito",
			"Spand Express",
			"Marquis",
			"Baggage Handler",
			"Kaufman Cab",
			"Maverick",
			"VCN Maverick",
			"Rancher",
			"FBI Rancher",
			"Virgo",
			"Greenwood",
			"Cuban Jetmax",
			"Hotring Racer 1",
			"Sandking",
			"Blista Compact",
			"Police Maverick",
			"Boxville",
			"Benson",
			"Mesa Grande",
			"RC Goblin",
			"Hotring Racer 2",
			"Hotring Racer 3",
			"Bloodring Banger 1",
			"Bloodring Banger 2",
			"VCPD Cheetah"
		],
		[ // GTA San Andreas
			"Landstalker",
			"Bravura",
			"Buffalo",
			"Linerunner",
			"Pereniel",
			"Sentinel",
			"Dumper",
			"Firetruck",
			"Trashmaster",
			"Stretch",
			"Manana",
			"Infernus",
			"Voodoo",
			"Pony",
			"Mule",
			"Cheetah",
			"Ambulance",
			"Leviathan",
			"Moonbeam",
			"Esperanto",
			"Taxi",
			"Washington",
			"Bobcat",
			"Mr Whoopee",
			"BF Injection",
			"Hunter",
			"Premier",
			"Enforcer",
			"Securicar",
			"Banshee",
			"Predator",
			"Bus",
			"Rhino",
			"Barracks",
			"Hotknife",
			"Trailer",
			"Previon",
			"Coach",
			"Cabbie",
			"Stallion",
			"Rumpo",
			"RC Bandit",
			"Romero",
			"Packer",
			"Monster",
			"Admiral",
			"Squalo",
			"Seasparrow",
			"Pizzaboy",
			"Tram",
			"Trailer",
			"Turismo",
			"Speeder",
			"Reefer",
			"Tropic",
			"Flatbed",
			"Yankee",
			"Caddy",
			"Solair",
			"Berkley's RC Van",
			"Skimmer",
			"PCJ-600",
			"Faggio",
			"Freeway",
			"RC Baron",
			"RC Raider",
			"Glendale",
			"Oceanic",
			"Sanchez",
			"Sparrow",
			"Patriot",
			"Quad",
			"Coastguard",
			"Dinghy",
			"Hermes",
			"Sabre",
			"Rustler",
			"ZR-350",
			"Walton",
			"Regina",
			"Comet",
			"BMX",
			"Burrito",
			"Camper",
			"Marquis",
			"Baggage",
			"Dozer",
			"Maverick",
			"News Maverick",
			"Rancher",
			"FBI Rancher",
			"Virgo",
			"Greenwood",
			"Jetmax",
			"Hotring-Racer A",
			"Sandking",
			"Blista",
			"Police Maverick",
			"Boxville",
			"Benson",
			"Mesa",
			"RC Goblin",
			"Hotring-Racer B",
			"Hotring-Racer C",
			"Bloodring-Banger",
			"Rancher",
			"Super-GT",
			"Elegant",
			"Journey",
			"Bike",
			"Mountain Bike",
			"Beagle",
			"Cropdust",
			"Stunt",
			"Tanker",
			"RoadTrain",
			"Nebula",
			"Majestic",
			"Buccaneer",
			"Shamal",
			"Hydra",
			"FCR-900",
			"NRG-500",
			"HPV1000",
			"Cement Truck",
			"Tow Truck",
			"Fortune",
			"Cadrona",
			"FBI Truck",
			"Willard",
			"Forklift",
			"Tractor",
			"Combine",
			"Feltzer",
			"Remington",
			"Slamvan",
			"Blade",
			"Freight",
			"Streak",
			"Vortex",
			"Vincent",
			"Bullet",
			"Clover",
			"Sadler",
			"Firetruck",
			"Hustler",
			"Intruder",
			"Primo",
			"Cargobob",
			"Tampa",
			"Sunrise",
			"Merit",
			"Utility",
			"Nevada",
			"Yosemite",
			"Windsor",
			"Monster Truck A",
			"Monster Truck B",
			"Uranus",
			"Jester",
			"Sultan",
			"Stratum",
			"Elegy",
			"Raindance",
			"RC Tiger",
			"Flash",
			"Tahoma",
			"Savanna",
			"Bandito",
			"Freight",
			"Trailer",
			"Kart",
			"Mower",
			"Duneride",
			"Sweeper",
			"Broadway",
			"Tornado",
			"AT-400",
			"DFT-30",
			"Huntley",
			"Stafford",
			"BF-400",
			"Newsvan",
			"Tug",
			"Trailer",
			"Emperor",
			"Wayfarer",
			"Euros",
			"Hotdog",
			"Club",
			"Trailer",
			"Trailer",
			"Andromada",
			"Dodo",
			"RC Cam",
			"Launch",
			"Police Car (LSPD)",
			"Police Car (SFPD)",
			"Police Car (LVPD)",
			"Police Ranger",
			"Picador",
			"S.W.A.T. Van",
			"Alpha",
			"Phoenix",
			"Broken Glendale",
			"Broken Sadler",
			"Luggage Trailer",
			"Luggage Trailer",
			"Stair Trailer",
			"Boxville",
			"Farm Plow",
			"Utility Trailer"
		],
	],
	vehicleColourHex: [
		[],
		[ // GTA III
			"#050505",
			"#F5F5F5",
			"#2A77A1",
			"#B3363A",
			"#263739",
			"#86446E",
			"#F3ED47",
			"#4C75B7",
			"#667292",
			"#5E7072",
			"#352224",
			"#5A2124",
			"#662B2B",
			"#63322E",
			"#842827",
			"#8A3A42",
			"#682731",
			"#8B3C44",
			"#9E2F2B",
			"#A33A2F",
			"#D25633",
			"#925635",
			"#F4723A",
			"#D35733",
			"#E25A59",
			"#772A25",
			"#E17743",
			"#C44636",
			"#E17844",
			"#C35938",
			"#464840",
			"#747761",
			"#757763",
			"#918A3D",
			"#948C66",
			"#998D79",
			"#D8A534",
			"#C9BD7D",
			"#C9C591",
			"#D4C84E",
			"#1A332E",
			"#062505",
			"#1D373F",
			"#3C4A3B",
			"#2D5037",
			"#3A6C60",
			"#3A623C",
			"#7CA282",
			"#4C524E",
			"#56775B",
			"#101450",
			"#485E84",
			"#1C2745",
			"#1F3468",
			"#2B4878",
			"#475C83",
			"#447C92",
			"#3D67AB",
			"#4B7D82",
			"#80B0B7",
			"#3D2333",
			"#1C2948",
			"#343941",
			"#40454C",
			"#4A2D2B",
			"#563E33",
			"#41464C",
			"#672731",
			"#835A75",
			"#868587",
			"#171717",
			"#2E2E2E",
			"#454545",
			"#5C5C5C",
			"#737373",
			"#8A8A8A",
			"#A1A1A1",
			"#B8B8B8",
			"#CFCFCF",
			"#E6E6E6",
			"#AAAFAA",
			"#6A736B",
			"#AAAFAA",
			"#BBBEB5",
			"#BBBEB5",
			"#6A6F70",
			"#60635F",
			"#6A736B",
			"#AAAFAA",
			"#BBBEB5",
			"#21292B",
			"#343842",
			"#414648",
			"#4E5960",
			"#41454C"
		],
		[ // GTA Vice City
			"#050505",
			"#F5F5F5",
			"#2A77A1",
			"#B3363A",
			"#263739",
			"#86446E",
			"#F3ED47",
			"#4C75B7",
			"#667292",
			"#5E7072",
			"#352224",
			"#5A2124",
			"#662B2B",
			"#63322E",
			"#842827",
			"#8A3A42",
			"#682731",
			"#8B3C44",
			"#9E2F2B",
			"#A33A2F",
			"#D25633",
			"#925635",
			"#F4723A",
			"#D35733",
			"#E25A59",
			"#772A25",
			"#E17743",
			"#C44636",
			"#E17844",
			"#C35938",
			"#464840",
			"#747761",
			"#757763",
			"#918A3D",
			"#948C66",
			"#998D79",
			"#D8A534",
			"#C9BD7D",
			"#C9C591",
			"#D4C84E",
			"#1A332E",
			"#062505",
			"#1D373F",
			"#3C4A3B",
			"#2D5037",
			"#3A6C60",
			"#3A623C",
			"#7CA282",
			"#4C524E",
			"#56775B",
			"#101450",
			"#485E84",
			"#1C2745",
			"#1F3468",
			"#2B4878",
			"#475C83",
			"#447C92",
			"#3D67AB",
			"#4B7D82",
			"#80B0B7",
			"#3D2333",
			"#1C2948",
			"#343941",
			"#40454C",
			"#4A2D2B",
			"#563E33",
			"#41464C",
			"#672731",
			"#835A75",
			"#868587",
			"#171717",
			"#2E2E2E",
			"#454545",
			"#5C5C5C",
			"#737373",
			"#8A8A8A",
			"#A1A1A1",
			"#B8B8B8",
			"#CFCFCF",
			"#E6E6E6",
			"#AAAFAA",
			"#6A736B",
			"#AAAFAA",
			"#BBBEB5",
			"#BBBEB5",
			"#6A6F70",
			"#60635F",
			"#6A736B",
			"#AAAFAA",
			"#BBBEB5",
			"#21292B",
			"#343842",
			"#414648",
			"#4E5960",
			"#41454C"
		],
		[ // GTA San Andreas
			"#000000",
			"#F5F5F5",
			"#2A77A1",
			"#840410",
			"#263739",
			"#86446E",
			"#D78E10",
			"#4C75B7",
			"#BDBEC6",
			"#5E7072",
			"#46597A",
			"#656A79",
			"#5D7E8D",
			"#58595A",
			"#D6DAD6",
			"#9CA1A3",
			"#335F3F",
			"#730E1A",
			"#7B0A2A",
			"#9F9D94",
			"#3B4E78",
			"#732E3E",
			"#691E3B",
			"#96918C",
			"#515459",
			"#3F3E45",
			"#A5A9A7",
			"#635C5A",
			"#3D4A68",
			"#979592",
			"#421F21",
			"#5F272B",
			"#8494AB",
			"#767B7C",
			"#646464",
			"#5A5752",
			"#252527",
			"#2D3A35",
			"#93A396",
			"#6D7A88",
			"#221918",
			"#6F675F",
			"#7C1C2A",
			"#5F0A15",
			"#193826",
			"#5D1B20",
			"#9D9872",
			"#7A7560",
			"#989586",
			"#ADB0B0",
			"#848988",
			"#304F45",
			"#4D6268",
			"#162248",
			"#272F4B",
			"#7D6256",
			"#9EA4AB",
			"#9C8D71",
			"#6D1822",
			"#4E6881",
			"#9C9C98",
			"#917347",
			"#661C26",
			"#949D9F",
			"#A4A7A5",
			"#8E8C46",
			"#341A1E",
			"#6A7A8C",
			"#AAAD8E",
			"#AB988F",
			"#851F2E",
			"#6F8297",
			"#585853",
			"#9AA790",
			"#601A23",
			"#20202C",
			"#A4A096",
			"#AA9D84",
			"#78222B",
			"#0E316D",
			"#722A3F",
			"#7B715E",
			"#741D28",
			"#1E2E32",
			"#4D322F",
			"#7C1B44",
			"#2E5B20",
			"#395A83",
			"#6D2837",
			"#A7A28F",
			"#AFB1B1",
			"#364155",
			"#6D6C6E",
			"#0F6A89",
			"#204B6B",
			"#2B3E57",
			"#9B9F9D",
			"#6C8495",
			"#4D8495",
			"#AE9B7F",
			"#406C8F",
			"#1F253B",
			"#AB9276",
			"#134573",
			"#96816C",
			"#64686A",
			"#105082",
			"#A19983",
			"#385694",
			"#525661",
			"#7F6956",
			"#8C929A",
			"#596E87",
			"#473532",
			"#44624F",
			"#730A27",
			"#223457",
			"#640D1B",
			"#A3ADC6",
			"#695853",
			"#9B8B80",
			"#620B1C",
			"#5B5D5E",
			"#624428",
			"#731827",
			"#1B376D",
			"#EC6AAE",
			"#000000"
		],
		[ // GTA Underground
			"#000000",
			"#F5F5F5",
			"#2A77A1",
			"#840410",
			"#263739",
			"#86446E",
			"#D78E10",
			"#4C75B7",
			"#BDBEC6",
			"#5E7072",
			"#46597A",
			"#656A79",
			"#5D7E8D",
			"#58595A",
			"#D6DAD6",
			"#9CA1A3",
			"#335F3F",
			"#730E1A",
			"#7B0A2A",
			"#9F9D94",
			"#3B4E78",
			"#732E3E",
			"#691E3B",
			"#96918C",
			"#515459",
			"#3F3E45",
			"#A5A9A7",
			"#635C5A",
			"#3D4A68",
			"#979592",
			"#421F21",
			"#5F272B",
			"#8494AB",
			"#767B7C",
			"#646464",
			"#5A5752",
			"#252527",
			"#2D3A35",
			"#93A396",
			"#6D7A88",
			"#221918",
			"#6F675F",
			"#7C1C2A",
			"#5F0A15",
			"#193826",
			"#5D1B20",
			"#9D9872",
			"#7A7560",
			"#989586",
			"#ADB0B0",
			"#848988",
			"#304F45",
			"#4D6268",
			"#162248",
			"#272F4B",
			"#7D6256",
			"#9EA4AB",
			"#9C8D71",
			"#6D1822",
			"#4E6881",
			"#9C9C98",
			"#917347",
			"#661C26",
			"#949D9F",
			"#A4A7A5",
			"#8E8C46",
			"#341A1E",
			"#6A7A8C",
			"#AAAD8E",
			"#AB988F",
			"#851F2E",
			"#6F8297",
			"#585853",
			"#9AA790",
			"#601A23",
			"#20202C",
			"#A4A096",
			"#AA9D84",
			"#78222B",
			"#0E316D",
			"#722A3F",
			"#7B715E",
			"#741D28",
			"#1E2E32",
			"#4D322F",
			"#7C1B44",
			"#2E5B20",
			"#395A83",
			"#6D2837",
			"#A7A28F",
			"#AFB1B1",
			"#364155",
			"#6D6C6E",
			"#0F6A89",
			"#204B6B",
			"#2B3E57",
			"#9B9F9D",
			"#6C8495",
			"#4D8495",
			"#AE9B7F",
			"#406C8F",
			"#1F253B",
			"#AB9276",
			"#134573",
			"#96816C",
			"#64686A",
			"#105082",
			"#A19983",
			"#385694",
			"#525661",
			"#7F6956",
			"#8C929A",
			"#596E87",
			"#473532",
			"#44624F",
			"#730A27",
			"#223457",
			"#640D1B",
			"#A3ADC6",
			"#695853",
			"#9B8B80",
			"#620B1C",
			"#5B5D5E",
			"#624428",
			"#731827",
			"#1B376D",
			"#EC6AAE",
			"#000000"
		],
	],
	skinNames: [
		[],
		[ // GTA III
			"Claude",
			"Police Officer",
			"SWAT Officer",
			"FBI Agent",
			"Army Soldier",
			"Paramedic",
			"Firefighter",
			"Wise Guy",
			"Taxi Driver",
			"Pimp",
			"Mafia Member",
			"Mafia Member",
			"Triad Member",
			"Triad Member",
			"Diablo Member",
			"Diablo Member",
			"Yakuza Member",
			"Yakuza Member",
			"Yardie Member",
			"Yardie Member",
			"Cartel Soldier",
			"Cartel Soldier",
			"Red Jacks Thug",
			"Purple Nines Thug",
			"Street Criminal",
			"Street Criminal",
			"INVALID",
			"INVALID",
			"INVALID",
			"INVALID",
			"Male Client",
			"Random Guy",
			"Vacationist",
			"Dj",
			"Young Woman",
			"Young Woman",
			"Business Woman",
			"Elder Woman",
			"Elder Woman",
			"Prostitute",
			"Prostitute",
			"Random Guy",
			"Diseased Man",
			"Deseased Woman",
			"Young Woman",
			"Old Man",
			"Random Guy",
			"Old Woman",
			"Old Woman",
			"Old Man",
			"Random Guy",
			"Old Woman",
			"Young Woman",
			"Docks Worker",
			"Docks Worker",
			"Male Street Bum",
			"Female Street Bum",
			"Delivery Guy",
			"Delivery Guy",
			"Business Man",
			"Marty Chonks",
			"Cia Agent",
			"Female Client",
			"Young Woman",
			"Business Woman",
			"Business Man",
			"Female Client",
			"Male Steward",
			"Female Steward",
			"Male Cocks Fan",
			"Male Cocks Fan",
			"Female Cocks Fan",
			"Male Paramedics Assistant",
			"Female Paramedics Assistant",
			"Construction Worker",
			"Construction Worker",
			"Zip Customer",
			"Party Woman",
			"Party Woman",
			"Male College Student",
			"Female College Student",
			"Old Man",
			"Female Jogger",
			"Asuka Kasen",
			"Spank Suicide Bomber",
			"Salvatore's Butler",
			"Catalina",
			"Lee Chong",
			"Colombian Cartel Member",
			"Colombian Cartel Member",
			"Colombian Cartel Member",
			"Colombian Cartel Member",
			"Police Officer",
			"Curly Bob",
			"Phil Cassidy",
			"Detective",
			"8-Ball",
			"8-Ball",
			"Salvatore Leone",
			"Mafia Member",
			"Joey Leone",
			"Joey Leone",
			"Bar Owner",
			"Kenji Kasen",
			"Mike Forelli",
			"Donald Love",
			"Donald Love",
			"Luigi Goterelli",
			"Maria Latore",
			"Mickey Hamfists",
			"Miguel",
			"Misty",
			"Old Oriental Gentleman",
			"Old Oriental Gentleman",
			"Old Oriental Gentleman",
			"Ray Machowski",
			"Mafia Member",
			"Ammu-Nation Clerk",
			"Tanner",
			"Toni Cipriani",
			"Darkel",
			"Chuff Security Officer",
			"Claude"
		],
		[ // GTA Vice City
			"Tommy Vercetti",
			"Police Officer",
			"SWAT Officer",
			"FBI Agent",
			"Army Soldier",
			"Paramedic",
			"Fireman",
			"Golfer",
			"INVALID",
			"Random Lady",
			"Bum",
			"Greaser",
			"Random Guy",
			"Random Guy",
			"Random Lady",
			"Random Guy",
			"Random Guy",
			"Beach Girl",
			"Fat Beach Lady",
			"Beach Guy",
			"Fat Beach Guy",
			"Random Lady",
			"Random Lady",
			"Random Lady",
			"Prostitute",
			"Bum",
			"Bum",
			"Random Guy",
			"Taxi Driver",
			"Haitian",
			"Criminal",
			"Random Lady",
			"Random Lady",
			"Random Guy",
			"Random Guy",
			"Random Lady",
			"Random Lady",
			"Random Guy",
			"Beach Lady",
			"Beach Guy",
			"Beach Lady",
			"Beach Guy",
			"Random Guy",
			"Prostitute",
			"Bum",
			"Bum",
			"Random Guy",
			"Random Guy",
			"Punk",
			"Prostitute",
			"Random Old Lady",
			"Punk",
			"Random Guy",
			"Random Lady",
			"Random Lady",
			"Random Guy",
			"Random Guy",
			"Beach Lady",
			"Beach Guy",
			"Beach Lady",
			"Beach Guy",
			"Construction Worker",
			"Golfer",
			"Golfer",
			"Golfer",
			"Beach Lady",
			"Beach Guy",
			"Random Lady",
			"Random Guy",
			"Random Guy",
			"Prostitute",
			"Bum Lady",
			"Random Guy",
			"Random Guy",
			"Taxi Driver",
			"Random Woman",
			"Skater Guy",
			"Beach Lady",
			"Skater Guy",
			"Young Woman Shopper",
			"Old Women Shopper",
			"Tourist",
			"Tourist",
			"Cuban",
			"Cuban",
			"Haitian",
			"Haitian",
			"Shark",
			"Shark",
			"Diaz Guy",
			"Diaz Guy",
			"Security Guard",
			"Security Guard",
			"Biker",
			"Biker",
			"Vercetti Guy",
			"Vercetti Guy",
			"Undercover Cop",
			"Undercover Cop",
			"Undercover Cop",
			"Undercover Cop ",
			"Undercover Cop",
			"Undercover Cop",
			"Random Guy",
			"Bodyguard",
			"Prostitute",
			"Prostitute",
			"Love Fist Guy",
			"Ken Rosenburg",
			"Candy Suxx",
			"Hilary",
			"Love Fist",
			"Phil",
			"Rockstar Guy",
			"Sonny",
			"Lance",
			"Mercades",
			"Love Fist",
			"Alex Scrub",
			"Lance Vance",
			"Lance Vance",
			"Cpt. Cortez",
			"Love Fist",
			"Columbian",
			"Hilary",
			"Mercades",
			"Cam",
			"Cam",
			"Phil",
			"Phil",
			"Bodyguard",
			"Pizza Worker",
			"Taxi Driver",
			"Taxi Driver",
			"Sailor",
			"Sailor",
			"Sailor",
			"Chef",
			"Criminal",
			"French Guy",
			"Worker",
			"Hatian",
			"Waitress",
			"Forelli Member",
			"Forelli Member",
			"Forelli Member",
			"Columbian",
			"Random Guy",
			"Beach Guy",
			"Random Guy",
			"Random Guy",
			"Random Guy",
			"Drag Queen",
			"Diaz Traitor",
			"Random Guy",
			"Random Guy",
			"Stripper",
			"Stripper",
			"Stripper",
			"Store Clerk"
		],
		[ // GTA San Andreas
			"Carl 'CJ' Johnson",
			"The Truth",
			"Maccer",
			"INVALID",
			"INVALID",
			"INVALID",
			"Taxi Driver/Train Driver",
			"Janitor",
			"Unknown",
			"Normal Ped",
			"Old Woman",
			"Casino Croupier",
			"Rich Woman",
			"Street Girl",
			"Normal Ped",
			"Mr.Whittaker (RS Haul Owner)",
			"Airport Ground Worker",
			"Businessman",
			"Beach Visitor",
			"DJ",
			"Rich Guy (Madd Dogg's Manager)",
			"Normal Ped",
			"Normal Ped",
			"Bmxer",
			"Madd Dogg Bodyguard",
			"Madd Dogg Bodyguard",
			"Backpacker",
			"Construction Worker",
			"Drug Dealer",
			"Drug Dealer",
			"Drug Dealer",
			"Farm-Town Inhabitant",
			"Farm-Town Inhabitant",
			"Farm-Town Inhabitant",
			"Farm-Town Inhabitant",
			"Gardener",
			"Golfer",
			"Golfer",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"INVALID",
			"Normal Ped",
			"Normal Ped",
			"Beach Visitor",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Snakehead (Da Nang)",
			"Mechanic",
			"Mountain Biker",
			"Mountain Biker",
			"Unknown",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Oriental Ped",
			"Oriental Ped",
			"Normal Ped",
			"Normal Ped",
			"Pilot",
			"Colonel Fuhrberger",
			"Prostitute",
			"Prostitute",
			"INVALID",
			"Pool Player",
			"Pool Player",
			"Priest/Preacher",
			"Normal Ped",
			"Scientist",
			"Security Guard",
			"Hippy",
			"Hippy",
			"INVALID",
			"Prostitute",
			"Stewardess",
			"Homeless",
			"Homeless",
			"Homeless",
			"Boxer",
			"Boxer",
			"Black Elvis",
			"White Elvis",
			"Blue Elvis",
			"Prostitute",
			"INVALID",
			"Stripper",
			"Normal Ped",
			"Normal Ped",
			"Jogger",
			"Rich Woman",
			"Rollerskater",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Jogger",
			"Lifeguard",
			"Normal Ped",
			"Rollerskater",
			"Biker",
			"Normal Ped",
			"Ballas Gang Member",
			"Ballas Gang Member",
			"Ballas Gang Member",
			"Grove Street Families Gang Member",
			"Grove Street Families Gang Member",
			"Grove Street Families Gang Member",
			"Los Santos Vagos Gang Member",
			"Los Santos Vagos Gang Member",
			"Los Santos Vagos Gang Member",
			"Russian Mafioso",
			"Russian Mafioso",
			"Russian Mafioso",
			"Varios Los Aztecas Gang Member",
			"Varios Los Aztecas Gang Member",
			"Varios Los Aztecas Gang Member",
			"Triad",
			"Triad",
			"INVALID",
			"Triad Boss",
			"Da Nang Boy",
			"Da Nang Boy",
			"Da Nang Boy",
			"Italian Mafioso",
			"Italian Mafioso",
			"Italian Mafioso",
			"Italian Mafioso",
			"Farm Inhabitant",
			"Farm Inhabitant",
			"Farm Inhabitant",
			"Farm Inhabitant",
			"Farm Inhabitant",
			"Farm Inhabitant",
			"Homeless",
			"Homeless",
			"Normal Ped",
			"Homeless",
			"Beach Visitor",
			"Beach Visitor",
			"Beach Visitor",
			"Businesswoman",
			"Taxi Driver",
			"Crack Maker",
			"Crack Maker",
			"Crack Maker",
			"Crack Maker",
			"Businessman",
			"Businesswoman",
			"INVALID",
			"Businesswoman",
			"Normal Ped",
			"Prostitute",
			"Construction Worker",
			"Beach Visitor",
			"Well Stacked Pizza Worker",
			"Barber",
			"Hillbilly",
			"Farmer",
			"Hillbilly",
			"Hillbilly",
			"Farmer",
			"Hillbilly",
			"Black Bouncer",
			"White Bouncer",
			"White Mib Agent",
			"Black Mib Agent",
			"Cluckin' Bell Worker",
			"Hotdog/Chilli Dog Vendor",
			"Normal Ped",
			"Normal Ped",
			"Blackjack Dealer",
			"Casino Croupier",
			"San Fierro Rifa",
			"San Fierro Rifa",
			"San Fierro Rifa",
			"Barber",
			"Barber",
			"Whore",
			"Ammunation Salesman",
			"Tattoo Artist",
			"Punk",
			"Cab Driver",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Businessman",
			"Normal Ped",
			"Valet",
			"Barbara Schternvart",
			"Helena Wankstein",
			"Michelle Cannes",
			"Katie Zhan",
			"Millie Perkins",
			"Denise Robinson",
			"Farm-Town Inhabitant",
			"Hillbilly",
			"Farm-Town Inhabitant",
			"Farm-Town Inhabitant",
			"Hillbilly",
			"Farmer",
			"Farmer",
			"Karate Teacher",
			"Karate Teacher",
			"Burger Shot Cashier",
			"Cab Driver",
			"Prostitute",
			"INVALID",
			"Oriental Noodle Stand Vendor",
			"Oriental Boating School Instructor",
			"Clothes Shop Staff",
			"Homeless",
			"Weird Old Man",
			"Waitress (Maria Latore)",
			"Normal Ped",
			"Normal Ped",
			"Clothes Shop Staff",
			"Normal Ped",
			"Rich Woman",
			"Cab Driver",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Oriental Businessman",
			"Oriental Ped",
			"Oriental Ped",
			"Homeless",
			"Normal Ped",
			"Normal Ped",
			"Normal Ped",
			"Cab Driver",
			"Normal Ped",
			"Normal Ped",
			"Prostitute",
			"Prostitute",
			"Homeless",
			"The D.A",
			"Afro-American",
			"Mexican",
			"Prostitute",
			"Stripper",
			"Prostitute",
			"Stripper",
			"Biker",
			"Biker",
			"Pimp",
			"Normal Ped",
			"Lifeguard",
			"Naked Valet",
			"Bus Driver",
			"Biker Drug Dealer",
			"Chauffeur (Limo Driver)",
			"Stripper",
			"Stripper",
			"Heckler",
			"Heckler",
			"Construction Worker",
			"Cab Driver",
			"Cab Driver",
			"Normal Ped",
			"Clown (Ice-Cream Van Driver)",
			"Officer Frank Tenpenny",
			"Officer Eddie Pulaski",
			"Officer Jimmy Hernandez",
			"Dwaine/Dwayne",
			"Melvin 'Big Smoke' Harris (Mission)",
			"Sean 'Sweet' Johnson",
			"Lance 'Ryder' Wilson",
			"Mafia Boss",
			"INVALID",
			"Paramedic",
			"Paramedic",
			"Paramedic",
			"Firefighter",
			"Firefighter",
			"Firefighter",
			"Los Santos Police Officer",
			"San Fierro Police Officer",
			"Las Venturas Police Officer",
			"County Sheriff",
			"Motorbike Cop",
			"S.W.A.T.",
			"Federal Agent",
			"Army Soldier",
			"Desert Sheriff",
			"INVALID",
			"Ken Rosenberg",
			"Kent Paul",
			"Cesar Vialpando",
			"Jeffery 'Og Loc' Martin/Cross",
			"Wu Zi Mu (Woozie)",
			"Michael Toreno",
			"Jizzy B.",
			"Madd Dogg",
			"Catalina",
			"Claude Speed",

			// 300
			"Lance 'Ryder' Wilson 2",
			"Lance 'Ryder' Wilson (robbery mask)",
			"Emmet",
			"Andre",
			"Denise",
			"Jethro",
			"Zero",
			"T-Bone Mendez",
			"Johnny Sindacco",
			"Janitor",
			"Barry 'Big Bear' Thorne (Skinny)",
			"Melvin 'Big Smoke' Harris (Vest)",
			"Psycho",
			"Barry 'Big Bear' Thorne (Fat)",
		],
	],
	weaponModels: [
		[],
		[ // GTA III
			0, 				// Fist
			172,			// Baseball Bat
			173,			// Colt 45
			178,			// Uzi
			176,			// Shotgun
			171,			// AK-47
			180,			// M16
			177,			// Sniper Rifle
			175,			// Rocket Launcher
			181,			// Flamethrower
			174,			// Molotov Cocktail
			170				// Grenade
		],
		[ // GTA Vice City
			0,
			259,
			260,
			261,
			262,
			263,
			264,
			265,
			266,
			267,
			268,
			269,
			270,
			291,
			271,
			272,
			273,
			274,
			275,
			277,
			278,
			279,
			281,
			282,
			283,
			284,
			280,
			276,
			285,
			286,
			287,
			288,
			289,
			290,
			-1,
			-1,
			292
		],
		[ // GTA San Andreas

		],
	],
	locations: [
		[],

		[ // GTA III
			// Police Stations
			["Portland Police Station", [1143.875, -675.1875, 14.97], 0.0, [1127.95, -666.06, 14.413]],
			["Staunton Island Police Station", [340.25, -1123.375, 25.98], 0.0, null],
			["Shoreside Vale Police Station", [-1253.0, -138.1875, 58.75], 0.0, null],

			// Hospitals
			["Portland Hospital", [1144.25, -596.875, 14.97], 0.0, [1127.64, -586.84, 14.414]],
			["Staunton Island Hospital", [183.5, -17.75, 16.21], 0.0, null],
			["Shoreside Vale Hospital", [-1259.5, -44.5, 58.89], 0.0, null],

			// Fire Stations
			["Portland Fire Station", [1103.70, -52.45, 7.49], 0.0, null],
			["Staunton Island Fire Station", [-78.48, -436.80, 16.17], 0.0, null],
			["Shoreside Vale Fire Station", [-1202.10, -14.67, 53.20], 0.0, null],

			// Pay and Sprays
			["Portland Pay and Spray", [925.4, -360.3, 10.83], 0.0, [928.35, -335.53, 9.413]],
			["Staunton Island Pay and Spray", [381.8, -493.8, 25.95], 0.0, null],
			["Shoreside Vale Pay and Spray", [-1142.4, 35.01, 58.61], 0.0, null],

			// Ammunations
			["Portland Ammunation", [1068.3, -400.9, 15.24], 0.0, null],
			["Staunton Island Ammunation", [348.2, -717.9, 26.43], 0.0, null],

			// Train Stations
			["Bedford Point Train Station (Subway)", [178.52, -1551.40, 26.162], -3.105, [188.24, -1603.86, 25.700]],
			["Francis International Airport Train Station (Subway)", [-633.42, -760.06, 18.919], 1.586, [-693.17, -725.14, 8.313]],
			["Rockford Train Station (Subway)", [225.66, -69.07, 20.998], -3.115, [227.01, -59.56, 20.697]],
			["Saint Marks Train Station (Portland EL)", [1306.69, -512.38, 40.078], -2.458, [1312.85, -506.36, 40.641]],
			["Hepburn Heights Train Station (Portland EL)", [1029.07, -164.18, 4.972], 0.005, [1020.75, -166.69, 4.412]],
			["Chinatown Train Station (Portland EL)", [775.27, -622.28, 14.747], 0.006, [812.43, -630.49, 14.413]],

			// Safehouses
			["Portland Safehouse", [885.52, -308.47, 8.615], -1.532, [839.16, -298.12, 4.717]],

			// Other
			["St Mathias College", [201.59, -281.42, 15.779], -0.005, null],
			["Newport Parking Garage", [294.22, -547.87, 25.780], 3.119, null],
			["City Hall", [96.60, -951.61, 26.168], 3.138, null],
			["Belleville Park East", [109.15, -695.76, 26.168], 1.594, null],
			["Belleville Park Bathroom", [38.69, -724.96, 22.756], -3.104, null],
			["Belleville Park West", [0.40, -773.05, 26.056], -1.476, null],
			["Stadium Entrance", [-18.65, -231.80, 29.861], 0.002, null],
			["Kenji's Casino", [454.10, -1421.26, 26.124], -0.769, null],
			["Saint Marks Bistro", [1345.48, -457.41, 49.549], 1.537, null],
			["Leone Mansion", [1417.94, -194.18, 49.905], -1.570, [1378.31, -296.16, 49.414]],
			["Ciprianis Ristorante", [1202.50, -320.78, 24.973], -1.553, [1199.28, -321.10, 24.413]],
			["Luigi's Club", [904.82, -425.37, 14.929], 1.602, [907.36, -423.80, 14.413]],
			["Portland Fuel Station", [1157.34, -75.45, 7.065], -0.027, null],
			["Easy Credit Autos", [1217.81, -113.87, 14.973], -3.051, null],
			["Head Radio Headquarters", [986.40, -46.40, 7.473], -1.615, null],
			["Borgnine Taxi Headquarters", [929.36, -48.59, 7.473], -2.935, null],
			["Fuzz Ball", [1000.03, -877.82, 14.547], -3.136, null],
			["Portland Docks", [1360.55, -818.08, 14.415], -1.574, [1356.94, -816.28, 14.413]],
			["Punk Noodle Diner", [1040.10, -653.10, 14.973], 1.551, [1042.29, -656.87, 14.413]],
			["Greasy Joe's Diner", [864.45, -999.86, 4.646], -0.020, null],
			["Hepburn Heights Projects", [913.98, -227.83, 4.413], 0.001, null],
		],

		[ // GTA VC
			// Police Stations
			["Washington Beach Police Station", [399.77, -468.90, 11.73], 0.0, null],
			["Vice Point Police Station", [508.96, 512.07, 12.10], 0.0, null],
			["Downtown Police Station", [-657.43, 762.31, 11.59], 0.0, null],
			["Little Havana Police Station", [-885.08, -470.44, 13.11], 0.0, null],

			// Hospitals
			["Downtown Hospital", [-822.57, 1152.82, 12.41], 0.0, null],
			["Little Havana Medical Center", [-885.08, -470.44, 13.11], 0.0, null],
			["Ocean Beach Hospital", [-133.19, -980.76, 10.46], 0.0, null],

			// Misc/Other
			["Paper Products", [-1085.83, -232.72, 11.446], -3.139, null],
			["Little Haiti Slums", [-958.90, 116.41, 9.300], 0.031, null],
			["Kaufman Cabs", [-1013.35, 198.70, 11.266], -1.680, null],
			["Moist Palms Hotel", [-703.50, 545.30, 11.099], -3.105, null],
			["North Point Mall", [486.50, 1124.89, 16.348], 1.610, null],
			["Ocean View Hotel", [238.14, -1280.48, 11.071], 1.282, null],
			["Ocean Beach Fuel Station", [63.32, -1074.50, 10.006], 0.102, null],
			["Ken Rosenberg's Office", [115.48, -823.76, 10.463], -2.221, null]

			// Bar, Restaurants and Food
			["Little Havana Donut Shop", [-856.28, -649.32, 11.047], 1.700, null],
			["Robina's Cafe", [-1170.36, -604.25, 11.640], -2.973, null],
			["Biker Bar", [-601.72, 654.60, 11.073], -1.463, null],

			// Clubs
			["Malibu Club", [492.23, -81.41, 11.261], -2.306, null],
			["Poll Position Club", [100.09, -1477.78, 10.432], 0.484, null],

			// Tool Shops
			["Little Havana Tool Shop", [-969.01, -684.27, 11.456], -2.994, null],
			["Washington Beach Tool Shop", [197.83, -486.04, 11.127], 0.000, null]

			// Gunshops
			["Ocean Beach Ammunation", [-53.41, -1482.25, 10.293], 1.441, null],

			// Pay-n-sprays
			["Ocean Beach Pay-n-spray", [-18.51, -1256.76, 10.463], -1.556, null]

		],

		[ // GTA SA
			// Police Stations
			["Los Santos Police Department", [1545.53, -1675.64, 13.561], -1.575, null],

			// Ammunations
			["Market Ammunation", [1364.84, -1283.79, 13.547], -0.541, null],

			// Hospitals
			["All Saints General Hospital", [1182.67, -1323.81, 13.579], 1.543, null],
			["County General Hospital", [2034.7567,-1403.1083,17.2931], 0.0, null],

			// Strip Clubs
			["Pig Pen Strip Club", [2420.906982,-1222.321777,25.348423], 0.0, null],

			// Night/Dance Clubs
			["Club Tableau", [551.877502, -1506.095581, 14.550004], 1.0, null],
			["Club Alhambra", [1832.55, -1681.91, 13.510], -1.561, null],

			// Bars
			["Ten Green Bottles Bar", [2305.922363,-1646.797241,14.461124], 1.0, null],

			// Restaurants and Food
			["Market Donut Shop", [1040.932006,-1336.229492,13.550251], 1.0, null],
			["Idlewood Pizza Stack", [2099.827636,-1806.375610,13.554687], 0.0, null],
			["Temple Burger Shot", [1212.020019,-924.311462,42.930198], 1.0, null],

			// Clothes Shops
			["Ganton Binco", [2244.837402,-1664.232299,15.476562], 1.0, null],
			["Los Santos Victim ", [456.31, -1501.53, 31.041], -1.378, null],
			["Los Santos Didier Sachs", [449.68, -1479.94, 30.639], -1.149, null],
			["ProLaps Los Santos", [502.37, -1355.58, 16.133], 2.659, null],
			["Market Cluckin Bell", [923.53, -1352.72, 13.377], -1.596, null],
			["Marina Burger Shot", [816.55, -1617.00, 13.859], 1.396, null],

			// Airports
			["Los Santos International Airport", [1958.201049,-2182.789794,13.546875], 1.0, null],
			["Los Santos International Airport Runway", [2054.12, -2493.84, 13.547], 1.569, null],
			["Los Santos Stadium", [2694.261474,-1703.194335,11.506717], 1.0, null],

			// Sex Shops
			["El Corona Sex Shop", [1944.994873,-2116.641113,13.550632], 1.0, null],
			["Temple Sex Shop", [1090.181884,-927.265869,43.182197], 1.0, null],
			["Market Sex Shop", [1090.181884,-927.265869,43.182197], 1.0, null]

			// Misc/Other
			["Grotti Dealership", [540.6011,-1291.2489,17.2422], 0.0, null],
			["Santa Maria Beach", [302.994567,-1900.099121,1.938840], 0.0, null],
			["Glen Park Bridge", [1968.33, -1195.10, 25.70], 0.0, null],

			// Train Stations
			["Unity Station", [1742.60, -1859.98, 13.414], -3.112, null],
			["Market Station", [814.26, -1345.38, 13.532], -1.624, null],

		],

		[ // GTA UG
			// Coming Soon!
		],

		[ // GTA IV
			// Police Stations
			["Broker Police Station", [894.99, -357.39, 18.185], 2.923, null],
			["South Bohan Police Station", [435.40, 1592.29, 17.353], 3.087, null],
			["Northern Gardens Police Station", [974.93, 1870.45, 23.073], -1.621, null],
			["South Slopes Police Station", [1233.25, -89.13, 28.034], 1.568, null],
			["Middle Part East Police Station", [50.12, 679.88, 15.316], 1.569, null],
			["East Holland Police Station", [85.21, 1189.82, 14.755], 3.127, null],
			["Francis International Airport Police Station", [2170.87, 448.87, 6.085], 1.501, null],
			["Chinatown Police Station", [213.12, -211.70, 10.752], 0.200, null],
			["Acter Police Station", [-1714.95, 276.31, 22.134], 1.127, null],
			["Port Tudor Police Station", [-1220.73, -231.53, 3.024], 2.210, null],
			["Leftwood Police Station", [-927.66, 1263.63, 24.587], -0.913, null],

			// Fire Stations
			["Broker Fire Station", [953.13, 95.90, 35.004], 1.595, null],
			["Northwood Fire Station", [-271.02, 1542.15, 20.420], -1.160, null],
			["Northern Gardens Fire Station", [1120.47, 1712.36, 10.534], -0.682, null],
			["Francis International Airport Fire Station", [2364.87, 166.83, 5.813], 0.156, null],
			["Chinatown Fire Station", [295.40, -336.88, 4.963], 2.887, null],
			["Berchem Fire Station", [-1574.90, 546.54, 25.449], -0.509, null],
			["Tudor Fire Station", [-2144.97, 164.15, 12.051], -2.149, null],

			// Safehouses
			["Hove Beach Safehouse Parking", [904.27, -498.00, 14.522], 3.127, null],
			["South Bohan Safehouse", [589.42, 1402.15, 10.364], 0.007, null],

			// Hospitals
			["Schottler Medical Center", [1199.59, 196.78, 33.554], 1.633, null],
			["Northern Gardens Medical Center", [980.71, 1831.61, 23.898], -0.049, null],
			["Leftwood Hospital", [-1317.27, 1277.20, 22.370], 2.246, null],
			["Acter Medical Center", [-1538.43, 344.58, 20.943], -0.156, null],

			// Fuel Stations
			["Hove Beach Fuel Station", [1128.51, -359.55, 18.441], -0.052, null],
			["Lancaster Fuel Station", [108.37, 1135.13, 13.975], 0.007, null],
			["The Meat Quarter Fuel Station", [-434.30, -19.47, 9.864], 1.469, null],
			["Cerveza Heights Fuel Station", [1123.50, 328.84, 29.245], -0.154, null],
			["Tudor Fuel Station", [-1389.91, 29.19, 6.875], 0.982, null],

			// Restaurants
			["Star Junction Burger Shot", [-174.00, 276.96, 14.818], -0.029, null],
			["South Bohan Burger Shot", [441.95, 1516.64, 16.289], -2.682, null],
			["Industrial Burger Shot", [1096.93, 1598.33, 16.721], -2.289, null],

			// Night Clubs/Strip Clubs/Bars
			["Perestroika Club", [957.58, -292.58, 19.644], -0.009, null],
			["Triangle Club", [1210.90, 1718.18, 16.667], 1.819, null],
			["Bahama Mamas Club", [-387.33, 412.33, 5.674], 2.997, null],
			["Maisonette Club", [-482.28, 155.56, 7.555], -1.559, null],

			// TW@ Cafes
			["Outlook Internet Cafe", [977.42, -169.11, 24.013], 1.844, null],
			["Berchem Internet Cafe", [-1584.46, 466.05, 25.398], -2.441, null],

			// Pay-n-Sprays
			["Hove Beach Pay-n-Spray", [1058.57, -282.58, 20.760], -3.135, null],
			["Leftwood Pay-n-Spray", [-1148.69, 1171.52, 16.457], -0.059, null],

			// Clothes Shops
			["Hove Beach Russian Clothes Shop", [896.31, -442.59, 15.888], 1.500, null],

			// Car Wash
			["Willis Car Wash", [1831.02, 360.20, 22.061], -1.515, null],
			["Tudor Car Wash", [-1371.68, 35.13, 7.028], 1.029, null],

			// Gun Shops
			["Downtown Broker Gun Shop", [1054.11, 86.84, 33.408], -1.574, null],
			["Chinatown Gun Shop", [65.43, -342.36, 14.767], -1.589, null],
			["Port Tudor Gun Shop", [-1338.77, 307.61, 13.378], -1.530, null],

			// Train Stations
			["Hove Beach Train Station", [1000.41, -544.82, 14.854], -1.576, null],
			["Schottler Train Station", [1303.93, -37.75, 28.377], 3.065, null],
			["Cerveza Heights Train Station", [1386.87, 374.13, 23.063], 3.111, null],
			["Lynch Street Train Station", [1594.73, 364.80, 25.226], -0.965, null],
			["East Park Train Station", [-35.78, 634.79, 14.663], -0.050, null],
			["West Park Train Station", [-377.13, 677.05, 14.679], -0.069, null],
			["North Park Train Station", [-135.08, 1153.95, 14.773], -1.567, null],
			["Vespucci Circus Train Station", [-85.11, 1427.04, 20.421], 1.501, null],
			["Frankfort Low Train Station", [-331.94, 1427.05, 12.617], 1.541, null],
			["Frankfort High Train Station", [-343.79, 1433.12, 12.283], 0.113, null],
			["Vauxite Train Station", [-483.38, 1333.91, 17.481], 1.509, null],
			["Quartz Street West Train Station", [-545.54, 926.22, 9.945], -1.524, null],
			["Manganese West Train Station", [-461.60, 530.56, 9.857], 3.091, null],
			["Frankfort Ave Train Station", [-377.52, 371.91, 14.762], -3.125, null],
			["Suffolk Train Station", [-252.77, -171.83, 14.447], 1.594, null],
			["Feldspar Train Station", [-350.62, -335.35, 4.909], -2.287, null],
			["City Hall Train Station", [-115.31, -501.22, 14.755], -1.365, null],
			["Castle Gardens Train Station", [82.95, -757.81, 4.965], -1.006, null],
			["Emerald Train Station", [116.57, -318.15, 14.768], 1.499, null],
			["Easton Train Station", [-35.76, -18.50, 14.769], 3.137, null],
			["Manganese East Train Station", [131.46, 522.74, 14.661], 0.005, null],
			["Quartz Street East Train Station", [134.35, 910.15, 14.717], -0.112, null],
			["San Quentin Ave Train Station", [373.12, 1625.93, 16.347], -2.249, null],
			["Windmill Street Train Station", [749.97, 1447.44, 14.252], -0.120, null],
			["Francis International Airport Train Station", [2297.57, 474.62, 6.086], 0.066, null],

			// Misc
			["Hove Beach Laundromat", [1011.74, -325.33, 20.339], -1.402, null],
			["The Exchange Docks", [-354.68, -661.62, 4.791], 2.066, null],
			["Firefly Island Bowling", [1198.99, -681.49, 16.445], -0.017, null],
			["Broker Bus Depot", [1004.15, 279.19, 31.512], -2.193, null],
			["The Lost MC Clubhouse", [-1713.29, 358.25, 25.449], 2.566, null],
			["Alderney State Correctional Facility (Prison)", [-1155.21, -374.34, 2.885], -1.680, null],
			["Chinatown Bank of Liberty", [-34.92, -466.80, 14.75], -1.52, null],
			["Suffolk Church", [-274.30, -281.63, 14.36], 1.56],
			["Francis International Airport Runway", [2610.75, 262.42, 5.875], 2.381, null],
			["Happiness Island", [-621.81, -963.22, 4.843], -0.109, null],

			// More will be added soon!
		],
	],
	gtaivSkinModels: [
		//["Nico Bellic", 1862763509],
		["Male Multiplayer", -2020305438],
		["Female Multiplayer", -641875910],
		["MODEL_SUPERLOD", -1370810922],
		["Anna", 1853617247],
		["Anthony", -1646893330],
		["Badman", 1495769888],
		["Bernie Crane", 1500493064],
		["Bledar", 1731510984],
		["Brian", 422305098],
		["Brucie", -1729980128],
		["Bulgarin", 237511807],
		["Charise", 88667657],
		["Charlie Undercover", -1328445565],
		["Clarence", 1343144208],
		["Dardan", 1468450703],
		["Darko", 386513184],
		["Derric", 1169442297],
		["Dmitri", 237497537],
		["Dwayne", -617264103],
		["Eddie", -1600585231],
		["Faustin", 57218969],
		["Francis", 1710545037],
		["French Tom", 1424670436],
		["Gordon", 2129490787],
		["Gracie", -357652594],
		["Hossan", 980768434],
		["Ilyena", -835225126],
		["Issac", -479595866],
		["Ivan", 1166762483],
		["Jay", 364686627],
		["Jason", 170756246],
		["Jeff", 390357829],
		["Jimmy", -366421228],
		["Johnny Klebitz", -911507684],
		["Kate", -773750838],
		["Kenny", 995576506],
		["Lil Jacob", 1487004273],
		["Lil Jacob 2", -1275031987],
		["Luca", -681942840],
		["Luis", -492470690],
		["Mallorie", -1040287406],
		["Mam", -322700377],
		["Manny", 1445589009],
		["Marnie", 411185872],
		["Mel", -807339118],
		["Michael", 735211577],
		["Michelle", -1080659212],
		["Mickey", -636669566],
		["Packie", 1690783035],
		["Pathos", -165448092],
		["Petrovic", -1947682830],
		["Phil Bell", -1826458934],
		["Playboy X", 1794146792],
		["Ray Boccino", 954215094],
		["Ricky", -587324132],
		["Roman", -1992728631],
		["Roman 2", 558221221],
		["Sarah", -17823883],
		["Tuna", 1384833284],
		["Vinny Spaz", -1014976873],
		["Vlad", 896408642],
		["Black Street Thug 1", -301223260],
		["Black Street Thug 2", -1143910864],
		["Black Street OG 1", 869501081],
		["Black Street OG 1", 632613980],
		["Albanian Thug 1", -503930010],
		["Albanian Thug 2", -235584669],
		["Albanian Thug 3", 207714363],
		["Albanian Thug 4", 514268366],
		["Biker 1", 43005364],
		["Biker 2", 1346668127],
		["Biker 3", -1677255197],
		["Biker 4", -1461281345],
		["Biker 5", 1574850459],
		["Biker 6", -1953289472],
		["Irish Man 1", 280474699],
		["Irish Man 2", -19263344],
		["Irish Man 3", 1844702918],
		["Jamaican OG 1", 1609755055],
		["Jamaican OG 2", -330497431],
		["Jamaican OG 3", 1117105909],
		["Jamaican Thug 1", -1500397869],
		["Jamaican Thug 2", -881358690],
		["Asian Man 1", 1540383669],
		["Asian Man 2", 764249904],
		["Hispanic Man 1", 492147228],
		["Hispanic Man 2", -1926041127],
		["Hispanic Man 3", 1168388225],
		["Hispanic Man 4", -1746774780],
		["Fat Italian Mafia Boss", -302362397],
		["Italian Mafia Boss", -1616890832],
		["Italian Mafia Associate", 64730935],
		["Fat Italian Mafia Associate", 510389335],
		["Russian Thug 1", -1836006237],
		["Russian Thug 2", -2088164056],
		["Russian Thug 3", 1976502708],
		["Russian Thug 4", 1543404628],
		["Russian Thug 5", 1865532596],
		["Russian Thug 6", 431692232],
		["Russian Thug 7", 1724587620],
		["Russian Thug 8", -1180674815],
		["Triad Boss 1", 871281791],
		["Triad Boss 2", 683712035],
		["Triad Member 3", -1084007777],
		["Triad Member 4", -164935626],
		["Female Maid", -751071255],
		["Female Binco Worker", -109247258],
		["Female Bank Teller", 1366257926],
		["Female Doctor", 346338575],
		["Female Gym Worker", 1350216795],
		["Female Burger Shot Worker", 924926104],
		["Female Cluckin Bell Worker", -346378101],
		["Female Rockstar Cafe Worker", -2104311883],
		["Female TW@ Cafe Worker", 212900845],
		["Female Well Stacked Pizza Worker", -290070895],
		["Hooker", 552542187],
		["Hooker 2", 996267216],
		["Nurse", -1193778389],
		["Stripper 1", 1113677074],
		["Stripper 2", 1353709999],
		["Waitress", 24233425],
		["Alcoholic Man", -1761003415],
		["Armoured Truck Driver", 1075583233],
		["Bus Driver", 134077503],
		["Generic Asian Man", 757349871],
		["Black Crackhead", -1827421800],
		["Doctor (Scrubs)", 219393781],
		["Doctor", -1186940778],
		["Doctor (Blood Covered Coat)", 375732086],
		["Cook", 2105015949],
		["Italian Mob Enforcer", -200234085],
		["Factory Worker", 800131009],
		["FIB Agent", -999506922],
		["Fat Delivery Driver", -1993909080],
		["Fire Chief", 610888851],
		["Mercenary Soldier", 486302863],
		["Helicopter Pilot", -778316080],
		["Hotel Doorman", 624314380],
		["Korean Cook", -1784833142],
		["Lawyer 1", -1852976689],
		["Lawyer 2", -1134712978],
		["Loony Black Man", 379171768],
		["Pilot", -1945168882],
		["Generic Man", 807236245],
		["Postal Worker", -284362863],
		["Saxophone Player", -1188246269],
		["Security Guard", -1870989171],
		["Stadium Food Vendor", 420915580],
		["Stadium Food Cook", 1878085135],
		["Street Food Vendor", 142730876],
		["Street Sweeper Driver", -690681764],
		["Taxi Driver", 8772846],
		["Telephone Company Worker", 1186270890],
		["Tennis Player", -379234846],
		["Train Conductor", 1159759556],
		["Homeless Black Man", -142386662],
		["Trucker", -46564867],
		["Janitor", -1284047560],
		["Hotel Doorman 2", 22944263],
		["Mob Boss", 1178487645],
		["Airport Worker", -1464712858],
		["Bartender", -2139064254],
		["Biker Bouncer", -1780698891],
		["High End Club Bouncer", -409283472],
		["Bowling Alley Worker", -799229885],
		["Bowling Alley Worker 2", -434183225],
		["Chinese Food Vendor", 768442188],
		["Club Security", 676448572],
		["Construction Worker", -722019798],
		["Construction Worker 2", -1015957728],
		["Construction Worker 3", -714220780],
		["Police Officer", -183203150],
		["Traffic Officer", -1518937979],
		["Fat Police Officer", -370395528],
		["Courier", -1371133859],
		["Cowboy 1", -573788283],
		["Drug Dealer 1", -1283406538],
		["Drug Dealer 2", 1448755353],
		["Male Burger Shot Worker", 989485],
		["Male Cluckin Bell Worker", -1011530423],
		["Male Rockstar Cafe Worker", 1979561477],
		["Male TW@ Cafe Worker", -786449781],
		["Male Well Stacked Pizza Worker", 206941425],
		["Firefighter", -610224615],
		["Garbage Collector", 1136499716],
		["Goon", 897868981],
		["Male Gym Worker", -1902758612],
		["Mechanic 2", -356904519],
		["Male Modo Worker", -1056268969],
		["Helicopter Pilot", 1201610759],
		["Perseus", -151000142],
		["Generic Male 1", 501136335],
		["Generic Male 2", 186619473],
		["Generic Male 3", -111611196],
		["Paramedic", -1175077216],
		["Prisoner", -1676937780],
		["Prisoner 2", 215190023],
		["Roman's Taxi Service Driver", 1552970117],
		["Male Runner", -1481923910],
		["Male Shop Assistant 1", 357919731],
		["State Trooper", -89302119],
		["SWAT", -1004762946],
		["Sword Swallower", -64233032],
		["Thief", -1292254815],
		["Valet", 271284208],
		["Vendor", -186113957],
		["French Tom", -2015686009],
		["Jim Fitz", 1977784957],
		["East European Woman", -203833294],
		["East European Woman 2", 189853472],
		["Woman", -349043578],
		["Jersey Woman", -114937692],
		["Oriental Woman", -1697333660],
		["Rich Woman", 100706569],
		["Business Woman 1", 155063868],
		["Business Woman 2", 394310337],
		["Chinatown Woman", 1375728805],
		["Business Woman 3", -284229525],
		["East European Woman 3", 677687516],
		["Fat Black Woman", -1188238883],
		["Jersey Woman 1", -2075220936],
		["Jersey Woman 2", -1356924456],
		["Fat Hispanic Woman 1", 812112483],
		["Fat Hispanic Woman 2", -129242580],
		["White Manhattan Woman", 852423121],
		["Black Manhattan Woman", 76551508],
		["Old Asian Woman", -2118501976],
		["Old Rich Woman", 1616769823],
		["Business Woman 4", 453889158],
		["Asian Woman in Dress", 824245375],
		["Fat Black Bronx Woman", -1362442041],
		["Random White Woman", -1788328884],
		["Random Hispanic Woman", -1523915823],
		["Random Eastern European Woman", -949987237],
		["Random Black Woman", -1926577323],
		["Black Harlem Woman 1", 168065679],
		["Fat Jersey Woman 1", 441464],
		["Fat Hispanic Woman 3", 54114008],
		["Hispanic Woman 1", -292713088],
		["Hispanic Woman 2", 1743814728],
		["Manhattan Woman 1", 1670568326],
		["Manhattan Woman 2", 1354281938],
		["Manhattan Woman 1", 1056837725],
		["Asian Woman 1", -1193633577],
		["Black Woman 2", 713691120],
		["Rich White Woman 1", -1780385799],
		["Asian Woman", -952185135],
		["Female Shopper 1", 1586287288],
		["Female Shopper 2", 1848013291],
		["Female Shopper 3", -1702036227],
		["Female Socialite 1", 1182843182],
		["Street Woman 1", -900623157],
		["Street Woman 2", 286007875],
		["Street Woman 3", 1473654742],
		["Street Woman 4", -1850743775],
		["Street Woman 5", 1290755317],
		["Street Woman 6", 1872110126],
		["Tourist Woman 1", 1754440500],
		["MODEL_F_Y_VILLBO_01", 761763258],
		["Business Man 1", -636579119],
		["Business Man 2", -1754526315],
		["Street Criminal 1", -1516474414],
		["Street Criminal 2", -1821258883],
		["Obese Mafia Thug", 1952671026],
		["Gay Man 1", -1991603022],
		["Homeless Bum 1", -1080673049],
		["Loony White Man 1", 495499562],
		["MODEL_M_M_MIDTOWN_01", -1984134881],
		["Business Man 2", 1063816580],
		["Eastern European Man 1", 208763854],
		["Fat Black Man 2", -1020237172],
		["MODEL_M_M_PINDUS_02", 1782277836],
		["Fat Italian Man 1", -1402442039],
		["Italian Man 2", -1628417063],
		["Hispanic Man 1", 1158569407],
		["Hispanic Man 2", 1969438324],
		["Hispanic Man 3", 1621955848],
		["Tourist Man 1", -657489059],
		["Black Business Man 1", -1307068958],
		["Asian Man 3", 734334931],
		["MODEL_M_M_PRICH_01", 1865082075],
		["MODEL_M_O_EASTEURO_01", -432593815],
		["Hasidic Jewish Man 1", -1639359785],
		["Old Man 1", 1656087115],
		["MODEL_M_O_PEASTEURO_02", 2034185905],
		["MODEL_M_O_PHARBRON_01", 1316404726],
		["MODEL_M_O_PJERSEY_01", 980990533],
		["MODEL_M_O_STREET_01", -1298691925],
		["Old Business Man", 243672348],
		["MODEL_M_Y_BOHO_01", 2085884255],
		["MODEL_M_Y_BOHOGUY_01", 221246143],
		["MODEL_M_Y_BRONX_01", 52357603],
		["Black Business Man 2", 1530937394],
		["Black Business Man 3", 690281432],
		["Asian Man 4", -1149743642],
		["Chopshop Mechanic 1", -314369597],
		["Chopshop Mechanic 2", -552829610],
		["MODEL_M_Y_DODGY_01", -1097188138],
		["MODEL_M_Y_DORK_02", -1775659292],
		["MODEL_M_Y_DOWNTOWN_01", 1207402441],
		["MODEL_M_Y_DOWNTOWN_02", 1500619449],
		["MODEL_M_Y_DOWNTOWN_03", 594261682],
		["MODEL_M_Y_GAYYOUNG", -747824291],
		["MODEL_M_Y_GENSTREET_11", -677160979],
		["MODEL_M_Y_GENSTREET_16", -1678614360],
		["MODEL_M_Y_GENSTREET_20", 989044076],
		["MODEL_M_Y_GENSTREET_34", 1180218190],
		["MODEL_M_Y_HARDMAN_01", -1420592428],
		["MODEL_M_Y_HARLEM_01", -1222963415],
		["MODEL_M_Y_HARLEM_02", -1746153269],
		["MODEL_M_Y_HARLEM_04", 2104499156],
		["Hasidic Jewish Man 2", -1874580889],
		["MODEL_M_Y_LEASTSIDE_01", -1055386282],
		["MODEL_M_Y_PBRONX_01", 575808580],
		["MODEL_M_Y_PCOOL_01", -71980543],
		["MODEL_M_Y_PCOOL_02", -195159218],
		["MODEL_M_Y_PEASTEURO_01", 697247370],
		["MODEL_M_Y_PHARBRON_01", 670406267],
		["MODEL_M_Y_PHARLEM_01", 26615298],
		["MODEL_M_Y_PJERSEY_01", 1542927558],
		["MODEL_M_Y_PLATIN_01", -1806886352],
		["MODEL_M_Y_PLATIN_02", -1022920796],
		["MODEL_M_Y_PLATIN_03", -1326394505],
		["MODEL_M_Y_PMANHAT_01", 607901190],
		["MODEL_M_Y_PMANHAT_02", 1968470106],
		["MODEL_M_Y_PORIENT_01", -344136289],
		["MODEL_M_Y_PQUEENS_01", 560413584],
		["MODEL_M_Y_PRICH_01", 1352017873],
		["MODEL_M_Y_PVILLBO_01", 223726252],
		["MODEL_M_Y_PVILLBO_02", -1252681043],
		["MODEL_M_Y_PVILLBO_03", -1562020391],
		["MODEL_M_Y_QUEENSBRIDGE", 1223224881],
		["MODEL_M_Y_SHADY_02", -1220737489],
		["MODEL_M_Y_SKATEBIKE_01", 1755322862],
		["MODEL_M_Y_SOHO_01", 386690478],
		["MODEL_M_Y_STREET_01", 62496225],
		["MODEL_M_Y_STREET_03", 523785438],
		["MODEL_M_Y_STREET_04", 813889395],
		["MODEL_M_Y_STREETBLK_02", -1552214124],
		["MODEL_M_Y_STREETBLK_03", -650575089],
		["Street Punk 1", -740078918],
		["Street Punk 2", -1927496394],
		["Street Punk 3", 1374242512],
		["Tough Guy", -1139941790],
		["Male Tourist", 809067472],
	],
	gtaivVehicleModels: [
		["Admiral", 1264341792],
		["Airtug", 1560980623],
		["Ambulance", 1171614426],
		["Banshee", -1041692462],
		["Benson", 2053223216],
		["Biff", 850991848],
		["Blista", -344943009],
		["Bobcat", 1075851868],
		["Boxville", -1987130134],
		["Buccaneer", -682211828],
		["Burrito", -1346687836],
		["Burrito 2", -907477130],
		["Bus", -713569950],
		["Cabby", 1884962369],
		["Cavalcade", 2006918058],
		["Chavos", -67282078],
		["Cognoscenti", -2030171296],
		["Comet", 1063483177],
		["Coquette", 108773431],
		["DF8", 162883121],
		["Dillettante", -1130810103],
		["Dukes", 723973206],
		["E109", -1971955454],
		["Emperor", -685276541],
		["Rusty Emperor", -1883002148],
		["Esperanto", -276900515],
		["Faction", -2119578145],
		["FIB Car", 1127131465],
		["Feltzer", -1097828879],
		["Feroci", 974744810],
		["Airport Feroci", 1026055242],
		["Firetruck", 1938952078],
		["Flatbed", 1353720154],
		["Fortune", 627033353],
		["Forklift", 1491375716],
		["Futo", 2016857647],
		["FXT", 675415136],
		["Habanero", 884422927],
		["Hakumai", -341892653],
		["Huntley", 486987393],
		["Infernus", 418536135],
		["Ingot", -1289722222],
		["Intruder", 886934177],
		["Landstalker", 1269098716],
		["Lokus", -37030056],
		["Manana", -2124201592],
		["Marbella", 1304597482],
		["Merit", -1260881538],
		["Minivan", -310465116],
		["Moonbeam", 525509695],
		["Mr. Tasty", 583100975],
		["Mule", 904750859],
		["Noose Patrol Car", 148777611],
		["Noose Stockade", 1911513875],
		["Oracle", 1348744438],
		["Packer", 569305213],
		["Patriot", -808457413],
		["Perennial", -2077743597],
		["Airport Perennial", -1590284256],
		["Peyote", 1830407356],
		["Phantom", -2137348917],
		["Pinnacle", 131140572],
		["PMP-600", 1376298265],
		["Police Cruiser", 2046537925],
		["Police Patrol", -1627000575],
		["Police Patriot", -350085182],
		["Pony", -119658072],
		["Premier", -1883869285],
		["Presidente", -1962071130],
		["Primo", -1150599089],
		["Police Stockade", -1900572838],
		["Rancher", 1390084576],
		["Rebla", 83136452],
		["Reply", -845979911],
		["Romero", 627094268],
		["Roman's Taxi", -1932515764],
		["Ruiner", -227741703],
		["Sabre", -449022887],
		["Sabre 2", 1264386590],
		["Sabre GT", -1685021548],
		["Schafter", -322343873],
		["Sentinel", 1349725314],
		["Solair", 1344573448],
		["Speedo", -810318068],
		["Stallion", 1923400478],
		["Steed", 1677715180],
		["Stockade", 1747439474],
		["Stratum", 1723137093],
		["Stretch", -1961627517],
		["Sultan", 970598228],
		["Sultan RS", -295689028],
		["Super GT", 1821991593],
		["Taxi", -956048545],
		["Taxi 2", 1208856469],
		["Trashmaster", 1917016601],
		["Turismo", -1896659641],
		["Uranus", 1534326199],
		["Vigero", -825837129],
		["Vigero 2", -1758379524],
		["Vincent", -583281407],
		["Virgo", -498054846],
		["Voodoo", 2006667053],
		["Washington", 1777363799],
		["Willard", 1937616578],
		["Yankee", -1099960214],
		["Bobber", -1830458836],
		["Faggio", -1842748181],
		["Hellfury", 584879743],
		["NRG-900", 1203311498],
		["PCJ-600", -909201658],
		["Sanchez", 788045382],
		["Zombie", -570033273],
		["Annihilator", 837858166],
		["Maverick", -1660661558],
		["Police Maverick", 353883353],
		["Tour Maverick", 2027357303],
		["Dinghy", 1033245328],
		["Jetmax", 861409633],
		["Marquis", -1043459709],
		["Predator", -488123221],
		["Reefer", 1759673526],
		["Squalo", 400514754],
		["Tuga", 1064455782],
		["Tropic", 290013743],
		["Cablecar", -960289747],
		["Subway", 800869680],
		["El Train", -1953988645],
	],
	weaponSlots: [
		false,
		[
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		],
		[
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			2,
			2,
			2,
			2,
			2,
			3,
			3,
			4,
			4,
			4,
			5,
			5,
			5,
			5,
			6,
			6,
			8,
			8,
			7,
			7,
			7,
			7,
			9,
			-1,
			9,
		],
		[
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			8,
			8,
			8,
			-1,
			-1,
			-1,
			2,
			2,
			2,
			3,
			3,
			3,
			4,
			4,
			5,
			5,
			4,
			6,
			6,
			7,
			7,
			7,
			7,
			8,
			12,
			9,
			9,
			9,
			9,
			9,
			11,
			9,
			9,
			9,
		],
		[

		]
	],
	fightStyles: [
		false,
		[	// GTA III

		],
		[	// GTA VC

		],
		[	// GTA SA
			["Default", [4, 6]],
			["Boxing", [5, 6]],
			["Kung Fu", [6, 6]],
			["Kick Boxing", [7, 6]],
			["Unnamed", [8, 6]],
		],
		[	// GTA UG

		],
		[	// GTA IV

		]
	],
	walkStyles: [
		false,
		[	// GTA III
			"Man",
			"Ped",
			"Player",
			"Rocket",
			"One Handed Weapon",
			"Two Handed Weapon",
			"Baseball Bat",
			"Shuffle",
			"Old Man",
			"Gang 1",
			"Gang 2",
			"Fat Man",
			"Old Fat Man",
			"Woman",
			"Shopping",
			"Busy Woman",
			"Sexy Woman",
			"Old Woman",
			"Fat Woman",
			"Panic Chunky",
			"Player Back",
			"Player Left",
			"Player Right",
			"Rocket Back",
			"Rocket Left",
			"Rocket Right",
		],
		[	// GTA VC

		],
		[	// GTA SA

		],
		[	// GTA UG

		],
		[	// GTA IV

		]
	],
	policeStations: [
		[],
		[ // GTA III
			[1143.875, -675.1875, 14.97], 	// Portland
			[340.25, -1123.375, 25.98],		// Staunton Island
			[-1253.0, -138.1875, 58.75],	// Shoreside Vale
		],

		[ // GTA Vice City
			[399.77, -468.90, 11.73],		// Washington Beach
			[508.96, 512.07, 12.10],		// Vice Point
			[-657.43, 762.31, 11.59],		// Downtown
			[-885.08, -470.44, 13.11],		// Little Havana
		],
	],
	fireStations: [
		[],
		[ // GTA III
			[1103.70, -52.45, 7.49], 		// Portland
			[-78.48, -436.80, 16.17], 		// Staunton Island
			[-1202.10, -14.67, 53.20],		// Shoreside Vale
		],

		[ // GTA Vice City
			[-695.15, 912.58, 11.08],		// Downtown
		],
	],
	hospitals: [
		[],
		[ // GTA III
			[1144.25, -596.875, 14.97], 	// Portland
			[183.5, -17.75, 16.21],			// Staunton Island
			[-1259.5, -44.5, 58.89],		// Shoreside Vale
		],

		[ // GTA Vice City
			[-822.57, 1152.82, 12.41],		// Downtown (Shuman Health Care Center)
			[-885.08, -470.44, 13.11],		// Little Havana (West Haven Community Health Care Center)
			[-133.19, -980.76, 10.46], 		// Ocean Beach (Ocean View Hospital)
		],

		[ // GTA San Andreas
			[1182.67, -1323.81, 13.579],	// Los Santos West (All Saints General Hospital)
			[2034.7567,-1403.1083,17.293],	// Los Santos East (County General)
		],

		[ // GTA IV
			[1199.59, 196.78, 33.554],		// Shottler Medical Center
			[980.71, 1831.61, 23.898],		// Northern Gardens Medical Center
			[-1317.27, 1277.20, 22.370],	// Leftwood Hospital
			[-1538.43, 344.58, 20.943],		// Acter Medical Center
		],
	],
	payAndSprays: [
		[],
		[ // GTA III
			[925.4, -360.3, 10.83], 		// Portland
			[-1142.4, 35.01, 58.61],		// Shoreside Vale
		],

		[ // GTA Vice City
			[-869.95, -119.06, 10.63],		// Little Haiti
			[-910.82, -1265.96, 11.79],		// Viceport
		],
	],
	ammuNations: [
		[],
		[ // GTA III
			[1068.3, -400.9, 15.24], 		// Portland
			[348.2, -717.9, 26.43], 		// Staunton Island
		],

		[ // GTA Vice City
			[-676.32, 1204.98, 11.10],		// Downtown
		],
	],
	animations: [
		[],
		[ // GTA III
			["walk", 0, 0, VRR_ANIMTYPE_ADD, 0.0],
			["jog", 0, 1, VRR_ANIMTYPE_ADD, 0.0],
			["look1", 0, 7, VRR_ANIMTYPE_ADD, 0.0],
			["tired", 0, 9, VRR_ANIMTYPE_ADD, 0.0],
			["raisegun", 0, 10, VRR_ANIMTYPE_ADD, 0.0],
			["wave", 0, 12, VRR_ANIMTYPE_ADD, 0.0],
			["talk", 0, 11, VRR_ANIMTYPE_ADD, 0.0],
			["stomachhit", 0, 18, VRR_ANIMTYPE_ADD, 0.0],
			["headhit", 0, 18, VRR_ANIMTYPE_ADD, 0.0],
			["throw1", 0, 53, VRR_ANIMTYPE_ADD, 0.0],
			["throw2", 0, 54, VRR_ANIMTYPE_ADD, 0.0],
			["punch1", 0, 54, VRR_ANIMTYPE_ADD, 0.0],
			["headbutt", 0, 70, VRR_ANIMTYPE_ADD, 0.0],
			["kick", 0, 71, VRR_ANIMTYPE_ADD, 0.0],
			["kneekick", 0, 72, VRR_ANIMTYPE_ADD, 0.0],
			["punch2", 0, 73, VRR_ANIMTYPE_ADD, 0.0],
			["flipkick", 0, 74, VRR_ANIMTYPE_ADD, 0.0],
			["bow", 0, 126, VRR_ANIMTYPE_ADD, 0.0],
			["opendoor1", 0, 127, VRR_ANIMTYPE_ADD, 0.0],
			["opendoor2", 0, 128, VRR_ANIMTYPE_ADD, 0.0],
			["falling", 0, 151, VRR_ANIMTYPE_ADD, 0.0],
			["dive", 0, 156, VRR_ANIMTYPE_ADD, 0.0],
			["headscratch", 0, 157, VRR_ANIMTYPE_ADD, 0.0],
			["look2", 0, 158, VRR_ANIMTYPE_ADD, 0.0],
			["plant", 0, 162, VRR_ANIMTYPE_ADD, 0.0],
			["cower", 0, 163, VRR_ANIMTYPE_ADD, 0.0],
			["aimdown", 0, 160, VRR_ANIMTYPE_ADD, 0.0],
			["aimcrouch", 0, 165, VRR_ANIMTYPE_ADD, 0.0],
			["throw3", 0, 166, VRR_ANIMTYPE_ADD, 0.0],
			["handsup", 0, 167, VRR_ANIMTYPE_ADD, 0.0],
		],
		[ // GTA VC
			["walk", 0, 0, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["jog", 0, 1, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["handcuffs", 0, 7, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["tired", 0, 9, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["raisegun", 0, 10, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["wave", 0, 12, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["talk", 0, 11, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["stomachhit", 0, 18, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["headhit", 0, 18, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["headbutt", 0, 49, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["kick", 0, 50, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["kneekick", 0, 51, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["throw2", 0, 54, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["punch1", 0, 52, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["punch2", 0, 53, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["flipkick", 0, 54, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["headscratch", 0, 152, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["aimdown", 0, 155, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["look2", 0, 153, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["handsup", 0, 161, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["cower", 0, 162, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["fucku", 0, 163, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["phone", 0, 166, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sit", 0, 169, VRR_ANIMTYPE_BLEND, 1.0, null, null, null, null],
			["atm", 0, 171, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["cpr", 24, 214, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["idle1", 26, 215, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["idle2", 26, 216, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["idle3", 26, 217, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["idle4", 26, 218, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance1", 28, 226, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance2", 28, 227, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance3", 28, 228, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance4", 28, 229, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance5", 28, 230, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance6", 28, 231, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["dance7", 28, 232, VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
		],
		[ // GTA SA
			["talk", "PED", "IDLE_CHAT", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["fucku", "PED", "FUCKU", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["taichi", "PARK", "Tai_Chi_Loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["slapass", "SWEET", "sweet_ass_slap", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["wave", "ON_LOOKERS", "wave_loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["vomit", "EAT_Vomit_P", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["cower", "ped", "cower", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["laugh", "RAPPING", "Laugh_01", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["plant", "BOMBER", "BOM_Plant", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["smoke1", "SMOKING","M_smklean_loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["smoke2", "SMOKING","F_smklean_loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["smoke3", "SMOKING","M_smkstnd_loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sit1", "ped","SEAT_idle", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sit2", "BEACH", "ParkSit_M_loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sit3", "BEACH", "ParkSit_W_loop", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sit4", "BEACH", "SitnWait_loop_W", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sitleft", "FOOD", "FF_Sit_In_L", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["sitright", "FOOD", "FF_Sit_In_R", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["scratch", "MISC","Scratchballs_01", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
			["standup", "ped", "SEAT_up", VRR_ANIMTYPE_ADD, 0.0, null, null, null, null],
		],
		null,
		[ // GTA IV
			["dance1", "DAN_LOOP_A", "DANCING", 16.0, true, false, true, false],
		]
	],
	meleeWeapons: [
		[],
		[1],
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		[],
	],
	blipSprites: [
		false,
		{	// GTA III
			policeStation: 8,
			fireStation: 9,
			hospital: 12,
			ammunation: 20,
			payAndSpray: 18,
			vehicleDealership: 6,
			restaurant: -1,
			fastFood: -1,
			bank: 0,
			fuelStation: -1,
			business: -1,
			house: -1,
		},
		{	// GTA VC
			policeStation: 0,
			fireStation: 0,
			hospital: 0,
			ammunation: 16,
			payAndSpray: 27,
			vehicleDealership: 7,
			restaurant: -1,
			fastFood: -1,
			bank: 0,
			fuelStation: -1,
			business: -1,
			house: -1,
		},
		{	// GTA SA
			policeStation: 30,
			fireStation: 20,
			hospital: 22,
			ammunation: 6,
			payAndSpray: 63,
			vehicleDealership: 55,
			airplaneDealership: 5,
			boatDealership: 9,
			restaurant: 50,
			fastFood: -1,
			clothes: 45,
			pizza: 29,
			chicken: 14,
			burger: 10,
			bank: 52,
			gasStation: 17,
			business: -1,
			house: 31,
			bar: 49,
			club: 48,
			gym: 54,
			repairGarage: 27,
			trophy: 33,
			race2: 53,
			job: 56,
		},
		{	// GTA UG
			policeStation: 8,
			fireStation: 9,
			hospital: 12,
			ammunation: 20,
			payAndSpray: 18,
			vehicleDealership: 6,
			restaurant: -1,
			fastFood: -1,
			bank: 52,
			fuelStation: 0,
			business: -1,
			house: -1,
		},
		{	// GTA IV
			policeStation: 8,
			fireStation: 9,
			hospital: 12,
			ammunation: 20,
			payAndSpray: 18,
			vehicleDealership: 6,
			restaurant: -1,
			fastFood: -1,
			bank: 52,
			fuelStation: 0,
			business: -1,
			house: -1,
		},
	],
	pickupModels: [
		{},

		{ // GTA 3
			policeStation: 1361,
			fireStation: 1361,
			hospital: 1361,
			ammunation: 1361,
			payAndSpray: 1361,
			vehicleDealership: 1361,
			restaurant: 1361,
			fastFood: 1361,
			bank: 1323,
			fuelStation: 1361,
			business: 1361,
			house: 1361,
			clothes: 1361,
			misc: 1361,
			exit: 1361
		},

		{ // GTA Vice City
			policeStation: 375,
			fireStation: 406,
			hospital: 366,
			ammunation: 406,
			payAndSpray: 406,
			vehicleDealership: 406,
			restaurant: 406,
			fastFood: 406,
			bank: 408,
			fuelStation: 406,
			business: 406,
			house: 407,
			clothes: 409,
			misc: 406,
			exit: 406,
		},

		{ // GTA San Andreas
			policeStation: 1247,

			fireStation: 1318,
			hospital: 1240,
			ammunation: 1239,
			payAndSpray: 1239,
			vehicleDealership: 1239,
			restaurant: 1239,
			fastFood: 1239,
			bank: 1274,
			fuelStation: 1239,
			business: 1272,
			house: 1273,
			clothes: 1275,
			misc: 1239,
			exit: 1318,
		}
	],
	pickupTypes: [
		{},

		{ // GTA 3
			business: 255,
			house: 255,
			bank: 255,
			clothes: 255,
			info: 255,
			job: 255,
		},

		{ // GTA Vice City
			business: 255,
			house: 255,
			bank: 255,
			clothes: 255,
			info: 255,
			job: 255,
		},

		{ // GTA San Andreas
			business: 1,
			house: 1,
			bank: 1,
			clothes: 1,
			info: 1,
			job: 1,
		}
	],

	// THIS IS SCREEN HEIGHT, NOT ACTUAL DOOR POSITION IN THE WORLD
	propertyLabelHeight: [
		false,
		85,
		85,
		85,
		85,
		85,
		85,
	],

	removedWorldObjects: [
		false,

		[ // GTA III
			["fraightback04", toVector3(1229.88, -84.8012, 13.4004), 50.0], // Truck trailer in Easy Credit Autos dealership parking lot
			["fraightback03", toVector3(1239.49, -68.0529, 11.6914), 50.0], // Truck trailer in Easy Credit Autos dealership parking lot
		],

		[ // GTA VC

		],

		[ // GTA SA

		],

		[ // GTA UG

		],

		[ // GTA IV

		],
	],

	excludedGroundSnowModels: [
		false,

		[ // GTA III

		],

		[ // GTA VC

		],

		[ // GTA SA
			// Twin tunnels from Rodeo, Los Santos to/from Flint County
			13682, // TCElawcuntunb
			13680, // TCElawcuntunb
			13676, // TCElawcuntun1a_law2
			13677, // TCElawcuntun1a_law2

			// Los Santos
			6387, // century03_LAw2 (L.A. Century Plaza underground parking)
			17633, // lae2_ground08
			4818, // TRNTRK8_LAS
			4884, // lastranentun1_LAS
			4885, // lastranentun4_LAS

			// Train Tunnel under Los Santos
			6248, // RailTunn01_LAw
			6249, // RailTunn02_LAw
			6250, // RailTunn03_LAw
			6251, // RailTunn04_LAw
			6252, // RailTunn05_LAw
			5772, // RailTunn01_LAwN (Market Station lower level)
			5773, // TrainStat01_LAwN (Market Station upper/ground level)
			6502, // RailTunn04_LAw2
			6290, // RailTunn02_LAw2
			6501, // RailTunn03_LAw2
			6292, // RailTunn01_LAw2N

			6966, // vegasNbank1 (L.V. north building underground parking, upper level)
			7245, // vegasNbank1ug (L.V. north building underground parking, lower level)
			7011, // courthse_vgn01 (L.V. courthouse parking structure)
			8390, // multicarpark01_lvS (Large parking structure next to pyramid)

			// Train tunnel next to Las Venturas
			6982, // vgsNtraintunnel01
			6983, // vgsNtraintunnel02
			6984, // vgsNtraintunnel03
			6981, // vgsNtraintunnel04
		],

		[ // GTA UG

		],

		[ // GTA IV

		],
	],
	defaultBusinessItems:
	[
		{

		},
		{
			clothingStore: [
				["Outfit", 500, 2]
			],
			legalGunStore: [
				["Colt 45", 500, 2],
				["Shotgun", 500, 2],
				["Baseball Bat", 500, 2]
			],
			illegalGunStore: [
				["Uzi", 500, 2],
				["AK-47", 500, 2],
				["M16", 500, 2],
				["Sniper Rifle", 500, 2]
			],
			gasStation: [
				["Bottle of Soda", 500, 2],
				["Can of Soda", 500, 2],
				["Slice of Pizza", 500, 2],
				["Bottle of Water", 500, 2],
				["Can of Beer", 500, 2],
			],
			electronicsStore: [
				["Phone", 500, 2],
				["Walkie Talkie", 500, 2],
				["Megaphone", 500, 2],
				["Tazer", 500, 2],
				["Camera", 500, 2],
			],
			bar: [
				["Bottle of Vodka", 500, 2],
				["Bottle of Whiskey", 500, 2],
				["Bottle of Soda", 500, 2],
				["Bottle of Wine", 500, 2],
				["Bottle of Bourbon", 500, 2],
				["Shot of Bourbon", 500, 2],
				["Shot of Vodka", 500, 2],
				["Shot of Whiskey", 500, 2],
				["Glass of Wine", 500, 2],
			],
			club: [
				["Bottle of Vodka", 500, 2],
				["Bottle of Whiskey", 500, 2],
				["Bottle of Soda", 500, 2],
				["Bottle of Wine", 500, 2],
				["Bottle of Bourbon", 500, 2],
				["Shot of Bourbon", 500, 2],
				["Shot of Vodka", 500, 2],
				["Shot of Whiskey", 500, 2],
				["Glass of Wine", 500, 2],
			],
			chicken: [
				["Bucket of Chicken", 500, 2],
				["Chicken Tenders Meal", 500, 2],
				["Large Fries", 500, 2],
				["Small Fries", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			burger: [
				["Bacon Cheeseburger", 500, 2],
				["Double Cheeseburger", 500, 2],
				["Big Boy Burger", 500, 2],
				["Large Fries", 500, 2],
				["Small Fries", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			chinese: [
				["Egg Roll", 500, 2],
				["Lo Mein", 500, 2],
				["Fried Rice", 500, 2],
				["Crab Rangoon", 500, 2],
				["Egg Drop Soup", 500, 2],
				["Moo Shu Pork", 500, 2],
				["Egg Foo Young", 500, 2],
				["Sesame Chicken", 500, 2],
			],
			italian: [
				["Bottle of Wine", 500, 2],
				["Glass of Wine", 500, 2],
				["Arancini", 500, 2],
				["Lasagne", 500, 2],
				["Chicken Alfredo", 500, 2],
				["Fettucine Alfredo", 500, 2],
				["Chicken Parmigiana", 500, 2],
				["Chicken Carbonara", 500, 2],
				["Sausage Rigatoni", 500, 2],
				["Chicken Salad", 500, 2],
				["Caesar Salad", 500, 2],
			],
			mexican: [
				["Crunchy Taco", 500, 2],
				["Beaf and Bean Burrito", 500, 2],
				["Burrito Supreme", 500, 2],
				["Cheesy Nachos", 500, 2],
				["Nacho Supreme", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			pizza: [
				["Large Pizza", 500, 2],
				["Medium Pizza", 500, 2],
				["Small Pizza", 500, 2],
				["Buffalo Wings", 500, 2],
				["Hot Wings", 500, 2],
				["Bottle of Soda", 500, 2],
			],
		},
		{
			clothingStore: [
				["Outfit", 500, 2]
			],
			legalGunStore: [
				["Colt .45", 500, 2],
				["Python", 500, 2],
				["Shotgun", 500, 2],
				["Stubby Shotgun", 500, 2],
				["Baseball Bat", 500, 2],
				["Brass Knuckles", 500, 2],
			],
			illegalGunStore: [
				["Uzi", 500, 2],
				["MP5", 500, 2],
				["Tec-9", 500, 2],
				["Ingram", 500, 2],
				["Ruger", 500, 2],
				["M4", 500, 2],
				["Sniper Rifle", 500, 2],
				["Laser Sniper", 500, 2],
			],
			gasStation: [
				["Bottle of Soda", 500, 2],
				["Can of Soda", 500, 2],
				["Slice of Pizza", 500, 2],
				["Bottle of Water", 500, 2],
				["Can of Beer", 500, 2]
			],
			electronicsStore: [
				["Phone", 500, 2],
				["Walkie Talkie", 500, 2],
				["Megaphone", 500, 2],
				["Tazer", 500, 2],
				["Camera", 500, 2]
			],
			bar: [
				["Bottle of Vodka", 500, 2],
				["Bottle of Whiskey", 500, 2],
				["Bottle of Soda", 500, 2],
				["Bottle of Wine", 500, 2],
				["Bottle of Bourbon", 500, 2],
				["Shot of Bourbon", 500, 2],
				["Shot of Vodka", 500, 2],
				["Shot of Whiskey", 500, 2],
				["Glass of Wine", 500, 2],
			],
			club: [
				["Bottle of Vodka", 500, 2],
				["Bottle of Whiskey", 500, 2],
				["Bottle of Soda", 500, 2],
				["Bottle of Wine", 500, 2],
				["Bottle of Bourbon", 500, 2],
				["Shot of Bourbon", 500, 2],
				["Shot of Vodka", 500, 2],
				["Shot of Whiskey", 500, 2],
				["Glass of Wine", 500, 2],
			],
			chicken: [
				["Bucket of Chicken", 500, 2],
				["Chicken Tenders Meal", 500, 2],
				["Large Fries", 500, 2],
				["Small Fries", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			burger: [
				["Bacon Cheeseburger", 500, 2],
				["Double Cheeseburger", 500, 2],
				["Big Boy Burger", 500, 2],
				["Large Fries", 500, 2],
				["Small Fries", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			chinese: [
				["Egg Roll", 500, 2],
				["Lo Mein", 500, 2],
				["Fried Rice", 500, 2],
				["Crab Rangoon", 500, 2],
				["Egg Drop Soup", 500, 2],
				["Moo Shu Pork", 500, 2],
				["Egg Foo Young", 500, 2],
				["Sesame Chicken", 500, 2],
			],
			italian: [
				["Bottle of Wine", 500, 2],
				["Glass of Wine", 500, 2],
				["Arancini", 500, 2],
				["Lasagne", 500, 2],
				["Chicken Alfredo", 500, 2],
				["Fettucine Alfredo", 500, 2],
				["Chicken Parmigiana", 500, 2],
				["Chicken Carbonara", 500, 2],
				["Sausage Rigatoni", 500, 2],
				["Chicken Salad", 500, 2],
				["Caesar Salad", 500, 2],
			],
			mexican: [
				["Crunchy Taco", 500, 2],
				["Beaf and Bean Burrito", 500, 2],
				["Burrito Supreme", 500, 2],
				["Cheesy Nachos", 500, 2],
				["Nacho Supreme", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			pizza: [
				["Large Pizza", 500, 2],
				["Medium Pizza", 500, 2],
				["Small Pizza", 500, 2],
				["Buffalo Wings", 500, 2],
				["Hot Wings", 500, 2],
				["Bottle of Soda", 500, 2],
			],
		},
		{
			clothingStore: [
				["Outfit", 500, 2]
			],
			legalGunStore: [
				["Baseball Bat", 500, 2],
				["Pepper Spray", 500, 2],
				["Brass Knuckles", 500, 2],
				["9mm", 500, 2],
				["Desert Eagle", 500, 2],
				["Shotgun", 500, 2],
				["Country Rifle", 500, 2]
			],
			illegalGunStore: [
				["Micro SMG/Uzi", 500, 2],
				["MP5", 500, 2],
				["Tec-9", 500, 2],
				["AK-47", 500, 2],
				["M4", 500, 2],
				["Combat Shotgun", 500, 2],
				["Sniper Rifle", 500, 2]
			],
			sexShop: [
				["Purple Dildo", 500, 2],
				["Dildo", 500, 2],
				["Vibrator", 500, 2],
				["Silver Vibrator", 500, 2],
				["Flowers", 500, 2]
			],
			gasStation: [
				["Bottle of Soda", 500, 2],
				["Can of Soda", 500, 2],
				["Slice of Pizza", 500, 2],
				["Bottle of Water", 500, 2],
				["Can of Beer", 500, 2]
			],
			electronicsStore: [
				["Phone", 500, 2],
				["Walkie Talkie", 500, 2],
				["Megaphone", 500, 2],
				["Tazer", 500, 2],
				["Camera", 500, 2]
			],
			bar: [
				["Bottle of Vodka", 500, 2],
				["Bottle of Whiskey", 500, 2],
				["Bottle of Soda", 500, 2],
				["Bottle of Wine", 500, 2],
				["Bottle of Bourbon", 500, 2],
				["Shot of Bourbon", 500, 2],
				["Shot of Vodka", 500, 2],
				["Shot of Whiskey", 500, 2],
				["Glass of Wine", 500, 2],
			],
			club: [
				["Bottle of Vodka", 500, 2],
				["Bottle of Whiskey", 500, 2],
				["Bottle of Soda", 500, 2],
				["Bottle of Wine", 500, 2],
				["Bottle of Bourbon", 500, 2],
				["Shot of Bourbon", 500, 2],
				["Shot of Vodka", 500, 2],
				["Shot of Whiskey", 500, 2],
				["Glass of Wine", 500, 2],
			],
			chicken: [
				["Bucket of Chicken", 500, 2],
				["Chicken Tenders Meal", 500, 2],
				["Large Fries", 500, 2],
				["Small Fries", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			burger: [
				["Bacon Cheeseburger", 500, 2],
				["Double Cheeseburger", 500, 2],
				["Big Boy Burger", 500, 2],
				["Large Fries", 500, 2],
				["Small Fries", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			chinese: [
				["Egg Roll", 500, 2],
				["Lo Mein", 500, 2],
				["Fried Rice", 500, 2],
				["Crab Rangoon", 500, 2],
				["Egg Drop Soup", 500, 2],
				["Moo Shu Pork", 500, 2],
				["Egg Foo Young", 500, 2],
				["Sesame Chicken", 500, 2],
			],
			italian: [
				["Bottle of Wine", 500, 2],
				["Glass of Wine", 500, 2],
				["Arancini", 500, 2],
				["Lasagne", 500, 2],
				["Chicken Alfredo", 500, 2],
				["Fettucine Alfredo", 500, 2],
				["Chicken Parmigiana", 500, 2],
				["Chicken Carbonara", 500, 2],
				["Sausage Rigatoni", 500, 2],
				["Chicken Salad", 500, 2],
				["Caesar Salad", 500, 2],
			],
			mexican: [
				["Crunchy Taco", 500, 2],
				["Beaf and Bean Burrito", 500, 2],
				["Burrito Supreme", 500, 2],
				["Cheesy Nachos", 500, 2],
				["Nacho Supreme", 500, 2],
				["Bottle of Soda", 500, 2],
			],
			pizza: [
				["Large Pizza", 500, 2],
				["Medium Pizza", 500, 2],
				["Small Pizza", 500, 2],
				["Buffalo Wings", 500, 2],
				["Hot Wings", 500, 2],
				["Bottle of Soda", 500, 2],
			],
		}
	],
	interiorTemplates: [
		false,

		{ // GTA 3

		},

		{ // GTA VC
			mall: [toVector3(379.62, 1007.00, 19.22), 4],
			malibu: [toVector3(489.83, -76.49, 11.48), 17],
			vcpd: [toVector3(396.38, -472.96, 12.34), 12],
			apartment: [toVector3(26.67, -1328.89, 13.00), 11],
			hotelLobby: [toVector3(228.53, -1277.12, 12.07), 1],
			bikerBar: [toVector3(-597.41, 651.84, 11.30), 11],
			mansion: [toVector3(-379.14, -551.65, 19.32), 2],
			gunRange: [toVector3(-667.79, 1217.51, 11.10), 10],
			bank: [toVector3(-894.52, -341.16, 13.45), 3],
			stripClub: [toVector3(97.53, -1472.06, 10.43), 5],
			rosenberg: [toVector3(120.82, -827.98, 10.62), 6],
			arena: [toVector3(-1080.49, 1331.16, 13.91), 15],
			ghettoShack: [toVector3(-962.74, 146.96, 9.40), 12],
			hotelRoom: [toVector3(226.47, -1274.98, 19.271), 2.933],

		},

		{ // GTA SA
			lspd: [toVector3(247.113, 62.929, 1003.64), 2],
			lvpd: [toVector3(288.82, 167.39, 1007.17), 3],
			sfpd: [toVector3(246.40, 110.84, 1003.22), 10],
			reeceBarberShop: [toVector3(411.62, -21.43, 1001.80), 2],
			fourDragons: [toVector3(2016.26, 1017.77, 996.87), 10],
			caligula: [toVector3(2233.8, 1712.23, 1011.76), 1],
			genericCasino: [toVector3(1118.88, -10.27, 1002.08), 12],
			cluckinBell: [toVector3(365.71, -9.88, 1001.85), 9],
			pizzaStack: [toVector3(372.35, -131.65, 1001.49), 5],
			burgerShot: [toVector3(375.96, -65.81, 1001.50), 10],
			tattooParlor: [toVector3(-203.07, -24.16, 1002.27), 16],
			bank: [toVector3(2305.14, -16.274, 26.74), 1],
			gas1: [toVector3(-25.88, -185.86, 1003.54), 17],
			gas2: [toVector3(6.09, -29.27, 1003.54), 10],
			gas3: [toVector3(-30.94, -89.60, 1003.54), 18],
			gas4: [toVector3(-25.13, -139.06, 1003.54), 16],
			gas5: [toVector3(	-27.31, -29.27, 1003.54), 4],
			gas6: [toVector3(-26.69, -55.71, 1003.54), 6],
			shamal: [toVector3(2.38, 33.10, 1199.84), 1],
			andromeda: [toVector3(315.85, 1024.49, 1949.79), 9],
			airportTickets: [toVector3(-1827.14, 7.20, 1061.14), 14],
			airportBaggage: [toVector3(-1855.56, 41.26, 1061.14), 14],
			ammu1: [toVector3(286.14, -40.64, 1001.56), 1],
			ammu2: [toVector3(286.80, -82.54, 1001.53), 4],
			ammu3: [toVector3(296.91, -108.07, 1001.56), 6],
			ammu4: [toVector3(314.82, -141.43, 999.66), 7],
			ammu5: [toVector3(316.52, -167.70, 999.66), 6],
			ammuBooth: [toVector3(302.29, -143.13, 1004.06), 7],
			ammuRange: [toVector3(280.79, -135.20, 1004.06), 7],
			house1: [toVector3(235.51, 1189.17, 1080.34), 3],
			house2: [toVector3(225.76, 1240.00, 1082.15), 2],
			house3: [toVector3(223.04, 1289.26, 1082.20), 1],
			house4: [toVector3(225.63, 1022.48, 1084.07), 7],
			house5: [toVector3(295.14, 1474.47, 1080.52), 15],
			house6: [toVector3(328.49, 1480.59, 1084.45), 15],
			house7: [toVector3(385.80, 1471.77, 1080.21), 15],
			atrium: [toVector3(1726.18, -1641.00, 20.23), 18],
			crackPalace: [toVector3(2,567.52, -1294.59, 1063.25), 2],
			bloodbowlStadium: [toVector3(-1394.20, 987.62, 1023.96), 15],
			burningDesireHouse: [toVector3(2338.32, -1180.61, 1027.98), 5],
			furhbergerHouse: [toVector3(2807.63, -1170.15, 1025.57), 8],
			dillimoreGas: [toVector3(664.19, -570.73, 16.34), 0],
			donutShop: [toVector3(376.99, -191.21, 1000.63), 17],
			airport: [toVector3(-1830.81, 16.83, 1061.14), 14],
			jeffersonMotel: [toVector3(2220.26, -1,148.01, 1025.80), 15],
			kickstartStadium: [toVector3(-1410.72, 1,591.16, 1052.53), 14],
			libertyCity: [toVector3(-750.80, 491.00, 1371.70), 1],
			lsxBaggageReclaim: [toVector3(-1870.80, 59.81, 1056.25), 14],
			jizzy: [toVector3(-2637.69, 1404.24, 906.46), 3],
			rcBattlefield: [toVector3(-1079.99, 1061.58, 1343.04), 10],
			ryderHouse: [toVector3(2451.77, -1699.80, 1013.51), 2],
			sfGarage: [toVector3(-2042.42, 178.59, 28.84), 1],
			sweetHouse: [toVector3(2535.83, -1,674.32, 1015.50), 1],
			katieHouse: [toVector3(267.22, 304.71, 999.14), 2],
			helenaHouse: [toVector3(292.44, 308.77, 999.14), 3],
			welcomePump: [toVector3(681.66, -453.32, -25.61), 1],
			woozieApartment: [toVector3(-2158.72, 641.29, 1052.38), 1],
			eightTrackStadium: [toVector3(-1395.96, -208.20, 1051.17), 7],
			dirtBikeStadium: [toVector3(-1424.93, -664.59, 1059.86), 4],
			crackDen: [toVector3(318.57, 1115.21, 1082.98), 5],
			motelRoom: [toVector3(2251.85, -1138.16, 1050.63), 9],
			hashburyHouse: [toVector3(2260.76, -1210.45, 1049.02), 10],
			cjHouse: [toVector3(2496.65, -1696.55, 1014.74), 3],
			maddDoggMansion: [toVector3(1299.14, -794.77, 1084.00), 5],
			motelRoom2: [toVector3(2262.83, -1137.71, 1050.63), 10],
			safeHouse1: [toVector3(2365.42, -1131.85, 1050.88), 8],
			safeHouse2: [toVector3(2324.33, -1144.79, 1050.71), 12],
			zeroStore: [toVector3(-2240.00, 131.00, 1035.40), 6],
			brothel1: [toVector3(940.65, -18.48, 1000.93), 3],
			brothel2: [toVector3(967.53, -53.02, 1001.12), 3],
			brothel3: [toVector3(744.27, 1437.25, 1102.70), 6],
			prolapsStore: [toVector3(207.35, -138.00, 1003.31), 3],
			victimStore: [toVector3(221.33, -6.61, 1005.19), 5],
			suburbanStore: [toVector3(203.81, -46.53, 1001.80), 1],
			sexShop: [toVector3(-106.72, -19.64, 1000.71), 3],
			bincoStore: [toVector3(207.54, -109.00, 1005.13), 15],
			wardrobe: [toVector3(255.71, -41.13, 1002.02), 14],
			cityHall: [toVector3(389.538, 173.652, 1008.38), 3],
			gantonGym: [toVector3(772.2,-5.06,1000.73), 1],
			kungFuGym: [toVector3(774.21, -48.92, 1000.58), 6],
			lvGym: [toVector3(773.57, -77.09, 1000.65), 7],
			insuranceCompany: [toVector3(-2029.76, -119.624, 1035.17), 1],
			stripClub1: [toVector3(1204.80,-11.58,1000.92), 2],
			stripClub1Private: [toVector3(1204.80, 13.89, 1000.92), 2],
			nightClub: [toVector3(493.39,-22.72,1000.67), 17],
			warehouse1: [toVector3(1412.63, -1.78, 1000.92), 1],
			warehouse2: [toVector3(1302.51, -1.78, 1001.02), 18],
			warehouse3: [toVector3(76.63, -301.15, 1.57), 0],
			warehouse4: [toVector3(1059.89, 2081.68, 10.82), 0],
			bikeSchool: [toVector3(1494.32, 1304.94, 1093.28), 3],
			bar1: [toVector3(501.98,-69.15,998.75), 11],
			diner1: [toVector3(457.30, -88.42, 999.55), 4],
			diner2: [toVector3(454.97, -110.10, 1000.07), 4],
			diner3: [toVector3(435.27, -80.95, 999.55), 5],
			smallPoliceStation: [toVector3(322.19, 302.49, 999.14), 5],
		},

		{ // GTA UG

		},

		{ // GTA IV

		},
	],
	skinChangePosition: [
		[],
		[],
		[],
		[toVector3(258.14, -41.76, 1002.023), 1.322, 14],
		[],
		[],
	],
	policeStations: [
		false,
		[	// GTA 3
			{
				position: toVector3(1143.875, -675.1875, 14.97),
				heading: 1.5,
				blip: false,
				name: "Portland",
			},
			{
				position: toVector3(340.25, -1123.375, 25.98),
				heading: 3.14,
				blip: false,
				name: "Staunton Island",
			},
			{
				position: toVector3(-1253.0, -138.1875, 58.75),
				heading: 1.5,
				blip: false,
				name: "Shoreside Vale",
			},
		],
		[	// GTA VC
			{
				position: toVector3(399.77, -468.90, 11.73),
				heading: 0.0,
				blip: false,
				name: "Washington Beach",
			},
			{
				position: toVector3(508.96, 512.07, 12.10),
				heading: 0.0,
				blip: false,
				name: "Vice Point",
			},
			{
				position: toVector3(-657.43, 762.31, 11.59),
				heading: 0.0,
				blip: false,
				name: "Downtown",
			},
			{
				position: toVector3(-885.08, -470.44, 13.11),
				heading: 0.0,
				blip: false,
				name: "Little Havana",
			},
		],
		[	// GTA SA
			{
				position: toVector3(1545.53, -1675.64, 13.561),
				heading: -1.575,
				blip: false,
				name: "Los Santos",
			},

		],
		[	// GTA UG

		],
		[	// GTA IV

			{
				position: toVector3(894.99, -357.39, 18.185),
				heading: 2.923,
				blip: false,
				name: "Broker",
			},
			{
				position: toVector3(435.40, 1592.29, 17.353),
				heading: 3.087,
				blip: false,
				name: "South Bohan",
			},
			{
				position: toVector3(974.93, 1870.45, 23.073),
				heading: -1.621,
				blip: false,
				name: "Northern Gardens",
			},
			{
				position: toVector3(1233.25, -89.13, 28.034),
				heading: 1.568,
				blip: false,
				name: "South Slopes",
			},
			{
				position: toVector3(50.12, 679.88, 15.316),
				heading: 1.569,
				blip: false,
				name: "Middle Park East",
			},
			{
				position: toVector3(85.21, 1189.82, 14.755),
				heading: 3.127,
				blip: false,
				name: "East Holland",
			},
			{
				position: toVector3(2170.87, 448.87, 6.085),
				heading: 1.501,
				blip: false,
				name: "Francis International Airport",
			},
			{
				position: toVector3(213.12, -211.70, 10.752),
				heading: 0.200,
				blip: false,
				name: "Chinatown",
			},
			{
				position: toVector3(-1714.95, 276.31, 22.134),
				heading: 1.127,
				blip: false,
				name: "Acter",
			},
			{
				position: toVector3(-1220.73, -231.53, 3.024),
				heading: 2.210,
				blip: false,
				name: "Port Tudor",
			},
			{
				position: toVector3(-927.66, 1263.63, 24.587),
				heading: -0.913,
				blip: false,
				name: "Leftwood",
			},
		]
	],
	fireStations: [
		false,
		[	// GTA 3
			{
				position: toVector3(1103.70, -52.45, 7.49),
				heading: 1.5,
				blip: false,
				name: "Portland",
			},
			{
				position: toVector3(-78.48, -436.80, 16.17),
				heading: 3.14,
				blip: false,
				name: "Staunton Island",
			},
			{
				position: toVector3(-1202.10, -14.67, 53.20),
				heading: 1.5,
				blip: false,
				name: "Shoreside Vale",
			},
		],
		[	// GTA VC

		],
		[	// GTA SA

		],
		[	// GTA UG

		],
		[	// GTA IV
			{
				position: toVector3(953.13, 95.90, 35.004),
				heading: 1.595,
				blip: false,
				name: "Broker",
			},
			{
				position: toVector3(-271.02, 1542.15, 20.420),
				heading: -1.160,
				blip: false,
				name: "Northwood",
			},
			{
				position: toVector3(1120.47, 1712.36, 10.534),
				heading: -0.682,
				blip: false,
				name: "Northern Gardens",
			},
			{
				position: toVector3(2364.87, 166.83, 5.813),
				heading: 0.156,
				blip: false,
				name: "Francis International Airport",
			},
			{
				position: toVector3(295.40, -336.88, 4.963),
				heading: 2.887,
				blip: false,
				name: "Chinatown",
			},
		]
	],
	hospitals: [
		false,
		[	// GTA 3
			{
				position: toVector3(1144.25, -596.875, 14.97),
				heading: 1.5,
				blip: false,
				name: "Portland",
			},
			{
				position: toVector3(183.5, -17.75, 16.21),
				heading: 3.14,
				blip: false,
				name: "Staunton Island",
			},
			{
				position: toVector3(-1259.5, -44.5, 58.89),
				heading: 1.5,
				blip: false,
				name: "Shoreside Vale",
			},
		],
		[	// GTA VC
			{
				position: toVector3(493.14, 709.31, 11.80),
				heading: 1.5,
				blip: false,
				name: "Unknown",
			},
			{
				position: toVector3(-826.06, 1144.41, 12.41),
				heading: 1.5,
				blip: false,
				name: "Unknown",
			},
		],
		[	// GTA SA
			{
				position: toVector3(1172.96, -1323.42, 15.40),
				heading: 1.5,
				blip: false,
				name: "All Saints",
			},
			{
				position: toVector3(2034.04, -1405.07, 17.24),
				heading: 1.5,
				blip: false,
				name: "County General",
			},
		],
		[	// GTA UG

		],
		[	// GTA IV
			{
				position: toVector3(1199.59, 196.78, 33.554),
				heading: 1.633,
				blip: false,
				name: "Schottler",
			},
			{
				position: toVector3(980.71, 1831.61, 23.898),
				heading: -0.049,
				blip: false,
				name: "Northern Gardens",
			},
			{
				position: toVector3(-1317.27, 1277.20, 22.370),
				heading: 2.246,
				blip: false,
				name: "Leftwood",
			},
			{
				position: toVector3(-1538.43, 344.58, 20.943),
				heading: -0.156,
				blip: false,
				name: "Acter",
			},
		]
	],
	payAndSprays: [
		false,
		[	// GTA 3
			{
				position: toVector3(925.4, -360.3, 10.83),
				blip: false,
				name: "Portland",
			},
			{
				position: toVector3(381.8, -493.8, 25.95),
				blip: false,
				name: "Staunton Island",
			},
			{
				position: toVector3(-1142.4, 35.01, 58.61),
				blip: false,
				name: "Shoreside Vale",
			},
		],
		[	// GTA VC

		],
		[	// GTA SA

		],
		[	// GTA UG

		],
		[	// GTA IV

		]
	],

	ammunations: [
		false,
		[	// GTA 3
			{
				position: toVector3(1068.3, -400.9, 15.24),
				blip: false,
				name: "Portland",
			},
			{
				position: toVector3(348.2, -717.9, 26.43),
				blip: false,
				name: "Staunton Island",
			},
		],
		[	// GTA VC

		],
		[	// GTA SA

		],
		[	// GTA UG

		],
		[	// GTA IV

		]
	],
	fuelStations: [
		false,
		[	// GTA 3

			{
				position: toVector3(1161.9, -76.73, 7.27),
				blip: false,
				name: "Portland",
			},
		],
		[	// GTA VC

		],
		[	// GTA SA

		],
		[	// GTA UG

		],
		[	// GTA IV

		]
	],
};

// ===========================================================================

function getGameData() {
	return gameData;
}

// ===========================================================================

function getAllowedSkinDataBySkinId(skinId) {
	for(let i in allowedSkins[getGame()]) {
		if(allowedSkins[getGame()][i][0] == skinId) {
			return i;
		}
	}

	return 0;
}


// ===========================================================================

function getPlayerPosition(client) {
    if(doesGameHaveServerSideElements()) {
        return getPlayerData(client).syncPosition;
    } else {
        if(client.player != null) {
            return client.player.position;
        }
    }
}

// ===========================================================================

function setPlayerPosition(client, position) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s position to ${position.x}, ${position.y}, ${position.z}`);
    sendPlayerSetPosition(client, position);
}

// ===========================================================================

function getPlayerHeading(client) {
    if(getServerGame() == GAME_GTA_IV) {
        return getPlayerData(client).syncHeading;
    } else {
        if(client.player != null) {
            return client.player.heading;
        }
    }
}

// ===========================================================================

function setPlayerHeading(client, heading) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s heading to ${heading}`);
    sendPlayerSetHeading(client, heading);
}

// ===========================================================================

function getPlayerVehicle(client) {
    if(getServerGame() == GAME_GTA_IV)  {
        return getPlayerData().syncVehicle;
    } else {
        if(client.player.vehicle) {
            return client.player.vehicle;
        }
    }
    return false;
}

// ===========================================================================

function getPlayerDimension(client) {
    return client.player.dimension;
}

// ===========================================================================

function getPlayerInterior(client) {
    return getPlayerCurrentSubAccount(client).interior || 0;
}

// ===========================================================================

function setPlayerDimension(client, dimension) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s dimension to ${dimension}`);
    client.player.dimension = dimension;
}

// ===========================================================================

function setPlayerInterior(client, interior) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s interior to ${interior}`);
    sendPlayerSetInterior(client, interior);
    getPlayerCurrentSubAccount(client).interior = interior;
}

// ===========================================================================

function isPlayerInAnyVehicle(client) {
    if(getServerGame() == GAME_GTA_IV)  {
        return (getPlayerData().syncVehicle != null);
    } else {
        return (client.player.vehicle != null);
    }
}

// ===========================================================================

function getPlayerVehicleSeat(client) {
    if(!isPlayerInAnyVehicle(client)) {
        return false;
    }

    for(let i = 0 ; i <= 8 ; i++) {
        if(getPlayerVehicle(client).getOccupant(i) == client.player) {
            return i;
        }
    }

    return false;
}

// ===========================================================================

function isPlayerSpawned(client) {
    return getPlayerData(client).spawned;
}

// ===========================================================================

function getVehiclePosition(vehicle) {
    return vehicle.position;
}

// ===========================================================================

function getVehicleHeading(vehicle) {
    return vehicle.heading;
}

// ===========================================================================

function setVehicleHeading(vehicle, heading) {
    return vehicle.heading = heading;
}

// ===========================================================================

function getVehicleSyncer(vehicle) {
    return getElementSyncer(vehicle);
}

// ===========================================================================

function getVehicleForNetworkEvent(vehicle) {
    return vehicle;
}

// ===========================================================================

function deleteGameElement(element) {
    logToConsole(LOG_DEBUG, `Destroying game element ${element.id} (Type: ${element.type})`);
    if(element != null) {
        destroyElement(element);
        return true;
    }
    return false;
}

// ===========================================================================

function isPlayerInFrontVehicleSeat(client) {
    return (getPlayerVehicleSeat(client) == 0 || getPlayerVehicleSeat(client) == 1);
}

// ===========================================================================

function removePlayerFromVehicle(client) {
    logToConsole(LOG_DEBUG, `Removing ${getPlayerDisplayForConsole(client)} from their vehicle`);
    sendPlayerRemoveFromVehicle(client);
    return true;
}

// ===========================================================================

function setPlayerSkin(client, skin) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s skin to ${skin} (${getSkinNameFromId(skin)})`);
    client.player.modelIndex = skin;
}

// ===========================================================================

function getPlayerSkin(client) {
    return client.player.modelIndex;
}

// ===========================================================================

function setPlayerHealth(client, health) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s health to ${health}`);
    sendPlayerSetHealth(client, health);
}

// ===========================================================================

function getPlayerHealth(client) {
    return client.player.health;
}

// ===========================================================================

function setPlayerArmour(client, armour) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s armour to ${armour}`);
    sendPlayerSetArmour(client, armour);
}

// ===========================================================================

function getPlayerArmour(client) {
    return client.player.armour;
}

// ===========================================================================

function setPlayerCash(client, amount) {
    if(typeof amount != "number") {
        return false;
    }

	getPlayerCurrentSubAccount(client).cash = toInteger(amount);
	updatePlayerCash(client);
}

// ===========================================================================

function givePlayerCash(client, amount) {
    if(typeof amount != "number") {
        return false;
    }

	getPlayerCurrentSubAccount(client).cash = getPlayerCurrentSubAccount(client).cash + toInteger(amount);
	updatePlayerCash(client);
}

// ===========================================================================

function takePlayerCash(client, amount) {
    if(typeof amount != "number") {
        return false;
    }

	getPlayerCurrentSubAccount(client).cash = getPlayerCurrentSubAccount(client).cash - toInteger(amount);
	updatePlayerCash(client);
}

// ===========================================================================

function disconnectPlayer(client) {
    logToConsole(LOG_DEBUG, `Disconnecting (kicking) ${getPlayerDisplayForConsole(client)}`);
    client.disconnect();
    return false;
}

// ===========================================================================

function getElementSyncer(element) {
    return getClients()[element.syncer];
}

// ===========================================================================

function getPlayerWeaponAmmo(client) {
    return client.player.weaponAmmunition;
}

// ===========================================================================

function setPlayerVelocity(client, velocity) {
    logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s velocity to ${velocity.x}, ${velocity.y}, ${velocity.z}`);
    client.player.velocity = velocity;
}

// ===========================================================================

function getPlayerVelocity(client, velocity) {
    return client.player.velocity;
}

// ===========================================================================

function getElementDimension(element) {
    return element.dimension;
}

// ===========================================================================

function setElementDimension(element, dimension) {
    return element.dimension = dimension;
}

// ===========================================================================

function setElementRotation(element, rotation) {
    return element.setRotation(rotation);
}

// ===========================================================================

function givePlayerHealth(client, amount) {
    if(getPlayerHealth(client)+amount > 100) {
        logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s health to 100`);
        setPlayerHealth(client, 100);
    } else {
        logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s health to ${getPlayerHealth(client)+amount}`);
        setPlayerHealth(client, getPlayerHealth(client)+amount);
    }
}

// ===========================================================================

function givePlayerArmour(client, amount) {
    if(getPlayerArmour(client)+amount > 100) {
        logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s armour to 100`);
        setPlayerArmour(client, 100);
    } else {
        logToConsole(LOG_DEBUG, `Setting ${getPlayerDisplayForConsole(client)}'s armour to ${getPlayerArmour(client)+amount}`);
        setPlayerArmour(client, getPlayerArmour(client)+amount);
    }
}

// ===========================================================================

function getServerGame() {
    return getGame();
}

// ===========================================================================

function consolePrint(text) {
    console.log(text);
}

// ===========================================================================

function getPlayerName(client) {
    return client.name;
}

// ===========================================================================

function getServerName() {
    return server.name;
}

// ===========================================================================

function createGamePickup(model, position, type) {
    return gta.createPickup(model, position, type);
}

// ===========================================================================

function createGameBlip(position, type = 0, colour = toColour(255, 255, 255, 255)) {
    return gta.createBlip(type, position, 1, colour);
}

// ===========================================================================

function createGameObject(model, position) {
    return gta.createObject(model, position);
}

// ===========================================================================

function setElementOnAllDimensions(element, state) {
    if(!isNull(element) && element != false) {
        element.onAllDimensions = state;
    }
}

// ===========================================================================

function destroyGameElement(element) {
    if(!isNull(element) && element != false) {
        destroyElement(element);
    }
}

// ===========================================================================

function isMeleeWeapon(weaponId, gameId = getServerGame()) {
    return (getGameData().meleeWeapons[gameId].indexOf(weaponId) != -1);
}

// ===========================================================================

function getPlayerLastVehicle(client) {
    return getPlayerData(client).lastVehicle;
}

// ===========================================================================

function isVehicleObject(vehicle) {
    return (vehicle.type == ELEMENT_VEHICLE);
}

// ===========================================================================

function repairVehicle(vehicle) {
	vehicle.fix();
}

// ===========================================================================

function setVehicleLights(vehicle, lights) {
	vehicle.lights = lights;
}

// ===========================================================================

function setVehicleEngine(vehicle, engine) {
	vehicle.engine = engine;
}

// ===========================================================================

function setVehicleLocked(vehicle, locked) {
	vehicle.locked = locked;
}

// ===========================================================================

function setVehicleSiren(vehicle, siren) {
	vehicle.siren = siren;
}

// ===========================================================================

function setVehicleColours(vehicle, colour1, colour2) {
	vehicle.colour1 = colour1;
	vehicle.colour2 = colour2;
}

// ===========================================================================

function createGameVehicle(modelId, position, heading) {
	return gta.createVehicle(modelId, position, heading);
}

// ===========================================================================

function getWeaponModelId(weaponId) {
	let weaponModels = [
		[ 0 , 172 , 173 , 178 , 176 , 171 , 180 , 177 , 175 , 181 , 174 , 170 ],
		[],
	];
	return weaponModels[getServerGame()][weaponId];
}

// ===========================================================================

function getIsland(position) {
    if(getServerGame() == GAME_GTA_III) {
		if(position.x > 616) {
			return VRR_ISLAND_PORTLAND;
		} else if(position.x < -283) {
			return VRR_ISLAND_SHORESIDEVALE;
		}
		return VRR_ISLAND_STAUNTON;
	} else {
		return VRR_ISLAND_NONE;
	}

	//return gta.getIslandFromPosition(position);
}

function getVehicleModelIdFromParams(params) {
	if(isNaN(params)) {
		let modelId = getVehicleModelIdFromName(params);

		if(!modelId) {
			return false;
		}

		if(isValidVehicleModel(toInteger(modelId))) {
			return toInteger(modelId);
		}

		return false;
	} else {
		if(isValidVehicleModel(toInteger(params))) {
			return toInteger(params);
		}

		return false;
	}

	return false;
}

// ===========================================================================

function getVehicleModelIdFromName(params) {
	if(isGTAIV()) {
		for(let i in getGameData().gtaivVehicleModels) {
			if(toLowerCase(getGameData().gtaivVehicleModels[i][0]).indexOf(toLowerCase(params)) != -1) {
				return getGameData().gtaivVehicleModels[i][1];
			}
		}
	} else {
		let vehicleNames = getGameData().vehicleNames[getServerGame()];
		for(let i in vehicleNames) {
			if(toLowerCase(vehicleNames[i]).indexOf(toLowerCase(params)) != -1) {
				return toInteger(i)+toInteger(getGameData().vehicleModelIdStart[getServerGame()]);
			}
		}
	}

	return false;
}

// ===========================================================================

function getVehicleNameFromModelId(modelId) {
	if(isGTAIV()) {
		for(let i in getGameData().gtaivVehicleModels) {
			if(getGameData().gtaivVehicleModels[i][1] == modelId) {
				return getGameData().gtaivVehicleModels[i][0];
			}
		}
	} else {
		let modelIndex = modelId-getGameData().vehicleModelIdStart[getServerGame()];
		return getGameData().vehicleNames[getServerGame()][modelIndex];
	}
}

// ===========================================================================

function isValidVehicleModel(modelId) {
	if(getGame() == GAME_GTA_III) {
		if(modelId < 90 || modelId > 150) {
			return false;
		}

		return true;
	}

	if(getGame() == GAME_GTA_VC) {
		if(modelId < 130 || modelId > 236) {
			return false;
		}

		return true;
	}

	if(getGame() == GAME_GTA_SA) {
		return true;
	}

	if(getGame() == GAME_GTA_IV) {
		return true;
	}

	return false;
}

// ===========================================================================

function getVehicleModelIdFromParams(params) {
	if(isNaN(params)) {
		let modelId = getVehicleModelIdFromName(params);

		if(!modelId) {
			return false;
		}

		if(isValidVehicleModel(toInteger(modelId))) {
			return toInteger(modelId);
		}

		return false;
	} else {
		if(isValidVehicleModel(toInteger(params))) {
			return toInteger(params);
		}

		return false;
	}

	return false;
}

// ===========================================================================

function setGameTime(hour, minute, minuteDuration = 1000) {
	if(isTimeSupported()) {
		gta.time.hour = hour;
		gta.time.minute = minute;
		gta.time.minuteDuration = minuteDuration;
	}
}

// ===========================================================================