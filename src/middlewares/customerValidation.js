const validateCreateCustomer = (req, res, next) => {
  const { firstName, lastName, email, address, phone } = req.body;

  if (!firstName || !lastName || !email || !address || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailRegex)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const phoneRegex = /^\d{10,15}$/;
  if (!phone.match(phoneRegex)) {
    return res.status(400).json({ message: "Invalid phone number format" });
  }

  if (typeof address !== "string" || address.trim() === "") {
    return res.status(400).json({ message: "Invalid address format" });
  }

  next();
};

module.exports = {validateCreateCustomer}; 
