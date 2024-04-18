const mongoose = require("mongoose");
const {encrypt, decrypt} = require("../utils/encryption");

const productSchema = mongoose.Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  price: { type: Number, required: true },
  manufacturer: { type: String, required: true },
  weight: { type: Number, required: true },
  bestBefore: { type: Date, default: new Date("2027-01-31") },
  stock: { type: Number, required: true },
  creditCardNumber: {
    type: String,
    required: true,
    set: encrypt,
    get: decrypt,
  },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
