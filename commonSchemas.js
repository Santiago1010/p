const stringSchema = (nombrePropiedad, location = 'body', optional = true, { max, emptyConditional } = {}) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${nombrePropiedad} requerido`,
          bail: true,
        };

  const isLength = max
    ? {
        errorMessage: `${nombrePropiedad}no debe ser mayor ${max} +  caracteres`,
        options: { max: max },
      }
    : undefined;

  return {
    in: location,
    optional: optional && !emptyConditional,
    notEmpty,
    isString: {
      errorMessage: `${nombrePropiedad} debe ser una cadena de texto`,
      bail: true,
    },
    isLength,
  };
};

const intSchema = (nombrePropiedad, location = 'body', optional = true, { min, max, emptyConditional } = {}) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${nombrePropiedad} requerido`,
          bail: true,
        };

  const optionsInt = min || max ? {} : undefined;
  if (min) {
    optionsInt.min = min;
  }

  if (max) {
    optionsInt.max = max;
  }

  return {
    in: location,
    optional: optional && !emptyConditional,
    notEmpty,
    isInt: {
      errorMessage: `${nombrePropiedad} debe ser entero`,
      bail: true,
      options: optionsInt,
    },
  };
};

const floatSchema = (nombrePropiedad, location = 'body', optional = true, { min, max } = {}) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
        notEmpty: true,
      };

  const optionsFloat = min || max ? {} : undefined;
  if (min) {
    optionsFloat.min = min;
  }

  if (max) {
    optionsFloat.max = max;
  }

  return {
    in: location,
    optional,
    ...(notEmpty && { notEmpty }),
    isFloat: {
      errorMessage: `${nombrePropiedad} debe ser un valor decimal`,
      bail: true,
      options: optionsFloat,
    },
  };
};

const isInSchema = (
  nombrePropiedad,
  location = 'body',
  optional = true,
  options = [0, 1, 2],
  customSanitizer = undefined
) => {
  const errorMessage = `${nombrePropiedad} debe ser ${options.slice(0, -1).join(', ')} o ${options.slice(-1)}`;
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };

  return {
    in: location,
    optional: optional,
    notEmpty,
    isIn: {
      options: [options],
      errorMessage: errorMessage,
    },
    customSanitizer,
  };
};

const booleanSchema = (nombrePropiedad, location, optional = true) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };
  return {
    in: location,
    optional: optional,
    notEmpty,
    isBoolean: {
      errorMessage: `${nombrePropiedad} debe ser un booleano`,
    },
    customSanitizer: {
      options: (value) => !!value,
    },
  };
};

const boolSchema = (nombrePropiedad, location = 'body', optional = true) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };

  return {
    in: location,
    optional,
    ...(notEmpty && { notEmpty }),
    isBoolean: {
      errorMessage: `${nombrePropiedad} debe ser un booleano`,
      bail: true,
    },
  };
};

const arraySchema = (nombrePropiedad, location, optional = true, unique = true) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };

  const customSanitizer = !unique
    ? undefined
    : {
        options: (value) => [...new Set(value)],
      };
  return {
    in: location,
    optional: optional,
    notEmpty,
    isArray: {
      errorMessage: `${nombrePropiedad} debe ser un array`,
    },
    customSanitizer,
  };
};

const objectSchema = (nombrePropiedad, location, optional = true, unique = true) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };

  return {
    in: location,
    optional: optional,
    notEmpty,
    isObject: {
      errorMessage: `${nombrePropiedad} debe ser un objeto`,
    },
  };
};

const dateSchema = (nombrePropiedad, location = 'body', optional = true, isoDate = false) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };

  const isDate = !isoDate
    ? {
        errorMessage: `${nombrePropiedad} debe ser una fecha válida`,
        bail: true,
      }
    : undefined;

  const isISO8601 = isoDate
    ? {
        errorMessage: `${nombrePropiedad} debe ser una fecha válida`,
        bail: true,
      }
    : undefined;
  return {
    in: location,
    optional: optional,
    notEmpty,
    isDate,
    isISO8601,
  };
};

const ordenSchema = (location = 'body', optional = true, min = 1, max = 150) => {
  return {
    in: location,
    optional: optional,
    notEmpty: {
      errorMessage: '`orden` es requerido.',
      bail: true,
    },
    isInt: {
      errorMessage: '`orden` debe ser un entero mayor a ' + parseInt(min) - 1,
      bail: true,
      options: { min: min, max: max },
    },
  };
};

const estadoSchema = (location = 'body', optional = true, options = [0, 1, 2]) => {
  const errorMessage = `\`estado\` debe ser ${options.slice(0, -1).join(', ')} o ${options.slice(-1)}`;
  return {
    in: location,
    optional: optional,
    isIn: {
      options: [options],
      errorMessage: errorMessage,
    },
  };
};

const tipoSchema = (location, optional = true, options = []) => {
  const errorMessage = `\`estado\` debe ser "${options.slice(0, -1).join(', ')}" o "${options.slice(-1)}"`;
  return {
    in: location,
    optional: optional,
    isIn: {
      options: [options],
      errorMessage: errorMessage,
    },
  };
};

const logo = (location, optional = true, max = 150) => {
  return {
    in: location,
    optional: optional,
    notEmpty: {
      errorMessage: '`logo` requerido',
      bail: true,
    },
    isString: {
      errorMessage: '`logo` debe ser una cadena de texto.',
      bail: true,
    },
  };
};

const nombre = (location, optional = true, max = 150) => {
  return {
    in: location,
    optional: optional,
    notEmpty: {
      errorMessage: '`nombre` requerido',
      bail: true,
    },
    isString: {
      errorMessage: '`nombre` debe ser una cadena de texto.',
      bail: true,
    },
    isLength: {
      errorMessage: '`nombre` no debe ser mayor a ' + max + ' caracteres',
      options: { max: max },
    },
  };
};

const descripcion = (location, optional = true) => {
  return {
    in: location,
    optional: optional,
    notEmpty: {
      errorMessage: '`descripcion` requerido',
      bail: true,
    },
    isString: {
      errorMessage: '`descripcion` debe ser una cadena de texto.',
      bail: true,
    },
  };
};

module.exports = {
  ordenSchema,
  estadoSchema,
  logo,
  nombre,
  descripcion,
  tipoSchema,
  stringSchema,
  intSchema,
  isInSchema,
  dateSchema,
  arraySchema,
  booleanSchema,
  boolSchema,
  objectSchema,
  floatSchema,
};
