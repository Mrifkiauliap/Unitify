// models/chat.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      // nanti kalau ada relasi, tulis di sini
    }
  }

  Chat.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      pengirim_id: DataTypes.INTEGER,
      penerima_id: DataTypes.INTEGER,
      pesan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Chat",
      tableName: "chat",
      timestamps: false,
    }
  );

  return Chat;
};
