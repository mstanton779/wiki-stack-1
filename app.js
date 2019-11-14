const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const sequelize = require('sequelize'); 

app.use(morgan('dev')); 
app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res, next) => {
    res.send('hello world'); 
})

app.listen(1337, () => {
    console.log('listening'); 
})