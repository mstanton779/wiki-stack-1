const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const sequelize = require('sequelize'); 
const layout = require('./views/layout');
const { db } = require('./models');

db.authenticate().
then(() => {
  console.log('connected to the database');
});


app.use(morgan('dev')); 
app.use(express.static(__dirname + '/public')); 
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
// parses json bodies
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send(layout(" ")); 
})

app.listen(1337, () => {
    console.log('listening'); 
})