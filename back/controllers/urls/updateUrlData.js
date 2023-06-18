const {} = require('../../models/urlsModels')


module.exports = ( db ) => async(req, res, next) => {

    const { username } = res.locals
    console.log( username );

    const { id } = req.params;

    if( id.length !== 8 ){
        return res.status(400).json({
            success : false,
            error   : "No se ha generado correctamente la URL",
        })
    }

    const dbRes = await getNewShortUrl( await db )( id );

    if( !dbRes.ok ) return next({
        statusCOde: 500,
        error: new Error('Woops algo no está bien!'),
    });

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    })

}