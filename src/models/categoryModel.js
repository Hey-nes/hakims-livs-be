const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[a-zA-Z0-9 !&?äöåÄÖÅ]+$/, 
    maxlength: 50 
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
