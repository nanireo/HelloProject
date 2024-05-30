const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const loginRoutes = require('./routes/helloroutes'); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploadimage', express.static(path.join(__dirname, 'uploadimage'))); // Using path.join for static files

// Database connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    console.error(`Failed to connect to MongoDB at ${mongoUri}`);
  });

// Routes
app.use('/api/hello', loginRoutes);

// Server creation
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
