const mongoose = require('mongoose');
const{encrypt,decrypt} = require("../utils/encryption");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s'-]+$/, // Allow Latin letters (including Nordic), spaces, apostrophes, and hyphens
    maxlength: 50 // Max 100 characters
  },
  lastName: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s'-]+$/, // Allow Latin letters (including Nordic), spaces, apostrophes, and hyphens
    maxlength: 50
  
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Basic email format validation
    maxlength: 50, // Max 50 characters
    set: encrypt, // Encrypt the address before saving
    get: decrypt
  },
  address: {
    street: {
      type: String,
      required: true,
      set: encrypt, // Encrypt the address before saving
      get: decrypt
    },
    streetNumber: {
      type: Number,
      required: true,
      set: encrypt, // Encrypt the address before saving
      get: decrypt
    },
    postNumber: {
      type: Number,
      required: true,
      match: /^[0-9]{5}$/, // Exactly 5 digits for postal code
      maxlength: 6, // Max 6 characters
      set: encrypt, // Encrypt the address before saving
      get: decrypt
    },
    city: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s'-]+$/, // Allow Latin letters (including Nordic), spaces, apostrophes, and hyphens
      maxlength: 30, // Max 100 characters
      set: encrypt, // Encrypt the address before saving
      get: decrypt
    },
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
