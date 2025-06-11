"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PersetujuanAnggota extends Model {
    static associate(models) {
      // relasi-relasi lo bisa diatur di sini kalo dibutuhin
    }
  }

  PersetujuanAnggota.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      anggota_id: DataTypes.INTEGER,
      kabid_id: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM("pending", "disetujui", "ditolak"),
        defaultValue: "pending",
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "PersetujuanAnggota",
      tableName: "persetujuan_anggota",
      timestamps: false,
    }
  );

  return PersetujuanAnggota;
};
