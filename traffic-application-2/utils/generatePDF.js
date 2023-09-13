const PDFDocument = require('pdfkit');
const fs = require('fs');

// Function to generate a PDF from violation data
const generatePDF = (violationData, outputPath) => {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream(outputPath);

  doc.pipe(stream);

  // Add content to the PDF
  doc.fontSize(18).text('Violation Receipt', { align: 'center' });
  doc.moveDown();
  
  if (violationData.length === 0) {
    res.status(404).json({ error: 'No violations found' });
    return;
  }
  
  console.log('violationData:', violationData);


  // Iterate over violationData
  violationData.forEach((violation) => {
    // Process each violation here
  });

  // Finalize the PDF
  doc.end();

  // Return a Promise that resolves when the PDF is generated
  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      resolve();
    });
    stream.on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = generatePDF;