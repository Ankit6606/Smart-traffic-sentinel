'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number_plate: {
        type: Sequelize.TEXT
      },
      make: {
        type: Sequelize.TEXT
      },
      model: {
        type: Sequelize.TEXT
      },
      pollution_status: {
        type: Sequelize.TEXT
      },
      insurance_status: {
        type: Sequelize.TEXT
      },
      tax_status: {
        type: Sequelize.TEXT
      },
      owner_email: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};