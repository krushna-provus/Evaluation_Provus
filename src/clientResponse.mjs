import readline from "readline/promises";
import displayResults from "./displayResult.mjs";
import fetchFunction from "../utils/fetchFunction.mjs";
import { exit } from "process";

//using readline to take user's input.
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

//using async await to perform asynchrononus tasks.
async function takeUserInputManually(){
    const cityName =await rl.question("Please Enter your City name : ");
    return cityName.trim().toLowerCase();
}


async function getUserLocationViaIP(){
    try {
        // API CALL 1 to get location via ISP.
        const {city} = await fetchFunction("https://ipinfo.io/json/"); //Destructuring city
        if(city){
            return city;
        }else{
            throw new Error("Something went wrong");
        }
    } catch (error) {
        return error.message;
    }
}

async function userChoice(){
    //using let, as let can be initialized later.
    let userPreference; 
    let cityName; 
    
    while(!userPreference || userPreference <= 0 || userPreference > 3 || !Number(userPreference)){
        userPreference = await rl.question("How would you like to proceed ?\n 1. Enter Location Manually.\n 2. Get Location via IP address (Location will be fetched based on ISP).\n 3. Exit App. \n Enter Your Choice : ");
        if(userPreference == 1){
            cityName =await takeUserInputManually();
        }else if(userPreference == 2){
            cityName =await getUserLocationViaIP();
        }else if(userPreference == 3){
            console.log("=============== APP CLOSED ================");
            exit();
        }else{
            console.log("\nUh ho!, Please Select Valid choice.\n");
        }
    }
    rl.close();
    return cityName || "Pune";//Default value Pune
}


async function getWeatherDetails(cityName){
    try {
        //API CALL 2 to get weather details.
        const result = await fetchFunction(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=d8bbe8e738ce5468f1da5593bb56dd9f`);

        if(result == 400 || result == 404 ){        //using '==' loose equality operator as status code in result variable is in string Eg("400") so loose equality operator will perform type cohersion to check for equality.

            console.log("Invalid City, Please Enter Valid city.");
            
        }else if(Number.parseInt(result) === 401){  //Used parseInt to convert the string result into Integer and then check by strict equality operator '===' which does'nt perform type cohersion 

            console.log("API KEY is invalid.");

        }
        else if (result.cod === 200){
            return result;
        }
    } catch (error) {
        return error.message;
    }

}

async function start(){
    console.log("\n🌤️ ========== WELCOME TO WEATHERR CONSOLE APP ==========🌤️\n");
    try {
        const cityName = await userChoice();
        if(cityName){
            const weatherDetails = await getWeatherDetails(cityName);
            if(weatherDetails?.cod === 200){
                displayResults(weatherDetails);
            }
        }
    } catch (error) {
        console.log("ERROR IN APP");
    }
}



export default start;