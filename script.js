let weather = { 
    "apiKey": "153f473355cc46e192d62049212709",
    fetchWeather: function (city) {
        fetch(
            "http://api.weatherapi.com/v1/current.json?key=" + this.apiKey + "&q=" + city + "&aqi=no"
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data.location;
        const { icon, text } = data.current.condition;
        const { temp_c, humidity, wind_kph } = data.current;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = icon;
        document.querySelector(".description").innerHTML = text;
        document.querySelector(".temp").innerHTML = temp_c + " °c";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + wind_kph + " km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Haldwani");