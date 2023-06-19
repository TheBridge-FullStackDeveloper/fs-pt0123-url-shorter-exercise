const { sql } = require('slonik')


const insertLink = (url, shortUrl, email) => sql.unsafe`

INSERT INTO links (
  short_url, origin_url, created_by
 ) VALUES (
   ${shortUrl}, ${url},(SELECT id FROM users WHERE email = ${email})
 );
`;

const getLinkId = (id) => sql.unsafe`SELECT origin_url
FROM links
WHERE short_url = ${id}
`;

const updateLinkStats = (id) => sql.unsafe`
UPDATE links
SET uses = uses + 1
WHERE short_url = ${id} 
`;

const incrementUsesByCreator = (id) => sql.unsafe`
UPDATE links
 SET uses_by_creator = uses_by_creator + 1
 WHERE short_url = ${id}
`;
const getUrlByCreate = (email) => sql.unsafe`
SELECT uses_by_creator, uses, short_url, origin_url
FROM links WHERE created_by =
 (SELECT id FROM users WHERE email = ${email})`

module.exports = {
insertLink,
getLinkId,
updateLinkStats,
incrementUsesByCreator,
getUrlByCreate,
}