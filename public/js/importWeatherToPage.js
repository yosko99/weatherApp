import timeConverter from "./timeConverter.js";

const tempHTML = document.querySelector("#temp")
const dailyWeatherHolder = document.querySelector("#dailyWeatherHolder");
const weatherInfoHTML = document.querySelector("#weatherInfo");
const searchInput = document.querySelector(".search-click");

const importWeatherToPage = (body, address) => {
    //Deconstruct response variables
    const { current: { temp: currentTemp } } = body;
    const { current: { feels_like: feelsLikeTemp } } = body;
    const { current: { weather: [{ main: weatherNow }] } } = body;
    const { current: { weather: [{ icon }] } } = body;


    //Capitalise city
    if (address != null) {
        let firstLetterOfCity = address.charAt(0);
        address = `${firstLetterOfCity.toUpperCase()}${address.substring(1, address.length)}`
        weatherInfoHTML.innerHTML = `Weather in ${address}, ${weatherNow}
         <img alt="Current weather png" src="http://openweathermap.org/img/wn/${icon}.png"/>`;
    } else {
        weatherInfoHTML.innerHTML = `Weather at home, ${weatherNow}
        <img alt="Current weather png" src="http://openweathermap.org/img/wn/${icon}.png"/>`;
        searchInput.value = ""
    }

    tempHTML.innerHTML = `${currentTemp.toFixed(0)} °C , feels like ${feelsLikeTemp.toFixed(0)} °C`;

    const { daily } = body;
    let dailyWeatherPartial = '';
    daily.forEach(weather => {
        const { dt: time } = weather;
        const { temp: { day: dayTemp } } = weather;
        const { feels_like: { day: feelsLikeTemp } } = weather;
        dailyWeatherPartial += `
            <div class="dailyWeather">
                <div class="dailyWeatherTime">${timeConverter(time)}</div>
                <div class="dailyWeatherTemp"><b>${dayTemp.toFixed(0)} °C</b></div>
                <div class="dailyWeatherFeelLikeTemp">Feels like ${feelsLikeTemp.toFixed(0)} °C</div>
            </div>`
    });
    dailyWeatherHolder.innerHTML = dailyWeatherPartial;
}

export default importWeatherToPage