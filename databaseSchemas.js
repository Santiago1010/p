const DbValidator = require('./../../../helpers/dbValidator');

const idSchemaFactory = (name, location, Model) => {
  return {
    in: location,
    notEmpty: {
      errorMessage: `${name} requerido`,
      bail: true,
    },
    isInt: {
      errorMessage: `${name} debe ser entero`,
      bail: true,
    },
    custom: {
      options: (id) => DbValidator.existsInModelById(Model, id),
    },
  };
};

module.exports = { idSchemaFactory };
