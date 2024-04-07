const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/api/intro/product", productController.getProducts);
router.post("/api/intro/product/create", productController.createNewProduct);

module.exports = router;
