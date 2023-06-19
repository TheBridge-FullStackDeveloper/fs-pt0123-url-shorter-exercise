const errors = require('../../misc/errors')
const { postShortGenerator } = require('../../models/short')
const {nanoid} = require ('nanoid')

module.exports = (db) => async (req, res, next) => {
   
    const body = req.body

    const shortUrl = nanoid(8)
 

    const dbRes = await postShortGenerator (await db)(body, shortUrl)

    res.status(200).json({
        success: true,
        data: {
            "url":`/short/${shortUrl}`
        }
    })


}