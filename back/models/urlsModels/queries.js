const { sql } = require('slonik');

const insertUrl = ( url, shortingUrl ) => sql.unsafe`

    INSERT INTO links (
        origin_url,
        short_url
    ) values (
        ${url},
        ${shortingUrl}
    );

`;

const getNewShortUrl = ( params ) => sql.unsafe`

    UPDATE links 
    SET uses = uses + 1, uses_by_creator = uses_by_creator + 1
    WHERE short_url LIKE ${params}
    RETURNING origin_url 

`

module.exports = {
    insertUrl,
    getNewShortUrl
}