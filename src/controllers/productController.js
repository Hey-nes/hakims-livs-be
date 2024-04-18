const productModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    console.log("Fetching products...");

    const products = await productModel.find().populate("category");

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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Product updated successfully",
      updated_product: updatedProduct,
    });
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
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log(`Fetching products for category ${categoryId}...`);
    const products = await productModel.find({ category: categoryId }).populate("category");
    console.log("Products:", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({
      message: "Failed to fetch products by category",
      error: error.message,
    });
  }
};


module.exports = { createNewProduct, getProducts, updateProduct, deleteProduct,getProductsByCategory };