const { sql } = require('slonik');

const generatorShort = (body, shortUrl) => {
  return sql`
    INSERT INTO links (origin_url, short_url)
    VALUES (${body.url},${shortUrl})
  `
}

const dynamicShort = (params) => {
  return sql`
    UPDATE links
    SET uses = uses + 1 , uses_by_creator = uses_by_creator +1
    WHERE short_url LIKE ${params}
    RETURNING origin_url ;
  `
}

module.exports = {
    generatorShort,
    dynamicShort
}

