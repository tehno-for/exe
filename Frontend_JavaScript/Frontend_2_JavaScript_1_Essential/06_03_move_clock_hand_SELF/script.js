const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){
var date = new Date();



let secPosition = date.getSeconds()*360/60;
let minPosition = (date.getMinutes()*360/60)+(date.getSeconds()*(360/60)/60);
let hrPosition = (date.getHours()*360/12)+(date.getMinutes()*(360/60)/12);






HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition +"deg)";
SECONDHAND.style.transform = "rotate(" + secPosition +"deg)";
}

var interval = setInterval(runTheClock, 1000)
