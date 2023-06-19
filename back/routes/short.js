const router = require('express').Router()
const { authorizer } = require('../middlewares')
const shortControllers = require ('../controllers/short')

module.exports = (db) => {
    router.post('/generator',authorizer,shortControllers.postUrl(db))
    router.get('/:id',shortControllers.getUrl(db))
    return router;
  }