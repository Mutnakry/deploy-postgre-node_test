const express = require('express');
const db = require('./db'); // Import the connection pool from db.js

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Route to test database connection
app.get('/les', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM category'); // Use db.query() here
        res.json(result.rows); // Return the query result as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error message as JSON
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
