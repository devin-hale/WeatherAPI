import forecast from "./modules/logic/weatherAPI";
import { currentWeather, hourlyWeather } from "./modules/logic/dataParse";

const forecastStuff = await forecast('London');

currentWeather(forecastStuff);
hourlyWeather(forecastStuff);