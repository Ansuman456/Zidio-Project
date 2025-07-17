const express = require('express');
const router = express.Router();
const HistoryModel = require('../models/HistoryModel');
const historyController = require('../controllers/historyController');

router.get('/:userId', async (req, res) => {
  try {
    const history = await HistoryModel.find({ userId: req.params.userId }).sort({ uploadedAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
