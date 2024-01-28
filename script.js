// My api key for the wether forcast
const apiKey = 'a8089e21a6fd496d9f36245d3d6d5c5f';
let searchForm = document.getElementById('searchForm');
let searchHistory = document.getElementById('searchHistory');
let todayWeather = document.getElementById('todayWeather');
let forcast = document.getElementById('forecast');
const cityInput = document.getElementById('cityInput')

searchForm.addEventListener('submit', function (event) {
    event.defaultPrevented();

    const cities = cityInput.ariaValueMax.trim();

    if (cities) {
        cityWeather(cities);
        cityInput.value = ''; 
    }
});


searchHistory.addEventListener('click', function (event) {
    if (event.target.tagName == 'li') {
        const cities = event.target.textContent;
        cityWeather(cities); 
    }

});

