const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const shortRoutes = require("./short")

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes(db))
    router.use('/short',shortRoutes(db))

    return router
}