"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // ✅ AMAN dan cross-database
        primaryKey: true,
      },

      name: Sequelize.STRING,
      email: { type: Sequelize.STRING, unique: true },
      password_hash: Sequelize.STRING,
      phone_number: Sequelize.STRING,
      role: Sequelize.ENUM("admin", "member"),
      created_at: Sequelize.DATE,
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("now()"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
