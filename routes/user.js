const express = require('express')
const router = express.Router()
module.exports = router
const { db, User, Page } = require('../models')
const userList = require('../views/userList')
const userPages = require('../views/userPages')

router.get('/', async (req, res, next) => {
    try {
        const allAuthors = await User.findAll()
        res.send(userList(allAuthors))
    } catch (err) {
        next(err)
    }
})
router.get('/:id', async (req, res, next) => {
    try {
        const userId = req.params.id
        const author = await User.findOne({
            where: {
                id: userId,
            },
        })
        const authorPages = await Page.findAll({
            where: {
                authorId: userId,
            },
        })
        res.send(userPages(author, authorPages))
    } catch (err) {
        next(err)
    }
})
