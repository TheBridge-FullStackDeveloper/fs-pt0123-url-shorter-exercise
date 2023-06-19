const router = require ('express').Router()
const { authorizer } = require ('../middlewares')
const shortControllers = require ('../controllers/short')


module.exports = (db) => {
    router.post('/generator', authorizer, shortControllers.postGenerator(db))
    router.get('/:id',authorizer, shortControllers.getShortDynamic(db), )

    return router
}