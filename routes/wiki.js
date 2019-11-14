const express = require('express')
const router = express.Router()
module.exports = router
const {db, Page, User} = require('../models')

//db.User
//const {User, Page} = require
const addPage = require('../views/addPage')


router.get('/add', (req, res, next) => {
    res.send(addPage());
})

router.get('/', (req, res, next) => {
    res.redirect('/'); 
})

router.post('/', async (req, res, next) => {
    console.log('req body: ', req.body); 
    const slug = 'https://localhost/1337/wiki/' + req.body.title.split(" ").join("-"); 
    let pageStatus; 

    if (req.body.pageStatus === "on") {
        pageStatus = "open"; 
    } else {
        pageStatus = "closed"; 
    }

    const newPost = await Page.create({
        title: req.body.title, 
        content: req.body.content,
        status: pageStatus,
        slug: slug 
    })

    res.redirect('/'); 
})
