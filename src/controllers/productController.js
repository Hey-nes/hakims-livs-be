const productModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    console.log("Fetching products...");

    const products = await productModel.find();

    console.log("Products:", products);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

const createNewProduct = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    const product = new productModel(req.body);
    await product.save();
    res.status(201).json({
      message: "New product created successfully",
      new_product: product,
    });
  } catch (error) {
    console.error("Error creating new product:", error);
    res.status(500).json({
      message: "Failed to create new product",
      error: error.message,
    });
  }
};

module.exports = { createNewProduct, getProducts };
