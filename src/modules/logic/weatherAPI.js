import { hideLoading, displayLoading } from "../dom/loader";

const forecast = async(location) => {
    //Declare data to be returned
    let forecastData;
    //Logging
    console.log(`%cRequesting forecast data for ${location}...`, "color:yellow")

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0e45ac1c51a149518c7205713230706&q=${location}&aqi=no&days=7`,{mode: 'cors'});
        displayLoading();
        forecastData = await response.json();
        console.log(`%cForecast data retrieved for ${location}:`, "color:lime")
        console.log(forecastData);
    } catch (error) {
        console.log(error)
    }

    hideLoading();
    return forecastData
};

export default forecast