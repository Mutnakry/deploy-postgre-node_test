const express = require('express');
const db = require('./db'); // Import the connection pool from db.js

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port
app.use(express.json());

// Route to test database connection
app.get('/les', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users'); // Use db.query() here
        res.json(result.rows); // Return the query result as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return error message as JSON
    }
});

app.post('/les', async (req, res) => {
    const { username, email } = req.body; // Extract data from the request body

    try {
        const query = 'INSERT INTO users (username, email) VALUES ($1, $2)';
        const values = [username, email];
        const result = await db.query(query, values);

        res.status(201).json({
            message: 'User created successfully',
            user: result.rows[0] // The inserted user data
        });
        // res.status(201).json(result.rows[0]); // Respond with the newly created user
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle errors
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