const Customer = require("../models/customerModel");

const createCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, address, phone } = req.body;

  
    const customer = new Customer({
      firstName,
      lastName,
      email,
      address,
      phone,
    });
    await customer.save();
    res
      .status(201)
      .json({ message: "Customer created successfully", customer });
  } catch (error) {
    console.error("Error creating customer:", error);
    res
      .status(500)
      .json({ message: "Failed to create customer", error: error.message });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch customer", error: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Customer updated successfully", updatedCustomer });
  } catch (error) {
    console.error("Error updating customer:", error);
    res
      .status(500)
      .json({ message: "Failed to update customer", error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    await Customer.findByIdAndDelete(customerId);
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Error deleting customer:", error);
    res
      .status(500)
      .json({ message: "Failed to delete customer", error: error.message });
  }
};

module.exports = {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
