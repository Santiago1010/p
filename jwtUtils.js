const jwt = require('jsonwebtoken');
const error = require('./customError');

class JwtUtils {
  static async check(req, secret) {
    try {
      const token = req.headers.authorization || '';
      if (!token) {
        throw error('Token requerido - 1', 401);
      }
      const payload = jwt.verify(token, secret);
      return payload;
    } catch (err) {
      if (err.message !== 'Token requerido - 1') {
        err.messOriginal = err.message;
        err.message = 'Error verificando token';
        err.statusCode = 401;
      }
      throw err;
    }
  }

  static async create(id = '', data = {}, secret, { expiresIn } = {}) {
    const payload = { id, date: new Date().getUTCMilliseconds(), data };
    const token = jwt.sign(payload, secret, { expiresIn: expiresIn || '12h' });
    return token;
  }

  static async verify(token, secret) {
    try {
      const payload = jwt.verify(token, secret);
      return payload;
    } catch (err) {
      err.messOriginal = err.message;
      err.message = 'Error verificando token';
      err.statusCode = 401;
      throw err;
    }
  }
}
module.exports = JwtUtils;
