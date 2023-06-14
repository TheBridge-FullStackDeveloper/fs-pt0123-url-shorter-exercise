const { sql } = require( 'slonik' );

// Inserto la URL Para Acortarla:

const insertNewUrl = (db) => async ( infoInsertion ) =>{

    console.log('====>', url );

    try{

        await db.query(sql.unsafe`
            INSERT INTO links ( 
                short_url,
                origin_url,
                uses_by_creator,
                uses,
                creation_date,
                created_by, 
            ) VALUES ( 
                ${infoInsertion.short_url}
                ${infoInsertion.origin_url}
                ${infoInsertion.uses_by_creator}
                ${infoInsertion.uses}
                ${infoInsertion.creation_date}
                ${infoInsertion.created_by}
            )
        `)

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
    insertNewUrl,
}