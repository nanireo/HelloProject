const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  
  Name: String
});

// Define the model with PascalCase naming convention
const Helloproject = mongoose.model("Helloproject", employeeSchema);

module.exports = Helloproject;
