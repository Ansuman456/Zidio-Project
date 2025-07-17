// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const YourModel = require('../models/YourModel');

router.get('/data', async (req, res) => {
  try {
    const data = await YourModel.find().lean();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
