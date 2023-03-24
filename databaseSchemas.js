const DbValidator = require('./../../../helpers/dbValidator');

const idSchemaFactory = (name, location, Model, optional = false, paranoid = true) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${name} requerido`,
        bail: true,
      };

  return {
    in: location,
    optional,
    notEmpty,
    isInt: {
      errorMessage: `${name} debe ser entero`,
      bail: true,
    },
    custom: {
      options: (id) => DbValidator.existsInModelById(Model, id, { paranoid }),
    },
  };
};

module.exports = { idSchemaFactory };
