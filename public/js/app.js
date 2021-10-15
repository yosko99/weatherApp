import setDateTime from "./setDate.js"
import setWeather from './setWeather.js'
import changeAddress from "./changeAddress.js"

setDateTime();
setWeather();
changeAddress();
setInterval(() => {
    setDateTime();
}, 60000);