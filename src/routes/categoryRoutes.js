const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/api/intro/category", categoryController.getCategory);
router.post("/api/intro/category/create", categoryController.createNewCategory);
router.get("/api/intro/category/:id", categoryController.getCategoryById);
router.put("/api/intro/category/:id", categoryController.updateCategory);
router.delete("/api/intro/category/:id", categoryController.deleteCategory);

module.exports = router;