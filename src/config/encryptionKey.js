// Load the environment variables from the .env file
require('dotenv').config();

// Now you can access the encryption key using process.env
const encryptionKey = process.env.ENCRYPTION_KEY;

module.exports = encryptionKey;
