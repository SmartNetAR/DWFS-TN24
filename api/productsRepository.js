const products = require("./data");


function list( filters ) {

    const { nombre, precio } = filters;

    let result = products;

    if (nombre) {
        result = result.filter((product) => product.name.includes(nombre) )
    }
    if (precio) {
        result = result.filter((product) => product.price <= precio )
    }

    return result;
}

module.exports = { list };