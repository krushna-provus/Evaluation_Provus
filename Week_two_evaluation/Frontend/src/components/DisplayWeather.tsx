import type { OpenWeatherApiResponse, WeatherApiResponse, CardData } from "../interfaces/interfaces";
import { dateAndTimeFormatter } from "../utils/dateFormatter";
import InnerDisplayCard from "./InnerDisplayCard";
import { useApi } from "../contexts/GlobalContext";
import changeDataByUnits from "../utils/changeDataByUnits";
import { useEffect } from "react";

type DisplayWeatherProps = 
  | { apiType: "openWeather"; weatherData: OpenWeatherApiResponse }
  | { apiType: "weatherApi"; weatherData: WeatherApiResponse };

function DisplayWeather(props: DisplayWeatherProps) {
  const { apiType, weatherData } = props;
  const { prevSelectedUnit, selectedUnit } = useApi();

  const commonData = apiType === "openWeather" 
    ? extractOpenWeatherData(weatherData as OpenWeatherApiResponse)
    : extractWeatherApiData(weatherData as WeatherApiResponse);

  useEffect(()=>{
    console.log(selectedUnit);
  },[selectedUnit])

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-sky-200 p-8 space-y-6 transition-all duration-300 hover:shadow-2xl">
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-sky-700">
            {commonData.cityName}, {commonData.country}
          </h2>
          <p className="text-sm text-gray-500">
            📍 {commonData.lat}, {commonData.lon}
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-sky-600">
            🌤 {commonData.weatherDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sky-800">
          {commonData.cards.map((item, idx) => {
            const needsConversion = item.attribute.toLowerCase().includes("temp") || 
                                   item.attribute.toLowerCase().includes("feels");

            let item1, item2;

            if (needsConversion) {
              item1 = changeDataByUnits({
                prevUnit: prevSelectedUnit,
                selectedUnit: selectedUnit,
                dataAttribute: item.attribute,
                data: item.value
              });

              item2 = item.value2 ? changeDataByUnits({
                prevUnit: prevSelectedUnit,
                selectedUnit: selectedUnit,
                dataAttribute: item.attribute,
                data: item.value2
              }) : undefined;
            } else {
              const unit = item.attribute === "Humidity" ? "%" : 
                          item.attribute === "Pressure" ? "hPa" : "";
              
              item1 = { value: item.value, unit: unit };
              item2 = item.value2 ? { value: item.value2, unit: unit } : undefined;
            }

            return (
              <InnerDisplayCard 
                key={idx} 
                weatherAttribute={item.attribute} 
                item1={item1}
                item2={item2}
              />
            );
          })}
        </div>

        <div className="bg-cyan-100 rounded-xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Wind</p>
          <p className="text-lg font-semibold text-sky-700">
            {(() => {
              const windConverted = changeDataByUnits({
                prevUnit: prevSelectedUnit,
                selectedUnit: selectedUnit,
                dataAttribute: "wind",
                data: commonData.windSpeed
              });
              return `🌬 ${windConverted.value.toFixed(1)} ${windConverted.unit} | ${commonData.windDegree}°`;
            })()}
          </p>
        </div>

        {commonData.sunrise && commonData.sunset && (
          <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-600">
            <div className="bg-sky-50 rounded-xl p-3 shadow-sm">
              🌅 Sunrise: {commonData.sunrise}
            </div>
            <div className="bg-sky-50 rounded-xl p-3 shadow-sm">
              🌇 Sunset: {commonData.sunset}
            </div>
          </div>
        )}

        <div className="text-center text-sm text-gray-500">
          🕒 {commonData.dateTimeLabel}: {commonData.dateTime}
        </div>
      </div>
    </div>
  );
}

function extractOpenWeatherData(data: OpenWeatherApiResponse) {
  const { coord, dt, main, name, sys, weather, wind } = data;
  const { main: weatherMain, description } = weather[0];
  
  return {
    cityName: name,
    country: sys.country,
    lat: coord.lat,
    lon: coord.lon,
    weatherDescription: `${weatherMain} - ${description}`,
    cards: [
      { attribute: "Temperature", value: main.temp },
      { attribute: "Humidity", value: main.humidity },
      { attribute: "Pressure", value: main.pressure },
      { attribute: "Max / Min", value: main.temp_max, value2: main.temp_min },
    ] as CardData[],
    windSpeed: wind.speed,
    windDegree: wind.deg,
    sunrise: dateAndTimeFormatter(sys.sunrise).split(",")[1],
    sunset: dateAndTimeFormatter(sys.sunset).split(",")[1],
    dateTime: dateAndTimeFormatter(dt),
    dateTimeLabel: "Date",
  };
}

function extractWeatherApiData(data: WeatherApiResponse) {
  const { location, current } = data;
  
  return {
    cityName: location.name,
    country: location.country,
    lat: location.lat,
    lon: location.lon,
    weatherDescription: current.condition.text,
    cards: [
      { attribute: "Temperature", value: current.temp_f },
      { attribute: "Feels Like", value: current.feelslike_f },
      { attribute: "Humidity", value: current.humidity },
      { attribute: "Pressure", value: current.pressure_mb },
    ] as CardData[],
    windSpeed: current.wind_mph,
    windDegree: current.wind_degree,
    sunrise: undefined,
    sunset: undefined,
    dateTime: dateAndTimeFormatter(location.localtime_epoch),
    dateTimeLabel: "Local Date & Time",   
  };
}

export default DisplayWeather;