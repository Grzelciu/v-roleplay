// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: accent.js
// DESC: Provides accent functions and usage
// TYPE: Server (JavaScript)
// ===========================================================================

function getPlayerAccentText(client) {
    return getPlayerCurrentSubAccount(client).accent;
}

// ===========================================================================

function setPlayerAccentText(client, text) {
    getPlayerCurrentSubAccount(client).accent = text;
}

// ===========================================================================

function doesPlayerHaveAccent(client) {
    return (getPlayerCurrentSubAccount(client).accent != "");
}

// ===========================================================================

function getPlayerAccentInlineOutput(client) {
    let outputText = "";
    if(doesPlayerHaveAccent(client)) {
        outputText = `[${getPlayerAccentText(client)}] `;
    }

    return outputText;
}

// ===========================================================================

function setAccentCommand(command, params, client) {
	if(areParamsEmpty(params)) {
		messagePlayerSyntax(client, getCommandSyntaxText(command));
		return false;
	}

	let accentId = getAccentFromParams(params);

	if(!accentId) {
		messagePlayerError(client, "Accent not found!");
		return false;
	}

	let accentString = getGlobalConfig().accents[accentId];

	getPlayerCurrentSubAccount(client).accent = accentString;
	messagePlayerSuccess(client, `You set your accent to ${getInlineChatColourByName("lightGrey")}${accentString}`);
}

// ===========================================================================

function listAccentsCommand(command, params, client) {
	let stationList = getGlobalConfig().accents;

	let chunkedList = splitArrayIntoChunks(stationList, 8);

	messagePlayerInfo(client, `${getInlineChatColourByType("clanOrange")}== ${getInlineChatColourByType("jobYellow")}Accents ${getInlineChatColourByType("clanOrange")}==================================`);

	for(let i in chunkedList) {
		messagePlayerInfo(client, chunkedList[i].join(", "));
	}
}

// ===========================================================================