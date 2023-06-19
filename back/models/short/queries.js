const { sql } = require('slonik')

const getUrl = () =>sql.unsafe`
SELECT *
FROM links`

const getById = (id) => sql.unsafe`
SELECT l.short_url,l.origin_url,l.uses_by_creator,l.uses
FROM links
JOIN users u ON l.created_by=u.id
where u.id=${id}`

const newUrl = (origin_url, short_url, info_id) => sql.unsafe`
INSERT INTO links (origin_url, short_url, created_by)
VALUES (${origin_url}, ${short_url}, ${info_id})`


const getEmail = (email) => sql.unsafe`
SELECT id
FROM users
WHERE email=${email}
`

const addShortCount = (urlShorted)=>sql.unsafe`
UPDATE links
SET uses = uses + 1
WHERE short_url=${urlShorted}
`

const getOriginal = (urlShorted)=>sql.unsafe`
SELECT origin_url
FROM links
WHERE short_url =${urlShorted}
`


module.exports={
    getUrl,
    getById,
    newUrl,
    getEmail,
    addShortCount,
    getOriginal
}



// -- Creamos la tabla "links"
// CREATE TABLE IF NOT EXISTS links (
//   id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
//   short_url TEXT NOT NULL UNIQUE,
//   origin_url TEXT NOT NULL,
//   uses_by_creator INTEGER DEFAULT 0,
//   uses INTEGER DEFAULT 0,
//   creation_date DATE NOT NULL DEFAULT NOW(),
//   created_by uuid REFERENCES users (id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
// );
