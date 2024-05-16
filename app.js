// Watch start 
// veriables slect 
let timezero = document.getElementById("zero")
let time = document.getElementById("time")
let ampm = document.getElementById("ampm")
let zerominute = document.getElementById("zero1minute")
let minute = document.getElementById("minute")
let zerosecond = document.getElementById("zero2_second")
let second = document.getElementById("second")
setInterval(() => {
    // letest date 
    let latestdate = new Date();
    // get hours 
    let hours = latestdate.getHours();
    // condition hours
    if (hours > 12) {
        // hours -= 12
    }
    if (hours < 10) {
        timezero.innerHTML = 0;
    }
    if (hours >= 12) {
        am = "pm"
    }
    else {
        am = "Am"
    }
    // past innerHtml 
    ampm.innerHTML = am;
    // innerhtml past hours 
    time.innerHTML = hours
    // get minute 
    let minute1 = latestdate.getMinutes();
    // innerhtml past minute 
    minute.innerHTML = minute1
    // minute condition 
    if (minute1 < 10) {
        zero = 0;
    } else {
        zero = "";
    }
    // zero past 
    zerominute.innerHTML = zero;
    // get seconds 
    let second1 = latestdate.getSeconds();
    // seconds past 
    second.innerHTML = second1
    if (second1 < 10) {
        a = 0;
    } else {
        a = "";
    }
    // second zero past 
    zerosecond.innerHTML = a;
}, 1000);
// Weather javascript start 
// weather api 
let apiKEY = '98092c54b629e85a8a8adc138825a7b2'
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
//  weather veriables javascript 
let form = document.getElementById("form")
// submit event 
form.addEventListener("submit", (event) => {
    event.preventDefault()

})
