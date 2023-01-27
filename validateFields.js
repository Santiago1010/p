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

module.exports = {
  validateFields,
};
