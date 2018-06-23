const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors');

const port = 4000;
// App id for news
const APP_ID = process.env.APP_ID;

// Initialize app and enable cross-origin resource sharing
const app = express();
app.use(cors());

// GET /
app.get('/', (req, res) => {
    // Fetch Reuters news
    fetch(`https://newsapi.org/v2/everything?sources=reuters&apiKey=${APP_ID}`)
        .then(response => response.json())
        .then(data => {
            // Call res.json with an object to return data
            return res.json({
                news: data,
                path: req.path,
                query: req.query
            });
        });
});

// Start the app on the provided port
app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});