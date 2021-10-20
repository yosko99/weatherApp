import importWeatherToPage from "./importWeatherToPage.js";

const weatherInfoHTML = document.querySelector("#weatherInfo")
const searchInput = document.querySelector(".search-click");

const setWeather = (lon = null, lat = null, address = "Ruse") => {
    weatherInfoHTML.innerHTML = "Fetching..."

    let fetchAddress = lon == null ? `/weather?address=${address}` : `/weather?lon=${lon}&lat=${lat}`;

    //Fetch requested weather from openWeatherMap
    fetch(fetchAddress).then((response) => {
        const contentType = response.headers.get("content-type");

        //Checks if response has JSON body if true imports weather
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(body => {
                importWeatherToPage(body, address);
            });

            // Handles error if response body is empty
        } else {
            return response.text().then(text => {
                searchInput.value = "";
                searchInput.setAttribute("placeholder", text);
                weatherInfoHTML.innerHTML = text
            });
        }

    }).catch(error => {
        console.log(error);
    })
}

export default setWeather;