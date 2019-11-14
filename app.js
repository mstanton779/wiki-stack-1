const express = require('express')
const app = express()
const morgan = require('morgan')
const sequelize = require('sequelize')
const { layout, main } = require('./views/')
const { db, Page } = require('./models')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

// console.log(db)
db.authenticate().then(() => {
    console.log('connected to the database')
})

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }))
// parses json bodies
app.use(express.json())

app.use('/users', userRouter)
app.use('/wiki', wikiRouter)
const init = async () => {
    // await Page.sync({ force: true })
    // await User.sync({ force: true })
    await db.sync()
    app.listen(1337, () => {
        console.log('listening')
    })
}

app.get('/', async (req, res, next) => {
    const allPosts = await Page.findAll()
    console.log('allPosts', allPosts)
    res.send(main(allPosts))
})

init()
