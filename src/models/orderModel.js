const mongoose = require("mongoose");
const { encrypt, decrypt } = require("../utils/encryption");


const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9 !&?äöåÄÖÅ]+$/,
    maxlength: 50,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      totalProductPrice: {
        type: Number,
        required: true,
      },
    },
  ],
  customerInfo: {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s'-]+$/,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s'-]+$/,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      maxlength: 50,
      minlength:5
    },
    creditCardNumber: {
      type: String,
      required: true,
      get: decrypt, 
      set: encrypt,
  
    },
    expiryDate: {
      type: Date,
      required: true,
      min: Date.now,
      message: "Expiry date must be in the future"
    },
    cvcCode: {
      type: String,
      required: true,
      validate: {
        validator: /^[0-9]{3}$/,
        message: "CVC code must be exactly 3 digits"
      }
    },
    
    address: {
      street: {
        type: String,
        required: true,
      },
      streetNumber: {
        type: Number,
        required: true,
      },
      postNumber: {
        type: Number,
        required: true,
        match: /^[0-9]{5}$/,
        maxlength: 6,
      },
      city: {
        type: String,
        required: true,
      },
    },

    },
  },

);

const Order = mongoose.model("Order", orderSchema);


module.exports = Order;
