var cityInput = document.getElementById("city-input");
var searchCity = document.getElementById("search-btn")

function getCityName() {
    var cityName = cityInput.innerHtml.value;
    console.log(cityName);
}

// function cleanCityInput() {
//     var cleanInput = cityName.split(" ");
//     var cleanCity = cleanInput.filter(noSpaces => noSpaces !== "");
//     return cleanCity.join(" ").toLowerCase();
// }

// var apiKey = "7d15ba9026d2e440d5540c6e58638b00";
// var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + getCityName + "&appid=" + apiKey;

// //fetch to get city weather
// function getWeather(cityName) {
//     var apiUrl = ''
// }

searchCity.addEventListener("click", cityInput)