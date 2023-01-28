const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js');

class PasswordUtils {
  static async encrypt(password) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  static async compare(password, hash) {
    const isValidPassword = await bcrypt.compare(password, hash);
    return isValidPassword;
  }

  static async encryptSha1(password) {
    const hash = CryptoJS.SHA1(password);
    const string = CryptoJS.enc.Hex.stringify(hash);
    return string;
  }
}

module.exports = PasswordUtils;
