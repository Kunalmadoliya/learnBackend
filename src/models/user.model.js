const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: String,
  password: String,
});

const userModel = mongoose.model("userData", userSchema);

module.exports = userModel;
