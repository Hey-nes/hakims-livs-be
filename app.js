const cors = require("cors")
const express = require("express");
const app = express();
const productRouter = require("./src/routes/product.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/intro/product", productRouter )
app.use(cors("*"))

app.get("/", (req, res) => {
    res.json({
        message: "Connected to db"
    })
})

module.exports = app;
