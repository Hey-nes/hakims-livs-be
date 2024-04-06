const express = require("express");
const {
  createNewProduct,
  getProducts,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getProducts);
router.post("/create", createNewProduct);

module.exports = router;
