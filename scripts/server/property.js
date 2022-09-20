// ===========================================================================
// Asshat Gaming Roleplay
// https://github.com/VortrexFTW/agrp_main
// (c) 2022 Asshat Gaming
// ===========================================================================
// FILE: property.js
// DESC: Provides property (house, business, etc) with functions and usage
// TYPE: Server (JavaScript)
// ===========================================================================

// Property Types
const AGRP_PROP_TYPE_NONE = 0;						// None (invalid)
const AGRP_PROP_TYPE_BIZ_NORMAL = 1;				// Normal business (sells items)
const AGRP_PROP_TYPE_BIZ_BANK = 2;					// Bank business
const AGRP_PROP_TYPE_BIZ_PUBLIC = 3;				// Public business (Government, public service, etc)
const AGRP_PROP_TYPE_BIZ_PAINTBALL = 4;				// Paintball arena. Player joins paintball/airsoft when they enter
const AGRP_PROP_TYPE_BIZ_DEALERSHIP = 5;			// Vehicle Dealership (also for airplane, boat, etc)
const AGRP_PROP_TYPE_HOUSE = 6;						// House

// ===========================================================================

// Business Location Types
const AGRP_PROP_LOC_NONE = 0;						// None
const AGRP_PROP_LOC_GATE = 1;						// Moveable gate that belongs to the property
const AGRP_PROP_LOC_GARAGE = 2;						// Location for attached garage (pos1 = outside, pos2 = inside). Use pos to teleport or spawn veh/ped
const AGRP_PROP_LOC_FUEL = 3;						// Fuel pump
const AGRP_PROP_LOC_DRIVETHRU = 4;					// Drivethrough
const AGRP_PROP_LOC_VENDMACHINE = 5;				// Vending machine
const AGRP_PROP_LOC_ATM = 6;						// ATM
const AGRP_PROP_LOC_PAYPHONE = 7;					// Payphone

// ===========================================================================

// Business Owner Types
const AGRP_PROP_OWNER_NONE = 0;                     // Not owned
const AGRP_PROP_OWNER_PLAYER = 1;                   // Owned by a player (character/subaccount)
const AGRP_PROP_OWNER_JOB = 2;                      // Owned by a job
const AGRP_PROP_OWNER_CLAN = 3;                     // Owned by a clan
const AGRP_PROP_OWNER_FACTION = 4;                  // Owned by a faction (not used at the moment)
const AGRP_PROP_OWNER_PUBLIC = 5;                   // Public property. Used for goverment/official places like police, fire, city hall, DMV, etc

// ===========================================================================

/**
 * @class Representing a property's data. Loaded and saved in the database
 * @property {Array.<PropertyLocationData>} locations
 */
class PropertyData {
	constructor(dbAssoc = false) {
		this.databaseId = 0;
		this.name = "";
		this.ownerType = AGRP_PROP_OWNER_NONE;
		this.ownerId = 0;
		this.buyPrice = 0;
		this.locked = false;
		this.hasInterior = false;
		this.index = -1;
		this.needsSaved = false;
		this.interiorLights = true;
		this.propertyType = AGRP_PROP_TYPE_NONE;

		this.entrancePosition = false;
		this.entranceRotation = 0.0;
		this.entranceInterior = 0;
		this.entranceDimension = 0;
		this.entrancePickupModel = -1;
		this.entranceBlipModel = -1;
		this.entrancePickup = null;
		this.entranceBlip = null;
		this.entranceScene = "";

		this.exitPosition = false;
		this.exitRotation = 0.0;
		this.exitInterior = 0;
		this.exitDimension = 0;
		this.exitPickupModel = -1;
		this.exitBlipModel = -1;
		this.exitPickup = null;
		this.exitBlip = null;
		this.exitScene = "";

		this.streamingRadioStation = 0;
		this.streamingRadioStationIndex = -1;

		this.labelHelpType = AGRP_PROPLABEL_INFO_NONE;

		if (dbAssoc) {
			this.databaseId = toInteger(dbAssoc["prop_id"]);
			this.name = toString(dbAssoc["prop_name"]);
			this.ownerType = toInteger(dbAssoc["prop_owner_type"]);
			this.ownerId = toInteger(dbAssoc["prop_owner_id"]);
			this.buyPrice = toInteger(dbAssoc["prop_buy_price"]);
			this.locked = intToBool(toInteger(dbAssoc["prop_locked"]));
			this.hasInterior = intToBool(toInteger(dbAssoc["prop_has_interior"]));
			this.interiorLights = intToBool(toInteger(dbAssoc["prop_interior_lights"]));
			this.type = toInteger(dbAssoc["prop_type"]);

			this.entrancePosition = toVector3(toFloat(dbAssoc["prop_entrance_pos_x"]), toFloat(dbAssoc["prop_entrance_pos_y"]), toFloat(dbAssoc["prop_entrance_pos_z"]));
			this.entranceRotation = toInteger(dbAssoc["prop_entrance_rot_z"]);
			this.entranceInterior = toInteger(dbAssoc["prop_entrance_int"]);
			this.entranceDimension = toInteger(dbAssoc["prop_entrance_vw"]);
			this.entrancePickupModel = toInteger(dbAssoc["prop_entrance_pickup"]);
			this.entranceBlipModel = toInteger(dbAssoc["prop_entrance_blip"]);
			this.entranceScene = toString(dbAssoc["prop_entrance_scene"]);

			this.exitPosition = toVector3(dbAssoc["prop_exit_pos_x"], dbAssoc["prop_exit_pos_y"], dbAssoc["prop_exit_pos_z"]);
			this.exitRotation = toInteger(dbAssoc["prop_exit_rot_z"]);
			this.exitInterior = toInteger(dbAssoc["prop_exit_int"]);
			this.exitDimension = toInteger(dbAssoc["prop_exit_vw"]);
			this.exitPickupModel = toInteger(dbAssoc["prop_exit_pickup"]);
			this.exitBlipModel = toInteger(dbAssoc["prop_exit_blip"]);
			this.exitScene = toString(dbAssoc["prop_exit_scene"]);

			this.labelHelpType = toInteger(dbAssoc["prop_label_help_type"]);
			this.streamingRadioStation = toInteger(dbAssoc["prop_radio_station"]);
		}
	};
};

/**
 * @class Representing a property's location data. Multiple can be used for a single property. Used for things like doors, fuel pumps, drive thru positions, etc. Loaded and saved in the database
 */
class PropertyLocationData {
	constructor(dbAssoc = false) {
		this.databaseId = 0;
		this.name = "";
		this.type = 0;
		this.propertyIndex = 0;
		this.propertyId = 0;
		this.enabled = false;
		this.index = -1;
		this.needsSaved = false;

		this.position = toVector3(0.0, 0.0, 0.0);
		this.interior = 0;
		this.dimension = 0;

		if (dbAssoc) {
			this.databaseId = toInteger(dbAssoc["prop_loc_id"]);
			this.name = toString(dbAssoc["prop_loc_name"]);
			this.type = toInteger(dbAssoc["prop_loc_type"]);
			this.business = toInteger(dbAssoc["prop_loc_biz"]);
			this.enabled = intToBool(toInteger(dbAssoc["prop_loc_enabled"]));

			this.position = toVector3(toFloat(dbAssoc["prop_loc_pos_x"]), toFloat(dbAssoc["prop_loc_pos_y"]), toFloat(dbAssoc["prop_loc_pos_z"]));
			this.interior = toInteger(dbAssoc["prop_loc_int"]);
			this.dimension = toInteger(dbAssoc["prop_loc_vw"]);
		}
	}
};

// ===========================================================================

function initPropertyScript() {
	logToConsole(LOG_INFO, "[AGRP.Property]: Initializing property script ...");
	logToConsole(LOG_INFO, "[AGRP.Property]: Property script initialized successfully!");
	return true;
}

// ===========================================================================

function loadPropertyFromId(propertyIndex) {
	let dbConnection = connectToDatabase();
	if (dbConnection) {
		let dbQueryString = `SELECT * FROM prop_main WHERE prop_id = ${businessId} LIMIT 1;`;
		let dbQuery = queryDatabase(dbConnection, dbQueryString);
		if (dbQuery) {
			let dbAssoc = fetchQueryAssoc(dbQuery);
			freeDatabaseQuery(dbQuery);
			return new PropertyData(dbAssoc);
		}
		disconnectFromDatabase(dbConnection);
	}

	return false;
}

// ===========================================================================

function loadPropertiesFromDatabase() {
	logToConsole(LOG_INFO, "[AGRP.Property]: Loading properties from database ...");

	let tempProperties = [];
	let dbConnection = connectToDatabase();
	let dbQuery = null;
	let dbAssoc;

	if (dbConnection) {
		dbQuery = queryDatabase(dbConnection, `SELECT * FROM prop_main WHERE prop_deleted = 0 AND prop_server = ${getServerId()}`);
		if (dbQuery) {
			if (dbQuery.numRows > 0) {
				while (dbAssoc = fetchQueryAssoc(dbQuery)) {
					let tempPropertyData = new PropertyData(dbAssoc);
					tempPropertyData.locations = loadBusinessLocationsFromDatabase(tempPropertyData.databaseId);
					tempProperties.push(tempPropertyData);
					logToConsole(LOG_VERBOSE, `[AGRP.Property]: Property '${tempPropertyData.name}' (ID ${tempPropertyData.databaseId}) loaded from database successfully!`);
				}
			}
			freeDatabaseQuery(dbQuery);
		}
		disconnectFromDatabase(dbConnection);
	}

	logToConsole(LOG_INFO, `[AGRP.Property]: ${tempProperties.length} properties loaded from database successfully!`);
	return tempProperties;
}

// ===========================================================================

function loadPropertyLocationsFromDatabase(propertyIndex) {
	logToConsole(LOG_VERBOSE, `[AGRP.Property]: Loading property locations for property ${propertyIndex} from database ...`);

	let tempPropertyLocations = [];
	let dbConnection = connectToDatabase();
	let dbQuery = null;
	let dbAssoc;
	let dbQueryString = "";

	if (dbConnection) {
		dbQueryString = `SELECT * FROM prop_loc WHERE prop_loc_prop = ${propertyIndex}`;
		dbQuery = queryDatabase(dbConnection, dbQueryString);
		if (dbQuery) {
			if (dbQuery.numRows > 0) {
				while (dbAssoc = fetchQueryAssoc(dbQuery)) {
					let tempPropertyLocationData = new PropertyLocationData(dbAssoc);
					tempPropertyLocations.push(tempPropertyLocationData);
					logToConsole(LOG_VERBOSE, `[AGRP.Property]: Location '${tempPropertyLocationData.name}' loaded from database successfully!`);
				}
			}
			freeDatabaseQuery(dbQuery);
		}
		disconnectFromDatabase(dbConnection);
	}

	logToConsole(LOG_VERBOSE, `[AGRP.Property]: ${tempPropertyLocations.length} location for property ${propertyIndex} loaded from database successfully!`);
	return tempPropertyLocations;
}

