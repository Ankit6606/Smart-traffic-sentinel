// routes/index.js
const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');

router.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.getAll();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
