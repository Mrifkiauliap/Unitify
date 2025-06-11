// models/jadwalrapat.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class JadwalRapat extends Model {
    static associate(models) {
      // Kalau nanti ada relasi, taruh di sini
    }
  }

  JadwalRapat.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      dibuat_oleh: DataTypes.INTEGER,
      topik: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
      tanggal: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.ENUM("terjadwal", "selesai", "dibatalkan"),
        defaultValue: "terjadwal",
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "JadwalRapat",
      tableName: "jadwal_rapat",
      timestamps: false,
    }
  );

  return JadwalRapat;
};
