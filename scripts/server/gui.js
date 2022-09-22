// ===========================================================================
// Asshat Gaming Roleplay
// https://github.com/VortrexFTW/agrp_main
// (c) 2022 Asshat Gaming
// ===========================================================================
// FILE: gui.js
// DESC: Provides GUI functions and usage
// TYPE: Server (JavaScript)
// ===========================================================================

// Prompts (used for client GUI prompt responses)
const AGRP_PROMPT_NONE = 0;
const AGRP_PROMPT_CREATEFIRSTCHAR = 1;
const AGRP_PROMPT_BIZORDER = 2;
const AGRP_PROMPT_GIVEVEHTOCLAN = 3;
const AGRP_PROMPT_GIVEBIZTOCLAN = 4;
const AGRP_PROMPT_GIVEHOUSETOCLAN = 5;
const AGRP_PROMPT_BUYBIZ = 6;
const AGRP_PROMPT_BUYHOUSE = 7;
const AGRP_PROMPT_RESETKEYBINDS = 8;

// ===========================================================================

function initGUIScript() {
	logToConsole(LOG_INFO, "[AGRP.GUI]: Initializing GUI script ...");
	logToConsole(LOG_INFO, "[AGRP.GUI]: GUI script initialized successfully!");
}

// ===========================================================================

function playerPromptAnswerNo(client) {
	if (getPlayerData(client).promptType == AGRP_PROMPT_NONE) {
		return false;
	}

	logToConsole(LOG_DEBUG, `[AGRP.GUI] ${getPlayerDisplayForConsole(client)} answered NO to their prompt (${getPlayerData(client).promptType})`);

	switch (getPlayerData(client).promptType) {
		case AGRP_PROMPT_CREATEFIRSTCHAR:
			logToConsole(LOG_DEBUG, `${getPlayerDisplayForConsole(client)} chose not to create a first character. Kicking them from the server ...`);
			showPlayerErrorGUI(client, "You don't have a character to play. Goodbye!", "No Characters");
			getPlayerData(targetClient).customDisconnectReason = "FailedToCreateCharacter";
			setTimeout(function () { disconnectPlayer(client); }, 5000);
			break;

		case AGRP_PROMPT_BIZORDER:
			if (getPlayerData(client).businessOrderAmount > 0) {
				if (canPlayerUseGUI(client)) {
					showPlayerErrorGUI(client, "You canceled the order.", "Business Order Canceled");
				} else {
					logToConsole(LOG_DEBUG, `${getPlayerDisplayForConsole(client)} canceled the order of ${getPlayerData(client).businessOrderAmount} ${getPlayerData(client).businessOrderItem} at ${getPlayerData(client).businessOrderCost / getPlayerData(client).businessOrderAmount} each for business ${getBusinessData(getPlayerData(client).businessOrderBusiness)}`);
					messagePlayerError(client, "You canceled the order!");
				}
			} else {
				showPlayerErrorGUI(client, "You aren't ordering anything for a business!", "Business Order Canceled");
			}
			break;

		default:
			break;
	}

	getPlayerData(client).promptType = AGRP_PROMPT_NONE;
}

// ===========================================================================

