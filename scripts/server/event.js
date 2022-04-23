// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: event.js
// DESC: Provides handlers for built in GTAC and Asshat-Gaming created events
// TYPE: Server (JavaScript)
// ===========================================================================

function initEventScript() {
	logToConsole(LOG_INFO, "[VRR.Event]: Initializing event script ...");
	addAllEventHandlers();
	logToConsole(LOG_INFO, "[VRR.Event]: Event script initialized!");
}

// ===========================================================================

function addAllEventHandlers() {
	addEventHandler("onResourceStart", onResourceStart);
	addEventHandler("onResourceStop", onResourceStop);
	addEventHandler("onServerStop", onResourceStop);

	addEventHandler("onProcess", onProcess);
	addEventHandler("onEntityProcess", onEntityProcess);

	addEventHandler("onPlayerConnect", onPlayerConnect);
	addEventHandler("onPlayerJoin", onPlayerJoin);
	addEventHandler("onPlayerJoined", onPlayerJoined);
	addEventHandler("onPlayerChat", onPlayerChat);
	addEventHandler("onPlayerQuit", onPlayerQuit);
	addEventHandler("onElementStreamIn", onElementStreamIn);
	addEventHandler("onElementStreamOut", onElementStreamOut);

	addEventHandler("onPedSpawn", onPedSpawn);
	addEventHandler("onPedEnterVehicle", onPedEnteringVehicle);
	addEventHandler("onPedExitVehicle", onPedExitingVehicle);

	addEventHandler("onPedEnteringVehicle", onPedEnteringVehicle);
	addEventHandler("onPedExitingVehicle", onPedExitingVehicle);

	//addEventHandler("OnPlayerCommand", onPlayerCommand);
}

// ===========================================================================

function onPlayerConnect(event, ipAddress, port) {
	logToConsole(LOG_INFO, `[VRR.Event] Client connecting (IP: ${ipAddress})`);
	//if(isIpAddressBanned(ipAddress)) {
	//    messagePlayerError(client, "You are banned from this server!");
	//    return false;
	//}
}

// ===========================================================================

function onPlayerJoin(event, client) {
	logToConsole(LOG_INFO, `[VRR.Event] Client ${getPlayerName(client)}[${getPlayerId(client)}] joining from ${getPlayerIP(client)}`);

	if(isFadeCameraSupported()) {
		fadeCamera(client, true, 1.0);
	}

	let messageText = `👋 ${getPlayerName(client)} is connecting to the server ...`;
	messageDiscordEventChannel(messageText);

	for(let i in clients) {
		messagePlayerNormal(clients[i], getLocaleString(clients[i], "PlayerConnecting"));
	}

	//messageDiscordEventChannel(`👋 ${getPlayerDisplayForConsole(client)} has joined the server.`);
}

// ===========================================================================

function onPlayerJoined(event, client) {

}

// ===========================================================================

function onElementStreamIn(event, element, client) {
	//if(getPlayerDimension(client) != getElementDimension(element)) {
	//    event.preventDefault();
	//}

	if(getPlayerData(getClientFromIndex(element.owner)) != false    ) {
		if(hasBitFlag(getPlayerData(getClientFromIndex(element.owner)).accountData.flags.moderation, getModerationFlagValue("DontSyncClientElements"))) {
			event.preventDefault();
			destroyGameElement(element);
		}
	}
}

// ===========================================================================

function onElementStreamOut(event, element, client) {

}

// ===========================================================================

