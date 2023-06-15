const { sql } = require('slonik');

const insertUrl = ( url, shortingUrl ) => sql.unsafe`

    INSERT INTO links (
        short_url,
        origin_url
    ) values (
        ${url},
        ${shortingUrl}
    );

`;

module.exports = {
    insertUrl,
}