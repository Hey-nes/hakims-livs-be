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


const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error finding product:", error);
    res.status(500).json({
      message: "Failed to find product",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

module.exports = {
  createNewProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
