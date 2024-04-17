const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9 !&?äöåÄÖÅ]+$/, 
    maxlength: 50 
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
        ref: 'Product',
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
      ref: 'Customer',
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s'-]+$/, 
      maxlength: 100 
    },
    lastName: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s'-]+$/, 
      maxlength: 100 
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
      maxlength: 50
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
        maxlength: 6 
      },
      city: {
        type: String,
        required: true,
      },
    },
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
