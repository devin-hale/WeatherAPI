import searchInitialize from "./modules/dom/searchbar";
import './style.css';
import getCoordinates from "./modules/logic/userLocation";
import render7Day from "./modules/dom/render7Day";
import renderCurrent from "./modules/dom/locationCurrent";
import renderHourly from "./modules/dom/renderHourly";
import forecast from "./modules/logic/weatherAPI";
import bgRender from "./modules/dom/bgRender";

const userCoord = await getCoordinates();
console.log(userCoord);
let foreData = await forecast(userCoord)
bgRender(foreData);
renderCurrent(foreData);
render7Day(foreData);
renderHourly(foreData);

searchInitialize();