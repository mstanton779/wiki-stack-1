const express = require('express')
const router = express.Router()
module.exports = router
const db = require('../models')
const addPage = require('../views/addPage')


router.get('/add', (req, res, next) => {
    res.send(addPage());
})

router.get('/', (req, res, next) => {
    res.redirect('/'); 
})
