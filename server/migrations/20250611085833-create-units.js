"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("units", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // ✅ AMAN dan cross-database
        primaryKey: true,
      },
      name: Sequelize.STRING,
      slug: { type: Sequelize.STRING, unique: true },
      description: Sequelize.TEXT,
      logo_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("units");
  },
};
