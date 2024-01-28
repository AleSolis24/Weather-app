// My API key for the weather forecast
const apiKey = 'a8089e21a6fd496d9f36245d3d6d5c5f';
// apiURL to link the forcast and days
const apiURL = 'https://api.openweathermap.org/data/2.5';

let searchForm = document.getElementById('searchForm');
let searchHistory = document.getElementById('searchHistory');
let todayWeather = document.getElementById('todayWeather');
let forecast = document.getElementById('forecast');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

// Event listener for the form submission
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const cityName = cityInput.value.trim();

    if (cityName) {
        getAllWeather(cityName);
        cityInput.value = '';
    }
});

// Event listener for the search button
searchBtn.addEventListener('click', function () {
    const selectedCity = searchHistory.querySelector('.selected');
    if (selectedCity) {
        const cityName = selectedCity.textContent;
        getAllWeather(cityName);
    }
});

// Function to get weather data for a city
function getAllWeather(cityName) {
    const apiEndpoint = `${apiURL}/weather?q=${cityName}&units=imperial&appid=${apiKey}`;

    fetch(apiEndpoint)
        .then(function (res) {
            return res.json();
        })
        .then(function (weatherData) {
            updateUI(weatherData);
            saveToLocalStorage(cityName);
        })
        .catch(function (err) {
            console.log(err);
            alert('City not found. Please try again.');
        });
}

