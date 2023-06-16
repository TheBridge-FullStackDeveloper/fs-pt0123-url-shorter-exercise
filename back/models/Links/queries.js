const { sql } = require("slonik");

const insertUrl = (shortURL, originURL, user) => sql.unsafe`
            INSERT INTO links (
                short_url, origin_url, created_by 
            ) VALUES (
                ${shortURL}, ${originURL}, (SELECT id FROM users WHERE email = ${user})
            )        
        `;

module.exports = {
  insertUrl,
};
