// ===========================================================================
// Asshat-Gaming Roleplay
// https://github.com/VortrexFTW/gtac_asshat_rp
// Copyright (c) 2021 Asshat-Gaming (https://asshatgaming.com)
// ===========================================================================
// FILE: subaccount.js
// DESC: Provides subaccount (character) functions and usage
// TYPE: Server (JavaScript)
// ===========================================================================

function initSubAccountScript() {
	logToConsole(LOG_DEBUG, "[Asshat.SubAccount]: Initializing subaccount script ...");
	logToConsole(LOG_DEBUG, "[Asshat.SubAccount]: SubAccount script initialized!");
}

// ===========================================================================

function loadSubAccountFromName(firstName, lastName) {
	let dbConnection = connectToDatabase();
	if(dbConnection) {
		firstName = escapeDatabaseString(dbConnection, firstName);
		lastName = escapeDatabaseString(dbConnection, lastName);
		let dbQueryString = `SELECT * FROM sacct_main WHERE sacct_name_first = '${firstName}' AND sacct_name_last = '${lastName}' LIMIT 1;`;
		let dbQuery = queryDatabase(dbConnection, dbQueryString);
		if(dbQuery) {
			let dbAssoc = fetchQueryAssoc(dbQuery);
			freeDatabaseQuery(dbQuery);
			return new serverClasses.subAccountData(dbAssoc);
		}
		disconnectFromDatabase(dbConnection);
	}

	return false;
}

// ===========================================================================

function loadSubAccountFromId(subAccountId) {
	let dbConnection = connectToDatabase();
	if(dbConnection) {
		let dbQueryString = `SELECT * FROM sacct_main WHERE sacct_id = ${subAccountId} LIMIT 1;`;
		let dbQuery = queryDatabase(dbConnection, dbQueryString);
		if(dbQuery) {
			let dbAssoc = fetchQueryAssoc(dbQuery);
			freeDatabaseQuery(dbQuery);
			return new serverClasses.subAccountData(dbAssoc);
		}
		disconnectFromDatabase(dbConnection);
	}

	return false;
}

// ===========================================================================

function loadSubAccountsFromAccount(accountId) {
	let tempSubAccounts = [];
	let dbAssoc = false;
	if(accountId > 0) {
		let dbConnection = connectToDatabase();
		if(dbConnection) {
			let dbQueryString = `SELECT * FROM sacct_main WHERE sacct_acct = ${accountId} AND sacct_server = ${getServerId()}`;
			let dbQuery = queryDatabase(dbConnection, dbQueryString);
			if(dbQuery) {
				while(dbAssoc = fetchQueryAssoc(dbQuery)) {
					let tempSubAccount = new serverClasses.subAccountData(dbAssoc);
					tempSubAccounts.push(tempSubAccount);
				}
				freeDatabaseQuery(dbQuery);
			}
			disconnectFromDatabase(dbConnection);
		}
	}

	return tempSubAccounts;
}

// ===========================================================================

