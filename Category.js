const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },      
  type: { type: String, required: true },       
  userEmail: { type: String, required: true,unique:true }   
});

module.exports = mongoose.model("Category", CategorySchema);