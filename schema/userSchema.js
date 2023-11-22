const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: "Users",
  }
);

module.exports = mongoose.model("Users", userSchema);
