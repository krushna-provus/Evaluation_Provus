function displayResults(weatherDetails){
    //JSON object destructuring
    const {weather,main,sys,wind,name : inputCityName} = weatherDetails;
    //Nested object destructuring 
    const {temp,humidity,sea_level,grnd_level} = main;
    const {main : weatherType, description : weatherTypeDesc} = weather[0];
    const {speed,gust} = wind;
    const {country} = sys;

    console.log('=================== WEATHER REPORT ==================');
    console.log(`\nWeather Details of Location : ${inputCityName}, ${country} are as follows. \n`);
    console.log(`Overview : The weather will be ${weatherType} with ${weatherTypeDesc}.\n`);
    console.log(`🌡️  Temperature right now is around ${temp} C, with humidity of ${humidity}%, where Sea Level is ${sea_level} and Ground Level is ${grnd_level}.\n`);
    console.log(`🌬️  Wind Speed is around ${speed} m/s, with a gust of ${gust} m/s.\n`)
    console.log('\n================ END OF REPORT ====================\n');
}
 
export default displayResults;