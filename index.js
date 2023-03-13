const APIKEY = 'd769b239946b64ea834ee264bf4c3ccb'

var temp = document.querySelector('.temp')
var feelsLike = document.querySelector('.feels_like')
var arrow = document.querySelector('#arrow')
var humidity = document.querySelector('.humidity')
var speed = document.querySelector('.speed')
var city = document.querySelector('.city')
var weather = document.querySelector('.weather')

city.addEventListener('keyup', function(enter){
    var key = enter.which || enter.keyCode
    if (key == 13) {
      search()
    }
  })

function search() {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKEY}&units=metric`)
    .then(response => response.json())
    .then(json => {
        if(json.cod != '200') {
            return;
        }

        temp.innerHTML = (json.main.temp).toFixed(0) + '°C'
        feelsLike.innerHTML = (json.main.feels_like).toFixed(0) + '°C'
        humidity.innerHTML = json.main.humidity + '%'
        arrow.style.rotate = (json.wind.deg + 90) + 'deg'
        speed.innerHTML = json.wind.speed + 'm/s'
        

        switch (json.weather[0].main) {
            case 'Clear':
                weather.innerHTML = '<i class="fa-solid fa-sun fa-4x"></i>'
                break;
            case 'Clouds':
                weather.innerHTML = '<i class="fa-solid fa-cloud fa-4x"></i>'
                break;
            case 'Haze':
                break;
            case 'Rain':
                weather.innerHTML = '<i class="fa-solid fa-cloud-rain fa-4x"></i>'
                break;
            default:
                console.log(haha)
                break;
        }
    })
}