// Import the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const authRoutes = require('./routes/auth');

// Create an instance of express
const app = express();

// Define the port number
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    // Log a message when the connection is successful
    console.log('MongoDB connected...')
  })
  .catch(err => {
    // Log the error if the connection fails
    console.log(err)
  });

// Middleware for parsing JSON bodies from HTTP requests
app.use(express.json());

// Use the routes from the routes modules
app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);

// Start the server and listen on the defined port
app.listen(port, () => {
  // Log a message when the server starts successfully
  console.log(`App listening at http://localhost:${port}`)
});