const { genToken } = require("../../utils")
const { registerNewUrl } = require('../../models/generator')
const errors = require('../../misc/errors')
const { API_URL } = require("../../constants")

module.exports = (db) => async (req, res, next) => {
    const { url } = req.body
    const { user } = res.locals
    const randomPath = `/${genToken()}`

    const response = await registerNewUrl(await db)(user.email, randomPath, url)

    if(!response.ok) return next(errors[500])

    res.status(200).json({
        success: true,
        data: {
            url: `${API_URL}${randomPath}`,
        }
    })
}