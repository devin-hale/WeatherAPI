import bgRender from "./bgRender";
import render7Day from "./render7Day";
import renderCurrent from "./locationCurrent";
import renderHourly from "./renderHourly";
import getCoordinates from "../logic/userLocation";
import searchInitialize from "./searchbar";
import forecast from "../logic/weatherAPI";

const pageInitialize = async () => {
    //Ask for User Location
    const userCoords = await getCoordinates();

    //If user accepts location request.
    if (userCoords !== null) {
        //Pass coordinates
        const foreData = await forecast(userCoords)

        //Call all renderers for that info.
        bgRender(foreData);
        renderCurrent(foreData);
        render7Day(foreData);
        renderHourly(foreData);
        searchInitialize();
        return
    }

    //If user denies

    //Set default BG to sunny
    document.getElementById('body').style.background = 'linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(0,195,214,1) 100%)';

    //
    let defaultText = document.createElement('p');
    defaultText.classList = 'defaultText conditionTemp'
    defaultText.innerHTML = 'Search for a location'
    document.getElementById('currentWeather').appendChild(defaultText);

    searchInitialize();
}

export default pageInitialize;
