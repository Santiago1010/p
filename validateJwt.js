const jwt = require('jsonwebtoken');
const initModels = require('../models/db/init-models')
const { sequelize } = require('../database/config')
const { usuarios } = initModels(sequelize)

const validateJwt = async (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) {
    return res.status(401).send({
      msg: 'token requerido - 1'
    })
  }
  try {
    const { id } = jwt.verify(token, process.env.PRIVATEKEY)
    const usuario = await usuarios.findOne({ where: { id } })
    if (!usuario) {
      return res.status(401).send({
        msg: 'token no valido - 2'
      })
    }
    req.user = usuario
    next()
  } catch (error) {
    console.log(error);
    res.status(401).send({
      msg: 'token no valido - 3'
    })
  }
}

module.exports = {
  validateJwt
}
