const router = require('express').Router()
const authRoutes = require('./auth')
const usersRoutes = require('./users')
const { authorizer } = require('../middlewares')
//short generator
const shortRoutes = require ('./short')
const usersControllers = require('../controllers/users')

module.exports = () => {
    router.get('/', authorizer, usersControllers.getUser())
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes(db))
    router.use('/short', shortRoutes(db))
    return router
}