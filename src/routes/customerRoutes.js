const express = require('express');
const router = express.Router();
const {validateCreateCustomer} = require("../middlewares/customerValidation"); 
const { createCustomer, getCustomer, getAllCustomers,updateCustomer, deleteCustomer } = require("../controllers/customerControllers");

router.post('/create', validateCreateCustomer, createCustomer); 
router.get('/:customerId', getCustomer); 
router.get('/', getAllCustomers);
router.put('/:customerId', validateCreateCustomer, updateCustomer);
router.delete('/:customerId', deleteCustomer); 

module.exports = router;
