const { ValidationError } = require('sequelize');
const response = require('./../helpers/response');
const fs = require('fs');
const path = require('path');
const config = require('./../config');

class ErrorHandler {
  static logErrors(err, req, res, next) {
    console.error('[Error]', err);
    if (config.env == 'production') {
      const errorLogStream = fs.createWriteStream(path.join(__dirname, '../logs/error.log'), { flags: 'a' });
      errorLogStream.write(`[Error]-${new Date().toUTCString()}-${err.message}-${err.stack}\n`); // Log the error stack trace
    }
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
