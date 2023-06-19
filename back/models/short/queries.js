const { sql } = require('slonik');

const generatorShort = (body, shortUrl) => {
  return sql`
    INSERT INTO links (origin_url, short_url)
    VALUES (${body.url},${shortUrl})
  `
}



module.exports = {
    generatorShort,
    dynamicShort
}

