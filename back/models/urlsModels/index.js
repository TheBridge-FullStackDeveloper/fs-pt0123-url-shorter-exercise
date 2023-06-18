const { insertUrl, getNewShortUrl } = require('./queries');

// Convierto la Url Original en versión corta
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

const updateUrl = ( db ) => async( params ) =>{
    try {
        
        const response = await db.query( getNewShortUrl(params) )

        return{
            ok       : true,
            response : response.rows,
        }

    } catch (error) {
        return{
            ok      : false,
            message : error.message,
        }
    }
}  



module.exports = {
    convertUrl,
    updateUrl
}