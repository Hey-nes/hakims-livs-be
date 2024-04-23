const crypto = require("crypto");
const encryptionKey = require("../config/encryptionKey");

const IV_LENGTH = 16;

function encrypt(text) {
  try {
    const iv = crypto.randomBytes(IV_LENGTH);

    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(encryptionKey, "hex"),
      iv
    );

    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString("hex") + ":" + encrypted.toString("hex");
  } catch (error) {
    console.error("Error encrypting:", error);
    throw new Error("Failed to encrypt data");
  }
}

function decrypt(text) {
  try {
    const textParts = text.split(":");
    const iv = Buffer.from(textParts.shift(), "hex");
    const encryptedText = Buffer.from(textParts.join(":"), "hex");

    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(encryptionKey, "hex"),
      iv
    );

    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  } catch (error) {
    console.error("Error decrypting:", error);
    throw new Error("Failed to decrypt data");
  }
}

module.exports = { encrypt, decrypt };
