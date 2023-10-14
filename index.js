// Add Express
const express = require('express');

// Initialize Express
const app = express();

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

app.get('/api', (req, res) => {
  res.send('See API');
});

app.get('/api/:id', async (request, response) => {
  try {
    const { id } = request.params;

    return response.status(200).json({ id });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.');
});

// Export the Express API
module.exports = app;