function onPlayerQuit(event, client, quitReasonId) {
	logToConsole(LOG_INFO, `👋 Client ${getPlayerDisplayForConsole(client)} disconnected (${disconnectReasons[quitReasonId]}[${quitReasonId}])`);
	updateConnectionLogOnQuit(client, quitReasonId);

	let reasonText = disconnectReasons[quitReasonId];
	if(getPlayerData(client).customDisconnectReason != "") {
		reasonText = getPlayerData(client).customDisconnectReason;
	}
	messageDiscordEventChannel(`👋 ${getPlayerName(client)} has left the server (${reasonText})`);
	messagePlayerNormal(null, `👋 ${getPlayerName(client)} has left the server (${reasonText})`, getColourByName("softYellow"));

	if(isPlayerLoggedIn(client)) {

		savePlayerToDatabase(client);
		resetClientStuff(client);
		getServerData().clients[getPlayerId(client)] = null;
	}

	clearTemporaryVehicles();
	clearTemporaryPeds();
}

// ===========================================================================

async function onPlayerChat(event, client, messageText) {
	processPlayerChat(client, messageText);
	event.preventDefault();
}

// ===========================================================================

function onProcess(event, deltaTime) {
	updateServerGameTime();
	//checkPlayerSpawning();
	//checkPlayerPedState();
	//checkVehicleBurning();

	processVehiclePurchasing();
}

// ===========================================================================

function onEntityProcess(event, entity) {
}

// ===========================================================================

function onPedEnteringVehicle(event, ped, vehicle, seat) {
	if(ped.isType(ELEMENT_PLAYER)) {
		let client = getClientFromPlayerElement(ped);
		getPlayerData(client).pedState = VRR_PEDSTATE_ENTERINGVEHICLE;

		if(!getVehicleData(vehicle)) {
			return false;
		}

		if(getVehicleData(vehicle).locked) {
			if(doesPlayerHaveVehicleKeys(client, vehicle)) {
				if(!doesPlayerHaveKeyBindsDisabled(client) && doesPlayerHaveKeyBindForCommand(client, "lock")) {
					messagePlayerTip(client, `🔒 This ${getVehicleName(vehicle)} is locked. Press {ALTCOLOUR}${toUpperCase(getKeyNameFromId(getPlayerKeyBindForCommand(client, "lock").key))} {MAINCOLOUR}to unlock it.`);
				} else {
					messagePlayerNormal(client, `🔒 This ${getVehicleName(vehicle)} is locked. Use /lock to unlock it`);
				}
			} else {
				messagePlayerNormal(client, `🔒 This ${getVehicleName(vehicle)} is locked and you don't have the keys to unlock it`);
			}

			getPlayerData(client).enteringVehicle = null;
			makePlayerStopAnimation(client);
			return false;
		}

		getPlayerData(client).enteringVehicle = vehicle;
	}
}

// ===========================================================================

function onPedExitingVehicle(event, ped, vehicle) {
	if(!getVehicleData(vehicle)) {
		return false;
	}

	if(ped.isType(ELEMENT_PLAYER)) {
		let client = getClientFromPlayerElement(ped);
		getPlayerData(client).pedState = VRR_PEDSTATE_EXITINGVEHICLE;
	}

	if(!getVehicleData(vehicle).spawnLocked) {
		getVehicleData(vehicle).spawnPosition = getVehiclePosition(vehicle);
		getVehicleData(vehicle).spawnRotation = getVehicleHeading(vehicle);
		getVehicleData(vehicle).needsSaved = true;
	}
}

// ===========================================================================

function onResourceStart(event, resource) {
	logToConsole(LOG_WARN, `[VRR.Event] ${resource.name} started!`);

	if(resource != thisResource) {
		messageAdmins(`{MAINCOLOUR}Resource {ALTCOLOUR}${resource.name} {MAINCOLOUR}started!`);
	}
}

// ===========================================================================

function onResourceStop(event, resource) {
	logToConsole(LOG_WARN, `[VRR.Event] ${resource.name} stopped!`);

	if(resource != thisResource) {
		messageAdmins(`{MAINCOLOUR}Resource {ALTCOLOUR}${resource.name} {MAINCOLOUR}stopped!`);
	}

	if(resource == thisResource) {
		saveServerDataToDatabase();
		clearArray(getServerData().vehicles);
		clearArray(getServerData().clients);
		clearArray(getServerData().businesses);
		clearArray(getServerData().houses);
		clearArray(getServerData().factions);
		clearArray(getServerData().jobs);
		clearArray(getServerData().clans);
		clearArray(getServerData().items);
		clearArray(getServerData().itemTypes);
		clearArray(getServerData().groundItemCache);
		clearArray(getServerData().groundPlantCache);
		kickAllClients();
	}

	collectAllGarbage();
}

