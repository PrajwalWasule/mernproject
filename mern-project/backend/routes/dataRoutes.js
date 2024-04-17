// backend/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const SampleData = require('../models/SampleData');

// Import raw sample data to DB collection
router.post('/import', async (req, res) => {
  try {
    const rawData = req.body; // Assuming the raw data is sent in the request body
    await SampleData.insertMany(rawData);
    res.status(200).send('Data imported successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Fetch data based on time interval
router.get('/filter', async (req, res) => {
  try {
    const { startTime, endTime, frequency } = req.query;
    // Implement logic to filter data based on the specified time interval
    const filteredData = await SampleData.find({ ts: { $gte: startTime, $lte: endTime }});
    res.json(filteredData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
