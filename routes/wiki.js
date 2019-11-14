const express = require('express')
const router = express.Router()
module.exports = router
const { db, Page, User } = require('../models')
const wikiPage = require('../views/wikipage')

//db.User
//const {User, Page} = require
const addPage = require('../views/addPage')

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

router.get('/', (req, res, next) => {
    res.redirect('/')
})

router.post('/', async (req, res, next) => {
    console.log('req body: ', req.body)
    // const slug =
    //     // 'https://localhost/1337/wiki/' +
    //     req.body.title
    //         .split(' ')
    //         .join('_')
    //         .replace(/\s+/g, '_')
    //         .replace(/\W/g, '')
    let pageStatus

    if (req.body.pageStatus === 'on') {
        pageStatus = 'open'
    } else {
        pageStatus = 'closed'
    }
    try {
        const newPost = await Page.create({
            title: req.body.title,
            content: req.body.content,
            status: pageStatus,
        })

        res.redirect(`/wiki/${newPost.slug}`)
    } catch (err) {
        next(err)
    }
})

router.get('/:slug', async (req, res, next) => {
    const slug = req.params.slug
    console.log('slug', typeof slug)
    const page = await Page.findOne({ where: { slug: slug } })
    console.log('page', page)
    const author = 'Nicky'
    res.send(wikiPage(page, author))
})
