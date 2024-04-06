const productModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

const createNewProduct = async (req, res) => {
  if (!req.body) {
    return res.status(404).json({
      message: "New Product Not Found",
    });
  }
  try {
    const product = new productModel(req.body);
    await product.save();
    res.status(201).json({
      message: "New product created successfully!!",
      new_product: product,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Failed to create new product",
      error: error.message,
    });
  }
};

const checkEnv = (req, res) => {
  res.send(`MONGODB_URI: ${process.env.MONGODB_URI}`);
};

module.exports = { createNewProduct, getProducts, checkEnv };
