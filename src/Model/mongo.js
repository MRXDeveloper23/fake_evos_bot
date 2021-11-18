const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config.js");

module.exports = async function () {
  try {
    await mongoose.connect(MONGO_URL);
  } catch (e) {
    console.log("Mongo error: ", e);
  }
};
