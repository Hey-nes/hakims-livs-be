const Order = require("../models/orderModel");
const { encrypt, decrypt } = require("../utils/encryption");

const createOrder = async (req, res) => {
  try {
    const orderData = req.body;

    const encryptedCreditCardNumber = encrypt(
      orderData.customerInfo.creditCardNumber
    );
    orderData.customerInfo.creditCardNumber = encryptedCreditCardNumber;

    const order = new Order(orderData);

    const savedOrder = await order.save();

    const decryptedCreditCardNumber = decrypt(
      savedOrder.customerInfo.creditCardNumber
    );
    savedOrder.customerInfo.creditCardNumber = decryptedCreditCardNumber;

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders", error: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch order", error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    res
      .status(500)
      .json({ message: "Failed to update order", error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    await Order.findByIdAndDelete(orderId);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res
      .status(500)
      .json({ message: "Failed to delete order", error: error.message });
  }
};

module.exports = { createOrder, getOrder, updateOrder, deleteOrder, getAllOrders };
