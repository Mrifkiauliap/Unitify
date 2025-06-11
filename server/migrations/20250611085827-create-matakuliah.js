"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matakuliah", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // ✅ AMAN dan cross-database
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
      },
      lecturer_id: {
        type: Sequelize.UUID,
        references: { model: "lecturers", key: "id" },
      },
      name: Sequelize.STRING,
      day_of_week: Sequelize.STRING,
      time_start: Sequelize.TIME,
      time_end: Sequelize.TIME,
      location: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("matakuliah");
  },
};
