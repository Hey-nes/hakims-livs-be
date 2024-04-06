const express = require("express");
const cors = require("cors");
const { mongoose, connectToDatabase } = require("./src/config/database");
const app = require("./app");

connectToDatabase();

// Added CORS middleware
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
