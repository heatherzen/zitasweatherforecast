var cityInput = document.getElementById("city-input");
var searchCity = document.getElementById("search-btn");
var todayDate = moment().format("LL, Mm");
var cityArray = [];

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
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
    
    $.ajax({
        url: apiUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var weatherImage = response.weather[0].icon;
        var weatherUrl = "https://openweathermap.org/img/w" + weatherImage + ".png";

        $("#weather-image").attr("src", weatherUrl);
        $("#entered-city").html(response.name + " (' + todayDate + ' )");

        $("#temp").text("Tempature: " + response.main.temp);
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#windspeed").text("WindSpeed: " + response.wind.speed);

        var lat = response.coord.latitude;
        var long = response.coord.longe;

        var apiUrl2 = "https://api.openweathermap.org/data/2.5/uvi?" + apiKey + "=" + lat + "&" + "lon=" + long;
        $.ajax({
            url: apiUrl2,
            method: "GET"
        })
        })


        // fetch(apiUrl).then(function (response) {
        //     console.log("response", response);
        //     response.json();
        // }).then(function(data) {
        //     console.log(data);

        //     // var weatherContainer = document.querySelector("#forecast");
        //     // var div = document.querySelector('div');



        //     // weatherContainer.appendChild(div);
        // });
    // });
}



    // getWeather();
    searchCity.addEventListener("click", getCityName)