

// Parses forecastData time to AM/PM.
const timeConvert = (string) => {
    let substring = string.substring(string.length - 5).replace(':', '')
    let returnString;
    if (Number(substring) >= 1300 && Number(substring) < 2200) {
        substring -= 1200
        returnString = substring.toString().slice(0,1) + ':' + substring.toString().slice(1,3) + ' PM'
        return returnString
    }
    if (Number(substring) >= 2200 ) {
        substring -= 1200
        returnString = substring.toString().slice(0,2) + ':' + substring.toString().slice(1,3) + ' PM'
        return returnString
    }
    else if (Number(substring) < 1200 && Number(substring) >= 100) {
        returnString = substring.toString().slice(0,2) + ':' + substring.toString().slice(2,4) + ' AM'
        return returnString
    }
    else if (Number(substring) < 100) {
        returnString = '12:' + substring.toString().slice(2,4) + ' AM'
        return returnString
    }
    returnString = substring.toString().slice(0,2) + ':' + substring.toString().slice(2,4) + ' PM'
        return returnString
}

//Converts Date to Day of the Week
const dayConvert = (date) => {
    const [year, month, day] = date.split('-');
    const newDate = new Date(year, month - 1, day); // Month value should be zero-based
    const dayIndex = newDate.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return dayNames[dayIndex];
}



//Takes forecastData from weatherAPI, and parses out the needed current weather info into an object.
const currentWeather = (forecastData) => {
    const current = forecastData.current
    const currentData = {
        location: forecastData.location.name,
        region: forecastData.location.region,
        localtime: timeConvert(forecastData.location.localtime),
        condition: current.condition,
        is_day: current.is_day,
        temp_c: `${current.temp_c}°`,
        temp_f: `${current.temp_f}°`,
        high_c: `${forecastData.forecast.forecastday[0].day.maxtemp_c}°`,
        high_f: `${forecastData.forecast.forecastday[0].day.maxtemp_f}°`,
        low_c: `${forecastData.forecast.forecastday[0].day.mintemp_c}°`,
        low_f: `${forecastData.forecast.forecastday[0].day.mintemp_f}°`,
        wind_mph: current.wind_mph,
        wind_kph: current.wind_kph,
        precip_in: current.precip_in,
        precip_mm: current.precip_mm,
    }
    return currentData;
}

//Takes forecastData from weatherAPI, and parses out the needed hourly weather info into an object.
const hourlyWeather = (forecastData) => {
    const hourlyWeather = [];
    forecastData.forecast.forecastday[0].hour.forEach(obj => {
        hourlyWeather.push({
            condition: obj.condition,
            is_day: obj.is_day,
            temp_c: `${obj.temp_c}°`,
            temp_f: `${obj.temp_f}°`
        })
    })
    return hourlyWeather;
}

//Takes forecastData from weatherAPI, and parses out the needed 7 day forecast info into an object.
const sevenDayWeather = (forecastData) => {
    const sevenDayWeather = [];
    forecastData.forecast.forecastday.forEach(obj => {
        sevenDayWeather.push({
            day: dayConvert(obj.date),
            condition: obj.day.condition,
            temp_c: `${obj.day.avgtemp_c}°`,
            temp_f: `${obj.day.avgtemp_f}°`
        })
    })
    return sevenDayWeather;
}



export {currentWeather, hourlyWeather, sevenDayWeather}