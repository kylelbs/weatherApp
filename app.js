const APIKEY = 'b8b856db8fcd8ee1413fa747126666c1';
let cityName = 'London';

async function getWeather (lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`);
    const data = await response.json();
    console.log(data);
}

getWeather(cityName);

