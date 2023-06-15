import conditions from "../logic/conditions";


const bgRender = (forecastData) => {
    let conditionCode = forecastData.current.condition.code;
    let condLink = conditions.find(obj => obj.code == conditionCode).bgColor
    document.getElementById('body').style.background = condLink
    console.log(conditionCode)
    console.log(condLink)
}

export default bgRender