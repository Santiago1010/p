const { validationResult } = require('express-validator');
const response = require('./../helpers/response');

const validateFields = (req, res, next) => {
  const errorFormatter = ({ location, msg, param }) => {
    return `${location}[${param}]: ${msg}`;
  };
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return response.error(req, res, errors.array().join(';'), 400);
  }
  return next();
};

const validateFieldsPretty = (req, res, next) => {
  const errorFormatter = ({ msg, param }) => {
    const newParam = param.split('[')[0].replace('os', 'o');
    const number = param.match(/\[(\d+)\]/);
    return `${newParam}${number ? `-${parseInt(number[1]) + 1}` : ''}: ${msg}`;
  };
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return response.errorWithMesage(req, res, errors.array(), 'Existen errores en los datos ingresados', 400);
  }
  return next();
};

module.exports = {
  validateFields,
  validateFieldsPretty,
};
