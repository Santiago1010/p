const { validationResult } = require('express-validator');
const response = require('./../helpers/response');

const { env } = require('../config');

const validateFields = (req, res, next) => {
  const errorFormatter = ({ location, msg, param }) => {
    return env == 'production' ? msg : `${location}[${param}]: ${msg}`;
  };
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return response.error(req, res, errors.array().join(';'), 400);
  }
  return next();
};

const validateFieldsRegistroUsuarios = (req, res, next) => {
  const { usuarios } = req.body;

  if (!usuarios || usuarios?.length == 0) {
    return response.error(req, res, 'No se ingresaron usuarios', 400);
  }

  const errorFormatter = ({ msg, param }) => {
    const newParam = param.split('[')[0].replace('os', 'o');
    const number = param.match(/\[(\d+)\]/);
    const offset = usuarios.length == 1 ? 1 : 2;

    return offset == 1 ? `${msg}` : `${newParam}${number ? `-${parseInt(number[1]) + offset}: ` : ': '}${msg}`;
  };

  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return response.errorWithMesage(req, res, errors.array(), 'Existen errores en los datos ingresados', 400);
  }
  return next();
};

module.exports = {
  validateFields,
  validateFieldsRegistroUsuarios,
};
