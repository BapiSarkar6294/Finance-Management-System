const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  balance: { type: Number, required: true },
  type: { type: String, required: true },
  Date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Account", AccountSchema);