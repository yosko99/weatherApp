require("dotenv").config();
const request = require("postman-request");
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


const getWeather = (lon, lat, address, callback) => {
    if (lon == null) {
        const weatherUrlAddress = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${WEATHER_API_KEY}`
        request({ url: weatherUrlAddress, json: true }, (error, response, body) => {
            if (error) {
                return callback(error, null);
            } else if (body.cod == 404) {
                return callback("City not found", null);
            }

            const { coord } = body;
            const weatherUrlLonLat = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`
            request({ url: weatherUrlLonLat, json: true }, (error, response, body) => {
                return callback(null, body);
            })
        })
    }

    else {
        const weatherUrlLonLat = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`
        request({ url: weatherUrlLonLat, json: true }, (error, response, body) => {
            return callback(null, body);
        })
    }

}

module.exports = getWeather