const { ValidationError } = require('sequelize');
const response = require('./../helpers/response');

class ErrorHandler {
  static logErrors(err, req, res, next) {
    console.error('[Error]', err);
    return next(err);
  }

  static ormErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
      return response.error(req, res, err.name, 409);
    }
    return next(err);
  }

  static errorHandler(err, req, res, next) {
    const message = err.message || 'Internal server error';
    const statusCode = err.statusCode || 500;
    return response.error(req, res, message, statusCode);
  }
}

module.exports = ErrorHandler;
