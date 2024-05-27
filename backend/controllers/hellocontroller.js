const Helloproject = require('../models/helloModel');

// Get all Employees
exports.gethellodata = async (req, res) => {
  try {
    const employeeGetedData = await Helloproject.find();
    res.json(employeeGetedData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//post method
exports.posthellodat  = async (req, res) => {
  try {
    const newData = new Helloproject(req.body);
    await newData.save();
    res.status(201).json({ success: true, data: newData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
  


