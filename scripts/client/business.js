// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: business.js
// DESC: Provides business functions and usage
// TYPE: Client (JavaScript)
// ===========================================================================

class BusinessData {
    constructor(businessId, name, entrancePosition, blipModel, pickupModel, hasInterior, hasItems) {
        this.index = -1;
        this.businessId = businessId;
        this.name = name;
        this.entrancePosition = entrancePosition;
        this.blipModel = blipModel;
        this.pickupModel = pickupModel;
        this.hasInterior = hasInterior;
        this.hasItems = hasItems;
        this.blipId = -1;
    }
}

// ===========================================================================

function receiveBusinessFromServer(businessId, name, entrancePosition, blipModel, pickupModel, hasInterior, hasItems) {
    logToConsole(LOG_DEBUG, `[VRR.Business] Received business ${businessId} (${name}) from server`);
    
    if(getGame() == VRR_GAME_GTA_IV) {
        if(getBusinessData(businessId) != false) {
            let businessData = getBusinessData(businessId);
            businessData.name = name;
            businessData.entrancePosition = entrancePosition;
            businessData.blipModel = blipModel;
            businessData.pickupModel = pickupModel;
            businessData.hasInterior = hasInterior;
            businessData.hasItems = hasItems;    

            logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId} already exists. Checking blip ...`);
            if(blipModel == -1) {
                if(businessData.blipId != -1) {
                    logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId}'s blip has been removed by the server`);
                    natives.removeBlipAndClearIndex(getBusinessData(businessId).blipId);
                    businessData.blipId = -1;
                    //businesses.splice(businessData.index, 1);
                    //setAllBusinessDataIndexes();
                } else {
                    logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId}'s blip is unchanged`);
                }
            } else {
                if(businessData.blipId != -1) {
                    logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId}'s blip has been changed by the server`);
                    natives.setBlipCoordinates(businessData.blipId, businessData.entrancePosition);
                    natives.changeBlipSprite(businessData.blipId, businessData.blipModel);
                    natives.setBlipMarkerLongDistance(businessData.blipId, true);
                    natives.changeBlipNameFromAscii(businessData.blipId, `${businessData.name.substr(0, 24)}${(businessData.name.length > 24) ? " ...": ""}`);
                } else {
                    let blipId = natives.addBlipForCoord(entrancePosition);
                    if(blipId) {
                        businessData.blipId = blipId;
                        natives.changeBlipSprite(businessData.blipId, businessData.blipModel);
                        natives.setBlipMarkerLongDistance(businessData.blipId, true);      
                        natives.changeBlipNameFromAscii(businessData.blipId, `${businessData.name.substr(0, 24)}${(businessData.name.length > 24) ? " ...": ""}`);
                    }
                    logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId}'s blip has been added by the server (Model ${blipModel}, ID ${blipId})`);
                }
            }
        } else {
            logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId} doesn't exist. Adding ...`);
            let tempBusinessData = new BusinessData(businessId, name, entrancePosition, blipModel, pickupModel, hasInterior, hasItems);
            if(blipModel != -1) {
                let blipId = natives.addBlipForCoord(entrancePosition);
                if(blipId) {
                    tempBusinessData.blipId = blipId;
                    natives.changeBlipSprite(tempBusinessData.blipId, blipModel);
                    natives.setBlipMarkerLongDistance(tempBusinessData.blipId, true);
                    natives.changeBlipNameFromAscii(tempBusinessData.blipId, `${name.substr(0, 24)}${(name.length > 24) ? " ...": ""}`);
                }
                logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId}'s blip has been added by the server (Model ${blipModel}, ID ${blipId})`);
            } else {
                logToConsole(LOG_DEBUG, `[VRR.Business] Business ${businessId} has no blip.`);
            }
            businesses.push(tempBusinessData);
            setAllBusinessDataIndexes();
        }
    }
}

// ===========================================================================

/**
 * @param {number} businessId - The ID of the business (initially provided by server)
 * @return {BusinessData} The business's data (class instance)
 */
function getBusinessData(businessId) {
    //let tempBusinessData = businesses.find((b) => b.businessId == businessId);
    //return (typeof tempBusinessData != "undefined") ? tempBusinessData[0] : false;
    for(let i in businesses) {
        if(businesses[i].businessId == businessId) {
            return businesses[i];
        }
    }

    return false;
}

// ===========================================================================

function setAllBusinessDataIndexes() {
    for(let i in businesses) {
        businesses[i].index = i;
    }
}

// ===========================================================================