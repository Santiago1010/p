class Response {
  static success(req, res, message, data = {}, status = 200) {
    res.status(status).send({
      statusCode: status,
      error: '',
      msg: message,
      data: data,
    });
  }

  static error(req, res, message, status = 500) {
    res.status(status).send({
      statusCode: status,
      error: message,
      msg: '',
      data: {},
    });
  }

  static errorWithData(req, res, message, data, status = 500) {
    res.status(status).send({
      statusCode: status,
      error: message,
      msg: '',
      data: data,
    });
  }

  static errorWithMesage(req, res, error, message, status = 500) {
    res.status(status).send({
      statusCode: status,
      error: error,
      msg: message,
      data: {},
    });
  }
}

module.exports = Response;
