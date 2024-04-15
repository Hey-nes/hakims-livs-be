const express = require("express");
const router = express.Router();
const routController = require("../controllers/categoryController");

router.get("/api/intro/category", routController.getCategory);
router.post("/api/intro/category/create", routController.createNewCategory);
router.put("/api/intro/category/:id", routController.updateCategory);
router.delete("/api/intro/category/:id", routController.deleteCategory);
module.exports = router;
