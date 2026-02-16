import type { OpenWeatherApiResponse, WeatherApiResponse } from "../interfaces/interfaces";
import {extractOpenWeatherData,extractWeatherApiData} from "./../utils/extractData";
import InnerDisplayCard from "./InnerDisplayCard";
import { useApi } from "../hooks/useApi";
import { useEffect } from "react";
import formatWindSpeed from "../utils/formatWindSpeed";

type DisplayWeatherProps = 
  | { apiType: "openWeather"; weatherData: OpenWeatherApiResponse }
  | { apiType: "weatherApi"; weatherData: WeatherApiResponse };

function DisplayWeather(props: DisplayWeatherProps) {
  const { apiType, weatherData } = props;
  const { selectedUnit } = useApi();

  const commonData = apiType === "openWeather" 
    ? extractOpenWeatherData(weatherData as OpenWeatherApiResponse)
    : extractWeatherApiData(weatherData as WeatherApiResponse);

  useEffect(()=>{

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
          {commonData.cards.map((item) => {
            
            return (
            <InnerDisplayCard 
              key={item.attribute} 
              weatherAttribute={item.attribute} 
              item1={{ value: item.value, unit: item.unit }}
              {...(item.value2 !== undefined && {
                item2: { value: item.value2, unit: item.unit }
              })}
            />
            );
          })}
        </div>

        <div className="bg-cyan-100 rounded-xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Wind</p>
          <p className="text-lg font-semibold text-sky-700">
            {formatWindSpeed(commonData.windSpeed, selectedUnit)} {commonData.windDegree}°
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


export default DisplayWeather;