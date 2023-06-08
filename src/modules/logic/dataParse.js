import forecast from "./weatherAPI";

// Parses forecastData time to AM/PM
const timeConvert = (string) => {
    let substring = string.substring(string.length - 5).replace(':', '')
    let returnString;
    if (Number(substring) >= 1200 && Number(substring) < 2200) {
        substring -= 1200
        returnString = substring.toString().slice(0,1) + ':' + substring.toString().slice(1,3) + ' PM'
        return returnString
    }
    if (Number(substring) >= 2200 ) {
        substring -= 1200
        returnString = substring.toString().slice(0,2) + ':' + substring.toString().slice(1,3) + ' PM'
        return returnString
    }
    else if (Number(substring) < 1200) {
        returnString = substring.toString().slice(0,1) + ':' + substring.toString().slice(1,3) + ' AM'
        return returnString
    }
}



//Takes forecastData from weatherAPI, and parses out the needed current weather info into an object.

const currentWeather = (forecastData) => {
    const current = forecastData.current
    const currentData = {
        localtime: timeConvert(forecastData.location.localtime),
        condition: current.condition,
        is_day: current.is_day,
        temp_c: current.temp_c,
        temp_f: current.temp_f,
        wind_mph: current.wind_mph,
        wind_kph: current.wind_kph,
        precip_in: current.precip_in,
        precip_mm: current.precip_mm,
    }
    console.log(currentData);
}

export {currentWeather}