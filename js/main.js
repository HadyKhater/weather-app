const apiKey = "&appid=3d9b7b15f2a3191eb6f426a4cb578169";
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'
let searchInput = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');
let weather = document.querySelector('.weather');
let error = document.querySelector('.error');

async function checkWeather(city) {

    let response = await fetch(`${apiURL}&q=${city}${apiKey}`);
    if (response.status == 404) {
        error.style.display = 'block';
        weather.style.display = 'none'
    } else {
        let data = await response.json();

        console.log(data)

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png"
        }
        weather.style.display = 'block';
        error.style.display = 'none';
    }

}
searchBtn.addEventListener("click", function () {
    checkWeather(searchInput.value);
})

