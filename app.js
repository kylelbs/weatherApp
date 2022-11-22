const APIKEY = 'b8b856db8fcd8ee1413fa747126666c1';
let cityName = 'London';
const mainDiv = document.querySelector('.content');
const cityInput = document.querySelector('#city');
const submitBtn = document.querySelector('#submit');

async function getWeather (city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`);
    const data = await response.json();
    mainDiv.append(data.name);
    console.log(data);

}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked'),
    cityName = cityInput.value;
    getWeather(cityName);
});


