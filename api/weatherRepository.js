
const axios = require('axios').default;
require('dotenv').config();

const getCityWeather = async (city) => {
    const baseApi = 'https://api.openweathermap.org';
    const url = `${baseApi}/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url)
    return response.data;
};

module.exports = { getCityWeather };
