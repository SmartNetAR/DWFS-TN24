const productsRepository = require('./productsRepository')

function list(filters) {
    return productsRepository.list(filters);
}

module.exports = { list };
