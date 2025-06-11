const Model_r = require("../models/model_r");

exports.daftar_chat = async (req, res) => {
  try {
    const model = new Model_r(req);
    const data = await model.daftar_chat();
    res.status(200).json(data);
  } catch (error) {
    handleServerError(res, error.message);
  }
};
