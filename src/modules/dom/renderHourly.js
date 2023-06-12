import { hourlyWeather } from "../logic/dataParse";

const currentHour = (string) => {
    let substring = string.substring(string.length - 5).replace(':', '')
    return Math.round(substring/100)
}

const renderHourly = (forecastData) => {
    //Reset hourlyweather div.
    document.getElementById('hourlyWeather').textContent = '';

    let hourlyData = hourlyWeather(forecastData);
    console.log(hourlyData);

    let hourlyDiv = document.getElementById('hourlyWeather');

    //Iterate through hourly forecast, and create div for each.
    for (let i = 0; i < hourlyData.length; i++) {
        let hourDiv = document.createElement('div');
        hourDiv.classList = 'hourDiv';
        hourDiv.id = `viewID#${i}`;

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

        let hourCondition = document.createElement('img')
        hourCondition.src = `${hourlyData[i].condition.icon}`
        hourDiv.appendChild(hourCondition);

        let hourTemp = document.createElement('p');
        hourTemp.innerHTML = hourlyData[i].temp_f;
        hourDiv.appendChild(hourTemp);

        hourlyDiv.appendChild(hourDiv);
    }

    //Scroll Current Hour into View Automatically
    document.getElementById(`viewID#${currentHour(forecastData.location.localtime)}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    



}

export default renderHourly;