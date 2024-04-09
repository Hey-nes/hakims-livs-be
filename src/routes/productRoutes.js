const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/api/intro/product", productController.getProducts);
router.post("/api/intro/product/create", productController.createNewProduct);
router.get("/api/intro/product/:id", productController.getProductById);
router.put("/api/intro/product/:id", productController.updateProduct);
router.delete("/api/intro/product/:id", productController.deleteProduct);


module.exports = router;
