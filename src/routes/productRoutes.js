const express = require("express");
const router = express.Router();

const {
  createNewProduct,
  getProducts,
} = require("../controllers/productController");

router.get("/api/intro/product", getProducts);
router.post("/api/intro/product/create", createNewProduct);

module.exports = router;
