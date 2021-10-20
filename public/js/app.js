import setDateTime from "./setDate.js"
import setWeather from './setWeather.js'
import changeAddress from "./changeAddress.js"
import getCurrentLocation from "./getCurrentLocation.js"

setDateTime();
setWeather();
changeAddress();
getCurrentLocation();
setInterval(() => {
    setDateTime();
}, 60000);