const router = require('express').Router()
const { authorizer } = require('../middlewares')
const shortControllers = require ('../controllers/short')

module.exports = (db) => {
    router.post('/generator',shortControllers.getUrl(db))

    return router;
  }