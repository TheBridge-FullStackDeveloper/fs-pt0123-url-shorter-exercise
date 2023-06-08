const { sql } = require('slonik')


const insertLink = (url, shortUrl) => sql.unsafe`

INSERT INTO links (
  short_url, origin_url, uses_by_creator, uses, created_by
 ) VALUES (
   ${shortUrl}, ${url.origin_url}, 0, 0, NULL
 );
`;


module.exports = {
insertLink,
}