var temp = document.querySelector('.temp')
var feelsLike = document.querySelector('.feels_like')
var sky = document.querySelector('.sky')
var humidity = document.querySelector('.humidity')
const APIKEY = 'd769b239946b64ea834ee264bf4c3ccb'

function search() {
    var city = document.querySelector('.city').value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    .then(response => response.json())
    .then(json => {
        if(json.cod != '200') {
            return;
        }

        temp.innerHTML = (json.main.temp - 273.15).toFixed(0) + 'C°'
        feelsLike.innerHTML = (json.main.feels_like - 273.15).toFixed(0) + 'C°'
        sky.innerHTML = json.weather[0].main
        humidity.innerHTML = json.main.humidity + '%'
    })
}