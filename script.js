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

            document.getElementById("result").innerHTML = `
                <h2>Weather in ${name}</h2>
                <p><strong>Temperature:</strong> ${temp}°C</p>
            `;
        });
}
