const express = require("express");
const router = express.Router();

const {
  createNewProduct,
  getProducts,
  checkEnv,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.post("/create", createNewProduct);
router.get("/check-env", checkEnv);

module.exports = router;