function playerPromptAnswerYes(client) {
	if (getPlayerData(client).promptType == AGRP_PROMPT_NONE) {
		return false;
	}

	logToConsole(LOG_DEBUG, `[AGRP.GUI] ${getPlayerDisplayForConsole(client)} answered YES to their prompt (${getPlayerData(client).promptType})`);

	switch (getPlayerData(client).promptType) {
		case AGRP_PROMPT_CREATEFIRSTCHAR: {
			showPlayerNewCharacterGUI(client);
			break;
		}

		case AGRP_PROMPT_BIZORDER: {
			if (getPlayerData(client).businessOrderAmount > 0) {
				if (getBusinessData(getPlayerData(client).businessOrderBusiness).till < getPlayerData(client).businessOrderCost) {
					logToConsole(LOG_DEBUG, `[AGRP.GUI] ${getPlayerDisplayForConsole(client)} failed to order ${getPlayerData(client).businessOrderAmount} ${getItemTypeData(getPlayerData(client).businessOrderItem).name} at ${getPlayerData(client).businessOrderCost / getPlayerData(client).businessOrderAmount} each for business ${getBusinessData(getPlayerData(client).businessOrderBusiness).name} (Reason: Not enough money in business till)`);
					showPlayerErrorGUI(client, "This business doesn't have enough money! Deposit some using /bizdeposit", "Business Order Canceled");
					getPlayerData(client).businessOrderAmount = 0;
					getPlayerData(client).businessOrderBusiness = false;
					getPlayerData(client).businessOrderItem = -1;
					getPlayerData(client).businessOrderValue = -1;
				} else {
					logToConsole(LOG_DEBUG, `[AGRP.GUI] ${getPlayerDisplayForConsole(client)} successfully ordered ${getPlayerData(client).businessOrderAmount} ${getItemTypeData(getPlayerData(client).businessOrderItem).name} at ${getPlayerData(client).businessOrderCost / getPlayerData(client).businessOrderAmount} each for business ${getBusinessData(getPlayerData(client).businessOrderBusiness).name}`);
					showPlayerInfoGUI(client, `You ordered ${getPlayerData(client).businessOrderAmount} ${getItemTypeData(getPlayerData(client).businessOrderItem).name} (${getItemValueDisplay(getPlayerData(client).businessOrderItem, getPlayerData(client).businessOrderValue)}) for ${getPlayerData(client).businessOrderCost}!`, "Business Order Successful");
					createItem(getPlayerData(client).businessOrderItem, getPlayerData(client).businessOrderValue, AGRP_ITEM_OWNER_BIZFLOOR, getBusinessData(getPlayerData(client).businessOrderBusiness).databaseId, getPlayerData(client).businessOrderAmount);
					cacheBusinessItems(getPlayerData(client).businessOrderBusiness);
					getBusinessData(getPlayerData(client).businessOrderBusiness).till -= getPlayerData(client).businessOrderCost;
					updateBusinessPickupLabelData(getPlayerData(client).businessOrderBusiness);
					getPlayerData(client).businessOrderAmount = 0;
					getPlayerData(client).businessOrderBusiness = false;
					getPlayerData(client).businessOrderItem = -1;
					getPlayerData(client).businessOrderValue = -1;
				}
			} else {
				showPlayerErrorGUI(client, ``, `Business Order Canceled`);
			}
			break;
		}

		case AGRP_PROMPT_GIVEVEHTOCLAN: {
			if (!isPlayerInAnyVehicle(client)) {
				messagePlayerError(client, getLocaleString(client, "MustBeInVehicle"));
				return false;
			}

			if (!getVehicleData(getPlayerVehicle(client))) {
				messagePlayerError(client, getLocaleString(client, "RandomVehicleCommandsDisabled"));
				return false;
			}

			if (getVehicleData(getPlayerVehicle(client)).ownerType != AGRP_VEHOWNER_PLAYER) {
				messagePlayerError(client, getLocaleString(client, "MustOwnVehicle"));
				return false;
			}

			if (getVehicleData(getPlayerVehicle(client)).ownerId != getPlayerCurrentSubAccount(client).databaseId) {
				messagePlayerError(client, getLocaleString(client, "MustOwnVehicle"));
				return false;
			}

			getVehicleData(getPlayerVehicle(client)).ownerType = AGRP_VEHOWNER_CLAN;
			getVehicleData(getPlayerVehicle(client)).ownerId = getPlayerCurrentSubAccount(client).clan;
			messagePlayerSuccess(client, getLocaleString(client, "GaveVehicleToClan", getVehicleName(getPlayerVehicle(client))));
			//messageAdmins(`{ALTCOLOUR}${getPlayerName(client)} {MAINCOLOUR}set their {vehiclePurple}${getVehicleName(vehicle)} {MAINCOLOUR}owner to the {clanOrange}${getClanData(clanId).name} {MAINCOLOUR}clan`);
			break;
		}

		case AGRP_PROMPT_GIVEHOUSETOCLAN: {
			let houseId = getPlayerHouse(client);
			if (!houseId) {
				messagePlayerError(client, getLocaleString(client, "InvalidHouse"));
				return false;
			}

			if (getHouseData(houseId).ownerType != AGRP_VEHOWNER_PLAYER) {
				messagePlayerError(client, getLocaleString(client, "MustOwnHouse"));
				return false;
			}

			if (getHouseData(houseId).ownerId != getPlayerCurrentSubAccount(client).databaseId) {
				messagePlayerError(client, getLocaleString(client, "MustOwnHouse"));
				return false;
			}

			getHouseData(houseId).ownerType = AGRP_HOUSE_OWNER_CLAN;
			getHouseData(houseId).ownerId = getPlayerCurrentSubAccount(client).clan;
			messagePlayerSuccess(client, getLocaleString(client, "GaveHouseToClan"));
			//messageAdmins(`{ALTCOLOUR}${getPlayerName(client)} {MAINCOLOUR}set their {vehiclePurple}${getVehicleName(vehicle)} {MAINCOLOUR}owner to the {clanOrange}${getClanData(clanId).name} {MAINCOLOUR}clan`);
			break;
		}

		case AGRP_PROMPT_GIVEBIZTOCLAN: {
			let businessId = getPlayerBusiness(client);
			if (!businessId) {
				messagePlayerError(client, getLocaleString(client, "InvalidBusiness"));
				return false;
			}

			if (getBusinessData(businessId).ownerType != AGRP_VEHOWNER_PLAYER) {
				messagePlayerError(client, getLocaleString(client, "MustOwnBusiness"));
				return false;
			}

			if (getBusinessData(businessId).ownerId != getPlayerCurrentSubAccount(client).databaseId) {
				messagePlayerError(client, getLocaleString(client, "MustOwnBusiness"));
				return false;
			}

			getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_CLAN;
			getBusinessData(businessId).ownerId = getPlayerCurrentSubAccount(client).clan;
			messagePlayerSuccess(client, getLocaleString(client, "GaveBusinessToClan"));
			//messageAdmins(`{ALTCOLOUR}${getPlayerName(client)} {MAINCOLOUR}set their {vehiclePurple}${getVehicleName(vehicle)} {MAINCOLOUR}owner to the {clanOrange}${getClanData(clanId).name} {MAINCOLOUR}clan`);
			break;
		}

		case AGRP_PROMPT_BUYHOUSE: {
			let houseId = getPlayerHouse(client);
			if (!houseId) {
				messagePlayerError(client, getLocaleString(client, "InvalidHouse"));
				return false;
			}

			if (getHouseData(houseId).buyPrice <= 0) {
				messagePlayerError(client, getLocaleString(client, "HouseNotForSale"));
				return false;
			}

			if (getPlayerCurrentSubAccount(client).cash < getHouseData(houseId).buyPrice) {
				messagePlayerError(client, getLocaleString(client, "HousePurchaseNotEnoughMoney"));
				return false;
			}

			getHouseData(houseId).ownerType = AGRP_HOUSE_OWNER_PLAYER;
			getHouseData(houseId).ownerId = getPlayerCurrentSubAccount(client).databaseId;
			getHouseData(houseId).buyPrice = 0;
			getHouseData(houseId).needsSaved = true;
			updateHousePickupLabelData(houseId);

			messageDiscordEventChannel(`🏘️ ${getCharacterFullName(client)} is now the owner of *${getHouseData(houseId).description}*!`);
			messagePlayerSuccess(client, `🏘️ You are now the owner of {houseGreen}${getHouseData(houseId).description}`);
			break;
		}

		case AGRP_PROMPT_BUYBIZ: {
			let businessId = getPlayerBusiness(client);
			if (!businessId) {
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

			getBusinessData(businessId).ownerType = AGRP_BIZ_OWNER_PLAYER;
			getBusinessData(businessId).ownerId = getPlayerCurrentSubAccount(client).databaseId;
			getBusinessData(businessId).buyPrice = 0;
			getBusinessData(businessId).needsSaved = true;
			updateBusinessPickupLabelData(businessId);

			messageDiscordEventChannel(`🏢 ${getCharacterFullName(client)} is now the owner of *${getBusinessData(businessId).name}*!`);
			messagePlayerSuccess(client, `🏢 You are now the owner of {businessBlue}${getBusinessData(businessId).name}`);
			break;
		}

		case AGRP_PROMPT_RESETKEYBINDS: {
			break;
		}

		case AGRP_PROMPT_COPYKEYBINDSTOSERVER: {
			break;
		}

		default: {
			submitBugReport(client, `[AUTOMATED REPORT] Unknown prompt type: ${getPlayerData(client).promptType}`);
			break;
		}
	}

	getPlayerData(client).promptType = AGRP_PROMPT_NONE;
}

// ===========================================================================

function canPlayerUseGUI(client) {
	return (doesServerHaveGUIEnabled() && doesPlayerHaveGUIEnabled(client));
}

// ===========================================================================

function playerPromptAnswerYesCommand(command, params, client) {
	playerPromptAnswerYes(client);
}

// ===========================================================================

function playerPromptAnswerNoCommand(command, params, client) {
	playerPromptAnswerNo(client);
}

// ===========================================================================

function playerToggledGUI(client) {
	toggleAccountGUICommand("gui", "", client);
}

// ===========================================================================

function showPlayerTwoFactorAuthenticationGUI(client) {
	sendNetworkEventToPlayer("agrp.2fa", client);
}

// ===========================================================================