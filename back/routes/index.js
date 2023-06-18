const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const urlRoutes = require('./urls')


module.exports = (db) => {

    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes())
    router.use('/short', urlRoutes(db)) //Recibe el link original
    return router

}