const errors = require('../../misc/errors')
const { postShortGenerator } = require('../../models/short')

module.exports = () => async (req, res, next) => {
    const body = req.body
    const dbRes = await postShortGenerator (await db , body)()
    res.status(200).json({
        success: true,
    })


}