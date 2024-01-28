// My api key for the wether forcast
const apiKey = 'a8089e21a6fd496d9f36245d3d6d5c5f';
let searchForm = document.getElementById('searchForm');
let searchHistory = document.getElementById('searchHistory');
let todayWeather = document.getElementById('todayWeather');
let forcast = document.getElementById('forecast');
const cityInput = document.getElementById('cityInput')
const searchBtn = document.getElementById('searchBtn');



searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const cities = cityInput.value.trim();

    if(!cities) {
        getAllWeather(cities);
        cityInput.innerHTML = '';
    }
});

// event listner for the user to hit the searchbtn to search for there selected city 
searchBtn.addEventListener('click', function() {
    const certainCities = searchHistory.querySelector('.selected');
    if(certainCities) {
        const cities = selectedCities.textContent;
        getAllWeather(cities);
    }
});


// function to get all weather using the fetch method to get the api 
async function getAllWeather(cities) {

}