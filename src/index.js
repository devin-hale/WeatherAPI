import forecast from "./modules/logic/weatherAPI";
import { currentWeather, hourlyWeather, sevenDayWeather } from "./modules/logic/dataParse";

const forecastStuff = await forecast('35235');

currentWeather(forecastStuff);
hourlyWeather(forecastStuff);
sevenDayWeather(forecastStuff);