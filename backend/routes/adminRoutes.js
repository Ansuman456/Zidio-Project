const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const User = require('../models/User');
const HistoryModel = require('../models/HistoryModel');

// 🔒 Admin-only dashboard route with real stats
router.get('/dashboard', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }

  try {
    // Fetch statistics
    const totalUsers = await User.countDocuments();
    const totalUploads = await HistoryModel.countDocuments();
    const chartUsage = await HistoryModel.aggregate([
      { $group: { _id: "$chartType", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({
      totalUsers,
      totalUploads,
      mostUsedCharts: chartUsage
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
