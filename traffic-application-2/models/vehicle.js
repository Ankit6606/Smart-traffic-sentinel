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
          resolve(row ? 1 : 0);
        });
      });
    }
  };
  

module.exports = Vehicle;
