const { getRandomCity } = require("./citiesRepository");
const weatherRepository = require("./weatherRepository");

const citiesCache = {};

async function list (req, res) {

    const randomCity = getRandomCity();

    const cachedCity = citiesCache[randomCity.name];

    if (cachedCity && cachedCity.expire > Date.now() )
    {
        res.status(200).json(cachedCity.data);
    }
    else
    {
        const data = await weatherRepository.getCityWeather(randomCity.name)
        citiesCache[randomCity.name] = {
            data,
            expire: Date.now() + 10000
        }

        res.status(200).json(data);
    }


};

module.exports = {list}