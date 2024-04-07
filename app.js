const cors = require("cors");
const express = require("express");
const app = express();
const productRouter = require("./src/routes/productRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/intro/product", productRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Connected to db",
  });
});

module.exports = app;
