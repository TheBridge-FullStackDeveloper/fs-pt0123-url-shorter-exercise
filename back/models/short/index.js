const { generatorShort,dynamicShort } = require ('./queries')

const postShortGenerator = (db) => async (body, short) => {
    try {
 
        const response = await db.query(generatorShort(body,short))
        console.log(response)

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}


const getShortDynamic = (db) => async (params) => {
    try {
 
        const response = await db.query(dynamicShort(params))
        console.log(response)

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}


module.exports = {
    postShortGenerator,
    getShortDynamic
}