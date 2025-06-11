"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class LaporanProker extends Model {
    static associate(models) {
      // relasi bisa ditambahin di sini kalo lo butuh
    }
  }

  LaporanProker.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      anggota_id: DataTypes.INTEGER,
      judul: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("diajukan", "ditinjau", "disetujui", "ditolak"),
        defaultValue: "diajukan",
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "LaporanProker",
      tableName: "laporan_proker",
      timestamps: false,
    }
  );

  return LaporanProker;
};
