const API_KEY = "8617474218b69d8297060d0d081038cc";

document.getElementById("btn").addEventListener("click", getWeather);

function convertTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString();
}

function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const icon = data.weather[0].icon;

            const name = data.name;
            const temp = data.main.temp;
             const desc = data.weather[0].description;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;
            const feels = data.main.feels_like;
            const min = data.main.temp_min;
            const max = data.main.temp_max;
            const sunrise = convertTime(data.sys.sunrise);
            const sunset = convertTime(data.sys.sunset);


            document.getElementById("result").innerHTML = `
                <h2>Weather in ${name}</h2>

                <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png">


                <p><strong>Temperature:</strong> ${temp}°C</p>
                 <p><strong>Description:</strong> ${desc}</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${wind} m/s</p>
                <p><strong>Feels Like:</strong> ${feels}°C</p>
                <p><strong>Min Temp:</strong> ${min}°C</p>
                <p><strong>Max Temp:</strong> ${max}°C</p>
                <p><strong>Sunrise:</strong> ${sunrise}</p>
                <p><strong>Sunset:</strong> ${sunset}</p>

            `;
        });
}
