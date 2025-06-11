const { User } = require("../../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

class Model_r {
  constructor(req) {
    this.req = req;
  }

  async login() {
    // Deklarasi pertama di req.body
    const { nama: userName, password } = this.req.body;

    console.log("userName", userName, "password", password);

    // Cek user di database berdasarkan userName
    const user = await User.findOne({ where: { nama: userName } });
    if (!user) return { message: "User tidak ditemukan" };

    // Verifikasi password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { message: "Password salah" };

    // Ambil data user dan role
    const { id, role } = user;

    // Buat token
    const token = jwt.sign(
      { id, nama: userName, role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return { message: "Login sukses", token, role };
  }
}

module.exports = Model_r;
