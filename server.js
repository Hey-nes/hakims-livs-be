const express = require("express");
const cors = require("cors");
const productRouter = require("./src/routes/productRoutes");
const categoryRouter = require("./src/routes/categoryRoutes");
const orderRouter = require("./src/routes/orderRoutes");
const { connectToDatabase } = require("./src/config/database");
const customerRouter = require("./src/routes/customerRoutes");
const authRoutes = require("./src/routes/authRoutes");
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRouter);
app.use("/", categoryRouter);
app.use("/", orderRouter);
app.use("/api/customers", customerRouter);
app.use("/api/auth", require("./src/routes/authRoutes"));
 app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Connected to db",
  });
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
