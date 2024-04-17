// backend/models/SampleData.js

const mongoose = require('mongoose');

const SampleDataSchema = new mongoose.Schema({
  ts: {
    type: Date,
    required: true
  },
  machine_status: {
    type: Number,
    required: true
  },
  vibration: {
    type: Number,
    required: true
  }
});

const SampleData = mongoose.model('SampleData', SampleDataSchema);

module.exports = SampleData;
