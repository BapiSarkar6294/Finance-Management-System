const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },   // store email directly
  accountType: { type: String, required: true }, 
  Date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Account", AccountSchema);