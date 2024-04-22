const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[a-zA-Z\u00C0-\u00FF !?&]+$/, 
    maxlength:[50, 'Name must be at most 50 characters']
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
