const express = require("express");
const cors = require("cors");
const { mongoose, connectToDatabase } = require("./src/config/database");
const productController = require("./src/controllers/productController");
const app = express();

connectToDatabase();

app.use(cors());

app.get("/api/intro/product", productController.getProducts);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
