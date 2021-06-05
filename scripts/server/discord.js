// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: discord.js
// DESC: Provides discord bridging and connection functions and usage
// TYPE: Server (JavaScript)
// ===========================================================================

function initDiscordScript() {
	logToConsole(LOG_INFO, "[VRR.Discord]: Initializing discord script ...");
	logToConsole(LOG_INFO, "[VRR.Discord]: Discord script initialized successfully!");
}

// ===========================================================================

/*
addEventHandler("OnDiscordCommand", function(command, params, discordUser) {
    let commandData = getCommand(command);

    if(!commandData) {
        messagePlayerError(discordUser, "That command does not exist!");
        return false;
    }

    if(isCommandAllowedOnDiscord(command)) {
        messagePlayerError(discordUser, "That command can not be used on Discord!");
        return false;
    }

    if(doesClientHavePermission(discordUser, getCommandRequiredPermissions(command))) {
        messagePlayerError(discordUser, "You do not have permission to use that command!");
        return false;
    }

    commandData.handlerFunction(command, params, discordUser);
});
*/

// ===========================================================================

function messageDiscordUser(discordUser, messageText) {
    let socketData = JSON.stringify({
		type: "chat.message.text",
		payload: {
			author: discordUser.name,
			text: messageText,
		}
	});
	sendDiscordSocketData(socketData);
}

// ===========================================================================

function sendDiscordSocketData(socketData) {
    if(!getDiscordSocket()) {
        return false;
    }

    getDiscordSocket().send(module.hash.encodeBase64(socketData) + "\r\n");
}

// ===========================================================================

function isClientFromDiscord(client) {
    if(client == null) {
        return false;
    }

    if(client instanceof Client) {
        return false;
    } else {
        return true;
    }
}

// ===========================================================================

function getDiscordSocket() {
    return false;
}

// ===========================================================================

function getDiscordUserData(discordUserId) {
    return loadAccountFromDiscordUserId(discordUserId);
}

// ===========================================================================

function messageDiscordChatChannel(message) {
    let gameEmoji = getGameEmojiForDiscord(getServerGame());
}

// ===========================================================================

function messageDiscordAdminChannel(message) {
    let gameEmoji = getGameEmojiForDiscord(getServerGame());
}

// ===========================================================================

function messageDiscordEventChannel(message) {
    let gameEmoji = getGameEmojiForDiscord(getServerGame());
}

// ===========================================================================