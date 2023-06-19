const { sql } = require("slonik");

const insertLink = (shortUrl, originUrl, email) => sql.unsafe`
    INSERT INTO links (
        short_url, origin_url, created_by
    ) VALUES (
        ${shortUrl}, ${originUrl}, (SELECT id FROM users WHERE email = ${email})
    );
`;

const getShortLink = (shortUrl) => sql.unsafe`
    SELECT * FROM links WHERE short_url = ${shortUrl}
`;

const updateUses = (id, uses) => sql.unsafe`
    UPDATE links SET uses = ${uses} WHERE id = ${id}
`;

const updateUsesByCreator = (id, uses) => sql.unsafe`
    UPDATE links SET uses_by_creator = ${uses} WHERE id = ${id}
`;

const getLinksByUser = (id) => sql.unsafe`
    SELECT * FROM links WHERE created_by = ${id}
`;

module.exports = {
  insertLink,
  getShortLink,
  updateUses,
  updateUsesByCreator,
  getLinksByUser,
};
