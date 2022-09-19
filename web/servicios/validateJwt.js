const jwt = require('jsonwebtoken');

const validateJwt = async (req, res, next) => {
  const token = req.body.token || req.header('Authorization')
  if (!token) {
    return res.status(401).send({
      msg: 'token requerido - 1'
    })
  }
  try {
    const { id, datos } = jwt.verify(token, process.env.PRIVATEKEY)
    req.user = { id, datos }
    next()
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      msg: 'token no valido - 3'
    })
  }
}

module.exports = {
  validateJwt
}
