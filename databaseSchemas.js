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
  { emptyConditional, type = 'exist' } = {}
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
      options: (fieldValue) =>
        DbValidator.uniqueInModelByField(Model, fieldName, fieldValue, { paranoid, type: type ?? 'exist' }),
    },
  };
};

const stringIdArray = (
  nombrePropiedad,
  location = 'body',
  Model,
  optional = true,
  { min, max, emptyConditional } = {}
) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${nombrePropiedad} requerido`,
          bail: true,
        };

  return {
    in: location,
    optional: emptyConditional ? undefined : optional && !emptyConditional,
    notEmpty,
    custom: {
      options: (stringArrayComma) => {
        const array = stringArrayComma.replace(', ', ',').split(',');
        if (min != undefined || max != undefined) {
          if (min != undefined) {
            if (array.length < min) {
              return Promise.reject(`Mínima cantidad de elementos: ${min}`);
            }
          }
          if (max != undefined) {
            if (array.length > max) {
              return Promise.reject(`Máxima cantidad de elementos: ${max}`);
            }
          }
        }
        return Promise.all(array.map((idElement) => DbValidator.existsInModelById(Model, idElement)));
      },
    },
    customSanitizer: {
      options: (stringArrayComma) => stringArrayComma.replace(', ', ',').split(','),
    },
  };
};

module.exports = { idSchemaFactory, uniqueFieldSchema, stringIdArray };