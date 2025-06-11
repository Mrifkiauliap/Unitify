const Model_r = require("../models/model_r");

exports.login = async (req, res) => {
  try {
    const model = new Model_r(req);
    const data = await model.login();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
