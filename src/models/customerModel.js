const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    match: /^[a-zA-Z\u00C0-\u00FF -']+$/,
    maxlength: [50, 'First name must be at most 50 characters'] 
  },
  lastName: {
    type: String,
    required: true,
    match: /^[a-zA-Z\u00C0-\u00FF -']+$/, 
    maxlength:  [50, 'First name must be at most 50 characters'] 
  
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    maxlength: [50, 'Email must be at most 50 characters'],
    minlength: [5, 'Email must be at least 5 characters'], 
  },
  address: {
    street: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9\u00C0-\u00FF -']+$/,
      maxlength: [50, 'Address must be at most 50 characters'],

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
      match: /^[a-zA-Z\s'-]+$/,
      maxlength: 30, 
   
    },
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
