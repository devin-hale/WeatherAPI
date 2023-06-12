import forecast from "./modules/logic/weatherAPI";
import { currentWeather, hourlyWeather, sevenDayWeather } from "./modules/logic/dataParse";
import search from "./modules/logic/search";
import searchInitialize from "./modules/dom/searchbar";
import './style.css';

searchInitialize();