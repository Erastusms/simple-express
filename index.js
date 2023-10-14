// Add Express
const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
// Initialize Express
const app = express();
const PORT = 5555;

const mongoDBURL =
  'mongodb://admin:admin@ac-2jcfvlj-shard-00-00.nemoveh.mongodb.net:27017,ac-2jcfvlj-shard-00-01.nemoveh.mongodb.net:27017,ac-2jcfvlj-shard-00-02.nemoveh.mongodb.net:27017/books-collection?ssl=true&replicaSet=atlas-2bzsn4-shard-0&authSource=admin&retryWrites=true&w=majority';

// Please create a free database for yourself.
// This database will be deleted after tutorial

app.use(cors());

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
// app.listen(5000, () => {
//   console.log('Running on port 5000.');
// });

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log('App connected to database');
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

MongoClient.connect(mongoDBURL, function (err, client) {
  // perform actions on the collection object
  try {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  } catch (err) {
    client.close();
  }
});
// Export the Express API
module.exports = app;
