const { sql } = require('slonik');

const generatorShort = (body, shortUrl) => (sql.unsafe `
INSERT INTO links (origin_url, short_url)
VALUES (${body.url},${shortUrl})

`)


// const dynamicShort = (params) =>(sql.unsafe `
// SELECT  origin_url
// FROM links
// WHERE short_url LIKE ${params}
// `)

const dynamicShort = (params => (sql.unsafe `
UPDATE links
SET uses = uses + 1
WHERE short_url LIKE ${params}
RETURNING origin_url ;

`))



module.exports = {
    generatorShort,
    dynamicShort
}

