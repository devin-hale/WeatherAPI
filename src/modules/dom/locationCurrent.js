import { currentWeather } from "../logic/dataParse"

const renderCurrent = (forecastData) => {
    let currentData = currentWeather(forecastData);
    console.log(currentData);

    document.getElementById('currentWeather').textContent = '';

    //Location Text
    let currentDiv = document.getElementById('currentWeather');
    
    //Header.  Shows location name, time, and an icon that swaps between metric and freedom units.
    let currentHeader = document.createElement('div');
    currentHeader.classList = 'currentHeader';
    
        //Location Name Display
        let locationName = document.createElement('p');
        locationName.classList = 'locationName';
        locationName.innerHTML = `${currentData.location}, ${currentData.region}`;
        currentHeader.appendChild(locationName);

        //Time Display
        let localTime = document.createElement('p');
        localTime.classList = 'localTime';
        localTime.innerHTML = `${currentData.localtime}`;
        currentHeader.appendChild(localTime);


    currentDiv.appendChild(currentHeader);

    //Temp + Condition + H + L
    let conditionDiv = document.createElement('div');
    conditionDiv.classList = 'conditionDiv';

        let conditionTemp = document.createElement('p');
        conditionTemp.classList = 'conditionTemp';
        conditionTemp.innerHTML = currentData.temp_f
        conditionDiv.appendChild(conditionTemp);

        let conditionCon = document.createElement('p');
        conditionCon.classList = 'conditionCon';
        conditionCon.innerHTML = currentData.condition.text;
        conditionDiv.appendChild(conditionCon);

        let conditionHL = document.createElement('div');
        conditionHL.classList = 'conditionHL';

            let conditionL = document.createElement('p');
            conditionL.classList = 'conditionL';
            conditionL.innerHTML = `L: ${currentData.low_f}`
            conditionHL.appendChild(conditionL);


            let conditionH = document.createElement('p');
            conditionH.classList = 'conditionH';
            conditionH.innerHTML = `H: ${currentData.high_f}`
            conditionHL.appendChild(conditionH)

        conditionDiv.appendChild(conditionHL);

    currentDiv.appendChild(conditionDiv);


}

export default renderCurrent;