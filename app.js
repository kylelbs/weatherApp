const APIKEY = 'b8b856db8fcd8ee1413fa747126666c1';
let cityName = 'London';
const mainDiv = document.querySelector('.content');
const cityInput = document.querySelector('#city');
const submitBtn = document.querySelector('#submit');
const answerContent = document.createElement('ul');
answerContent.classList.add('answer-content');

async function getWeather (city) {

    try {    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`);
    const data = await response.json();
    if (data.cod === '404') {
        throw new Error('City not found');
    } else {
    
    answerContent.innerHTML = '';

    const cityLi = document.createElement('li')
    cityLi.innerText = `City: ${data.name}`;
    answerContent.append(cityLi);

    const tempLi = document.createElement('li')
    tempLi.innerText = `Temperature: ${data.main.temp}°C`;
    answerContent.append(tempLi);

    const feelsLikeLi = document.createElement('li')
    feelsLikeLi.innerText = `Feels like: ${data.main.feels_like}°C`;
    answerContent.append(feelsLikeLi);

    const skyLi = document.createElement('li')
    skyLi.innerText = `Sky: ${data.weather[0].main}`;
    answerContent.append(skyLi);

    mainDiv.append(answerContent);

    console.log(data)};

    } catch (error) {
        console.log(error);
        answerContent.innerHTML = '';
        answerContent.append(error);
    }

    mainDiv.append(answerContent);

}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (cityInput.value !== '') {
        console.log('clicked'),
        cityName = cityInput.value;
        getWeather(cityName);
    } else {
        alert('Please enter a city name');
    }

});


