const limitPageSchema = {
  limit: {
    in: 'query',
    optional: true,
    isInt: {
      errorMessage: 'limit debe ser un entero mayor a cero',
      options: { min: '1' },
    },
  },
  page: {
    in: 'query',
    optional: true,
    isInt: {
      errorMessage: 'page debe ser un entero mayor a cero',
      options: { min: '1' },
    },
  },
};

module.exports = { limitPageSchema };
