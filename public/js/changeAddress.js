import setWeather from "./setWeather.js";
const searchInput = document.querySelector(".search-click");

const changeAddress = () => {
    searchInput.addEventListener("keyup", e => {
        if (e.key == "Enter" || e.keyCode == 13)
            setWeather(searchInput.value);
    })
}

export default changeAddress;