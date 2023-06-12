import { sevenDayWeather } from "../logic/dataParse"

const render7Day = (forecastData) => {
    let sevenDayData = sevenDayWeather(forecastData);
    console.log(sevenDayData);
}

export default render7Day;