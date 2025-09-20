const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  accountName: { type: String, required: true },
  categoryName: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },    
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", TransactionSchema);