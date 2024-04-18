const mongoose = require("mongoose");

// async function connectToDatabase() {
//   try {
//     await mongoose.connect(process.env.MONGOOSE_LIVE_URI);
//     console.log("Connected to MongoDB successfully!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
module.exports = { mongoose, connectToDatabase };
// i used localy MONGOOSE_LIVE_URI