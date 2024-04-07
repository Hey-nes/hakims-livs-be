const express = require("express");
const router = express.Router();

const {
  createNewProduct,
  getProducts,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/create", createNewProduct);

module.exports = router;