function saveSubAccountToDatabase(subAccountData) {
	let dbConnection = connectToDatabase();

	if(dbConnection) {
		let safeClanTag = escapeDatabaseString(dbConnection, subAccountData.clanTag);
		let safeClanTitle = escapeDatabaseString(dbConnection, subAccountData.clanTitle);
		let safeFirstName = escapeDatabaseString(dbConnection, subAccountData.firstName);
		let safeLastName = escapeDatabaseString(dbConnection, subAccountData.lastName);
		let safeMiddleName = escapeDatabaseString(dbConnection, subAccountData.middleName);

		let dbQueryString = `
			UPDATE sacct_main SET
				 sacct_name_first='${safeFirstName}',
				sacct_name_last='${safeLastName}',
				sacct_name_middle='${safeMiddleName}',
				sacct_pos_x=${subAccountData.spawnPosition.x},
				sacct_pos_y=${subAccountData.spawnPosition.y},
				sacct_pos_z=${subAccountData.spawnPosition.z},
				sacct_scale_x=${subAccountData.pedScale.x},
				sacct_scale_y=${subAccountData.pedScale.y},
				sacct_scale_z=${subAccountData.pedScale.z},
				sacct_angle=${subAccountData.spawnHeading},
				sacct_skin=${subAccountData.skin},
				sacct_cash=${subAccountData.cash},
				sacct_job=${subAccountData.job},
				sacct_int=${subAccountData.interior},
				sacct_vw=${subAccountData.dimension},
				sacct_clan=${subAccountData.clan},
				sacct_clan_rank=${subAccountData.clanRank},
				sacct_clan_tag='${safeClanTag}',
				sacct_clan_title='${safeClanTitle}',
				sacct_clan_flags=${subAccountData.clanFlags},
				sacct_fightstyle=${subAccountData.fightStyle},
				sacct_walkstyle=${subAccountData.walkStyle},
				sacct_when_lastlogin=${subAccountData.lastLogin},
				sacct_origin='${subAccountData.placeOfOrigin}',
				sacct_when_born='${subAccountData.dateOfBirth}',
				sacct_hd_part_hair_model=${subAccountData.bodyParts.hair[0]},
				sacct_hd_part_hair_texture=${subAccountData.bodyParts.hair[1]},
				sacct_hd_part_head_model=${subAccountData.bodyParts.head[0]},
				sacct_hd_part_head_texture=${subAccountData.bodyParts.head[1]},
				sacct_hd_part_upper_model=${subAccountData.bodyParts.upper[0]},
				sacct_hd_part_upper_texture=${subAccountData.bodyParts.upper[1]},
				sacct_hd_part_lower_model=${subAccountData.bodyParts.lower[0]},
				sacct_hd_part_lower_texture=${subAccountData.bodyParts.lower[1]},
				sacct_hd_prop_hair_model=${subAccountData.bodyProps.hair[0]},
				sacct_hd_prop_hair_texture=${subAccountData.bodyProps.hair[1]},
				sacct_hd_prop_eyes_model=${subAccountData.bodyProps.eyes[0]},
				sacct_hd_prop_eyes_texture=${subAccountData.bodyProps.eyes[1]},
				sacct_hd_prop_head_model=${subAccountData.bodyProps.head[0]},
				sacct_hd_prop_head_texture=${subAccountData.bodyProps.head[1]},
				sacct_hd_prop_lefthand_model=${subAccountData.bodyProps.leftHand[0]},
				sacct_hd_prop_lefthand_texture=${subAccountData.bodyProps.leftHand[1]},
				sacct_hd_prop_righthand_model=${subAccountData.bodyProps.rightHand[0]},
				sacct_hd_prop_righthand_texture=${subAccountData.bodyProps.rightHand[1]},
				sacct_hd_prop_leftwrist_model=${subAccountData.bodyProps.leftWrist[0]},
				sacct_hd_prop_leftwrist_texture=${subAccountData.bodyProps.leftWrist[1]},
				sacct_hd_prop_rightwrist_model=${subAccountData.bodyProps.rightWrist[0]},
				sacct_hd_prop_rightwrist_texture=${subAccountData.bodyProps.rightWrist[1]},
				sacct_hd_prop_hip_model=${subAccountData.bodyProps.hip[0]},
				sacct_hd_prop_hip_texture=${subAccountData.bodyProps.hip[1]},
				sacct_hd_prop_leftfoot_model=${subAccountData.bodyProps.leftFoot[0]},
				sacct_hd_prop_leftfoot_texture=${subAccountData.bodyProps.leftFoot[1]},
				sacct_hd_prop_rightfoot_model=${subAccountData.bodyProps.rightFoot[0]},
				sacct_hd_prop_rightfoot_texture=${subAccountData.bodyProps.rightFoot[1]}
			 WHERE sacct_id=${subAccountData.databaseId}`;

		//dbQueryString = dbQueryString.trim();
		dbQueryString = dbQueryString.replace(/(?:\r\n|\r|\n|\t)/g, "");
		logToConsole(LOG_DEBUG, dbQueryString);
		let dbQuery = queryDatabase(dbConnection, dbQueryString);
		freeDatabaseQuery(dbQuery);
		disconnectFromDatabase(dbConnection);
    }
}

// ===========================================================================

