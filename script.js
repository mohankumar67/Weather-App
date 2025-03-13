async function getWeather() {
    const apiKey = "63af3f5f94a9787b94ee52ba0990724c"; // User's API key
    const city = document.getElementById("city").value || "Dehradun";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        } else {
            alert("City not found! Please check the spelling and try again.");
        }
    } catch (error) {
        alert("Error fetching weather data. Please try again later.");
    }
}

// Fetch weather for Dehradun on load
window.onload = getWeather;