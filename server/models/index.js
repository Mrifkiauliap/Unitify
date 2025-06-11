const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);

const sequelize = new Sequelize("unitify", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: (msg) => console.log(msg), // ⬅️ tampilkan query SQL
});

const db = {};

// Baca semua model kecuali index.js
fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.endsWith(".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// Setup relasi antar model kalau ada
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Tambahkan sequelize instance ke db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
