const mongoose = require('mongoose');


// Schema and model definition as before
const employeeSchema = new mongoose.Schema({
  Name: String
});

const Helloproject = mongoose.model('Helloproject', employeeSchema);

module.exports = Helloproject;
