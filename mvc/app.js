const express = require('express');
const app = express();

const productsRoutes = require('./routes/productsRoutes')

const port = process.env.PORT || 3000;

app.use('/productos' , productsRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
