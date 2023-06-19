require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const uuid = require('uuid') // added line
const { db, cors: options } = require('./configs')
const errors = require('./misc/errors')

const app = express()

app.use(cors(options))
app.use(express.json())
app.use(cookieParser())

const routes = require('./routes')

app.use(routes(db))



//POST
app.post('/short/generator', async (req, res, next) => {
    try {
        // Assumes user is logged in and their info is stored in req.user
        if (!req.user) {
            return res.status(401).json({ message: 'Not authenticated' });
        }

        const { url } = req.body;
        // Genera random 8-character alphanumeric string POR QUE ME MARCA EL SUBSTR
        const shortUrl = Math.random().toString(36).substr(2, 8);

        const newLink = {
            id: uuid.v4(),
            short_url: shortUrl,
            origin_url: url,
            created_by: req.user.id,
        };

        // Insert the new link into the database, REVIEW $1, $2, $3, 4
        await db.query(
            `INSERT INTO Links (id, short_url, origin_url, created_by) VALUES ($1, $2, $3, $4)`, 
            Object.values(newLink)
        );

        res.json({ success: true, data: { url: `/short/${shortUrl}` } });
    } catch (error) {
        next(error);
    }
});
//GET
app.get('/short/id', async (req, res, next) => {
    try {
        const { id } = req.params;

        if (id.length !== 8) {
            return res.status(400).json({ message: 'Badly formed URL' });
        }

        const result = await db.query('SELECT * FROM Links WHERE short_url = $1', [id]);

        if (result.rowCount === 0) {
            return res.status(400).json({ message: 'Badly formed URL' });
        }

        const link = result.rows[0];

        // Increment uses and possibly uses_by_creator
        await db.query(
            `UPDATE Links SET uses = uses + 1, uses_by_creator = uses_by_creator + 1 WHERE id = $1`,
            [link.id]
        );

        // Redirect to the original URL
        res.redirect(link.origin_url);
    } catch (error) {
        next(error);
    }
});
//
app.use((_, __, next) => {
    next(errors[404])
})

app.use(({ statusCode, error }, _, res, __) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})


//12.6.2023
// Define routes
app.listen(
    process.env.PORT,
    () => console.info(`> listening at: ${process.env.PORT}`)
)
  
  // Start the server
