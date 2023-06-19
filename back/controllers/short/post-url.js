const errors = require('../../misc/errors')
const queries = require('../../models/short')
const { generateToken } = require('../../utils/token')

const URL_COMPLETE = 'https://localhost:4000'
module.exports = (db) => async (req, res, next) => {
    const { url } = req.body
    const { email } = res.locals
    const token = `${generateToken(8)}`;

    const result = await queries.createUrl(await db)(url, token, email)
    
    if (!result.ok) return next(errors[401])
    
    const shortUrl = `${URL_COMPLETE}/short/${token}`;

    res.status(200).json({
        success: true,
        data: {
            shortUrl,
            urls: result.urls,
        }
    })
}