// ===========================================================================

function onPlayerEnteredSphere(client, sphere) {

}

// ===========================================================================

function onPlayerExitedSphere(client, sphere) {

}

// ===========================================================================

async function onPlayerEnteredVehicle(client, clientVehicle, seat) {
	if(client == null) {
		return false;
	}

	let vehicle = null;

	if(getGame() == VRR_GAME_GTA_IV) {
		vehicle = getVehicleFromIVNetworkId(clientVehicle);
	} else {
		if(getPlayerPed(client) == null) {
			return false;
		}

		await waitUntil(() => client != null && getPlayerPed(client) != null && getPlayerVehicle(client) != null);

		vehicle = getPlayerVehicle(client);
	}

	if(!getVehicleData(vehicle)) {
		return false;
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)} entered a ${getVehicleName(vehicle)} (ID: ${vehicle.getData("vrr.dataSlot")}, Database ID: ${getVehicleData(vehicle).databaseId})`);

	getPlayerData(client).lastVehicle = vehicle;
	getVehicleData(vehicle).lastActiveTime = getCurrentUnixTimestamp();

	if(getPlayerVehicleSeat(client) == VRR_VEHSEAT_DRIVER) {
		vehicle.engine = getVehicleData(vehicle).engine;

		if(getVehicleData(vehicle).buyPrice > 0) {
			messagePlayerAlert(client, getLocaleString(client, "VehicleForSale", getVehicleName(vehicle), `{ALTCOLOUR}$${makeLargeNumberReadable(getVehicleData(vehicle).buyPrice)}{MAINCOLOUR}`, `{ALTCOLOUR}/vehbuy{MAINCOLOUR}`));
			resetVehiclePosition(vehicle);
		} else if(getVehicleData(vehicle).rentPrice > 0) {
			if(getVehicleData(vehicle).rentedBy != client) {
				messagePlayerAlert(client, getLocaleString(client, "VehicleForRent", getVehicleName(vehicle), `{ALTCOLOUR}$${makeLargeNumberReadable(getVehicleData(vehicle).rentPrice)}{MAINCOLOUR}`, `{ALTCOLOUR}/vehrent{MAINCOLOUR}`));
				resetVehiclePosition(vehicle);
			} else {
				messagePlayerAlert(client, `You are renting this ${getVehicleName(vehicle)} for {ALTCOLOUR}$${makeLargeNumberReadable(getVehicleData(vehicle).rentPrice)} per minute. {MAINCOLOUR}Use {ALTCOLOUR}/stoprent {MAINCOLOUR}if you want to stop renting it.`);
			}
		} else {
			let ownerName = "Nobody";
			let ownerType = "None";
			ownerType = toLowerCase(getVehicleOwnerTypeText(getVehicleData(vehicle).ownerType));
			switch(getVehicleData(vehicle).ownerType) {
				case VRR_VEHOWNER_CLAN:
					ownerName = getClanData(getClanIdFromDatabaseId(getVehicleData(vehicle).ownerId)).name;
					ownerType = "clan";
					break;

				case VRR_VEHOWNER_JOB:
					ownerName = getJobData(getJobIdFromDatabaseId(getVehicleData(vehicle).ownerId)).name;
					ownerType = "job";
					break;

				case VRR_VEHOWNER_PLAYER:
					let subAccountData = loadSubAccountFromId(getVehicleData(vehicle).ownerId);
					ownerName = `${subAccountData.firstName} ${subAccountData.lastName}`;
					ownerType = "player";
					break;

				case VRR_VEHOWNER_BIZ:
					ownerName = getBusinessData(getVehicleData(vehicle).ownerId).name;
					ownerType = "business";
					break;

				default:
					break;
			}
			messagePlayerAlert(client, `This ${getVehicleName(vehicle)} belongs to {ALTCOLOUR}${ownerName} (${ownerType})`);
		}

		if(!getVehicleData(vehicle).engine) {
			if(getVehicleData(vehicle).buyPrice == 0 && getVehicleData(vehicle).rentPrice == 0) {
				if(doesPlayerHaveVehicleKeys(client, vehicle)) {
					if(!doesPlayerHaveKeyBindsDisabled(client) && doesPlayerHaveKeyBindForCommand(client, "engine")) {
						messagePlayerTip(client, `This ${getVehicleName(vehicle)}'s engine is off. Press {ALTCOLOUR}${toUpperCase(getKeyNameFromId(getPlayerKeyBindForCommand(client, "engine").key))} {MAINCOLOUR}to start it.`);
					} else {
						messagePlayerAlert(client, `This ${getVehicleName(vehicle)}'s engine is off. Use /engine to start it`);
					}
				} else {
					messagePlayerAlert(client, `This ${getVehicleName(vehicle)}'s engine is off and you don't have the keys to start it`);

				}
			}
			resetVehiclePosition(vehicle);
		}

		let currentSubAccount = getPlayerCurrentSubAccount(client);

		if(isPlayerWorking(client)) {
			if(getVehicleData(vehicle).ownerType == VRR_VEHOWNER_JOB) {
				if(getVehicleData(vehicle).ownerId == getPlayerCurrentSubAccount(client).job) {
					getPlayerCurrentSubAccount(client).lastJobVehicle = vehicle;
					messagePlayerInfo(client, `Use /startroute to start working in this vehicle`);
				}
			}
		}

		if(isPlayerWorking(client)) {
			if(isPlayerOnJobRoute(client)) {
				if(vehicle == getPlayerJobRouteVehicle(client)) {
					stopReturnToJobVehicleCountdown(client);
				}
			}
		}
	}

	if(getVehicleData(vehicle).streamingRadioStation != -1) {
		if(getPlayerData(client).streamingRadioStation != getVehicleData(vehicle).streamingRadioStation) {
			playRadioStreamForPlayer(client, getServerData().radioStations[getVehicleData(vehicle).streamingRadioStation].url, true, getPlayerStreamingRadioVolume(client));
		}
	}
}

