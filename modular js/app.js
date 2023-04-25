const apiKey = `dde669c54dbec53c562abad52d716702`;

const apiUrl = `https://api.openweathermap.org/data/2.5`;

const cityName = "Novi Pazar";

const weatherBtn = document.querySelector("#weatherBtn");
const weatherInput = document.querySelector("#weatherInput");

const getWeather = async (city) => {
  try {
    if (weatherInput.value === '') {
        console.log('unesite grad');
        return
    }
    let response = await fetch(
      `${apiUrl}/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    let data = await response.json();
    if (data.message = 'city not found') {
    console.log('city not found');
    }
    console.log(data);

    const main = document.querySelector("#main");


   

    const weatherCityName = document.querySelector("#weatherCityName");
    const weatherIcon = document.querySelector('#weatherIcon');
    const weatherInfo1 = document.querySelector("#weatherInfo1");
    const weatherInfo2 = document.querySelector("#weatherInfo2");
    const weatherInfo3 = document.querySelector("#weatherInfo3");
    const weatherInfo4 = document.querySelector("#weatherInfo4");
    const weatherInfo5 = document.querySelector("#weatherInfo5");

        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
 weatherCityName.textContent = `${data.name}`;
    weatherInfo1.textContent = data.main.humidity;
    weatherInfo2.textContent = data.main.temp;
    weatherInfo3.textContent = data.main.feels_like;
    weatherInfo4.textContent = data.main.pressure;
    weatherInfo5.textContent = data.main.grnd_level;
  } catch (e) {
    console.log(e);
  }
};

weatherBtn.onclick = () => {
    try {
         getWeather(weatherInput.value).then((res) => {
    console.log(res);

  }); 
    } catch (e) {
        
    }

};
