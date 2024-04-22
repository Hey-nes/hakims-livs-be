const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imagePath: { type: String, required: true },
  title: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9\u00C0-\u00FF !?&]+$/,
    maxlength: [50, "Title must be at most 50 characters"],
    minlength: [5, "Title must be at least 5 characters"],
  },
  description: {
    type: String,
    required: true,
    match: /^[\w\d !?&]+$/,
    maxlength: [500, "Description must be at most 500 characters"],
    minlength: [5, "Description must be at least 5 characters"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
    maxlength: [5, "Price must have at most 5 digits"],
    validate: {
      validator: function (v) {
        return !isNaN(v);
      },
      message: (props) => `${props.value} is not a valid price!`,
    },
  },
  manufacturer: { type: String, required: true },
  weight: {
    type: Number,
    required: true,
    maxlength: [100000, "Weight must be at most 100000"],
    validate: {
      validator: function (v) {
        return !isNaN(v);
      },
      message: (props) => `${props.value} is not a valid weight!`,
    },
  },
  bestBefore: { type: Date, default: new Date("2027-01-31") },
  stock: {
    type: Number,
    required: true,
    maxlength: [999, "Stock must be at most 999"],
    validate: {
      validator: function (v) {
        return Number.isInteger(v);
      },
      message: (props) => `${props.value} is not a valid stock value!`,
    },
  },
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
