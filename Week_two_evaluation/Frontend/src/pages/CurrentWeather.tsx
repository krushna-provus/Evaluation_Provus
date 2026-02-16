import { useState,useEffect } from "react";
import { OPEN_WEATHER_API,WEATHERAPI_COM_API } from "../utils/constants";
import type { OpenWeatherApiResponse, WeatherApiResponse } from "../interfaces/interfaces";
import ApiError from "../classes/ApiError";
import fetchApi from "../utils/fetchApi";
import { useApi } from "../contexts/GlobalContext";
import Loader from "../components/Loader";
import DisplayWeather from "../components/DisplayWeather";
import getCurrentLocationViaGeoLocation from "../utils/geolocation";

const open_weather_api_key = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const weatherapi_api_key = import.meta.env.VITE_WEATHERAPI_API_KEY;

function CurrentWeather(){

    const [loadingState,setLoadingState] = useState<boolean>(false);
    const [errorMessage,setErrorMessage] = useState<string>("");
    const [openWeatherData,setOpenWeatherData] = useState<OpenWeatherApiResponse|null>(null);
    const [weatherApiData,setWeatherApiData] = useState<WeatherApiResponse|null>(null);
    const [enteredLocation,setEnteredLocation] = useState<string | string[]>("");
    const {selectedApi} = useApi();

    useEffect(() => {
      setOpenWeatherData(null);
      setWeatherApiData(null);
      setErrorMessage("");
    }, [selectedApi]);

    const fetchWeatherData :(loc : string)=> Promise<void> = async (typeLocation : string)=>{
        setLoadingState(true);
        try {
            if(selectedApi === "openWeather"){
                const apiUrl = `${OPEN_WEATHER_API}weather?${typeLocation}&units=imperial&APPID=${open_weather_api_key}`
                const data = await fetchApi<OpenWeatherApiResponse>(apiUrl);
                setOpenWeatherData(data);
            }else if (selectedApi === "weatherApi"){
                const apiUrl = `${WEATHERAPI_COM_API}current.json${weatherapi_api_key}${typeLocation}`;
                const data = await fetchApi<WeatherApiResponse>(apiUrl);
                setWeatherApiData(data);
            }
            setErrorMessage("");
            
        } catch (error) {
            if(error instanceof ApiError){
            const errMessage : string = error.message;
            setOpenWeatherData(null);
            setErrorMessage(errMessage);
            }
        } finally{
            setLoadingState(false);
        }
    }


    useEffect(()=>{
        const load = async ()=>{
        setLoadingState(true);
        try {
            const locationQuery = await getCurrentLocationViaGeoLocation(selectedApi);
            await fetchWeatherData(locationQuery);
        } catch (error) {
                if (error instanceof Error) {
                    setOpenWeatherData(null);
                    setErrorMessage(error.message);
                }
        } finally {
            setLoadingState(false);
        }
        };
        load();
    },[selectedApi])




return (
  <div className="px-4 pb-10">
    <div className="flex justify-center mb-8">
      <div className="flex gap-4 bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-sky-200 w-full max-w-xl">

        <input
          placeholder="Enter location to search"
          onChange={(e) => {
            setEnteredLocation(e.target.value);
          }}
          value={enteredLocation}
          className="
            flex-1
            px-4 py-3
            rounded-xl
            border border-sky-200
            focus:outline-none
            focus:ring-2 focus:ring-sky-400
            text-sky-800
            placeholder-gray-400
            bg-white
          "
        />

        <button
          type="submit"
          disabled={!enteredLocation || typeof enteredLocation !=="string"}
          onClick={() => {
            fetchWeatherData("q=" + enteredLocation);
            setEnteredLocation("");
          }}
          className="
            px-6 py-3
            rounded-xl
            bg-gradient-to-r from-sky-500 to-cyan-400
            text-white
            font-semibold
            shadow-md
            transition-all duration-300
            hover:shadow-lg
            hover:scale-105
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          🔍 Search
        </button>

      </div>
    </div>

    {errorMessage && (
      <div className="flex justify-center mb-6">
        <p className="bg-red-100 text-red-600 px-6 py-3 rounded-xl shadow-md">
          {errorMessage}
        </p>
      </div>
    )}

    {loadingState && 
      <Loader/>}

    {!loadingState && !errorMessage && selectedApi === "openWeather" && openWeatherData && (
      <DisplayWeather apiType="openWeather" weatherData={openWeatherData} />
    )}

    {!loadingState && !errorMessage && selectedApi === "weatherApi" && weatherApiData && (
      <DisplayWeather apiType="weatherApi" weatherData={weatherApiData} />
    )}
  </div>
);

}

export default CurrentWeather;

