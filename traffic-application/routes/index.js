const express = require('express');
const Vehicle = require('../models/vehicle'); // Import the Vehicle model

const router = express.Router();

router.get('/vehicle', async (req, res) => {
  try {
    const vehicle = await Vehicle.findAll();
    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Other routes...

module.exports = router;
