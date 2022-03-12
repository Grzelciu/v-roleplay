// ===========================================================================
// Vortrex's Roleplay Resource
// https://github.com/VortrexFTW/gtac_roleplay
// ===========================================================================
// FILE: const.js
// DESC: Provides constants
// TYPE: Shared (JavaScript)
// ===========================================================================

// Label Types
const VRR_LABEL_JOB = 1;
const VRR_LABEL_BUSINESS = 2;
const VRR_LABEL_HOUSE = 3;
const VRR_LABEL_EXIT = 4;

// Log Levels
const LOG_ALL = -1;
const LOG_NONE = 0;
const LOG_INFO = 1;
const LOG_WARN = 2;
const LOG_ERROR = 4;
const LOG_VERBOSE = 8;
const LOG_DEBUG = 16;

// Weapon Damage Event Types
const VRR_WEAPON_DAMAGE_EVENT_NONE = 0;
const VRR_WEAPON_DAMAGE_EVENT_NORMAL = 1;
const VRR_WEAPON_DAMAGE_EVENT_TAZER = 2;
const VRR_WEAPON_DAMAGE_EVENT_EXTINGUISH = 3;
const VRR_WEAPON_DAMAGE_EVENT_MACE = 4;

// Games
const VRR_GAME_GTA_III = 1;
const VRR_GAME_GTA_VC = 2;
const VRR_GAME_GTA_SA = 3;
const VRR_GAME_GTA_IV = 5;
const VRR_GAME_GTA_V = 50;
const VRR_GAME_MAFIA_ONE = 10;
const VRR_GAME_MAFIA_TWO = 11;
const VRR_GAME_MAFIA_THREE = 12;
const VRR_GAME_MAFIA_ONE_DE = 13;

// Key States
const VRR_KEYSTATE_NONE = 0;
const VRR_KEYSTATE_UP = 1;
const VRR_KEYSTATE_DOWN = 2;
const VRR_KEYSTATE_HOLDSHORT = 3;
const VRR_KEYSTATE_HOLDLONG = 4;
const VRR_KEYSTATE_COMBO = 4;

// Business Label Info Types
const VRR_PROPLABEL_INFO_NONE = 0;
const VRR_PROPLABEL_INFO_BUY = 1;
const VRR_PROPLABEL_INFO_ENTER = 2;
const VRR_PROPLABEL_INFO_ENTERVEHICLE = 3;
const VRR_PROPLABEL_INFO_REFUEL = 4;
const VRR_PROPLABEL_INFO_REPAIR = 5;
const VRR_PROPLABEL_INFO_BUYHOUSE = 6;
const VRR_PROPLABEL_INFO_RENTHOUSE = 7;
const VRR_PROPLABEL_INFO_BUYBIZ = 8;

// Animation Types
const VRR_ANIMTYPE_NONE = 0;
const VRR_ANIMTYPE_NORMAL = 1;
const VRR_ANIMTYPE_BLEND = 2;
const VRR_ANIMTYPE_SHARED = 3;                  // Forces this animation to play in sync with another ped's mirrored anim (handshake, kiss, gang signs, etc)
const VRR_ANIMTYPE_SPECIALACTION = 4;           // This animtype uses a special action (only in SA)
const VRR_ANIMTYPE_SURRENDER = 5;               // This animtype is used to surrender (like handsup or cower)
const VRR_ANIMTYPE_FORCED = 6;                  // This animtype is forced (can't use stopanim to get out of it)
const VRR_ANIMTYPE_FREEZE = 7;                  // This animtype is forced (can't use stopanim to get out of it)

// Animation Move Types
const VRR_ANIMMOVE_NONE = 0;
const VRR_ANIMMOVE_FORWARD = 1;
const VRR_ANIMMOVE_BACK = 2;
const VRR_ANIMMOVE_LEFT = 3;
const VRR_ANIMMOVE_RIGHT = 4;

// Multiplayer Modifications
const VRR_MPMOD_NONE = 0;
const VRR_MPMOD_GTAC = 1;
const VRR_MPMOD_MAFIAC = 2;

// Business/House Game Script States
//const VRR_GAMESCRIPT_NONE = 0;
//const VRR_GAMESCRIPT_DENY = 1;
//const VRR_GAMESCRIPT_ALLOW = 2;
//const VRR_GAMESCRIPT_FORCE = 3;

// Vehicle Purchase States
const VRR_VEHBUYSTATE_NONE = 0;
const VRR_VEHBUYSTATE_TESTDRIVE = 1;
const VRR_VEHBUYSTATE_EXITVEH = 2;
const VRR_VEHBUYSTATE_FARENOUGH = 3;
const VRR_VEHBUYSTATE_WRONGVEH = 4;

// Islands
const VRR_ISLAND_NONE = 0;                       // None
const VRR_ISLAND_PORTLAND = 0;                   // Portland Island
const VRR_ISLAND_STAUNTON = 1;                   // Staunton Island
const VRR_ISLAND_SHORESIDEVALE = 2;              // Shoreside Vale
const VRR_ISLAND_VICEWEST = 0;                   // Western Island of VC
const VRR_ISLAND_VICEEAST = 1;                   // Eastern Island of VC
const VRR_ISLAND_LOSSANTOS = 0;                  // Los Santos
const VRR_ISLAND_LASVENTURAS = 1;                // Las Venturas
const VRR_ISLAND_SANFIERRO = 2;                  // San Fierro
const VRR_ISLAND_REDCOUNTYNORTH = 4;             // Red County North (spans all the way from Palamino/shore on the east east to border of Flint County on the west)
const VRR_ISLAND_BONECOUNTYNORTH = 5;            // Bone County North (usually called Tierra Robada)
const VRR_ISLAND_BONECOUNTYSOUTH = 6;            // Bone County South