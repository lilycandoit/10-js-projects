let apikey = "89ea79d5403d657c859158f7c7ac39cf";

const weatherDataEl = document.getElementById('weather-data');

const cityInputEl = document.getElementById('city-input');

const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const cityData = cityInputEl.value;

  getWeatherData(cityData);
});

async function getWeatherData(cityData){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${apikey}&units=metric`);
    //this response will await to fetch the data and the final response can not be usable, need to convert to json in below step

    if (!response.ok){
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    //to convert the response to data, await means to wait for response to be converted

    console.log(data);

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`
    ]

    weatherDataEl.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`

    weatherDataEl.querySelector('.temperature').textContent = `${temperature}°C`;

    weatherDataEl.querySelector('.description').textContent = `${description}`;

    weatherDataEl.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('');

  } catch (error) {
    weatherDataEl.querySelector('.icon').innerHTML = '',
    weatherDataEl.querySelector('.temperature').innerText = '';

    weatherDataEl.querySelector('.description').textContent = `An error happenned, please check your city's name!`;
    weatherDataEl.querySelector('.details').innerHTML = '';
  }
}

//DONE!
