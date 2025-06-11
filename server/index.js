const jwt = require("jsonwebtoken");
const process = require("process");
const path = require("path");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// cek semua env
const requiredEnv = [
  "CORS_WHITELIST",
  "ENCRYPTION_KEY",
  "JWT_KEY",
];
requiredEnv.forEach((env) => {
  if (!process.env[env]) {
    console.error(`❌ Dibutuhkan env: ${env}`);
    process.exit(1); // hentikan server
  }
});

const app = express();
const PORT = process.env.PORT || 3001;

// CORS dinamis, izinkan semua origin yang datang
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || process.env.CORS_WHITELIST.split(",").includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.set("view engine", "ejs");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Import sequelize instance dan models
const db = require("./models");
const { sequelize } = db;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "default_secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60 * 60 * 1000, // 1 jam (dalam milidetik)
//       httpOnly: true,         // aman dari akses JS di browser
//       secure: process.env.NODE_ENV === "production", // HTTPS only di production
//     },
//   })
// );

// Dummy router loader (kosongin dulu)
const arr_router = [
  // "user",
];
let arr = {};

arr_router.forEach((e) => {
  arr[`${e}`] = require(`./router/router_${e}`);
});

Object.keys(arr).forEach((routerKey) => {
  app.use("/", arr[routerKey]);
});

// Fungsi untuk sinkronisasi model ke DB
const syncModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("✅ Tabel sudah disinkronkan!");
  } catch (err) {
    console.error("❌ Error sinkronisasi tabel:", err);
  }
};

// Fungsi untuk start server setelah konek DB
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected!");

    // Tampilkan nama-nama tabel yang terdaftar dari models
    console.log("📄 Daftar tabel dari models:");
    Object.keys(db).forEach((modelName) => {
      if (modelName !== "sequelize" && modelName !== "Sequelize") {
        console.log(`- ${modelName}`);
      }
    });
    
    await syncModels();
    app.listen(PORT, () => {
      console.log(`🚀 Server jalan di http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MySQL connection error:", err);
  }
};

// Start server
startServer();

// Error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});