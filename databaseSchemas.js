const DbValidator = require('./../../../helpers/dbValidator');

const idSchemaFactory = (name, location, Model, optional = false, paranoid = true, { emptyConditional } = {}) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${name} requerido`,
          bail: true,
        };
  return {
    in: location,
    optional: emptyConditional ? undefined : optional && !emptyConditional,
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

const uniqueFieldSchema = (
  name,
  location,
  Model,
  fieldName,
  optional = false,
  paranoid = false,
  { emptyConditional } = {}
) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${name} requerido`,
          bail: true,
        };

  return {
    in: location,
    optional: optional && !emptyConditional,
    notEmpty,
    custom: {
      options: (fieldValue) => DbValidator.uniqueInModelByField(Model, fieldName, fieldValue, { paranoid }),
    },
  };
};

module.exports = { idSchemaFactory, uniqueFieldSchema };
