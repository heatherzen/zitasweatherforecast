var cityInput = document.getElementById("city-input");
var searchCity = document.getElementById("search-btn")

function getCityName(event) {
    event.preventDefault();
    var cityName = cityInput.value;
    getWeather(cityName);
}

// function cleanCityInput() {
//     var cleanInput = cityName.split(" ");
//     var cleanCity = cleanInput.filter(noSpaces => noSpaces !== "");
//     return cleanCity.join(" ").toLowerCase();
// }

var apiKey = "7d15ba9026d2e440d5540c6e58638b00";



//fetch to get city weather
function getWeather(cityName) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
    fetch(apiUrl).then(function (response) {
        console.log("response", response);
        return response.json();
    }).then(function(result) {
        console.log('result', result.data);

        // var weatherContainer = document.querySelector("#forecast");
        // var img = document.createElement("img");

        // img.setAttribute('src', result.data.image_url);
        // weatherContainer.appendChild(img);
    });
}




// getWeather();
searchCity.addEventListener("click", getCityName)