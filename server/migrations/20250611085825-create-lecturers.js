"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lecturers", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // ✅ AMAN dan cross-database
        primaryKey: true,
      },
      nip: { type: Sequelize.STRING, unique: true },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone_number: Sequelize.STRING,
      department: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("lecturers");
  },
};
