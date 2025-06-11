// models/laporanabsen.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class LaporanAbsen extends Model {
    static associate(models) {
      // relasi bisa didefinisikan di sini kalo ada
    }
  }

  LaporanAbsen.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      rapat_id: DataTypes.INTEGER,
      anggota_id: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM("hadir", "tidak hadir", "izin"),
        defaultValue: "tidak hadir",
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "LaporanAbsen",
      tableName: "laporan_absen",
      timestamps: false,
    }
  );

  return LaporanAbsen;
};
