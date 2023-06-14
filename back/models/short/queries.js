const { sql } = require('slonik');

const generatorShort = (body) => (sql.unsafe `
INSERT INTO links (origin_url)
VALUES (${body.url})

`)

module.exports = {
    generatorShort,
}