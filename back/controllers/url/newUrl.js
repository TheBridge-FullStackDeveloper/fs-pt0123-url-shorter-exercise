const { deserialize } = require("simple-stateless-auth-library")
const queries = require("../../models/short/index")
const shortid = require("shortid")

module.exports = (db) => async (req, res, next) => {
    const short_url = `short/${shortid.generate()}`
    const { origin_url } = req.body
    const user = deserialize(req)

    const email = user.email
    console.info(email)
    const info = await queries.getInfo(await db)(email)
    console.info(info)
    const dbRes = await queries.addUrl(await db)(req.body, short_url, info.response[0].id)

    if (!dbRes.ok) return next({
        statusCode: 500,
        error: new Error("something went wrong!")
    })
    res.status(200).json({
        success: true,
        data: dbRes.response
    })
}