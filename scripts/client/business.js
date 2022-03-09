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
    if(getGame() == VRR_GAME_GTA_IV) {
        if(getBusinessData(businessId) != false) {
            if(blipModel == -1) {
                natives.removeBlipAndClearIndex(getBusinessData(businessId).blipId);
                getBusinessData(businessId).blipId = -1;
                //businesses.splice(getBusinessData(businessId).index, 1);
                //setAllBusinessDataIndexes();
            } else {
                if(getBusinessData(businessId).blipId != -1) {
                    natives.setBlipCoordinates(getBusinessData(businessId).blipId, getBusinessData(businessId).entrancePosition);
                    natives.changeBlipSprite(getBusinessData(businessId).blipId, getBusinessData(businessId).blipModel);
                    natives.changeBlipNameFromAscii(getBusinessData(businessId).blipId, `${name.substr(0, 24)}${(name.length > 24) ? " ...": ""}`);
                } else {
                    let blipId = natives.addBlipForCoord(entrancePosition);
                    if(blipId) {
                        getBusinessData(businessId).blipId = blipId;
                        natives.changeBlipSprite(blipId, blipModel);
                        natives.setBlipMarkerLongDistance(blipId, false);      
                    }
                }
            }
        } else {
            if(blipModel != -1) {
                let tempBusinessData = new BusinessData(businessId, name, entrancePosition, blipModel, pickupModel, hasInterior, hasItems);
                let blipId = natives.addBlipForCoord(entrancePosition);
                if(blipId) {
                    tempBusinessData.blipId = blipId;
                    natives.changeBlipSprite(blipId, blipModel);
                    natives.setBlipMarkerLongDistance(blipId, false);
                    natives.changeBlipNameFromAscii(blipId, `${name.substr(0, 24)}${(name.length > 24) ? " ...": ""}`);
                }
                businesses.push(tempBusinessData);
                setAllBusinessDataIndexes();
            }
        }
    }
}

// ===========================================================================

/**
 * @param {number} businessId - The ID of the business (initially provided by server)
 * @return {BusinessData} The business's data (class instance)
 */
function getBusinessData(businessId) {
    let tempBusinessData = businesses.find((b) => b.businessId == businessId);
    return (typeof tempBusinessData != "undefined") ? tempBusinessData : false;
}

// ===========================================================================

function setAllBusinessDataIndexes() {
    for(let i in businesses) {
        businesses[i].index = i;
    }
}

// ===========================================================================