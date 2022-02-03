const cities = require("./data/cities");
const { getRandomArrayItem } = require("./helpers/arrayHelper");

function getRandomCity() {
    return getRandomArrayItem(cities)
}

module.exports = {getRandomCity}