// ===========================================================================

function createPropertyCommand(command, params, client) {
	createProperty(
		params,
		getPlayerPosition(client),
		toVector3(0.0, 0.0, 0.0),
		(isGameFeatureSupported("pickups")) ? getGameConfig().pickupModels[getGame()].Business : -1,
		-1,
		getPlayerInterior(client),
		getPlayerDimension(client),
		getPlayerData(client).interiorScene);

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} created business: {businessBlue}${params}`);
}

// ===========================================================================

function createBusinessLocationCommand(command, params, client) {
	if (!isPlayerSpawned(client)) {
		messagePlayerError(client, "You must be spawned to use this command!");
		return false;
	}

	let locationType = toString(getParam(params, " ", 1));
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let tempBusinessLocationData = createBusinessLocation(locationType, businessId);
	getServerData().businesses[businessId].push(tempBusinessLocationData);

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} created location {businessBlue}${params}{MAINCOLOUR} for business {businessBlue}${tempBusinessData.name}`);
}

// ===========================================================================

/*
function createBusiness(name, entrancePosition, exitPosition, entrancePickupModel = -1, entranceBlipModel = -1, entranceInterior = 0, entranceDimension = 0, entranceScene = -1) {
	let tempBusinessData = new BusinessData(false);
	tempBusinessData.name = name;

	tempBusinessData.entrancePosition = entrancePosition;
	tempBusinessData.entranceRotation = 0.0;
	tempBusinessData.entrancePickupModel = entrancePickupModel;
	tempBusinessData.entranceBlipModel = entranceBlipModel;
	tempBusinessData.entranceInterior = entranceInterior;
	tempBusinessData.entranceDimension = entranceDimension;
	tempBusinessData.entranceScene = entranceScene;

	tempBusinessData.exitPosition = exitPosition;
	tempBusinessData.exitRotation = 0.0;
	tempBusinessData.exitPickupModel = 0;
	tempBusinessData.exitBlipModel = -1;
	tempBusinessData.exitInterior = 0;
	tempBusinessData.exitDimension = 0;
	tempBusinessData.exitScene = -1;

	tempBusinessData.needsSaved = true;
	let businessId = getServerData().businesses.push(tempBusinessData);
	setBusinessDataIndexes();
	saveAllBusinessesToDatabase();

	createBusinessPickups(businessId - 1);
	createBusinessBlips(businessId - 1);

	return tempBusinessData;
}

// ===========================================================================

function deleteBusinessCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	deleteBusiness(businessId, getPlayerData(client).accountData.databaseId);
	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} deleted business {businessBlue}${getBusinessData(businessId).name}`);
}

// ===========================================================================

function deleteBusinessLocationCommand(command, params, client) {
	//let businessId = toInteger(getParam(params, " ", 2));
	//deleteBusinessLocation(businessId);
	//messagePlayerSuccess(client, `Business '${tempBusinessData.name} deleted!`);
}

// ===========================================================================

function setBusinessNameCommand(command, params, client) {
	let newBusinessName = toString(params);

	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	let oldBusinessName = getBusinessData(businessId).name;
	getBusinessData(businessId).name = newBusinessName;
	setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.name", getBusinessData(businessId).name, true);
	getBusinessData(businessId).needsSaved = true;
	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} renamed business {businessBlue}${oldBusinessName}{MAINCOLOUR} to {businessBlue}${newBusinessName}`);
}

// ===========================================================================

function setBusinessOwnerCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let newBusinessOwner = getPlayerFromParams(params);
	let businessId = getPlayerBusiness(client);

	if (!newBusinessOwner) {
		messagePlayerError(client, getLocaleString(client, "InvalidPlayer"));
		return false;
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_PLAYER;
	getBusinessData(businessId).ownerId = getPlayerCurrentSubAccount(newBusinessOwner).databaseId;
	getBusinessData(businessId).needsSaved = true;

	messagePlayerSuccess(client, `{MAINCOLOUR}You gave business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} to {ALTCOLOUR}${getCharacterFullName(newBusinessOwner)}`);
}

// ===========================================================================

function setBusinessJobCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let jobId = getJobFromParams(params);
	let businessId = getPlayerBusiness(client);

	if (!getJobData(jobId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidJob"));
		return false;
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_JOB;
	getBusinessData(businessId).ownerId = getJobData(jobId).databaseId;
	getBusinessData(businessId).needsSaved = true;

	messagePlayerSuccess(client, `{MAINCOLOUR}You set the owner of business {businessBlue}${getBusinessData(businessId).name} {MAINCOLOUR}to the {jobYellow}${getJobData(jobId).name}`);
}

// ===========================================================================

function setBusinessClanCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let clanId = getPlayerClan(client);

	if (!getClanData(clanId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidClan"));
		return false;
	}

	if (getBusinessData(business).ownerType != AGRP_VEHOWNER_PLAYER) {
		messagePlayerError(client, getLocaleString(client, "MustOwnBusiness"));
		return false;
	}

	if (getBusinessData(business).ownerId != getPlayerCurrentSubAccount(client).databaseId) {
		messagePlayerError(client, getLocaleString(client, "MustOwnBusiness"));
		return false;
	}

	showPlayerPrompt(client, getLocaleString(client, "SetBusinessClanConfirmMessage"), getLocaleString(client, "SetBusinessClanConfirmTitle"), getLocaleString(client, "Yes"), getLocaleString(client, "No"));
	getPlayerData(client).promptType = AGRP_PROMPT_BIZGIVETOCLAN;

	//getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_CLAN;
	//getBusinessData(businessId).ownerId = getClanData(clanId).databaseId;
	//getBusinessData(businessId).needsSaved = true;
}

// ===========================================================================

function setBusinessRankCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let rankId = params;

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	if (getVehicleData(vehicle).ownerType == AGRP_VEHOWNER_CLAN) {
		let clanId = getClanIndexFromDatabaseId(getBusinessData(businessId).ownerId);
		rankId = getClanRankFromParams(clanId, params);
		if (!getClanRankData(clanId, rankId)) {
			messagePlayerError(client, getLocaleString(client, "InvalidClanRank"));
			return false;
		}
		getBusinessData(businessId).rank = getClanRankData(clanId, rankId).databaseId;
		messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name} {MAINCOLOUR}rank to {ALTCOLOUR}${getClanRankData(clanId, rankId).name} {MAINCOLOUR}of the {clanOrange}${getClanData(clanId).name} {MAINCOLOUR}clan!`);
	} else if (getBusinessData(businessId).ownerType == AGRP_VEHOWNER_JOB) {
		getBusinessData(businessId).rank = rankId;
		messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name} {MAINCOLOUR}rank to {ALTCOLOUR}${rankId} {MAINCOLOUR}of the {jobYellow}${getJobData(getJobIdFromDatabaseId(getBusinessData(businessId).ownerId)).name} {MAINCOLOUR}job!`);
	}

	getBusinessData(businessId).needsSaved = true;
}

// ===========================================================================

function setBusinessRankCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let clanId = getPlayerClan(client);

	if (!getClanData(clanId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidClan"));
		return false;
	}

	let clanRankId = getClanRankFromParams(clanId, params);

	if (!getClanRankData(clanId, clanRankId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidClanRank"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	if (getClanRankData(clanId, clanRankId).level > getPlayerCurrentSubAccount(client).clanRank) {
		messagePlayerError(client, "That rank is above your level!");
		return false;
	}

	getBusinessData(businessId).clanRank = getClanRankData(clanId, clanRankId).level;

	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR}'s clan rank to {clanOrange}${getClanRankData(clanId, clanRankId).name} {MAINCOLOUR}(level ${getClanRankData(clanId, clanRankId).level}) and above!`);
}

// ===========================================================================

function setBusinessJobCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	let closestJobLocation = getClosestJobLocation(getVehiclePosition(vehicle));
	let jobId = closestJobLocation.job;

	if (!areParamsEmpty(params)) {
		jobId = getJobIdFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!getJobData(jobId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidJob"));
		return false;
	}

	getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_JOB;
	getBusinessData(businessId).ownerId = getJobData(jobId).databaseId;

	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name} {MAINCOLOUR}owner to the {jobYellow}${getJobData(jobId).name} {MAINCOLOUR}job`);
}

// ===========================================================================

function setBusinessPublicCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_PUBLIC;
	getBusinessData(businessId).ownerId = 0;

	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name} {MAINCOLOUR}owner set to {ALTCOLOUR}public`);
}

// ===========================================================================

function removeBusinessOwnerCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_NONE;
	getBusinessData(businessId).ownerId = -1;
	getBusinessData(businessId).needsSaved = true;

	messagePlayerSuccess(client, `{MAINCOLOUR}You removed business {businessBlue}${getBusinessData(businessId).name}'s{MAINCOLOUR} owner`);
}

// ===========================================================================

function toggleBusinessInteriorLightsCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, "You can't change the interior lights for this business!");
		return false;
	}

	getBusinessData(businessId).interiorLights = !getBusinessData(businessId).interiorLights;
	updateBusinessInteriorLightsForOccupants(businessId);

	getBusinessData(businessId).needsSaved = true;
	meActionToNearbyPlayers(client, `turns ${toLowerCase(getOnOffFromBool(getBusinessData(businessId).interiorLights))} the business lights`);
}

// ===========================================================================

function setBusinessEntranceFeeCommand(command, params, client) {
	let entranceFee = toInteger(getParam(params, " ", 1)) || 0;
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	getBusinessData(businessId).entranceFee = entranceFee;
	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} entrance fee to {ALTCOLOUR}${getCurrencyString(entranceFee)}`);
}

// ===========================================================================

function setBusinessPaintBallCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	getBusinessData(businessId).type = AGRP_BIZ_TYPE_PAINTBALL;
	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, getLocaleString(client, "BusinessIsNowPaintBall"));
}

// ===========================================================================

function getBusinessInfoCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let businessData = getBusinessData(businessId);

	let ownerName = "Unknown";
	switch (businessData.ownerType) {
		case AGRP_BIZ_OWNER_CLAN:
			ownerName = getClanData(businessData.ownerId).name;
			break;

		case AGRP_BIZ_OWNER_JOB:
			ownerName = getJobData(businessData.ownerId).name;
			break;

		case AGRP_BIZ_OWNER_PLAYER:
			let subAccountData = loadSubAccountFromId(businessData.ownerId);
			ownerName = `${subAccountData.firstName} ${subAccountData.lastName} [${subAccountData.databaseId}]`;
			break;

		case AGRP_BIZ_OWNER_PUBLIC:
			ownerName = "Public";
			break;

		case AGRP_BIZ_OWNER_NONE:
			//submitBugReport(client, `[AUTOMATED REPORT] getBusinessInfoCommand() - Invalid ownerType for business ${businessId}/${getBusinessData(businessId).databaseId}`);
			ownerName = "None";
			break;

		default:
			submitBugReport(client, `[AUTOMATED REPORT] getBusinessInfoCommand() - Invalid ownerType ${businessData.ownerType} for business ${businessId}/${getBusinessData(businessId).databaseId}`);
			ownerName = "None";
			break;
	}


	let tempStats = [
		[`Name`, `${businessData.name}`],
		[`ID`, `${businessData.index}/${businessData.databaseId}`],
		[`Owner`, `${ownerName} (${getBusinessOwnerTypeText(businessData.ownerType)})`],
		[`Locked`, `${getLockedUnlockedFromBool(businessData.locked)}`],
		[`BuyPrice`, `${getCurrencyString(businessData.buyPrice)}`],
		//[`RentPrice`, `${businessData.rentPrice}`],
		[`HasInterior`, `${getYesNoFromBool(businessData.hasInterior)}`],
		[`CustomInterior`, `${getYesNoFromBool(businessData.customInterior)}`],
		[`HasBuyableItems`, `${getYesNoFromBool(doesBusinessHaveAnyItemsToBuy(businessId))}`],
		[`EntranceFee`, `${getCurrencyString(businessData.entranceFee)}`],
		[`InteriorLights`, `${getOnOffFromBool(businessData.interiorLights)}`],
		[`Balance`, `${getCurrencyString(businessData.till)}`],
		[`RadioStation`, `${businessData.streamingRadioStation}`],
		[`LabelHelpType`, `${businessData.labelHelpType}`],
	];

	let stats = tempStats.map(stat => `{MAINCOLOUR}${stat[0]}: {ALTCOLOUR}${stat[1]}{MAINCOLOUR}`);

	messagePlayerNormal(client, makeChatBoxSectionHeader(getLocaleString(client, "HeaderBusinessInfo", businessData.name)));
	let chunkedList = splitArrayIntoChunks(stats, 6);
	for (let i in chunkedList) {
		messagePlayerInfo(client, chunkedList[i].join(", "));
	}

	//messagePlayerInfo(client, `🏢 {businessBlue}[Business Info] {MAINCOLOUR}Name: {ALTCOLOUR}${getBusinessData(businessId).name}, {MAINCOLOUR}Owner: {ALTCOLOUR}${ownerName} (${getBusinessOwnerTypeText(getBusinessData(businessId).ownerType)}), {MAINCOLOUR}Locked: {ALTCOLOUR}${getYesNoFromBool(intToBool(getBusinessData(businessId).locked))}, {MAINCOLOUR}ID: {ALTCOLOUR}${businessId}/${getBusinessData(businessId).databaseId}`);
}

// ===========================================================================

function getBusinessFloorItemsCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	showBusinessFloorInventoryToPlayer(client, businessId);
}

// ===========================================================================

function getBusinessStorageItemsCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	showBusinessStorageInventoryToPlayer(client, businessId);
}

// ===========================================================================

function setBusinessPickupCommand(command, params, client) {
	let typeParam = getParam(params, " ", 1) || "business";
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (isNaN(typeParam)) {
		if (isNull(getGameConfig().pickupModels[getGame()][typeParam])) {
			messagePlayerError(client, "Invalid pickup type! Use a pickup type name or a model ID");
			let pickupTypes = Object.keys(getGameConfig().pickupModels[getGame()]);
			let chunkedList = splitArrayIntoChunks(pickupTypes, 10);

			messagePlayerNormal(client, makeChatBoxSectionHeader(getLocaleString(client, "HeaderPickupTypes")));
			for (let i in chunkedList) {
				messagePlayerInfo(client, chunkedList[i].join(", "));
			}
			return false;
		}

		getBusinessData(businessId).entrancePickupModel = getGameConfig().pickupModels[getGame()][typeParam];
	} else {
		getBusinessData(businessId).entrancePickupModel = toInteger(typeParam);
	}

	resetBusinessPickups(businessId);

	getBusinessData(businessId).needsSaved = true;

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} set business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} pickup display to {ALTCOLOUR}${typeParam}!`);
}

// ===========================================================================

function setBusinessInteriorTypeCommand(command, params, client) {
	let typeParam = getParam(params, " ", 1) || "business";
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (typeof getGameConfig().interiors[getGame()] == "undefined") {
		messagePlayerError(client, `There are no interiors available for this game!`);
		return false;
	}

	if (isNaN(typeParam)) {
		if (toLowerCase(typeParam) == "None") {
			getBusinessData(businessId).exitPosition = toVector3(0.0, 0.0, 0.0);
			getBusinessData(businessId).exitDimension = 0;
			getBusinessData(businessId).exitInterior = -1;
			getBusinessData(businessId).hasInterior = false;
			getBusinessData(businessId).entranceScene = "";
			getBusinessData(businessId).exitScene = "";
			getBusinessData(businessId).exitPickupModel = -1;
			getBusinessData(businessId).customInterior = false;
			messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} removed business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} interior`);
			return false;
		}

		if (isNull(getGameConfig().interiors[getGame()][typeParam])) {
			messagePlayerError(client, "Invalid interior type! Use an interior type name");
			let interiorTypesList = Object.keys(getGameConfig().interiors[getGame()]);
			let chunkedList = splitArrayIntoChunks(interiorTypesList, 10);

			messagePlayerNormal(client, makeChatBoxSectionHeader(getLocaleString(client, "HeaderInteriorTypes")));
			for (let i in chunkedList) {
				messagePlayerInfo(client, chunkedList[i].join(", "));
			}
			return false;
		}

		getBusinessData(businessId).exitPosition = getGameConfig().interiors[getGame()][typeParam][0];
		getBusinessData(businessId).exitInterior = getGameConfig().interiors[getGame()][typeParam][1];
		getBusinessData(businessId).exitDimension = getBusinessData(businessId).databaseId + getGlobalConfig().businessDimensionStart;
		getBusinessData(businessId).exitPickupModel = getGameConfig().pickupModels[getGame()].Exit;
		getBusinessData(businessId).hasInterior = true;
		getBusinessData(businessId).customInterior = getGameConfig().interiors[getGame()][typeParam][2];

		if (isGameFeatureSupported("interiorScene")) {
			if (isMainWorldScene(getPlayerData(client).scene)) {
				getBusinessData(businessId).exitScene = getGameConfig().mainWorldScene[getGame()];
			} else {
				getBusinessData(businessId).exitScene = getGameConfig().interiors[getGame()][typeParam][3];
			}
		}
	}

	//deleteBusinessExitPickup(businessId);
	//deleteBusinessExitBlip(businessId);
	//createBusinessExitBlip(businessId);
	//createBusinessExitPickup(businessId);

	resetBusinessPickups(businessId);

	getBusinessData(businessId).needsSaved = true;

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} set business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} interior type to {ALTCOLOUR}${typeParam}`);
}

// ===========================================================================

function addBusinessPropertyTemplateEntities(command, params, client) {
	let propertyTemplateParam = getParam(params, " ", 1) || "business";
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (typeof getGameConfig().interiors[getGame()] == "undefined") {
		messagePlayerError(client, `There are no property templates available for this game!`);
		return false;
	}

	if (isNaN(propertyTemplateParam)) {
		if (isNull(getGameConfig().interiors[getGame()][typeParam])) {
			messagePlayerError(client, "Invalid interior type! Use an interior type name");
			let interiorTypesList = Object.keys(getGameConfig().properties[getGame()]);
			let chunkedList = splitArrayIntoChunks(interiorTypesList, 10);

			messagePlayerNormal(client, makeChatBoxSectionHeader(getLocaleString(client, "HeaderPropertyTemplateTypes")));
			for (let i in chunkedList) {
				messagePlayerInfo(client, chunkedList[i].join(", "));
			}
			return false;
		}

		getBusinessData(businessId).exitPosition = getGameConfig().interiors[getGame()][typeParam][0];
		getBusinessData(businessId).exitInterior = getGameConfig().interiors[getGame()][typeParam][1];
		getBusinessData(businessId).exitDimension = getBusinessData(businessId).databaseId + getGlobalConfig().businessDimensionStart;
		getBusinessData(businessId).exitPickupModel = getGameConfig().pickupModels[getGame()].Exit;
		getBusinessData(businessId).hasInterior = true;
		getBusinessData(businessId).customInterior = getGameConfig().interiors[getGame()][typeParam][2];
		getBusinessData(businessId).interiorScene = getGameConfig().interiors[getGame()][typeParam][3];
	}

	//deleteBusinessExitPickup(businessId);
	//deleteBusinessExitBlip(businessId);
	//createBusinessExitBlip(businessId);
	//createBusinessExitPickup(businessId);

	resetBusinessPickups(businessId);

	getBusinessData(businessId).needsSaved = true;

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} set business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} interior type to {ALTCOLOUR}${typeParam}`);
}

// ===========================================================================

function setBusinessBlipCommand(command, params, client) {
	let typeParam = getParam(params, " ", 1) || "business";
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (isNaN(typeParam)) {
		if (isNull(getGameConfig().blipSprites[getGame()][typeParam])) {
			messagePlayerError(client, "Invalid business type! Use a business type name or a blip image ID");

			let blipTypes = Object.keys(getGameConfig().blipSprites[getGame()]);
			let chunkedList = splitArrayIntoChunks(blipTypes, 10);

			messagePlayerNormal(client, makeChatBoxSectionHeader(getLocaleString(client, "HeaderBlipTypes")));
			for (let i in chunkedList) {
				messagePlayerInfo(client, chunkedList[i].join(", "));
			}
			return false;
		}

		getBusinessData(businessId).entranceBlipModel = getGameConfig().blipSprites[getGame()][typeParam];
	} else {
		getBusinessData(businessId).entranceBlipModel = toInteger(typeParam);
	}

	resetBusinessBlips(businessId);
	getBusinessData(businessId).needsSaved = true;

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} set business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} blip display to {ALTCOLOUR}${typeParam}`);
}

// ===========================================================================

function giveDefaultItemsToBusinessCommand(command, params, client) {
	let typeParam = getParam(params, " ", 1) || "business";
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!isNaN(typeParam)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (isNull(getGameConfig().defaultBusinessItems[getGame()][typeParam])) {
		messagePlayerError(client, "Invalid business items type! Use a business items type name");
		let businessItemTypes = Object.keys(getGameConfig().defaultBusinessItems[getGame()]);
		let chunkedList = splitArrayIntoChunks(businessItemTypes, 10);

		messagePlayerNormal(client, makeChatBoxSectionHeader(getLocaleString(client, "HeaderDefaultBusinessItemTypes")));
		for (let i in chunkedList) {
			messagePlayerInfo(client, chunkedList[i].join(", "));
		}
		return false;
	}

	for (let i in getGameConfig().defaultBusinessItems[getGame()][typeParam]) {
		let itemTypeId = getItemTypeFromParams(getGameConfig().defaultBusinessItems[getGame()][typeParam][i][0]);
		let itemTypeData = getItemTypeData(itemTypeId);
		if (itemTypeData) {
			let newItemIndex = createItem(itemTypeId, itemTypeData.orderValue, AGRP_ITEM_OWNER_BIZFLOOR, getBusinessData(businessId).databaseId, getGameConfig().defaultBusinessItems[getGame()][typeParam][i][1]);
			getItemData(newItemIndex).buyPrice = applyServerInflationMultiplier(itemTypeData.orderPrice) * getGameConfig().defaultBusinessItems[getGame()][typeParam][i][2];
		}
	}

	cacheBusinessItems(businessId);
	updateBusinessPickupLabelData(businessId);
	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} gave business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} the default items for ${toLowerCase(typeParam)}`);
}

// ===========================================================================

function setBusinessDealershipCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	getBusinessData(businessId).labelHelpType == AGRP_PROPLABEL_INFO_ENTERVEHICLE;
	getBusinessData(businessId).type = AGRP_BIZ_TYPE_DEALERSHIP;
	updateBusinessPickupLabelData(businessId);
	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} set the business type of {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} to dealership`);
}

// ===========================================================================

function deleteBusinessFloorItemsCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let tempCache = getBusinessData(businessId).floorItemCache;
	for (let i in tempCache) {
		deleteItem(tempCache[i]);
	}

	cacheBusinessItems(businessId);

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} deleted all on-sale items for business {businessBlue}${getBusinessData(businessId).name}`);
}

// ===========================================================================

function deleteBusinessStorageItemsCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let tempCache = getBusinessData(businessId).storageItemCache;
	for (let i in tempCache) {
		deleteItem(tempCache[i]);
	}

	cacheBusinessItems(businessId);

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} deleted all stored items for business {businessBlue}${getBusinessData(businessId).name}`);
}

// ===========================================================================

function withdrawFromBusinessCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let amount = toInteger(getParam(params, " ", 1)) || 0;
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	if (getBusinessData(businessId).till < amount) {
		messagePlayerError(client, `Business {businessBlue}${tempBusinessData.name} doesn't have that much money! Use /bizbalance.`);
		return false;
	}

	getBusinessData(businessId).till -= amount;
	givePlayerCash(client, amount);
	updatePlayerCash(client);
	getBusinessData(businessId).needsSaved = true;

	messagePlayerSuccess(client, `You withdrew ${getCurrencyString(amount)} from business {businessBlue}${getBusinessData(businessId).name} till`);
}

// ===========================================================================

function setBusinessBuyPriceCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let amount = toInteger(getParam(params, " ", 1)) || 0;
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	if (amount < 0) {
		messagePlayerError(client, `The amount can't be less than 0!`);
		return false;
	}

	getBusinessData(businessId).buyPrice = amount;
	setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.price", getBusinessData(businessId).buyPrice, true);

	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, `{MAINCOLOUR}You set business {businessBlue}${getBusinessData(businessId).name}'s{MAINCOLOUR} for-sale price to {ALTCOLOUR}${getCurrencyString(amount)}`);
}

// ===========================================================================

function depositIntoBusinessCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let amount = toInteger(getParam(params, " ", 1)) || 0;
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	// Let anybody deposit money
	//if(!canPlayerManageBusiness(client, businessId)) {
	//	messagePlayerError(client, "You can't deposit cash into this business!");
	//	return false;
	//}

	if (getPlayerCurrentSubAccount(client).cash < amount) {
		messagePlayerError(client, `You don't have that much money! You only have ${getCurrencyString(getPlayerCurrentSubAccount(client).cash)}`);
		return false;
	}

	getBusinessData(businessId).till += amount;
	takePlayerCash(client, amount);
	updatePlayerCash(client);

	getBusinessData(businessId).needsSaved = true;
	messagePlayerSuccess(client, `You deposited ${getCurrencyString(amount)} into business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} till`);
}

// ===========================================================================

function orderItemForBusinessCommand(command, params, client) {
	if (areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	if (!areThereEnoughParams(params, 3, " ")) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let splitParams = params.split(" ");
	let itemType = getItemTypeFromParams(splitParams.slice(0, -2).join(" "));

	if (!getItemTypeData(itemType)) {
		messagePlayerError(client, `Invalid item type name or ID!`);
		messagePlayerInfo(client, `Use {ALTCOLOUR}/itemtypes {MAINCOLOUR}for a list of items`);
		return false;
	}
	let pricePerItem = getOrderPriceForItemType(itemType);

	let amount = toInteger(splitParams.slice(-2, -1)) || 1;
	let value = toInteger(splitParams.slice(-1)) || getItemTypeData(itemType).capacity;
	let businessId = getPlayerBusiness(client);

	logToConsole(LOG_DEBUG, `[AGRP.Property] ${getPlayerDisplayForConsole(client)} is ordering ${amount} ${splitParams.slice(0, -2).join(" ")} (${value})`);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	let orderTotalCost = pricePerItem * amount;

	//getPlayerData(client).promptType = AGRP_PROMPT_BIZORDER;
	getPlayerData(client).businessOrderAmount = amount;
	getPlayerData(client).businessOrderBusiness = businessId;
	getPlayerData(client).businessOrderItem = itemType;
	getPlayerData(client).businessOrderValue = value;
	getPlayerData(client).businessOrderCost = orderTotalCost;

	getBusinessData(businessId).needsSaved = true;
	showPlayerPrompt(client, `Ordering ${amount} ${getPluralForm(getItemTypeData(itemType).name)} (${getItemValueDisplay(itemType, value)}) at ${getCurrencyString(pricePerItem)} each will cost a total of ${getCurrencyString(orderTotalCost)}`, "Business Order Cost");
	getPlayerData(client).promptType = AGRP_PROMPT_BIZORDER;
}

// ===========================================================================

function orderItemForBusiness(businessId, itemType, amount) {
	if (getBusinessData(businessId).till < orderTotalCost) {
		let neededAmount = orderTotalCost - getBusinessData(businessId).till;
		//messagePlayerError(client, `The business doesn't have enough money (needs {ALTCOLOUR}${getCurrencyString(neededAmount)} {MAINCOLOUR}more)! Use {ALTCOLOUR}/bizdeposit {MAINCOLOUR}to add money to the business.`);
		return false;
	}

	getBusinessData(businessId).till -= orderTotalCost;
	addToBusinessInventory(businessId, itemType, amount);
	//messagePlayerSuccess(client, `You ordered ${amount} ${getPluralForm(getItemTypeData(itemType).name)} (${getItemValueDisplay(itemType, value)}) at ${getCurrencyString(getItemTypeData(itemType).orderPrice)} each for business {businessBlue}${getBusinessData(businessId).name}`);
}

// ===========================================================================

function viewBusinessTillAmountCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (!canPlayerManageBusiness(client, businessId)) {
		messagePlayerError(client, getLocaleString(client, "CantModifyBusiness"));
		return false;
	}

	messagePlayerSuccess(client, `Business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} till has {ALTCOLOUR}${getCurrencyString(getBusinessData(businessId).till)}`);
}

// ===========================================================================

function buyBusinessCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (getBusinessData(businessId).buyPrice <= 0) {
		messagePlayerError(client, getLocaleString(client, "BusinessNotForSale"));
		return false;
	}

	if (getPlayerCurrentSubAccount(client).cash < getBusinessData(businessId).buyPrice) {
		messagePlayerError(client, getLocaleString(client, "BusinessPurchaseNotEnoughMoney"));
		return false;
	}

	showPlayerPrompt(client, getLocaleString(client, "BuyBusinessConfirmMessage"), getLocaleString(client, "BuyBusinessConfirmTitle"), getLocaleString(client, "Yes"), getLocaleString(client, "No"));
	getPlayerData(client).promptType = AGRP_PROMPT_BIZBUY;
}

// ===========================================================================

function moveBusinessEntranceCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	getBusinessData(businessId).entrancePosition = getPlayerPosition(client);
	getBusinessData(businessId).entranceDimension = getPlayerDimension(client);
	getBusinessData(businessId).entranceInterior = getPlayerInterior(client);

	//deleteBusinessEntranceBlip(businessId);
	//deleteBusinessEntrancePickup(businessId);
	//createBusinessEntranceBlip(businessId);
	//createBusinessEntrancePickup(businessId);

	resetBusinessPickups(businessId);
	resetBusinessBlips(businessId);

	getBusinessData(businessId).needsSaved = true;

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} moved business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR} entrance to their position`);
}

// ===========================================================================

function moveBusinessExitCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!areParamsEmpty(params)) {
		businessId = getBusinessFromParams(params);
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	getBusinessData(businessId).exitPosition = getPlayerPosition(client);
	getBusinessData(businessId).exitDimension = getPlayerDimension(client);
	getBusinessData(businessId).exitInterior = getPlayerInterior(client);

	deleteBusinessExitBlip(businessId);
	deleteBusinessExitPickup(businessId);

	createBusinessExitBlip(businessId);
	createBusinessExitPickup(businessId);

	getBusinessData(businessId).needsSaved = true;

	messageAdmins(`{adminOrange}${getPlayerName(client)}{MAINCOLOUR} moved business {businessBlue}${getBusinessData(businessId).name}{MAINCOLOUR}exit to their position`);
}

// ===========================================================================

function getBusinessDataFromDatabaseId(databaseId) {
	if (databaseId <= 0) {
		return false;
	}

	let matchingBusinesses = getServerData().businesses.filter(b => b.databaseId == databaseId)
	if (matchingBusinesses.length == 1) {
		return matchingBusinesses[0];
	}
	return false;
}

// ===========================================================================

function getClosestBusinessEntrance(position, dimension) {
	let closest = 0;
	for (let i in getServerData().businesses) {
		if (getServerData().businesses[i].entranceDimension == dimension) {
			if (getDistance(position, getServerData().businesses[i].entrancePosition) <= getDistance(position, getServerData().businesses[closest].entrancePosition)) {
				closest = i;
			}
		}
	}
	return closest;
}

// ===========================================================================

function getClosestBusinessExit(position, dimension) {
	let closest = 0;
	for (let i in getServerData().businesses) {
		if (getServerData().businesses[i].hasInterior && getServerData().businesses[i].exitDimension == dimension) {
			if (getDistance(position, getServerData().businesses[i].exitPosition) <= getDistance(position, getServerData().businesses[closest].exitPosition)) {
				closest = i;
			}
		}
	}
	return closest;
}

// ===========================================================================

function isPlayerInAnyBusiness(client) {
	for (let i in getServerData().businesses) {
		if (getServerData().businesses[i].hasInterior && getServerData().businesses[i].exitDimension == getPlayerDimension(client)) {
			return i;
		}
	}

	return false;
}

// ===========================================================================

function getPlayerBusiness(client) {
	if (getServerData().businesses.length == 0) {
		return -1;
	}

	if (getPlayerDimension(client) == getGameConfig().mainWorldDimension[getGame()]) {
		let closestEntrance = getClosestBusinessEntrance(getPlayerPosition(client), getPlayerDimension(client));
		if (getDistance(getPlayerPosition(client), getBusinessData(closestEntrance).entrancePosition) <= getGlobalConfig().enterPropertyDistance) {
			return getBusinessData(closestEntrance).index;
		}
	} else {
		let closestEntrance = getClosestBusinessEntrance(getPlayerPosition(client), getPlayerDimension(client));
		if (getDistance(getPlayerPosition(client), getBusinessData(closestEntrance).entrancePosition) <= getGlobalConfig().enterPropertyDistance) {
			return getBusinessData(closestEntrance).index;
		}

		for (let i in getServerData().businesses) {
			if (getServerData().businesses[i].hasInterior && getServerData().businesses[i].exitDimension == getPlayerDimension(client)) {
				return i;
			}
		}
	}
	return -1;
}

// ===========================================================================

function saveAllBusinessesToDatabase() {
	if (getServerConfig().devServer) {
		return false;
	}

	for (let i in getServerData().businesses) {
		if (getServerData().businesses[i].needsSaved) {
			saveBusinessToDatabase(i);
		}
	}

	return true
}

// ===========================================================================

function saveBusinessToDatabase(businessId) {
	let tempBusinessData = getServerData().businesses[businessId];

	if (!tempBusinessData.needsSaved) {
		return false;
	}

	logToConsole(LOG_DEBUG, `[AGRP.Property]: Saving business '${tempBusinessData.name}' to database ...`);
	let dbConnection = connectToDatabase();
	if (dbConnection) {
		let safeBusinessName = escapeDatabaseString(dbConnection, tempBusinessData.name);

		let data = [
			["biz_server", getServerId()],
			["biz_name", safeBusinessName],
			["biz_owner_type", tempBusinessData.ownerType],
			["biz_owner_id", tempBusinessData.ownerId],
			["biz_locked", boolToInt(tempBusinessData.locked)],
			["biz_entrance_fee", tempBusinessData.entranceFee],
			["biz_till", tempBusinessData.till],
			["biz_entrance_pos_x", tempBusinessData.entrancePosition.x],
			["biz_entrance_pos_y", tempBusinessData.entrancePosition.y],
			["biz_entrance_pos_z", tempBusinessData.entrancePosition.z],
			["biz_entrance_rot_z", tempBusinessData.entranceRotation],
			["biz_entrance_int", tempBusinessData.entranceInterior],
			["biz_entrance_vw", tempBusinessData.entranceDimension],
			["biz_entrance_pickup", tempBusinessData.entrancePickupModel],
			["biz_entrance_blip", tempBusinessData.entranceBlipModel],
			["biz_entrance_scene", tempBusinessData.entranceScene],
			["biz_exit_pos_x", tempBusinessData.exitPosition.x],
			["biz_exit_pos_y", tempBusinessData.exitPosition.y],
			["biz_exit_pos_z", tempBusinessData.exitPosition.z],
			["biz_exit_rot_z", tempBusinessData.exitRotation],
			["biz_exit_int", tempBusinessData.exitInterior],
			["biz_exit_vw", tempBusinessData.exitDimension],
			["biz_exit_pickup", tempBusinessData.exitPickupModel],
			["biz_exit_blip", tempBusinessData.exitBlipModel],
			["biz_exit_scene", tempBusinessData.exitScene],
			["biz_has_interior", boolToInt(tempBusinessData.hasInterior)],
			["biz_interior_lights", boolToInt(tempBusinessData.interiorLights)],
			["biz_label_help_type", tempBusinessData.labelHelpType],
			["biz_radio_station", (getRadioStationData(tempBusinessData.streamingRadioStationIndex) != false) ? toInteger(getRadioStationData(tempBusinessData.streamingRadioStationIndex).databaseId) : -1],
			["biz_custom_interior", boolToInt(tempBusinessData.customInterior)],
			["biz_buy_price", tempBusinessData.buyPrice],
			//["biz_rent_price", tempBusinessData.rentPrice],
		];

		let dbQuery = null;
		if (tempBusinessData.databaseId == 0) {
			let queryString = createDatabaseInsertQuery("biz_main", data);
			dbQuery = queryDatabase(dbConnection, queryString);
			getServerData().businesses[businessId].databaseId = getDatabaseInsertId(dbConnection);
		} else {
			let queryString = createDatabaseUpdateQuery("biz_main", data, `biz_id=${tempBusinessData.databaseId}`);
			dbQuery = queryDatabase(dbConnection, queryString);
		}

		getBusinessData(businessId).needsSaved = false;

		freeDatabaseQuery(dbQuery);
		disconnectFromDatabase(dbConnection);
		return true;
	}
	logToConsole(LOG_DEBUG, `[AGRP.Property]: Saved business '${tempBusinessData.name}' to database!`);

	return false;
}

// ===========================================================================

function createAllBusinessPickups() {
	if (!getServerConfig().createBusinessPickups) {
		return false;
	}

	for (let i in getServerData().businesses) {
		createBusinessEntrancePickup(i);
		createBusinessExitPickup(i);
		updateBusinessPickupLabelData(i);
	}

	return true;
}

// ===========================================================================

function createAllBusinessBlips() {
	if (!getServerConfig().createBusinessBlips) {
		return false;
	}

	if (!isGameFeatureSupported("blip")) {
		return false;
	}

	for (let i in getServerData().businesses) {
		createBusinessEntranceBlip(i);
		createBusinessExitBlip(i);
	}
}

// ===========================================================================

function createBusinessEntrancePickup(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (!getServerConfig().createBusinessPickups) {
		return false;
	}

	let businessData = getBusinessData(businessId);

	//if(businessData.hasInterior) {
	//	return false;
	//}

	if (businessData.entrancePickupModel == -1) {
		return false;
	}

	logToConsole(LOG_VERBOSE, `[AGRP.Job]: Creating entrance pickup for business ${businessData.name}`);

	if (areServerElementsSupported() && getGame() != AGRP_GAME_MAFIA_ONE) {
		let entrancePickup = null;
		if (isGameFeatureSupported("pickup")) {
			let pickupModelId = getGameConfig().pickupModels[getGame()].Business;

			if (businessData.entrancePickupModel != 0) {
				pickupModelId = businessData.entrancePickupModel;
			}

			entrancePickup = createGamePickup(pickupModelId, businessData.entrancePosition, getGameConfig().pickupTypes[getGame()].business);
		} else if (isGameFeatureSupported("dummyElement")) {
			entrancePickup = createGameDummyElement(businessData.entrancePosition);
		}

		if (entrancePickup != null) {
			if (businessData.entranceDimension != -1) {
				setElementDimension(entrancePickup, businessData.entranceDimension);
				setElementOnAllDimensions(entrancePickup, false);
			} else {
				setElementOnAllDimensions(entrancePickup, true);
			}

			if (getGlobalConfig().businessPickupStreamInDistance == -1 || getGlobalConfig().businessPickupStreamOutDistance == -1) {
				entrancePickup.netFlags.distanceStreaming = false;
			} else {
				setElementStreamInDistance(entrancePickup, getGlobalConfig().businessPickupStreamInDistance);
				setElementStreamOutDistance(entrancePickup, getGlobalConfig().businessPickupStreamOutDistance);
			}
			setElementTransient(entrancePickup, false);
			getBusinessData(businessId).entrancePickup = entrancePickup;
			updateBusinessPickupLabelData(businessId);
		}
	} else {
		let pickupModelId = getGameConfig().pickupModels[getGame()].Business;

		if (businessData.entrancePickupModel != 0) {
			pickupModelId = businessData.entrancePickupModel;
		}
		sendBusinessToPlayer(null, businessId, businessData.name, businessData.entrancePosition, blipModelId, pickupModelId, businessData.hasInterior, businessData.buyPrice, businessData.rentPrice, doesBusinessHaveAnyItemsToBuy(businessId));
	}

	return false;
}

// ===========================================================================

function createBusinessEntranceBlip(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (!getServerConfig().createBusinessBlips) {
		return false;
	}

	if (!isGameFeatureSupported("blip")) {
		return false;
	}

	let businessData = getBusinessData(businessId);

	//if(businessData.hasInterior) {
	//	return false;
	//}

	if (businessData.entranceBlipModel == -1) {
		return false;
	}

	let blipModelId = getGameConfig().blipSprites[getGame()].Business;

	if (businessData.entranceBlipModel != 0) {
		blipModelId = businessData.entranceBlipModel;
	}

	logToConsole(LOG_VERBOSE, `[AGRP.Job]: Creating entrance blip for business ${businessData.name} (model ${blipModelId})`);

	if (areServerElementsSupported()) {
		let entranceBlip = createGameBlip(businessData.entrancePosition, blipModelId, 1, getColourByType("businessBlue"));
		if (entranceBlip != null) {
			if (businessData.entranceDimension != -1) {
				setElementDimension(entranceBlip, businessData.entranceDimension);
				setElementOnAllDimensions(entranceBlip, false);
			} else {
				setElementOnAllDimensions(entranceBlip, true);
			}

			if (getGlobalConfig().businessBlipStreamInDistance == -1 || getGlobalConfig().businessBlipStreamOutDistance == -1) {
				entranceBlip.netFlags.distanceStreaming = false;
			} else {
				setElementStreamInDistance(entranceBlip, getGlobalConfig().businessBlipStreamInDistance);
				setElementStreamOutDistance(entranceBlip, getGlobalConfig().businessBlipStreamOutDistance);
			}
			setElementTransient(entranceBlip, false);
			businessData.entranceBlip = entranceBlip;
		}
	}
}

// ===========================================================================

function createBusinessExitPickup(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (!getServerConfig().createBusinessPickups) {
		return false;
	}

	let businessData = getBusinessData(businessId);

	//if(!businessData.hasInterior) {
	//	return false;
	//}

	if (businessData.exitPickupModel == -1) {
		return false;
	}

	logToConsole(LOG_VERBOSE, `[AGRP.Job]: Creating exit pickup for business ${businessData.name}`);

	let exitPickup = null;
	if (isGameFeatureSupported("pickup")) {
		let pickupModelId = getGameConfig().pickupModels[getGame()].Exit;

		if (businessData.exitPickupModel != 0) {
			pickupModelId = businessData.exitPickupModel;
		}

		exitPickup = createGamePickup(pickupModelId, businessData.exitPosition, getGameConfig().pickupTypes[getGame()].business);
	} else if (isGameFeatureSupported("dummyElement")) {
		//exitPickup = createGameDummyElement(businessData.exitPosition);
	}

	if (exitPickup != null) {
		if (businessData.exitDimension != -1) {
			setElementDimension(exitPickup, businessData.exitDimension);
			setElementOnAllDimensions(exitPickup, false);
		} else {
			setElementOnAllDimensions(exitPickup, true);
		}

		if (getGlobalConfig().businessPickupStreamInDistance == -1 || getGlobalConfig().businessPickupStreamOutDistance == -1) {
			exitPickup.netFlags.distanceStreaming = false;
		} else {
			setElementStreamInDistance(exitPickup, getGlobalConfig().businessPickupStreamInDistance);
			setElementStreamOutDistance(exitPickup, getGlobalConfig().businessPickupStreamOutDistance);
		}
		setElementTransient(exitPickup, false);
		getBusinessData(businessId).exitPickup = exitPickup;
		updateBusinessPickupLabelData(businessId);
	}

}

// ===========================================================================

function createBusinessExitBlip(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (!getServerConfig().createBusinessBlips) {
		return false;
	}

	if (!isGameFeatureSupported("blip")) {
		return false;
	}

	let businessData = getBusinessData(businessId);

	//if(!businessData.hasInterior) {
	//	return false;
	//}

	if (businessData.exitBlipModel == -1) {
		return false;
	}

	let blipModelId = getGameConfig().blipSprites[getGame()].Business;

	if (businessData.exitBlipModel != 0) {
		blipModelId = businessData.exitBlipModel;
	}

	logToConsole(LOG_VERBOSE, `[AGRP.Job]: Creating exit blip for business ${businessData.name} (model ${blipModelId})`);

	let exitBlip = createGameBlip(businessData.exitPosition, blipModelId, 1, getColourByName("businessBlue"));
	if (exitBlip != null) {
		if (businessData.exitDimension != -1) {
			setElementDimension(exitBlip, businessData.exitDimension);
			setElementOnAllDimensions(exitBlip, false);
		} else {
			setElementOnAllDimensions(exitBlip, true);
		}

		if (getGlobalConfig().businessBlipStreamInDistance == -1 || getGlobalConfig().businessBlipStreamOutDistance == -1) {
			exitBlip.netFlags.distanceStreaming = false;
		} else {
			setElementStreamInDistance(exitBlip, getGlobalConfig().businessBlipStreamInDistance);
			setElementStreamOutDistance(exitBlip, getGlobalConfig().businessBlipStreamOutDistance);
		}
		setElementTransient(exitBlip, false);
		businessData.exitBlip = exitBlip;
	}
}

// ===========================================================================

function deleteBusiness(businessId, whoDeleted = 0) {
	let tempBusinessData = getBusinessData(businessId);

	let dbConnection = connectToDatabase();
	let dbQuery = null;

	deleteBusinessBlips(businessId);
	deleteBusinessPickups(businessId);

	if (dbConnection) {
		dbQuery = queryDatabase(dbConnection, `UPDATE biz_main SET biz_deleted = 1, biz_when_deleted = UNIX_TIMESTAMP(), biz_who_deleted = ${whoDeleted} WHERE biz_id = ${tempBusinessData.databaseId}`);
		if (dbQuery) {
			freeDatabaseQuery(dbQuery);
		}
		disconnectFromDatabase(dbConnection);
	}

	removePlayersFromBusiness(businessId);

	getServerData().businesses.splice(businessId, 1);

	return true;
}

// ===========================================================================

function removePlayersFromBusiness(businessIndex) {
	getClients().forEach(function (client) {
		if (doesBusinessHaveInterior(businessIndex)) {
			if (getPlayerBusiness(client) == businessIndex) {
				if (getPlayerInterior(client) == getBusinessData(businessIndex).exitInterior && getPlayerDimension(client) == getBusinessData(businessIndex).exitDimension) {
					exitBusiness(client);
				}
			}
		}
	});

	return true;
}

// ===========================================================================

function removePlayerFromBusiness(client) {
	exitBusiness(client);
	return false;
}

// ===========================================================================

function exitBusiness(client) {
	let businessId = getPlayerBusiness(client);

	if (businessId == false) {
		return false;
	}

	if (isPlayerSpawned(client)) {
		setPlayerInterior(client, getServerData().businesses[businessId].entranceInterior);
		setPlayerDimension(client, getServerData().businesses[businessId].entranceDimension);
		setPlayerPosition(client, getServerData().businesses[businessId].entrancePosition);
		return true;
	}

	return false;
}

// ===========================================================================

function getBusinessOwnerTypeText(ownerType) {
	switch (ownerType) {
		case AGRP_BIZ_OWNER_CLAN:
			return "clan";

		case AGRP_BIZ_OWNER_JOB:
			return "job";

		case AGRP_BIZ_OWNER_PLAYER:
			return "player";

		case AGRP_BIZ_OWNER_NONE:
		case AGRP_BIZ_OWNER_PUBLIC:
			return "not owned";

		default:
			return "unknown";
	}
}

// ===========================================================================

function getBusinessData(businessId) {
	if (businessId == -1) {
		return false;
	}

	if (typeof getServerData().businesses[businessId] != null) {
		return getServerData().businesses[businessId];
	}
	return false;
}

// ===========================================================================

function doesBusinessHaveInterior(businessId) {
	return getBusinessData(businessId).hasInterior;
}

// ===========================================================================

function deleteBusinessEntrancePickup(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (getBusinessData(businessId).entrancePickup != null) {
		//removeFromWorld(getBusinessData(businessId).entrancePickup);
		deleteGameElement(getBusinessData(businessId).entrancePickup);
		getBusinessData(businessId).entrancePickup = null;

		return true;
	}

	return false;
}

// ===========================================================================

function deleteBusinessExitPickup(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (getBusinessData(businessId).exitPickup != null) {
		//removeFromWorld(getBusinessData(businessId).exitPickup);
		deleteGameElement(getBusinessData(businessId).exitPickup);
		getBusinessData(businessId).exitPickup = null;
	}
}

// ===========================================================================

function deleteBusinessEntranceBlip(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (!isGameFeatureSupported("blip")) {
		return false;
	}

	if (getBusinessData(businessId).entranceBlip != null) {
		//removeFromWorld(getBusinessData(businessId).entranceBlip);
		deleteGameElement(getBusinessData(businessId).entranceBlip);
		getBusinessData(businessId).entranceBlip = null;
	}
}

// ===========================================================================

function deleteBusinessExitBlip(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (!isGameFeatureSupported("blip")) {
		return false;
	}

	if (getBusinessData(businessId).exitBlip != null) {
		//removeFromWorld(getBusinessData(businessId).exitBlip);
		deleteGameElement(getBusinessData(businessId).exitBlip);
		getBusinessData(businessId).exitBlip = null;
	}
}

// ===========================================================================

function reloadAllBusinessesCommand(command, params, client) {
	let clients = getClients();
	for (let i in clients) {
		removePlayerFromBusiness(clients[i]);
	}

	for (let i in getServerData().businesses) {
		deleteBusinessExitBlip(i);
		deleteBusinessEntranceBlip(i);
		deleteBusinessExitPickup(i);
		deleteBusinessEntrancePickup(i);
	}

	//forceAllPlayersToStopWorking();
	clearArray(getServerData().businesses);
	getServerData().businesses = loadBusinessesFromDatabase();
	createAllBusinessPickups();
	createAllBusinessBlips();
	setBusinessDataIndexes();
	cacheAllBusinessItems();

	announceAdminAction(`AllBusinessesReloaded`);
}

// ===========================================================================

function setBusinessDataIndexes() {
	for (let i in getServerData().businesses) {
		getServerData().businesses[i].index = i;

		//if (getServerData().businesses[i].streamingRadioStation > 0) {
		//	let radioStationIndex = getRadioStationFromDatabaseId(getServerData().businesses[i].streamingRadioStation);
		//	if (radioStationIndex != -1) {
		//		getServerData().businesses[i].streamingRadioStationIndex = radioStationIndex;
		//	}
		//}

		for (let j in getServerData().businesses[i].locations) {
			if (getServerData().businesses[i].locations[j].type == AGRP_BIZ_LOC_ATM) {
				getServerData().atmLocationCache.push([i, j, getServerData().businesses[i].locations[j].position]);
			}
		}
	}
}

// ===========================================================================

// Adds an item to a business inventory by item type, amount and buy price
function addToBusinessInventory(businessId, itemType, amount, buyPrice) {
	let tempItemData = new ItemData(false);
	tempItemData.amount = amount;
	tempItemData.buyPrice = buyPrice;
	tempItemData.itemType = getItemTypeData(itemType).databaseId;
	tempItemData.ownerId = getBusinessData(business).databaseId;
	tempItemData.ownerType = AGRP_ITEMOWNER_BIZ;
	tempItemData.ownerIndex = businessId;
	tempItemData.itemTypeIndex = itemType;
	saveItemToDatabase(tempItemData);
	getServerData().items.push(tempItemData);

	let index = getServerData().items.length - 1;
	getServerData().items[index].index = index;
}

// ===========================================================================

function buyFromBusinessCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (areParamsEmpty(params)) {
		showBusinessFloorInventoryToPlayer(client, businessId);
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	if (getBusinessData(businessId).locked) {
		messagePlayerError(client, `This business is closed!`);
		return false;
	}

	if (getBusinessData(businessId).hasInterior) {
		if (!getPlayerBusiness(client)) {
			if (!doesPlayerHaveKeyBindsDisabled(client) && doesPlayerHaveKeyBindForCommand(client, "enter")) {
				messagePlayerTip(client, getLocaleString(client, "NeedToEnterPropertyKeyPress", "business", `{ALTCOLOUR}${toUpperCase(getKeyNameFromId(getPlayerKeyBindForCommand(client, "enter")).key)}{MAINCOLOUR}`));
			} else {
				messagePlayerNormal(client, getLocaleString(client, "NeedToEnterBusinessCommand", "business", "{ALTCOLOUR}/enter{MAINCOLOUR}"));
			}
			return false;
		}
	}

	let itemSlot = toInteger(getParam(params, " ", 1)) || 1;

	if (typeof getBusinessData(businessId).floorItemCache[itemSlot - 1] == "undefined") {
		messagePlayerError(client, `Item slot ${itemSlot} doesn't exist!`);
		return false;
	}

	if (getBusinessData(businessId).floorItemCache[itemSlot - 1] == -1) {
		messagePlayerError(client, `Item slot ${itemSlot} slot is empty!`);
		return false;
	}

	let amount = 1;
	if (areThereEnoughParams(params, 2, " ")) {
		amount = toInteger(getParam(params, " ", 2)) || 1;
		if (amount <= 0) {
			messagePlayerError(client, getLocaleString(client, "AmountMustBeMoreThan", "0"));
			return false;
		}
	}

	if (getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).amount < amount) {
		messagePlayerError(client, `There are only ${getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).amount} ${getItemTypeData(getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).itemTypeIndex).name} in slot ${itemSlot - 1}`);
		return false;
	}

	let firstSlot = getPlayerFirstEmptyHotBarSlot(client);
	if (firstSlot == -1) {
		messagePlayerError(client, messagePlayerError(client, getLocaleString(client, "InventoryFullCantCarry")));
		return false;
	}

	let totalCost = getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).buyPrice * amount;
	let itemName = getItemTypeData(getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).itemTypeIndex).name;

	if (getPlayerCurrentSubAccount(client).cash < totalCost) {
		messagePlayerError(client, getLocaleString(client, "NotEnoughCashNeedAmountMore", `{ALTCOLOUR}${getBusinessData(businessId).floorItemCache[itemSlot - 1].buyPrice * amount - getPlayerCurrentSubAccount(client).cash}{MAINCOLOUR}`));
		return false;
	}

	takePlayerCash(client, totalCost);
	createItem(getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).itemTypeIndex, getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).value, AGRP_ITEM_OWNER_PLAYER, getPlayerCurrentSubAccount(client).databaseId, amount);
	cachePlayerHotBarItems(client);
	getBusinessData(businessId).till = getBusinessData(businessId).till + totalCost;

	getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).amount = getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).amount - amount;
	if (getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).amount == 0) {
		destroyItem(getBusinessData(businessId).floorItemCache[itemSlot - 1]);
	}

	let useType = getItemTypeData(getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).itemTypeIndex).useType;
	if (useType == AGRP_ITEM_USE_TYPE_WEAPON || AGRP_ITEM_USE_TYPE_TAZER || useType == AGRP_ITEM_USE_TYPE_AMMO_CLIP) {
		if (isPlayerWeaponBanned(client) && !isPlayerExemptFromAntiCheat(client)) {
			messagePlayerError(client, getLocaleString(client, "WeaponBanned"));
			return false;
		}
	}

	//messagePlayerSuccess(client, `You bought ${amount} {ALTCOLOUR}${itemName} {MAINCOLOUR}for ${totalCost} ${priceEach}`);
	meActionToNearbyPlayers(client, `buys a ${itemName}`);

	if (!hasPlayerSeenActionTip(client, "ViewInventory")) {
		if (doesPlayerHaveKeyBindsDisabled(client) && doesPlayerHaveKeyBindForCommand("inv")) {
			let keyData = getPlayerKeyBindForCommand("inv");
			messagePlayerActionTip(client, getIndexedLocaleString(client, "ActionTips", "ViewInventory", `{ALTCOLOUR}${getKeyNameFromId(keyData.key)}{MAINCOLOUR}`));
		} else {
			messagePlayerActionTip(client, getIndexedLocaleString(client, "ActionTips", "ViewInventory", `{ALTCOLOUR}/inv{MAINCOLOUR}`));
		}
	}

	markPlayerActionTipSeen(client, "ViewInventory");
}

// ===========================================================================

function setBusinessItemSellPriceCommand(command, params, client) {
	let businessId = getBusinessFromParams(getParam(params, " ", 3)) || getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let itemSlot = toInteger(getParam(params, " ", 1)) || 0;

	if (typeof getBusinessData(businessId).floorItemCache[itemSlot - 1] == "undefined") {
		messagePlayerError(client, `Item slot ${itemSlot - 1} doesn't exist!`);
		return false;
	}

	if (getBusinessData(businessId).floorItemCache[itemSlot - 1] == -1) {
		messagePlayerError(client, `Item slot ${itemSlot - 1} slot is empty!`);
		return false;
	}

	let oldPrice = getBusinessData(businessId).floorItemCache[itemSlot - 1].buyPrice;
	let newPrice = toInteger(getParam(params, " ", 2)) || oldPrice;
	if (newPrice < 0) {
		messagePlayerError(client, "The price can't be negative!");
		return false;
	}

	getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).buyPrice = newPrice;

	messagePlayerSuccess(client, `You changed the price of the {ALTCOLOUR}${getItemTypeData(getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).itemTypeIndex).name}'s {MAINCOLOUR}in slot {ALTCOLOUR}${itemSlot} {MAINCOLOUR}from ${getCurrencyString(oldPrice)} to ${getCurrencyString(newprice)}`);
}

// ===========================================================================

function storeItemInBusinessStorageCommand(command, params, client) {
	let businessId = getBusinessFromParams(getParam(params, " ", 3)) || getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let itemSlot = toInteger(getParam(params, " ", 1)) || 0;

	if (typeof getBusinessData(businessId).floorItemCache[itemSlot - 1] == "undefined") {
		messagePlayerError(client, `Item slot ${itemSlot} doesn't exist!`);
		return false;
	}

	if (getBusinessData(businessId).floorItemCache[itemSlot - 1] == -1) {
		messagePlayerError(client, `Item slot ${itemSlot} slot is empty!`);
		return false;
	}

	let firstSlot = getBusinessStorageFirstFreeItemSlot(businessId);

	if (firstSlot == -1) {
		messagePlayerError(client, `There isn't any room in this business storage`);
		return false;
	}

	getItemData(getBusinessData(businessId).floorItemCache[itemSlot - 1]).ownerType = AGRP_ITEM_OWNER_BIZSTORAGE;
	getBusinessData(businessId).storageItemCache[firstSlot] = getBusinessData(businessId).floorItemCache[itemSlot - 1];
	getBusinessData(businessId).storageItemCache[itemSlot - 1] = -1;
	messagePlayerSuccess(client, `You moved the ${getItemTypeData(getItemData(getBusinessData(businessId).storageItemCache[firstSlot]).itemTypeIndex).name}s in slot ${itemSlot} to the business storage in slot ${firstSlot}`);
}

// ===========================================================================

function stockItemOnBusinessFloorCommand(command, params, client) {
	let businessId = getPlayerBusiness(client);

	if (!getBusinessData(businessId)) {
		messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
		return false;
	}

	let itemSlot = toInteger(getParam(params, " ", 1)) || 0;

	if (typeof getBusinessData(businessId).storageItemCache[itemSlot - 1] == "undefined") {
		messagePlayerError(client, `Item slot ${itemSlot} doesn't exist!`);
		return false;
	}

	if (getBusinessData(businessId).storageItemCache[itemSlot - 1] == -1) {
		messagePlayerError(client, `Item slot ${itemSlot} slot is empty!`);
		return false;
	}

	let firstSlot = getBusinessFloorFirstFreeItemSlot(businessId);

	if (firstSlot == -1) {
		messagePlayerError(client, `There isn't any room in this business storage`);
		return false;
	}

	getItemData(getBusinessData(businessId).storageItemCache[itemSlot - 1]).ownerType = AGRP_ITEM_OWNER_BIZFLOOR;
	getBusinessData(businessId).floorItemCache[firstSlot] = getBusinessData(businessId).storageItemCache[itemSlot - 1];
	getBusinessData(businessId).storageItemCache[itemSlot - 1] = -1;
	messagePlayerSuccess(client, `You moved the ${getItemTypeData(getItemData(getBusinessData(businessId).storageItemCache[firstSlot]).itemTypeIndex).name}s in slot ${itemSlot} of the business storage to the business floor slot ${firstSlot}`);
}

// ===========================================================================

// Gets the first free slot in a business's storage items
function getBusinessStorageFirstFreeItemSlot(businessId) {
	return getBusinessData(businessId).storageItemCache.findIndex(item => item == -1);
}

// ===========================================================================

// Gets the first free slot in a business's floor items
function getBusinessFloorFirstFreeItemSlot(businessId) {
	return getBusinessData(businessId).floorItemCache.findIndex(item => item == -1);
}

// ===========================================================================

// Caches all items for all businesses
function cacheAllBusinessItems() {
	logToConsole(LOG_DEBUG, "[AGRP.Property] Caching all business items ...");
	for (let i in getServerData().businesses) {
		cacheBusinessItems(i);
	}
	logToConsole(LOG_DEBUG, "[AGRP.Property] Cached all business items successfully!");
}

// ===========================================================================

// Caches all items for a business by businessId
function cacheBusinessItems(businessId) {
	clearArray(getBusinessData(businessId).floorItemCache);
	clearArray(getBusinessData(businessId).storageItemCache);

	//let businessData = getBusinessData(businessId);
	//logToConsole(LOG_VERBOSE, `[AGRP.Property] Caching business items for business ${businessId} (${businessData.name}) ...`);
	//getBusinessData(businessId).floorItemCache = getServerData().items.filter(item => item.ownerType == AGRP_ITEM_OWNER_BIZFLOOR && item.ownerId == businessData.databaseId).map(i => i.index);
	//getBusinessData(businessId).storageItemCache = getServerData().items.filter(item => item.ownerType == AGRP_ITEM_OWNER_BIZSTORAGE && item.ownerId == businessData.databaseId);

	logToConsole(LOG_VERBOSE, `[AGRP.Property] Caching business items for business ${businessId} (${getBusinessData(businessId).name}) ...`);
	for (let i in getServerData().items) {
		if (getItemData(i).ownerType == AGRP_ITEM_OWNER_BIZFLOOR && getItemData(i).ownerId == getBusinessData(businessId).databaseId) {
			getBusinessData(businessId).floorItemCache.push(i);
		} else if (getItemData(i).ownerType == AGRP_ITEM_OWNER_BIZSTORAGE && getItemData(i).ownerId == getBusinessData(businessId).databaseId) {
			getBusinessData(businessId).storageItemCache.push(i);
		}
	}

	logToConsole(LOG_VERBOSE, `[AGRP.Property] Successfully cached ${getBusinessData(businessId).floorItemCache.length} floor items and ${getBusinessData(businessId).storageItemCache} storage items for business ${businessId} (${getBusinessData(businessId).name})!`);
}

// ===========================================================================

// Gets a business's data index from a business's databaseId
function getBusinessIdFromDatabaseId(databaseId) {
	return getServerData().businesses.findIndex(business => business.databaseId == databaseId);
}

// ===========================================================================

// Updates all pickup data for a business by businessId
function updateBusinessPickupLabelData(businessId) {
	if (!areServerElementsSupported()) {
		return false;
	}

	if (getBusinessData(businessId).exitPickup != null) {
		setEntityData(getBusinessData(businessId).exitPickup, "agrp.owner.type", AGRP_PICKUP_BUSINESS_EXIT, false);
		setEntityData(getBusinessData(businessId).exitPickup, "agrp.owner.id", businessId, false);
		setEntityData(getBusinessData(businessId).exitPickup, "agrp.label.type", AGRP_LABEL_EXIT, true);
	}

	if (getBusinessData(businessId).entrancePickup != null) {
		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.owner.type", AGRP_PICKUP_BUSINESS_ENTRANCE, false);
		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.owner.id", businessId, false);
		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.type", AGRP_LABEL_BUSINESS, true);
		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.name", getBusinessData(businessId).name, true);
		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.locked", getBusinessData(businessId).locked, true);
		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help", AGRP_PROPLABEL_INFO_NONE, true);

		switch (getBusinessData(businessId).labelHelpType) {
			case AGRP_PROPLABEL_INFO_ENTERVEHICLE: {
				setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help", AGRP_PROPLABEL_INFO_ENTERVEHICLE, true);
				break;
			}

			case AGRP_PROPLABEL_INFO_ENTER: {
				setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help", AGRP_PROPLABEL_INFO_ENTER, true);
				break;
			}

			case AGRP_PROPLABEL_INFO_REPAIR: {
				setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help", AGRP_PROPLABEL_INFO_REPAIR, true);
				break;
			}

			default: {
				if (getBusinessData(businessId).hasInterior) {
					setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help", AGRP_PROPLABEL_INFO_ENTER, true);
				} else {
					if (doesBusinessHaveAnyItemsToBuy(businessId)) {
						setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help", AGRP_PROPLABEL_INFO_BUY, true);
					} else {
						removeEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.help");
					}
				}
				break;
			}
		}

		setEntityData(getBusinessData(businessId).entrancePickup, "agrp.label.price", getBusinessData(businessId).buyPrice, true);
	}
}

// ===========================================================================

function resetBusinessPickups(businessId) {
	deleteBusinessPickups(businessId);
	createBusinessEntrancePickup(businessId);
	createBusinessExitPickup(businessId);
}

// ===========================================================================

function resetBusinessBlips(businessId) {
	deleteBusinessBlips(businessId);
	createBusinessEntranceBlip(businessId);
	createBusinessExitBlip(businessId);
}

// ===========================================================================

function resetAllBusinessPickups(businessId) {
	deleteBusinessPickups(businessId);
	createBusinessEntrancePickup(businessId);
	createBusinessExitPickup(businessId);
}

// ===========================================================================

function resetAllBusinessBlips() {
	for (let i in getServerData().businesses) {
		deleteBusinessBlips(i);
		createBusinessBlips(i);
	}
}

// ===========================================================================

function createBusinessBlips(businessId) {
	createBusinessEntranceBlip(businessId);
	createBusinessExitBlip(businessId);
}

// ===========================================================================

function resetAllBusinessPickups() {
	for (let i in getServerData().businesses) {
		deleteBusinessPickups(i);
		createBusinessPickups(i);
	}
}

// ===========================================================================

function createBusinessPickups(businessId) {
	createBusinessEntrancePickup(businessId);
	createBusinessExitPickup(businessId);
}

// ===========================================================================

function doesBusinessHaveAnyItemsToBuy(businessId) {
	return (getBusinessData(businessId).floorItemCache.length > 0);
}

// ===========================================================================

//function sendPlayerBusinessGameScripts(client, businessId) {
//	for(let i in getBusinessData(businessId).gameScripts) {
//		sendPlayerGameScriptState(client, getBusinessData(businessId).gameScripts[i].state);
//	}
//}

// ===========================================================================

//function clearPlayerBusinessGameScripts(client, businessId) {
//	for(let i in getBusinessData(businessId).gameScripts) {
//		sendPlayerGameScriptState(client, AGRP_GAMESCRIPT_DENY);
//	}
//}

// ===========================================================================

function updateBusinessInteriorLightsForOccupants(businessId) {
	let clients = getClients()
	for (let i in clients) {
		if (getPlayerBusiness(clients[i]) == businessId) {
			updateInteriorLightsForPlayer(clients[i], getBusinessData(businessId).interiorLights);
		}
	}
}

// ===========================================================================

function canPlayerWithdrawFromBusinessTill(client, businessId) {
	if (doesPlayerHaveStaffPermission(client, getStaffFlagValue("ManageBusinesses"))) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_PLAYER && getBusinessData(businessId).ownerId == getPlayerCurrentSubAccount(client).databaseId) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_CLAN && getBusinessData(businessId).ownerId == getClanData(getPlayerClan(client)).databaseId) {
		if (doesPlayerHaveClanPermission(client, getClanFlagValue("ManageBusinesses"))) {
			return true;
		}
	}

	return false;
}

// ===========================================================================

function canPlayerSetBusinessInteriorLights(client, businessId) {
	if (doesPlayerHaveStaffPermission(client, getStaffFlagValue("ManageBusinesses"))) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_PLAYER && getBusinessData(businessId).ownerId == getPlayerCurrentSubAccount(client).databaseId) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_CLAN && getBusinessData(businessId).ownerId == getClanData(getPlayerClan(client)).databaseId) {
		if (doesPlayerHaveClanPermission(client, getClanFlagValue("ManageBusinesses"))) {
			return true;
		}
	}

	return false;
}

// ===========================================================================

function canPlayerLockUnlockBusiness(client, businessId) {
	if (doesPlayerHaveStaffPermission(client, getStaffFlagValue("ManageBusinesses"))) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_PLAYER && getBusinessData(businessId).ownerId == getPlayerCurrentSubAccount(client).databaseId) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_CLAN && getBusinessData(businessId).ownerId == getClanData(getPlayerClan(client)).databaseId) {
		if (doesPlayerHaveClanPermission(client, getClanFlagValue("ManageBusinesses"))) {
			return true;
		}
	}

	return false;
}

// ===========================================================================

function canPlayerManageBusiness(client, businessId) {
	if (doesPlayerHaveStaffPermission(client, getStaffFlagValue("ManageBusinesses"))) {
		return true;
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_PLAYER) {
		if (getBusinessData(businessId).ownerId == getPlayerCurrentSubAccount(client).databaseId) {
			return true;
		}
	}

	if (getBusinessData(businessId).ownerType == AGRP_BIZ_OWNER_CLAN) {
		if (getBusinessData(businessId).ownerId == getPlayerClan(client)) {
			if (doesPlayerHaveClanPermission(client, getClanFlagValue("ManageBusinesses"))) {
				return true;
			}

			//if(getBusinessData(businessId).clanRank <= getClanRankData(getPlayerClan(client), getPlayerClanRank(client)).level) {
			//	return true;
			//}
		}
	}

	return false;
}

// ===========================================================================

function deleteBusinessBlips(business) {
	deleteBusinessExitBlip(business);
	deleteBusinessEntranceBlip(business);
}

// ===========================================================================

function deleteBusinessPickups(business) {
	deleteBusinessExitPickup(business);
	deleteBusinessEntrancePickup(business);
}

// ===========================================================================

function getBusinessFromParams(params) {
	if (isNaN(params)) {
		for (let i in getServerData().businesses) {
			if (toLowerCase(getServerData().businesses[i].name).indexOf(toLowerCase(params)) != -1) {
				return i;
			}
		}
	} else {
		if (typeof getServerData().businesses[params] != "undefined") {
			return toInteger(params);
		}
	}
	return false;
}

// ===========================================================================

function deleteAllBusinessBlips() {
	for (let i in getServerData().businesses) {
		deleteBusinessBlips(i);
	}
}

// ===========================================================================

function deleteAllBusinessPickups() {
	for (let i in getServerData().businesses) {
		deleteBusinessPickups(i);
	}
}

// ===========================================================================

function getBusinessFromInteriorAndDimension(dimension, interior) {
	let businesses = getServerData().businesses;
	for (let i in businesses) {
		if (businesses[i].exitInterior == interior && businesses[i].exitDimension == dimension) {
			return i;
		}
	}

	return -1;
}

// ===========================================================================

function getClosestBusinessWithBuyableItemOfUseType(position, useType) {
	let availableBusinesses = getBusinessesWithBuyableItemOfUseType(useType);

	let closestBusiness = 0;
	for (let i in availableBusinesses) {
		if (getDistance(position, getBusinessData(availableBusinesses[i]).entrancePosition) < getDistance(position, getBusinessData(availableBusinesses[closestBusiness]).entrancePosition)) {
			closestBusiness = i;
		}
	}
	return availableBusinesses[closestBusiness];
}

// ===========================================================================

function getBusinessesWithBuyableItemOfUseType(useType) {
	let businesses = getServerData().businesses;
	let availableBusinesses = [];
	for (let i in businesses) {
		if (doesBusinessHaveBuyableItemOfUseType(i, useType)) {
			availableBusinesses.push(i);
		}
	}

	return availableBusinesses;
}

// ===========================================================================

function doesBusinessHaveBuyableItemOfUseType(businessId, useType) {
	let floorItems = getBusinessData(businessId).floorItemCache;
	for (let i in floorItems) {
		if (floorItems[i] != -1) {
			if (getItemData(floorItems[i]) != false) {
				if (getItemTypeData(getItemData(floorItems[i])).useType == useType) {
					return true;
				}
			}
		}
	}
	return false;
}

// ===========================================================================

*/