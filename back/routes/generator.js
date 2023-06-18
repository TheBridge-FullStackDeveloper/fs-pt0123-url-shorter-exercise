const router = require('express').Router()
const { authorizer, checkUrl } = require('../middlewares')

const controllers = require('../controllers/generator')

module.exports = (db) => {
    router.post('/generator', authorizer(), controllers.createShortUrl(db))
    router.get('/:id', authorizer(false), checkUrl(), controllers.redirectToUrl(db))

    return router
}