// ===========================================================================

function onPlayerExitedVehicle(client, vehicle) {
	getPlayerData(client).pedState = VRR_PEDSTATE_READY;

	stopRadioStreamForPlayer(client);

	if(!getVehicleData(vehicle)) {
		return false;
	}

	if(isPlayerWorking(client)) {
		if(isPlayerOnJobRoute(client)) {
			if(vehicle == getPlayerJobRouteVehicle(client)) {
				startReturnToJobVehicleCountdown(client);
			}
		}
	}

	getVehicleData(vehicle).lastActiveTime = getCurrentUnixTimestamp();

	logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)} exited a ${getVehicleName(vehicle)} (ID: ${vehicle.getData("vrr.dataSlot")}, Database ID: ${getVehicleData(vehicle).databaseId})`);
}

// ===========================================================================

function onPlayerDeath(client, position) {
	logToConsole(LOG_INFO, `${getPlayerDisplayForConsole(client)} died.`);
	getPlayerData(client).pedState = VRR_PEDSTATE_DEAD;
	updatePlayerSpawnedState(client, false);
	setPlayerControlState(client, false);
	setTimeout(function() {
		if(isFadeCameraSupported()) {
			fadeCamera(client, false, 1.0);
		}
		setTimeout(function() {
			if(getPlayerCurrentSubAccount(client).inJail) {
				let closestJail = getClosestPoliceStation(getPlayerPosition(client));
				despawnPlayer(client);
				getPlayerCurrentSubAccount(client).interior = closestJail.interior;
				getPlayerCurrentSubAccount(client).dimension = closestJail.dimension;

				if(isPlayerWorking(client)) {
					stopWorking(client);
				}

				if(getGame() == VRR_GAME_MAFIA_ONE) {
					spawnPlayer(client, getGameConfig().skins[getGame()][getPlayerCurrentSubAccount(client).skin][0], closestJail.position, closestJail.heading);
				} else {
					spawnPlayer(client, closestJail.position, closestJail.heading, getGameConfig().skins[getGame()][getPlayerCurrentSubAccount(client).skin][0]);
				}

				if(isFadeCameraSupported()) {
					fadeCamera(client, true, 1.0);
				}
				updatePlayerSpawnedState(client, true);
				makePlayerStopAnimation(client);
				setPlayerControlState(client, true);
			} else {
				let closestHospital = getClosestHospital(getPlayerPosition(client));
				despawnPlayer(client);
				getPlayerCurrentSubAccount(client).interior = closestHospital.interior;
				getPlayerCurrentSubAccount(client).dimension = closestHospital.dimension;

				if(isPlayerWorking(client)) {
					stopWorking(client);
				}

				if(getGame() == VRR_GAME_MAFIA_ONE) {
					spawnPlayer(client, getGameConfig().skins[getGame()][getPlayerCurrentSubAccount(client).skin][0], closestHospital.position, closestHospital.heading);
				} else {
					spawnPlayer(client, closestHospital.position, closestHospital.heading, getGameConfig().skins[getGame()][getPlayerCurrentSubAccount(client).skin][0]);
				}

				if(isFadeCameraSupported()) {
					fadeCamera(client, true, 1.0);
				}

				updatePlayerSpawnedState(client, true);
				makePlayerStopAnimation(client);
				setPlayerControlState(client, true);
			}
		}, 2000);
	}, 1000);
}

// ===========================================================================

function onPedSpawn(ped) {
	if(ped.type == ELEMENT_PLAYER) {
		//setTimeout(onPlayerSpawn, 250, ped);
		onPlayerSpawn();
	}
}

// ===========================================================================

function onPlayerSpawn(client) {
	logToConsole(LOG_DEBUG, `[VRR.Event] Checking for ${getPlayerDisplayForConsole(client)}'s player ped`);
	//if(getPlayerPed(client) == null) {
	//    logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)}'s player element not set yet. Rechecking ...`);
	//    setTimeout(onPlayerSpawn, 500, client);
	//    return false;
	//}

	logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)}'s player ped is valid. Continuing spawn processing ...`);

	logToConsole(LOG_DEBUG, `[VRR.Event] Checking ${getPlayerDisplayForConsole(client)}'s player data`);
	if(!getPlayerData(client)) {
		logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)}'s player data is invalid. Kicking them from server.`);
		disconnectPlayer(client);
		return false;
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Checking ${getPlayerDisplayForConsole(client)}'s login status`);
	if(!isPlayerLoggedIn(client)) {
		logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)} is NOT logged in. Despawning their player.`);
		disconnectPlayer(client);
		return false;
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Checking ${getPlayerDisplayForConsole(client)}'s selected character status`);
	if(getPlayerData(client).currentSubAccount == -1) {
		logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)} has NOT selected a character. Despawning their player.`);
		disconnectPlayer(client);
		return false;
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)}'s player data is valid. Continuing spawn processing ...`);

	if(getServerGame() == VRR_GAME_GTA_IV) {
		logToConsole(LOG_DEBUG, `[VRR.Event] Setting ${getPlayerDisplayForConsole(client)}'s ped body parts and props`);
		setEntityData(getPlayerPed(client), "vrr.bodyParts", getPlayerCurrentSubAccount(client).bodyParts, true);
		setEntityData(getPlayerPed(client), "vrr.bodyProps", getPlayerCurrentSubAccount(client).bodyProps, true);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting ${getPlayerDisplayForConsole(client)}'s ped scale (${getPlayerCurrentSubAccount(client).pedScale})`);
	setEntityData(getPlayerPed(client), "vrr.scale", getPlayerCurrentSubAccount(client).pedScale, true);

	if(isPlayerSwitchingCharacter(client) || isPlayerCreatingCharacter(client)) {
		logToConsole(LOG_DEBUG, `[VRR.Event] ${getPlayerDisplayForConsole(client)}'s ped is being used for character selection/creation. No further spawn processing needed'`);
		return false;
	}

	if(isCustomCameraSupported()) {
		restorePlayerCamera(client);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Storing ${getPlayerDisplayForConsole(client)} ped in client data `);
	if(areServerElementsSupported()) {
		getPlayerData(client).ped = getPlayerPed(client);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Sending ${getPlayerDisplayForConsole(client)} the 'now playing as' message`);
	messagePlayerAlert(client, `You are now playing as: {businessBlue}${getCharacterFullName(client)}`, getColourByName("white"));
	//messagePlayerNormal(client, "This server is in early development and may restart at any time for updates.", getColourByName("orange"));
	//messagePlayerNormal(client, "Please report any bugs using /bug and suggestions using /idea", getColourByName("yellow"));

	logToConsole(LOG_DEBUG, `[VRR.Event] Updating spawned state for ${getPlayerDisplayForConsole(client)} to true`);
	updatePlayerSpawnedState(client, true);

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting player interior for ${getPlayerDisplayForConsole(client)} to ${getPlayerCurrentSubAccount(client).interior}`);
	setPlayerInterior(client, getPlayerCurrentSubAccount(client).interior);

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting player dimension for ${getPlayerDisplayForConsole(client)} to ${getPlayerCurrentSubAccount(client).dimension}`);
	setPlayerDimension(client, getPlayerCurrentSubAccount(client).dimension);

	//if(getPlayerCurrentSubAccount(client).interior != 0 || getPlayerCurrentSubAccount(client).dimension != 0) {
	//    updateAllInteriorVehiclesForPlayer(client, getPlayerCurrentSubAccount(client).interior, getPlayerCurrentSubAccount(client).dimension);
	//}

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting player health for ${getPlayerDisplayForConsole(client)} to ${getPlayerCurrentSubAccount(client).health}`);
	setPlayerHealth(client, getPlayerCurrentSubAccount(client).health);

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting player armour for ${getPlayerDisplayForConsole(client)} to ${getPlayerCurrentSubAccount(client).armour}`);
	setPlayerArmour(client, getPlayerCurrentSubAccount(client).armour);

	logToConsole(LOG_DEBUG, `[VRR.Event] Sending ${getPlayerDisplayForConsole(client)}'s job type to their client (${getJobIndexFromDatabaseId(getPlayerCurrentSubAccount(client))})`);
	sendPlayerJobType(client, getPlayerCurrentSubAccount(client).job);

	logToConsole(LOG_DEBUG, `[VRR.Event] Enabling all rendering states for ${getPlayerDisplayForConsole(client)}`);
	setPlayer2DRendering(client, true, true, true, true, true, true);

	logToConsole(LOG_DEBUG, `[VRR.Event] Sending snow states to ${getPlayerDisplayForConsole(client)}`);
	if(isSnowSupported()) {
		updatePlayerSnowState(client);
	}

	if(areServerElementsSupported() && getServerGame() == VRR_GAME_GTA_SA) {
		logToConsole(LOG_DEBUG, `[VRR.Event] Setting player walk and fightstyle for ${getPlayerDisplayForConsole(client)}`);
		setEntityData(getPlayerPed(client), "vrr.walkStyle", getPlayerCurrentSubAccount(client).walkStyle, true);

		setPlayerFightStyle(client, getPlayerCurrentSubAccount(client).fightStyle);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Updating logo state for ${getPlayerDisplayForConsole(client)}`);
	if(getServerConfig().showLogo && doesPlayerHaveLogoEnabled(client)) {
		updatePlayerShowLogoState(client, true);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Caching ${getPlayerDisplayForConsole(client)}'s hotbar items`);
	cachePlayerHotBarItems(client);

	logToConsole(LOG_DEBUG, `[VRR.Event] Syncing ${getPlayerDisplayForConsole(client)}'s hotbar`);
	updatePlayerHotBar(client);

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting ${getPlayerDisplayForConsole(client)}'s switchchar state to false`);
	getPlayerData(client).switchingCharacter = false;

	if(!doesPlayerHaveKeyBindsDisabled(client) && doesPlayerHaveKeyBindForCommand(client, "enter")) {
		let keyId = getPlayerKeyBindForCommand(client, "enter");
		logToConsole(LOG_DEBUG, `[VRR.Event] Sending custom enter property key ID (${keyId.key}, ${toUpperCase(getKeyNameFromId(keyId.key))}) to ${getPlayerDisplayForConsole(client)}`);
		sendPlayerEnterPropertyKey(client, keyId.key);
	}

	sendPlayerLocaleStrings(client);

	//if(isGTAIV()) {
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartHair", getPlayerCurrentSubAccount(client).bodyParts.hair, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartHead", getPlayerCurrentSubAccount(client).bodyParts.head, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartUpper", getPlayerCurrentSubAccount(client).bodyParts.upper, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartLower", getPlayerCurrentSubAccount(client).bodyParts.lower, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPropHair", getPlayerCurrentSubAccount(client).bodyProps.hair, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPropEyes", getPlayerCurrentSubAccount(client).bodyProps.eyes, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartHead", getPlayerCurrentSubAccount(client).bodyProps.head, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartLeftHand", getPlayerCurrentSubAccount(client).bodyProps.leftHand, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartRightHand", getPlayerCurrentSubAccount(client).bodyProps.rightHand, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartLeftWrist", getPlayerCurrentSubAccount(client).bodyProps.leftWrist, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartRightWrist", getPlayerCurrentSubAccount(client).bodyProps.rightWrist, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartHip", getPlayerCurrentSubAccount(client).bodyProps.hip, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartLeftFoot", getPlayerCurrentSubAccount(client).bodyProps.leftFoot, true);
	//    setEntityData(getPlayerPed(client), "vrr.bodyPartRightFoot", getPlayerCurrentSubAccount(client).bodyProps.rightFoot, true);
	//}

	if(isGTAIV()) {
		//sendPlayerPedPartsAndProps(client);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Setting ${getPlayerDisplayForConsole(client)}'s ped state to ready`);
	getPlayerData(client).pedState = VRR_PEDSTATE_READY;

	if(areServerElementsSupported()) {
		syncPlayerProperties(client);
		//setTimeout(function() {
		//    syncPlayerProperties(client);
		//}, 1000);
	}

	logToConsole(LOG_DEBUG, `[VRR.Event] Syncing ${getPlayerDisplayForConsole(client)}'s cash ${getPlayerCurrentSubAccount(client).cash}`);
	updatePlayerCash(client);

	logToConsole(LOG_DEBUG, `[VRR.Event] Updating all player name tags`);
	updateAllPlayerNameTags();

	if(!areServerElementsSupported()) {
		sendAllBusinessesToPlayer(client);
		sendAllHousesToPlayer(client);
		sendAllJobsToPlayer(client);
		//sendAllVehiclesToPlayer(client);

		requestPlayerPedNetworkId(client);
	}

	getPlayerData(client).payDayTickStart = sdl.ticks;

	messageDiscordEventChannel(`🧍 ${getPlayerName(client)} spawned as ${getCharacterFullName(client)}`);
}

// ===========================================================================

function onPlayerCommand(event, client, command, params) {
	if(!doesCommandExist(command)) {
		processPlayerCommand(command, params, client);
	}
}

// ===========================================================================