

const router = require ('express').Router()
const { authorizer } = require ('../middlewares')
const shortControllers = require ('../controllers/short')

module.export = () => {
    router.post('/generator', authorizer, shortControllers.postGenerator())

    return router
}