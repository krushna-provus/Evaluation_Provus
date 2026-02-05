/**
 * APP FLOW
 *                                       __-> takeUserInputManually() __
 *                                      |                               |
 * app.mjs -> start() -> userChoice() --                             cityName -> getWeatherDetails(ctyName) -> displayResults(weatherDetails) -> END
 *                                      |__-> getLocationViaIP() _______|
 *                                      
 */


import start from "./src/clientResponse.mjs";
start();
