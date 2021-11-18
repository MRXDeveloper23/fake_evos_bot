const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  lang: {
    type: String,
  },
  step: {
    type: Number,
    default: 0,
    required: true,
  },
});

const users = mongoose.model("users", UserSchema);
module.exports = users;
