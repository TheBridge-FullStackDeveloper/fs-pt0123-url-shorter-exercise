const errors = require('../../misc/errors')
const queries =require('../../models/short')
const { generateToken } = require('../../utils/token')
module.exports = (db) => async (req, res, next) => {
    const {url} = req.body
 
    const token = generateToken(8);
  
    const result = await queries.createUrl(await db)(url, token)
    console.log(result)
    if(!result.ok) return next(errors[401])

    const shortUrl = `/short/${token}`;

    res.status(200).json({
        success: true,
        data:{
            shortUrl,
        }
    })
}