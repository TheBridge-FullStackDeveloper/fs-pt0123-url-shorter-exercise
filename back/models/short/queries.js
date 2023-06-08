const { sql } = require('slonik')


const insertLink = (url, shortUrl) => sql.unsafe`

INSERT INTO links (
  short_url, origin_url
 ) VALUES (
   ${shortUrl}, ${url}
 );
`;


module.exports = {
insertLink,
}