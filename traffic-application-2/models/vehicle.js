// models/vehicle.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/database.db');

const Vehicle = {
    getAll: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM vehicles', (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        });
      });
    },
    
    checkPollutionToday: (number_plate) => {
      const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    
      return new Promise((resolve, reject) => {
        db.get('SELECT * FROM vehicles WHERE number_plate = ? AND pollution_status > ?', [number_plate, today], (err, row) => {
          if (err) return reject(err);
    
          if (row) {
            // Pollution is up to date, resolve with 1
            resolve(1);
          } else {
            // Pollution is not up to date, insert a violation record
            db.run('INSERT INTO violations (vehicle_id, violation_type, violation_date) SELECT vehicle_id, "pollution", ? FROM vehicles WHERE number_plate = ?', [today, number_plate], (err) => {
              if (err) return reject(err);
              resolve(0); // Resolve with 0 indicating a violation
            });
          }
        });
      });
    },

    // Function to check if tax is up to date
checkTaxToday: (number_plate) => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM vehicles WHERE number_plate = ? AND tax_status > ?', [number_plate, today], (err, row) => {
      if (err) return reject(err);

      if (row) {
        // Tax is up to date, resolve with 1
        resolve(1);
      } else {
        // Tax is not up to date, insert a violation record
        db.run('INSERT INTO violations (vehicle_id, violation_type, violation_date) SELECT vehicle_id, "tax", ? FROM vehicles WHERE number_plate = ?', [today, number_plate], (err) => {
          if (err) return reject(err);
          resolve(0); // Resolve with 0 indicating a violation
        });
      }
    });
  });
},

// Function to check if insurance is up to date
checkInsuranceToday: (number_plate) => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM vehicles WHERE number_plate = ? AND insurance_status > ?', [number_plate, today], (err, row) => {
      if (err) return reject(err);

      if (row) {
        // Insurance is up to date, resolve with 1
        resolve(1);
      } else {
        // Insurance is not up to date, insert a violation record
        db.run('INSERT INTO violations (vehicle_id, violation_type, violation_date) SELECT vehicle_id, "insurance", ? FROM vehicles WHERE number_plate = ?', [today, number_plate], (err) => {
          if (err) return reject(err);
          resolve(0); // Resolve with 0 indicating a violation
        });
      }
    });
  });
}

    
};
  

module.exports = Vehicle;
