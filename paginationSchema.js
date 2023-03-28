const limitPageSchema = {
  limit: {
    in: 'query',
    optional: true,
    isInt: {
      errorMessage: 'limit debe ser un entero mayor a cero',
      options: { min: 1 },
      bail: true,
    },
  },
  page: {
    in: 'query',
    optional: true,
    isInt: {
      errorMessage: 'page debe ser un entero mayor a cero',
      options: { min: 1 },
      bail: true,
    },
  },
};

module.exports = { limitPageSchema };
