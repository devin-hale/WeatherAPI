import forecast from "./modules/logic/weatherAPI";
import { currentWeather } from "./modules/logic/dataParse";

const forecastStuff = await forecast('London');

currentWeather(forecastStuff);