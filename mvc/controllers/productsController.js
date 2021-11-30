const products = [
    {
        id: 11,
        name: 'Product 1',
        price: 100
    },
    {
        id: 33,
        name: 'Product 2',
        price: 200
    },
]


exports.getAll = (req, res) => {

    res.send(products);
}

exports.getById = (req, res) => {
    const id = req.params.id;

    const product = products.find(product => product.id == id);

    if (!product)
    {
        res.status(404).send({message: "no se encuentra el producto"})
    }

    res.send(product);
}
