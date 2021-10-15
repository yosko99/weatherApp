import timeConverter from "./timeConverter.js"

const weatherInfoHTML = document.querySelector("#weatherInfo")
const tempHTML = document.querySelector("#temp")
const dailyWeatherHolder = document.querySelector("#dailyWeatherHolder");
const searchInput = document.querySelector(".search-click");


const setWeather = (address = "sofia") => {
    fetch(`/weather?address=${address}`).then((response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(body => {
                const { current: { temp: currentTemp } } = body;
                const { current: { feels_like: feelsLikeTemp } } = body;
                const { current: { weather: [{ main: weatherNow }] } } = body;

                weatherInfoHTML.innerHTML = weatherNow;
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
            });
        } else {
            return response.text().then(text => {
                searchInput.value = "";
                searchInput.setAttribute("placeholder", text);
            });
        }

    }).catch(error => {
        console.log(error);
    })
}

export default setWeather;