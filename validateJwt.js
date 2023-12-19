const jwt = require('jsonwebtoken');
const { sequelize } = require('../database/config');
const ValidatePermission = require('../helpers/validatePermission');
const JwtUtils = require('../helpers/jwtUtils');
const customError = require('../helpers/customError');
const { usuarios, ctbProveedores } = sequelize.models;
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

const validateProveedoresJwt = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).send({
      msg: 'Token requerido - 1',
    });
  }

  const { data } = jwt.decode(token);

  try {
    const { id } = jwt.verify(token, process.env[data ? 'PROVEEDORES_JWT_SECRET' : 'PRIVATEKEY']);

    if (data) {
      const proveedor = await ctbProveedores.findOne({
        where: { id },
      });

      if (proveedor) {
        req.proveedor = proveedor;
        const validatePermission = await ValidatePermission.validateRoute(req.originalUrl, req.method, proveedor.id);

        if (!validatePermission) {
          return next(customError('Proveedor no tiene permiso para realizar esta acción', 403));
        }
      } else {
        throw new Error('Proveedor no encontrado');
      }
    } else if (!data) {
      const usuario = await usuarios.findOne({
        where: { id },
      });

      if (usuario) {
        req.user = usuario;
        const validatePermission = await ValidatePermission.validateRoute(req.originalUrl, req.method, usuario.id);

        if (!validatePermission) {
          return next(customError('Usuario no tiene permiso para realizar esta acción', 403));
        }
      } else {
        throw new Error('Usuario no encontrado');
      }
    } else {
      throw new Error('Tipo de usuario no válido');
    }

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      msg: 'Token no válido - 3',
    });
  }
};

module.exports = {
  validateJwt,
  validateJWTContrato,
  validateProveedoresJwt,
};
