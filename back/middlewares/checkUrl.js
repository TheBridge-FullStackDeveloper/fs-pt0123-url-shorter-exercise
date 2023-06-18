const errors = require("../misc/errors")

module.exports = (minLength = 8) => (req, res, next) => {
    const { id } = req.params

    if(!id) return next(errors[404])

    if(id.length !== minLength) return next(errors[404])

    res.locals.search = `/${id}`

    next()
}