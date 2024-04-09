const categoryModel = require("../models/categoryModel");
const { productModel } = require("../models/productModel");

const getCategory = async (req, res) => {
  try {
    console.log("Fetching Categories ...");

    const categories = await categoryModel.find();

    console.log("Categories: ", categories);

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching Categories ", error);

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



module.exports = { getCategory, createNewCategory };
