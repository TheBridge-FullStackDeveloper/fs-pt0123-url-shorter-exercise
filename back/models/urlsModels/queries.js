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

module.exports = {
    insertUrl,
}