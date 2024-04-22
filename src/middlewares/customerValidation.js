const validateCreateCustomer = (req, res, next) => {
  const { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailRegex)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  next();
};

module.exports = { validateCreateCustomer };
