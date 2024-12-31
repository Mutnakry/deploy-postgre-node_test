const express = require('express');
const db = require('./db'); // Import the connection pool from db.js

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

// Route to test database connection
app.get('/les', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM category'); // Use db.query() here
        res.json(result.rows); // Return the query result as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error message as JSON
    }
});


app.get('/', async (req, res) => {
    const message = 'hello postgre';  // changed variable name to 'message'
    res.send(message);  // send the message to the client
 });
 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




// https://github.com/Mutnakry/deploy-postgre-node_test.git