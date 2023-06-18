const { retrieveShortsByUser } = require("../../models/generator")
const errors = require('../../misc/errors')
const { API_URL } = require("../../constants")

module.exports = (db) => async (_, res, next) => {
    const { user } = res.locals

    const response = await retrieveShortsByUser(await db)(user.email)

    if(!response.ok) return next(errors[500])

    res.status(200).json({
        success: true,
        data: {
            shorts: response.content.map(({ short_url, uses, uses_by_creator }) => ({
                url: `${API_URL}${short_url}`,
                yours: uses_by_creator,
                overall: uses,
            }))
        }
    })
}