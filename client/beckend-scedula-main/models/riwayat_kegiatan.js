"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RiwayatKegiatan extends Model {
    static associate(models) {
      // Kalo ada relasi, taruh di sini
    }
  }

  RiwayatKegiatan.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      anggota_id: DataTypes.INTEGER,
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tanggal: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "RiwayatKegiatan",
      tableName: "riwayat_kegiatan",
      timestamps: false,
    }
  );

  return RiwayatKegiatan;
};
