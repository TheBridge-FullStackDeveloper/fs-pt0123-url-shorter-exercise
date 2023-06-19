const queries = require('../../models/urlsModels');
const errors = require('../../misc/errors');
const { tokenGeneration } = require('../../utils/token');

const URL_COMPLETE = 'http://localhost:4000/short'

module.exports = ( db ) => async(req, res, next) => {

    const { url } = req.body;

    const token = `/${ tokenGeneration(8) }`

    let dbRest = await queries.convertUrl( await db )( url, token );

    console.log( '=>>>>', dbRest );

    if( !dbRest.ok ) return next( errors[401] );

    const shortingUrl = `${URL_COMPLETE}${token}`

    res.status( 200 ).json({
        success : true,
        data    : { shortingUrl },
    })

    
}