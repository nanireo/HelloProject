const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const loginRoutes = require('./routes/helloroutes'); // Make sure the path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploadimage', express.static('uploadimage')); // or use path.join if needed

// Database connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
app.use('/api/hello', loginRoutes);

// Server creation
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});







// const express = require('express')
// const mongoose = require('mongoose')
// //const employeeRoutes = require('./routes/employeeRoutes');
// const loginRoutes = require('./routes/helloroutes');
// const cors = require('cors');
// const path = require('path');
// const mongoUri = process.env.MONGO_URI;


// const app = express();


// app.use(cors());
// app.use(express.json());
// app.use('/uploadimage', express.static('uploadimage'));
// //app.use('/uploadimage', express.static(path.join(__dirname, 'uploadimage')));

// //mongodb+srv://nani:nani.kukkala@cluster0.vpbx4zw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// //app.use(routes);
// //Database connection
// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });


// //Routes
//  app.use('/api/hello', loginRoutes);
// //app.use('/api', loginRoutes);


//  //server creation
// app.listen(4000, ()=> { 
//     console.log("server is running at 4000 ");
// });