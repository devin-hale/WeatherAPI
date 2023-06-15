import conditions from "../logic/conditions";


const bgRender = (forecastData) => {
    //Gets weather condition code from data
    let conditionCode = forecastData.current.condition.code;

    //Finds the corresponding background gradient from the conditions array.
    let condLink = conditions.find(obj => obj.code == conditionCode).bgColor

    //Sets Background
    document.getElementById('body').style.background = condLink

}

export default bgRender