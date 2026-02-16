import type { CardData, OpenWeatherApiResponse, WeatherApiResponse } from "../interfaces/interfaces";
import { dateAndTimeFormatter } from "./dateFormatter";

export const extractOpenWeatherData =  function (data: OpenWeatherApiResponse) {
  const { coord, dt, main, name, sys, weather, wind } = data;
  const { main: weatherMain, description } = weather[0];
  
  return {
    cityName: name,
    country: sys.country,
    lat: coord.lat,
    lon: coord.lon,
    weatherDescription: `${weatherMain} - ${description}`,
    cards: [
      { attribute: "Temperature", value: main.temp, unit : "F" },
      { attribute: "Humidity", value: main.humidity, unit : "%" },
      { attribute: "Pressure", value: main.pressure, unit : "mb" },
      { attribute: "Max / Min", value: main.temp_max, value2: main.temp_min, unit: "F" },
    ] as CardData[],
    windSpeed: wind.speed,
    windDegree: wind.deg,
    sunrise: dateAndTimeFormatter(sys.sunrise).split(",")[1],
    sunset: dateAndTimeFormatter(sys.sunset).split(",")[1],
    dateTime: dateAndTimeFormatter(dt),
    dateTimeLabel: "Date",
  };
}


export const extractWeatherApiData = function(data: WeatherApiResponse) {
  const { location, current } = data;
  
  return {
    cityName: location.name,
    country: location.country,
    lat: location.lat,
    lon: location.lon,
    weatherDescription: current.condition.text,
    cards: [
      { attribute: "Temperature", value: current.temp_f,unit : "F" },
      { attribute: "Feels Like", value: current.feelslike_f, unit : "F" },
      { attribute: "Humidity", value: current.humidity, unit : "%" },
      { attribute: "Pressure", value: current.pressure_mb, unit : "mb" },
    ] as CardData[],
    windSpeed: current.wind_mph,
    windDegree: current.wind_degree,
    sunrise: undefined,
    sunset: undefined,
    dateTime: dateAndTimeFormatter(location.localtime_epoch),
    dateTimeLabel: "Local Date & Time",   
  };
}
