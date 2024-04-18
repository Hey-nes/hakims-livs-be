const express = require("express");
const cors = require("cors");
const productRouter = require("./src/routes/productRoutes");
const categoryRouter = require("./src/routes/categoryRoutes"); 
const { validateCreateCustomer } = require("./src/middlewares/customerValidation");
const { connectToDatabase } = require("./src/config/database");
const customerRouter = require("./src/routes/customerRoutes");
const { authenticateToken } = require('./src/middlewares/authmiddlewares')
const authRoutes = require("./src/routes/authRoutes");
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRouter);
app.use("/", categoryRouter); 
app.use("/api/customers", validateCreateCustomer, customerRouter)
app.use('/api/auth', authRoutes);
app.use('/api/products', authenticateToken, require('./routes/productRoutes'));

app.get("/", (req, res) => {
  res.json({
    message: "Connected to db",
  });
});

module.exports = app;
