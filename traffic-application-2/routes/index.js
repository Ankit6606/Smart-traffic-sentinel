const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');
const generatePDF = require('../utils/generatePDF');
const path = require('path'); // Import the path module if not already imported

router.get('/vehicles', async (req, res) => {
  try {
    const numberPlate = 'ABC123'; // Replace with the desired number plate
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

router.get('/generate-pdf', async (req, res) => {
  try {
    const numberPlate = 'ABC123'; // Replace with the desired number plate
    const violationData = await Vehicle.getViolationsByNumberPlate(numberPlate);

    if (violationData.length === 0) {
      res.status(404).json({ error: 'No violations found' });
      return;
    }

    const outputPath = path.join(__dirname, '../pdf_generated/violation_receipt.pdf');
    await generatePDF(violationData, outputPath);

    res.download(outputPath, 'violation_receipt.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;