function createSubAccount(accountId, firstName, lastName, skinId, dateOfBirth, placeOfOrigin) {
	logToConsole(LOG_DEBUG, `[Asshat.Account] Attempting to create subaccount ${firstName} ${lastName} in database`);
	let dbConnection = connectToDatabase();

	if(dbConnection) {
		let safeFirstName = escapeDatabaseString(dbConnection, firstName);
		let safeLastName = escapeDatabaseString(dbConnection, lastName);
		let safePlaceOfOrigin = escapeDatabaseString(dbConnection, placeOfOrigin);

		let dbQuery = queryDatabase(dbConnection, `INSERT INTO sacct_main (sacct_acct, sacct_name_first, sacct_name_last, sacct_skin, sacct_origin, sacct_when_born, sacct_pos_x, sacct_pos_y, sacct_pos_z, sacct_angle, sacct_cash, sacct_server, sacct_health, sacct_when_made, sacct_when_lastlogin) VALUES (${accountId}, '${safeFirstName}', '${safeLastName}', ${skinId}, '${safePlaceOfOrigin}', '${dateOfBirth}', ${getServerConfig().newCharacter.spawnPosition.x}, ${getServerConfig().newCharacter.spawnPosition.y}, ${getServerConfig().newCharacter.spawnPosition.z}, ${getServerConfig().newCharacter.spawnHeading}, ${getServerConfig().newCharacter.money}, ${getServerId()}, 100, UNIX_TIMESTAMP(), 0)`);
		if(getDatabaseInsertId(dbConnection) > 0) {
			return loadSubAccountFromId(getDatabaseInsertId(dbConnection));
		}
		disconnectFromDatabase(dbConnection);
	}

	return false;
}

// ===========================================================================

function showCharacterSelectToClient(client) {
	getPlayerData(client).switchingCharacter = true;

	if(doesPlayerHaveAutoSelectLastCharacterEnabled(client)) {
		if(getPlayerData(client).subAccounts.length > 0) {
			logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} is being auto-spawned as character ID ${getPlayerLastUsedSubAccount(client)}`);
			selectCharacter(client, getPlayerLastUsedSubAccount(client));
			return true;
		}
	}

	if(getServerConfig().useGUI && doesPlayerHaveGUIEnabled(client)) {
		getPlayerData(client).currentSubAccount = 0;
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] Setting ${getPlayerDisplayForConsole(client)}'s character to ID ${getPlayerData(client).currentSubAccount}`);
		let tempSubAccount = getPlayerData(client).subAccounts[0];
		showPlayerCharacterSelectGUI(client, tempSubAccount.firstName, tempSubAccount.lastName, tempSubAccount.placeOfOrigin, tempSubAccount.dateOfBirth, tempSubAccount.skin);
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} is being shown the character select GUI`);
	} else {
		//let emojiNumbers = ["➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒"];
		//let emojiNumbers = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"];
		//let emojiNumbers = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
		messagePlayerNormal(client, `You have the following characters. Use /usechar <id> to select one:`, getColourByName("teal"));
		getPlayerData(client).subAccounts.forEach(function(subAccount, index) {
			messagePlayerNormal(client, `${index+1} • [#AAAAAA]${subAccount.firstName} ${subAccount.lastName}`);
		});
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} is being shown the character select/list message (GUI disabled)`);
	}
}

// ===========================================================================

function checkNewCharacter(client, firstName, lastName, dateOfBirth, placeOfOrigin, skinId) {
	if(areParamsEmpty(firstName)) {
		showPlayerNewCharacterFailedGUI(client, "First name cannot be blank!");
		return false;
	}
	firstName = firstName.trim();

	if(areParamsEmpty(lastName)) {
		showPlayerNewCharacterFailedGUI(client, "Last name cannot be blank!");
		return false;
	}
	lastName = lastName.trim();

	if(areParamsEmpty(dateOfBirth)) {
		showPlayerNewCharacterFailedGUI(client, "Date of birth cannot be blank!");
		return false;
	}

	if(areParamsEmpty(placeOfOrigin)) {
		showPlayerNewCharacterFailedGUI(client, "Place of origin cannot be blank!");
		return false;
	}

	if(!skinId) {
		skinId = getServerConfig().newCharacter.skin;
	}

	let subAccountData = createSubAccount(getPlayerData(client).accountData.databaseId, firstName, lastName, skinId, dateOfBirth, placeOfOrigin);
	if(!subAccountData) {
		if(getServerConfig().useGUI && doesPlayerHaveGUIEnabled(client)) {
			showPlayerNewCharacterFailedGUI("Your character could not be created!");
		} else {
			messagePlayerAlert(client, "Your character could not be created!");
		}
		messagePlayerAlert(client, "Asshat Gaming staff have been notified of the problem and will fix it shortly.");
		return false;
	}

	getPlayerData(client).subAccounts = loadSubAccountsFromAccount(getPlayerData(client).accountData.databaseId);
	getPlayerData(client).currentSubAccount = 0;
	let tempSubAccount = getPlayerData(client).subAccounts[0];
	showCharacterSelectToClient(client);
}


// ===========================================================================

function checkPreviousCharacter(client) {
	if(getPlayerData(client).subAccounts.length > 1) {
		if(getPlayerData(client).currentSubAccount <= 0) {
			getPlayerData(client).currentSubAccount = getPlayerData(client).subAccounts.length-1;
		} else {
			getPlayerData(client).currentSubAccount--;
		}

		let subAccountId = getPlayerData(client).currentSubAccount;
		let tempSubAccount = getPlayerData(client).subAccounts[subAccountId];
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] Setting ${getPlayerDisplayForConsole(client)}'s character to ID ${getPlayerData(client).currentSubAccount}`);
		updatePlayerCharacterSelectGUI(client, tempSubAccount.firstName, tempSubAccount.lastName, tempSubAccount.placeOfOrigin, tempSubAccount.dateOfBirth, tempSubAccount.skin);
	}
}

