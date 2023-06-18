const router = require('express').Router()
const { authorizer } = require('../middlewares')

const controllers = require('../controllers/users')

module.exports = (db) => {
    router.get('/', authorizer(), controllers.getUser())
    router.get('/shorts', authorizer(), controllers.getURLsCreated(db))

    return router
}