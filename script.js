const API_KEY = "8617474218b69d8297060d0d081038cc";

document.getElementById("btn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const name = data.name;
            const temp = data.main.temp;
             const desc = data.weather[0].description;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;

            document.getElementById("result").innerHTML = `
                <h2>Weather in ${name}</h2>
                <p><strong>Temperature:</strong> ${temp}°C</p>
                 <p><strong>Description:</strong> ${desc}</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${wind} m/s</p>
            `;
        });
}
