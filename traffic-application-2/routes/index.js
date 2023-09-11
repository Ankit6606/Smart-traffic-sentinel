const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');

router.get('/vehicles', async (req, res) => {
  try {
    const numberPlate = 'XYZ789'; // Replace with the desired number plate
    const [pollutionResult, taxResult, insuranceResult] = await Promise.all([
      Vehicle.checkPollutionToday(numberPlate),
      Vehicle.checkTaxToday(numberPlate),
      Vehicle.checkInsuranceToday(numberPlate),
    ]);

    res.json({
      pollutionStatus: pollutionResult === 1 ? 'Up to date' : 'Violation',
      taxStatus: taxResult === 1 ? 'Up to date' : 'Violation',
      insuranceStatus: insuranceResult === 1 ? 'Up to date' : 'Violation',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;