// ===========================================================================

function checkNextCharacter(client) {
	if(getPlayerData(client).subAccounts.length > 1) {
		if(getPlayerData(client).currentSubAccount >= getPlayerData(client).subAccounts.length-1) {
			getPlayerData(client).currentSubAccount = 0;
		} else {
			getPlayerData(client).currentSubAccount++;
		}

		let subAccountId = getPlayerData(client).currentSubAccount;
		let tempSubAccount = getPlayerData(client).subAccounts[subAccountId];
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] Setting ${getPlayerDisplayForConsole(client)}'s character to ID ${getPlayerData(client).currentSubAccount}`);
		updatePlayerCharacterSelectGUI(client, tempSubAccount.firstName, tempSubAccount.lastName, tempSubAccount.placeOfOrigin, tempSubAccount.dateOfBirth, tempSubAccount.skin);
	}
}

// ===========================================================================

function selectCharacter(client, characterId = -1) {
	logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} character select called (Character ID ${characterId})`);
	if(characterId != -1) {
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} provided character ID (${characterId}) to spawn with`);
		getPlayerData(client).currentSubAccount = characterId;
	}

	showPlayerCharacterSelectSuccessGUI(client);

	let spawnPosition = getPlayerCurrentSubAccount(client).spawnPosition;
	let spawnHeading = getPlayerCurrentSubAccount(client).spawnHeading;
	let spawnInterior = getPlayerCurrentSubAccount(client).interior;
	let spawnDimension = getPlayerCurrentSubAccount(client).dimension;
	let skin = getPlayerCurrentSubAccount(client).skin;

	logToConsole(LOG_DEBUG, `[Asshat.SubAccount] Spawning ${getPlayerDisplayForConsole(client)} as character ID ${getPlayerData(client).currentSubAccount} with skin ${skin} (${spawnPosition.x}, ${spawnPosition.y}, ${spawnPosition.z})`);
	//setPlayerCameraLookAt(client, getPosBehindPos(spawnPosition, spawnHeading, 5), spawnPosition);
	if(getServerGame() == GAME_GTA_IV) {
		spawnPlayer(client, spawnPosition, spawnHeading, skin);
	} else {
		spawnPlayer(client, spawnPosition, spawnHeading, skin, spawnInterior, spawnDimension);
	}
	//spawnPlayer(p(0), getServerConfig().newCharacter.spawnPosition, 0.0, 26);
	logToConsole(LOG_DEBUG, `[Asshat.SubAccount] Spawned ${getPlayerDisplayForConsole(client)} as character ID ${getPlayerData(client).currentSubAccount} with skin ${skin} (${spawnPosition.x}, ${spawnPosition.y}, ${spawnPosition.z})`);

	setTimeout(function() {
		onPlayerSpawn(client);
	}, 1000);

	getPlayerCurrentSubAccount(client).lastLogin = new Date().getTime();
}

