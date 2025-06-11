const { Chat } = require("../../../models");

class Model_r {
  constructor(req) {
    this.req = req;
  }

  // Fungsi untuk mengambil semua data chat
  async daftar_chat() {
    try {
      // Mengambil semua data chat dari database
      const chats = await Chat.findAll();

      // Mengembalikan data chat
      return chats;
    } catch (error) {
      console.error("Error fetching chat data:", error);
      throw error;
    }
  }
}

module.exports = Model_r;
