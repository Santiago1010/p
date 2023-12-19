const jwt = require('jsonwebtoken');
const jwtCreate = (id = '', datos = {}) => {
  return new Promise((resolve, reject) => {
    const payload = { id, date: new Date().getUTCMilliseconds(), datos };
    jwt.sign(
      payload,
      process.env.PRIVATEKEY,
      {
        expiresIn: '12h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(new Error('No se pudo generar el token'));
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  jwtCreate,
};
