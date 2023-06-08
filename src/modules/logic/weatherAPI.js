const forecast = async(location) => {
    //Declare data to be returned
    let realTimeData;
    //Logging
    console.log(`%cRequesting forecast data for ${location}...`, "color:yellow")

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0e45ac1c51a149518c7205713230706&q=${location}&aqi=no`,{mode: 'cors'});
        realTimeData = await response.json();
        console.log(`%cForecast data retrieved for ${location}:`, "color:lime")
        console.log(realTimeData);
    } catch (error) {
        console.log(error)
    }

    return realTimeData
};

export default forecast