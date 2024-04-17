const express = require("express");
const cors = require("cors");
const productRouter = require("./src/routes/productRoutes");
const categoryRouter = require("./src/routes/categoryRoutes"); 


const { connectToDatabase } = require("./src/config/database");

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRouter);
app.use("/", categoryRouter); 

app.get("/", (req, res) => {
  res.json({
    message: "Connected to db",
  });
});

const port = process.env.PORT || 3000; // Use the provided port or default to 3000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
