// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_ShakingText","status":true,"description":"Allows you to add Shaking Text to your Show Text events!","parameters":{"Reset Shaking per Box":"true","Default Shaking Power":"$.randomNum(0.2, 0.5)","Default Shaking Max":"1","Default Wave Power":"0.5","Default Wave Max":"4","Default Slide Power":"0.5","Default Slide Max":"4","Copy Outline":"true"}},
{"name":"SRD_TimerUpgrade","status":true,"description":"Gives developers move control over the visual and mechanical aspects of the game's timer system.","parameters":{"Timer Format":"%2:%3:%4","Timer Position":"TOP","Timer Start SE":"","Timer Expire SE":"","Pause Color":"#FFFF00","Use Background":"true","== Auto Settings ==":"","Use Auto-Stop":"true","Use Auto-Pause":"false","Auto-Pause Opacity":"120","Use Auto-Abort":"true","== Label Settings ==":"","Default Label":"","Label Font Size":"22","== Font Settings ==":"","Timer Font":"GameFont","Timer Font Size":"32","Timer Italic":"false","Timer Text Color":"#cc0605","Timer Outline Color":"rgba(0, 0, 0, 0.5)"}},
{"name":"TerraxLighting","status":true,"description":"v1.5.1 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"0","Add to options":"Yes","Option menu entry":"Lighting effects","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"866","Screensize Y":"630","Kill Switch":"No"}},
{"name":"No Autoshadow","status":true,"description":"Removes automatic shadows from displaying in game.","parameters":{}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"ShowConsoleOnBoot","status":false,"description":"Shows the developer console on boot.","parameters":{"Console Width":"800","Console Height":"300","Console X-Position":"0","Console Y-Position":"0","Game Window X-Offset":"150","Game Window Y-Offset":"0","Autofocus":"true"}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.00 Make it so that whenever players step on certain\r\nRegion ID's, the game will play certain common events.","parameters":{"Region 1":"2","Region 2":"3","Region 3":"4","Region 4":"5","Region 5":"6","Region 6":"0","Region 7":"0","Region 8":"12","Region 9":"13","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"TDDP_ManageDashing","status":false,"description":"1.0.0 Lets you manage the dashing mode in your game with simple plugin options.","parameters":{"Disable Auto-dash":"true","Disable Dashing":"true","Remove Dash Option":"true"}}
];
