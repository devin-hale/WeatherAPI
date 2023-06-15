import { sevenDayWeather } from "../logic/dataParse"

const render7Day = (forecastData) => {
    let sevenDayData = sevenDayWeather(forecastData);
    console.log(sevenDayData);

    const weeklyContainer = document.getElementById('weeklyWeather')

    sevenDayData.forEach( obj => {

        let dayDiv = document.createElement('div');
        dayDiv.classList = 'dayDiv';
        
        let dayDivWD = document.createElement('p');
        dayDivWD.classList = 'dayDivWD'
        dayDivWD.innerHTML = obj.day;
        dayDiv.appendChild(dayDivWD);

        let weekCon = document.createElement('img');
        weekCon.classList = 'weekCon';
        weekCon.src = obj.condition.icon;
        dayDiv.appendChild(weekCon);

        let weekTemp = document.createElement('p');
        weekTemp.classList = 'weekTemp';
        weekTemp.innerHTML = obj.temp_f;
        dayDiv.appendChild(weekTemp);

        weeklyContainer.appendChild(dayDiv);

    })
}

export default render7Day;