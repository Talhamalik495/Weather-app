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

const apiKEY = `98092c54b629e85a8a8adc138825a7b2`
// const city = "karachi"
async function fetchweatherapi(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKEY}`)
        if (!response.ok) {
            throw new Error("Unable to fetch weather data")
        }
        const data = await response.json();
        console.log(data);
        updateweatherui(data)
    }
    catch (error) {
        console.error(error)
    }
}
// fetchweatherapi()
// //  weather veriables javascript
let namea = document.getElementById("name")
let temp = document.getElementById("temprature")
let winda = document.getElementById("wind")
let humiditya = document.getElementById("humidity")
let visibilitya = document.getElementById("visibility")
let skya = document.getElementById("sky")
let datea = document.getElementById("date")
const updateweatherui = (solvedata) => {
    namea.innerHTML = solvedata.name;
    skya.innerHTML = solvedata.weather[0].description;
    temp.innerHTML = Math.round(solvedata.main.temp);
    winda.innerHTML = `${solvedata.wind.speed} km/h`;
    humiditya.innerHTML = `${solvedata.main.humidity}%`;
    visibilitya.innerHTML = `${solvedata.visibility / 1000}km`;
    let orignaldate = new Date();
    datea.innerHTML = orignaldate.toDateString()

}
const form = document.getElementById("form")
const input = document.getElementById("city_input")
// submit event
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const city = input.value
    if (city !== '') {
        fetchweatherapi(city)
        input.value = "";
    }
    // updateweatherui(city)

})
