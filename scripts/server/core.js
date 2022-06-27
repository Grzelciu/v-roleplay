// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: core.js
// DESC: Provides core data structures, function, and operations
// TYPE: Server (JavaScript)
// ===========================================================================

let scriptVersion = "1.1";
let serverStartTime = 0;
let logLevel = LOG_INFO | LOG_DEBUG | LOG_VERBOSE; // LOG_ERROR|LOG_WARN;

let playerResourceReady = new Array(server.maxClients).fill(false);
let playerResourceStarted = new Array(server.maxClients).fill(false);
let playerInitialized = new Array(server.maxClients).fill(false);
let playerGUI = new Array(server.maxClients).fill(false);

// ===========================================================================

/**
 * @typedef {Object} ServerData
 * @property {Array.<VehicleData>} vehicles
 * @property {Array.<ClientData>} clients
 * @property {Array.<BusinessData>} businesses
 * @property {Array.<HouseData>} houses
 * @property {Array.<HouseData>} commands
 * @property {Array.<ItemData>} items
 * @property {Array.<ItemTypeData>} itemTypes
 * @property {Array.<ClanData>} clans
 * @property {Array} localeStrings
 * @property {Array.<NPCData>} npcs
 * @property {Array.<RaceData>} races
 * @property {Array.<JobData>} jobs
 * @property {Array.<GateData>} gates
 * @property {Array.<RadioStationData>} radioStations
 * @property {Array} groundItemCache
 * @property {Array} groundPlantCache
 * @property {Array} purchasingVehicleCache
 * @property {Array} rentingVehicleCache
 */
let serverData = {
	vehicles: [],
	clients: new Array(128),
	businesses: [],
	houses: [],
	commands: {},
	items: [],
	itemTypes: [],
	clans: [],
	localeStrings: {},
	cachedTranslations: [],
	cachedTranslationFrom: [],
	//triggers: [],
	npcs: [],
	races: [],
	jobs: [],
	gates: [],
	radioStations: [],
	groundItemCache: [],
	groundPlantCache: [],
	purchasingVehicleCache: [],
	rentingVehicleCache: [],
};

// ===========================================================================

/**
 *
 * @return {ServerData}
 *
 */
function getServerData() {
	return serverData;
}

// ===========================================================================