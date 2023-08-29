const jwt = require('jsonwebtoken');
const initModels = require('../models/db/init-models');
const { sequelize } = require('../database/config');
const ValidatePermission = require('../helpers/validatePermission');
const JwtUtils = require('../helpers/jwtUtils');
const customError = require('../helpers/customError');
const { usuarios } = initModels(sequelize);
const config = require('../config');

const validateJwt = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({
      msg: 'token requerido - 1',
    });
  }
  try {
    const { id } = jwt.verify(token, process.env.PRIVATEKEY);
    const usuario = await usuarios.findOne({
      where: { id },
      /*include: [
        {
          model: Departamentos,
          as: 'departamentos',
          through: { attributes: [] },
          attributes: ['id', 'nombre', 'pqr'],
          where: { activo: 1 },
        },
      ],*/
    });
    if (!usuario) {
      return res.status(401).send({
        msg: 'token no valido - 2',
      });
    }
    req.user = usuario;
    const validatePermission = await ValidatePermission.validateRoute(req.originalUrl, req.method, usuario.id);

    if (!validatePermission) {
      return next(customError('Usuario no tiene permiso para realizar esta acción', 403));
    }

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      msg: 'token no valido - 3',
    });
  }
};

const validateJWTContrato = async (req, res, next) => {
  try {
    const payload = await JwtUtils.check(req, config.contrato.secret);
    req.user = payload.data;

    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  validateJwt,
  validateJWTContrato,
};
