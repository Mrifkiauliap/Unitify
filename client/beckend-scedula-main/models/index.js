"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");

// Ambil nama file untuk menghindari pemanggilan `index.js` dalam folder `models`
const basename = path.basename(__filename);

// Mengambil environment dari NODE_ENV atau menggunakan 'development' secara default
const env = process.env.NODE_ENV || "development";

// Mengambil konfigurasi dari file config.json sesuai dengan environment
const config = require("../config/config.json")[env];

// Inisialisasi db object
const db = {};

// Setup Sequelize dengan konfigurasi database
let sequelize;
if (config.use_env_variable) {
  // Menggunakan variable environment untuk koneksi database
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Menggunakan konfigurasi langsung dari file config.json
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Membaca semua file dalam folder models dan mengimport file JS model
fs.readdirSync(__dirname) // Membaca semua file dalam direktori ini
  .filter((file) => {
    // Pastikan file bukan file hidden (diawali dengan '.') dan bukan index.js
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // Memuat model
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model; // Menyimpan model ke dalam db object
  });

// Menambahkan asosiasi antar model (jika ada)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Menambahkan sequelize dan Sequelize ke db untuk akses di tempat lain
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

// Export db yang berisi semua model dan sequelize
module.exports = db;
