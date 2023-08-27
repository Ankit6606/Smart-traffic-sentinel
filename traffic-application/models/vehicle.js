const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
  vehicle_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  number_plate: DataTypes.TEXT,
  make: DataTypes.TEXT,
  model: DataTypes.TEXT,
  pollution_status: DataTypes.TEXT,
  insurance_status: DataTypes.TEXT,
  tax_status: DataTypes.TEXT,
  owner_email: DataTypes.TEXT,
});

module.exports = Vehicle;
xports = Vehicle;
