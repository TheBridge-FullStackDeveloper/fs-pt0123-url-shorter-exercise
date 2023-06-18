const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const generatorRoutes = require('./generator')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes(db))
    router.use('/short', generatorRoutes(db))

    return router
}