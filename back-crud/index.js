const express = require('express');
const app = express();

app.use(express.json());


const productList = [
    {
        id: 2,
        name: 'Samsung',
        price: 2000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-64gb-1-400x460.png'
    },
    {
        id: 3,
        name: 'Oppo',
        price: 3000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-64gb-1-400x460.png'
    },
    {
        id: 4,
        name: 'Samsung',
        price: 10000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-64gb-1-400x460.png'
    },
    {
        id: 5,
        name: 'Moto',
        price: 1000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-64gb-1-400x460.png'
    },
]


app.get('/products', (req, res) => {

    if (req.query.brand)
    {
        const result = productList.filter(product => product.name.toLowerCase() === req.query.brand.toLowerCase());
        return res.send(result);
    }

    res.send(productList);
});


app.get('/products/:id', (req, res) => {
    const paramId = parseInt( req.params.id, 10 );
    const product = productList.find( productElement => productElement.id === paramId );

    if (product != null)
    {
        res.send(product);
    }
    else
    {
        res.status(404).json({msg: "Product not found"});
    }
});

app.delete('/products/:id', (req, res) => {
    const paramId = parseInt( req.params.id, 10 );
    const productIndex = productList.findIndex( productElement => productElement.id === paramId );

    productList.splice(productIndex, 1);

    res.json({msg: `${productIndex} deleted`});

});

app.post('/products', (req, res) => {
    const {name, price, image} = req.body;

    const productId = productList[productList.length -1].id + 1;
    const product = {
        id: productId,
        name,
        price,
        image
    }

    productList.push(product);

    res.status(201).json(product);
});



















app.listen(3000, () => {
    console.log('Server is running on port 3000');
});