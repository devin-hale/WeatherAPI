import { hourlyWeather } from "../logic/dataParse";

//Takes current time and returns an integer that is the nearest hour (0-23).  Corresponds to hourly index.
const currentHour = (string) => {
    let substring = string.substring(string.length - 5).replace(':', '')
    return Math.round(substring/100)
}

const renderHourly = (forecastData) => {
    //Reset hourlyweather div.
    document.getElementById('hourlyWeather').textContent = '';

    //Get Hourly Forecast Data
    let hourlyData = hourlyWeather(forecastData);

    //Define Div
    let hourlyDiv = document.getElementById('hourlyWeather');

    //Iterate through hourly forecast, and create div for each.
    for (let i = 0; i < hourlyData.length; i++) {
        let hourDiv = document.createElement('div');
        hourDiv.classList = 'hourDiv';
        hourDiv.id = `viewID#${i}`;

        //Takes Hour index (0-23) and figures out how to display it.
        let timeOfDay = document.createElement('p');
        timeOfDay.classList = 'timeOfDay';
        if (i == 0) {
            timeOfDay.innerHTML = '12 AM'
        }
        if (i > 0 && i <= 11) {
            timeOfDay.innerHTML = `${i} AM`;
        }
        if (i == 12) {
            timeOfDay.innerHTML = `${i} PM`;
        } 
        if (i > 12) {
            timeOfDay.innerHTML = `${i-12} PM`
        }
        hourDiv.appendChild(timeOfDay);

        //Condition Icon
        let hourCondition = document.createElement('img')
        hourCondition.src = `${hourlyData[i].condition.icon}`
        hourDiv.appendChild(hourCondition);

        //Temp
        let hourTemp = document.createElement('p');
        hourTemp.innerHTML = hourlyData[i].temp_f;
        hourDiv.appendChild(hourTemp);

        hourlyDiv.appendChild(hourDiv);
    }

    //Scroll Current Hour into View Automatically
    document.getElementById(`viewID#${currentHour(forecastData.location.localtime)}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

export default renderHourly;