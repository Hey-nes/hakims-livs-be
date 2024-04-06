const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
