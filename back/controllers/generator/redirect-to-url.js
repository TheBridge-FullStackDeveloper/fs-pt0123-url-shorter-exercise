const { retrieveOriginUrl } = require("../../models/generator")
const errors = require('../../misc/errors')

module.exports = (db) => async (req, res, next) => {
    const { user, search } = res.locals

    const response = await retrieveOriginUrl(await db)(user.email, search)

    if(!response.ok) return next(errors[response.error_code ?? 500])

    res.redirect(307, response.content.url)
}