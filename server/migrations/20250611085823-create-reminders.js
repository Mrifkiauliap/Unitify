"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("reminders", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // ✅ AMAN dan cross-database
        primaryKey: true,
      },

      user_id: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
      },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      type: Sequelize.STRING,
      remind_at: Sequelize.DATE,
      is_sent: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("reminders");
  },
};
