const { generatorShort } = require ('./queries')

const postShortGenerator = (db, body) => async () => {
    try {
  
        const response = await db.query(generatorShort(body))
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
}