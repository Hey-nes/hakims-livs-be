const categoryModel = require("../models/categoryModel");

const getCategory = async (req, res) => {
  try {
    console.log("Fetching Categories ...");

    const categories = await categoryModel.find();
    console.log("Categories: ", categories);

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching Categories: ", error);

    res.status(500).json({
      message: "Failed to fetch Categories",
      error: error.message,
    });
  }
};


const createNewCategory = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    const category = new categoryModel(req.body);
    await category.save();
    res.status(201).json({
      message: "New category created successfully!",
      new_category: category,
    });
  } catch (error) {
    console.error("Error creating new category:", error);
    res.status(500).json({
      message: "Failed to create new category",
      error: error.message,
    });
  }
};


const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error finding category:", error);
    res.status(500).json({
      message: "Failed to find category",
      error: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({
      message: "Failed to update category",
      error: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({
      message: "Failed to delete category",
      error: error.message,
    });
  }
};

module.exports = {
  createNewCategory,
  getCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
