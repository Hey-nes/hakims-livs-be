const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required:true },
  price: { type: Number, required: true },
  manufacturer: { type: String, required: true }, 
  weight: { type: Number, required: true },
  bestBefore: { type: Date }, 
  stock: { type: Number, required: true }
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
