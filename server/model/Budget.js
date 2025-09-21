const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  categoryName: { type: String, required: true },
  amount: { type: Number, required: true },
  month: { type: Number, required: true },   
  year: { type: Number, required: true },
  Date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Budget", BudgetSchema);