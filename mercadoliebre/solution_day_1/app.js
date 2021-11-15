const express = require('express');
const { resolve } = require('path');
const app = express();

app.use('/static', express.static(resolve(__dirname + '/public')));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(resolve( __dirname + '/views/home.html'));
});