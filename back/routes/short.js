const router = require('express').Router()
const { authorizer } = require('../middlewares')

const { allUrl, getById, newUrl, addCount } = require("../controllers/url")

module.exports = (db) => {
    router.get("/all", authorizer, allUrl(db)),
    router.post("/generator",newUrl(db)),
    router.get("/:shortUrl",addCount(db)),
    router.get("/info/:id", authorizer, getById(db))


    return router
}