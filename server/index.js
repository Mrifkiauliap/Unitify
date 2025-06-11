const express = require("express");
const app = express();
const PORT = 3001;
require("dotenv").config();

// Import sequelize instance dan models
const db = require("./models");
const { sequelize } = db;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dummy router loader (kosongin dulu)
const arr_router = [];
let arr = {};

arr_router.forEach((e) => {
  arr[`${e}`] = require(`./router/router_${e}`);
});

Object.keys(arr).forEach((routerKey) => {
  app.use("/", arr[routerKey]);
});

// Start server setelah konek DB
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ MySQL connected!");

    // Tampilkan nama-nama tabel yang terdaftar dari models
    console.log("📄 Daftar tabel dari models:");
    Object.keys(db).forEach((modelName) => {
      if (modelName !== "sequelize" && modelName !== "Sequelize") {
        console.log(`- ${modelName}`);
      }
    });

    // Sinkronisasi model ke DB (tanpa drop tabel)
    sequelize
      .sync({ force: false })
      .then(() => {
        console.log("✅ Tabel sudah disinkronkan!");
        app.listen(PORT, () => {
          console.log(`🚀 Server jalan di http://localhost:${PORT}`);
        });
      })
      .catch((err) => {
        console.error("❌ Error sinkronisasi tabel:", err);
      });
  })
  .catch((err) => {
    console.error("❌ MySQL connection error:", err);
  });
