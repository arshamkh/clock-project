setInterval(setclock, 1000);

const hourhand = document.querySelector('[data-hour-hand]')
const minhand = document.querySelector('[data-min-hand]')
const sechand = document.querySelector('[data-sec-hand]')

function setclock(){
    const curretdata = new Date()
    const secratio = curretdata.getSeconds() /  60
    const minratio = (secratio + curretdata.getMinutes()) / 60
    const hourratio = (minratio + curretdata.getHours()) / 12
    setrotation(hourhand , hourratio);
    setrotation(sechand , secratio);
    setrotation(minhand , minratio);

}

function setrotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio *360)

}

setclock()