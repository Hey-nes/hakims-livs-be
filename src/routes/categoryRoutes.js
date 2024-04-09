const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/api/intro/category", categoryController.getCategory);
router.post("/api/intro/category/create", categoryController.createNewCategory);

module.exports = router;