import setWeather from "./setWeather.js";

const currentLocationBtn = document.querySelector("#find-my-location");

const getLocation = () => {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(positionCallback)
}

const positionCallback = (position) => {
    setWeather(position.coords.longitude, position.coords.latitude, null)
}

const getCurrentLocation = () => {
    currentLocationBtn.addEventListener("click", e => {
        getLocation();
    })
}

export default getCurrentLocation