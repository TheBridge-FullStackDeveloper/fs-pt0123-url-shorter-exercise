const { insertUrl } = require('./queries');

const convertUrl = (db) => async ( url, token ) =>{

    console.log('====>', url );

    try{

        const urlConverted = `/short/${token}`;

        await db.query( insertUrl( url, urlConverted ) )

        return{
            ok: true,
        }

    } catch ( error ) {
        return{
            ok      : false,
            message : error.message,
        }
    }

}

module.exports = {
    convertUrl,
}