// ===========================================================================

function switchCharacterCommand(command, params, client) {
	logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} is requesting to switch characters (current character: ${getCharacterFullName(client)} [${getPlayerData(client).currentSubAccount}/${getPlayerCurrentSubAccount(client).databaseId}])`);
	if(!isPlayerSpawned(client)) {
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} is allowed to switch characters (not spawned)`);
		return false;
	}

	if(isPlayerSwitchingCharacter(client)) {
		logToConsole(LOG_DEBUG, `[Asshat.SubAccount] ${getPlayerDisplayForConsole(client)} is not allowed to switch characters (already in switch char mode)`);
		messagePlayerError(client, "You are already selecting/switching characters!");
		return false;
	}

	getPlayerCurrentSubAccount(client).spawnPosition = getPlayerPosition(client);
	getPlayerCurrentSubAccount(client).spawnHeading = getPlayerHeading(client);
	getPlayerCurrentSubAccount(client).interior = getPlayerInterior(client);
	getPlayerCurrentSubAccount(client).dimension = getPlayerDimension(client);

	logToConsole(client, `Saving ${getPlayerDisplayForConsole(client)}'s subaccount (${getCharacterFullName(client)} [${getPlayerData(client).currentSubAccount}/${getPlayerCurrentSubAccount(client).databaseId}] to database`)
	saveSubAccountToDatabase(getPlayerCurrentSubAccount(client));

	resetClientStuff(client);

	client.despawnPlayer();

	showConnectCameraToPlayer(client);
	showCharacterSelectToClient(client);
}

// ===========================================================================

function newCharacterCommand(command, params, client) {
	if(areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let splitParams = params.split(" ");
	let firstName = splitParams[0];
	let lastName = splitParams[1];

	checkNewCharacter(client, firstName, lastName, "01/01/1901", "Liberty City", getServerConfig().newCharacter.skin);
}

// ===========================================================================

function useCharacterCommand(command, params, client) {
	if(!getPlayerData(client).switchingCharacter) {
		messagePlayerError(client, "Use /switchchar to save this character and return to the characters screen first!");
		return false;
	}

	if(areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let characterId = toInteger(params) || 1;

	selectCharacter(client, characterId-1);
}

// ===========================================================================

function getPlayerLastUsedSubAccount(client) {
	let subAccounts = getPlayerData(client).subAccounts;
	let lastUsed = 0;
	for(let i in subAccounts) {
		if(subAccounts[i].lastLogin > subAccounts[lastUsed].lastLogin) {
			lastUsed = i;
		}
	}
	return lastUsed;
}

// ===========================================================================

function transferCharacterToServer(subAccountDatabaseId, newServerId) {
	quickDatabaseQuery(`UPDATE sacct_main SET sacct_server = ${newServerId}, sacct_skin = ${loadServerConfigFromId(newServerId).newCharacter.skin} WHERE sacct_id = ${subAccountDatabaseId} LIMIT 1;`);
}

// ===========================================================================

function getCharacterFullName(client) {
	return `${getPlayerCurrentSubAccount(client).firstName} ${getPlayerCurrentSubAccount(client).lastName}`;
}

// ===========================================================================

function isPlayerSwitchingCharacter(client) {
	return getPlayerData(client).switchingCharacter;
}

// ===========================================================================

function getPlayerCurrentSubAccount(client) {
	if(!getPlayerData(client)) {
		return false;
	}

	let subAccountId = getPlayerData(client).currentSubAccount;
	if(subAccountId == -1) {
		return false;
	}

	return getPlayerData(client).subAccounts[subAccountId];
}

// ===========================================================================

function getClientSubAccountName(client) {
	let subAccountData = getPlayerCurrentSubAccount(client);
	return `${subAccountData.firstName} ${subAccountData.lastName}`;
}

// ===========================================================================