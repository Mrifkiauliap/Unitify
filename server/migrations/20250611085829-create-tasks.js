"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tasks", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // ✅ AMAN dan cross-database
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
      },
      matakuliah_id: {
        type: Sequelize.UUID,
        references: { model: "matakuliah", key: "id" },
        allowNull: true,
      },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      due_date: Sequelize.DATE,
      is_done: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("tasks");
  },
};
