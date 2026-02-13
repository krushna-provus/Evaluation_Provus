interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}



export interface OpenWeatherApiResponse {
  source : "openweather";
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}



export interface WeatherApiResponse {
  source : "weatherapi"
  location: Location;
  current: CurrentWeather;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}


export interface CardData {attribute : string, value : number,value2?:number};




export interface OpenWeatherForecastResponse {
  cod: string;         
  message: number;      
  cnt: number;          
  list: ForecastItem[];
  city: City;
}

interface ForecastItem {
  dt: number;                 
  main: OpenWeatherMainForecast;
  weather: OpenWeatherForecastWeather[];
  clouds: OpenWeatherForecastClouds;
  wind: OpenWeatherForecastWind;
  visibility: number;
  pop: number;                
  sys: OpenWeatherForecastSys;
  dt_txt: string;            
}


interface OpenWeatherMainForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}


interface OpenWeatherForecastWeather {
  id: number;
  main: string;         
  description: string;   
  icon: string;          
}


interface OpenWeatherForecastClouds {
  all: number;           
}


interface OpenWeatherForecastWind {
  speed: number;
  deg: number;
  gust?: number;        
}


interface OpenWeatherForecastSys {
  pod: "d" | "n";        
}


interface City {
  id: number;
  name: string;
  coord: OpenWeatherForecastCoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface OpenWeatherForecastCoord {
  lat: number;
  lon: number;
}



export interface WeatherApiForecastResponse {
  location: WeatherApiForecastLocation;
  current: WeatherApiForecastCurrentWeather;
  forecast: WeatherApiForecast;
}

interface WeatherApiForecastLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface WeatherApiForecastCurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface WeatherApiForecast {
  forecastday: WeatherApiForecastDay[];
}

interface WeatherApiForecastDay {
  date: string;
  date_epoch: number;
  day: DayWeather;
  astro: Astro;
  hour: HourWeather[];
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}


interface DayWeather {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeahterApiForecastCondition;
  uv: number;
}

interface HourWeather {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}
interface WeahterApiForecastCondition {
  text: string;
  icon: string;
  code: number;
}


export const Units = {
  Imperial: "imperial",
  Standard: "standard",
  Metric: "metric",
} as const;

export type Units = typeof Units[keyof typeof Units];

export type ApiTypes = "" | "openWeather" | "weatherApi";

export type OptionsForSelect = {
  value : string, title : string
}