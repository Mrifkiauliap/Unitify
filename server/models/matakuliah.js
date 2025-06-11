const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matakuliah', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    lecturer_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'lecturers',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    day_of_week: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matakuliah',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "lecturer_id",
        using: "BTREE",
        fields: [
          { name: "lecturer_id" },
        ]
      },
    ]
  });
};
