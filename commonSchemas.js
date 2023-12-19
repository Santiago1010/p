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
        errorMessage: `${nombrePropiedad} no debe ser mayor a ${max} caracteres`,
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

const arrayStringSchema = (
  nombrePropiedad,
  location = 'body',
  optional = true,
  options = [],
  { min, max, emptyConditional } = {}
) => {
  const errorMessage = `${nombrePropiedad} debe ser ${options.slice(0, -1).join(', ')} o ${options.slice(-1)}`;
  // Verificar filtros con strings separados por coma
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
      options: (arrayString) => {
        const array = arrayString.replace(', ', ',').split(',');
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

        return array.every((option) => options.includes(option));
      },
      errorMessage,
    },
    customSanitizer: {
      options: (stringArrayComma) => stringArrayComma.replace(', ', ',').split(','),
    },
  };
};

const passwordSchema = (nombrePropiedad, location = 'body', optional = true, { min = 16 } = {}) => {
  const notEmpty = optional
    ? undefined
    : {
        errorMessage: `${nombrePropiedad} requerido`,
        bail: true,
      };

  min = process.env.NODE_ENV === 'development' ? 6 : min;

  const isLength = {
    errorMessage: `${nombrePropiedad} debe tener al menos ${min} caracteres`,
    options: { min },
  };

  const containsNumber = (value) => {
    const cantidadNumeros = process.env.NODE_ENV === 'development' ? 1 : 4;
    const regex = /\d/g;

    const numerosEncontrados = (value.match(regex) || []).length;

    if (numerosEncontrados < cantidadNumeros)
      throw new Error(`${nombrePropiedad} debe tener mínimo ${cantidadNumeros} números`);

    return true;
  };

  const containsPunctuation = (value) => {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;

    const puntuacionEncontrada = (value.match(regex) || []).length;

    if (puntuacionEncontrada < 2) throw new Error(`${nombrePropiedad} debe tener mínimo 2 signos de puntuación`);

    return true;
  };

  const containsSpecialChar = (nombrePropiedad, value) => {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!regex.test(value)) throw new Error(`${nombrePropiedad} debe tener mínimo 1 caracter de puntuación`);

    return true;
  };

  const rules = {
    in: location,
    optional,
    notEmpty,
    isString: {
      errorMessage: `${nombrePropiedad} debe ser una cadena de texto`,
      bail: true,
    },
    isLength,
    custom: {
      options: (value) =>
        process.env.NODE_ENV === 'development'
          ? containsNumber(value)
          : containsNumber(value) && containsPunctuation(value) && containsSpecialChar(value),
    },
  };

  return rules;
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

  const optionsInt = min !== undefined || max !== undefined ? {} : undefined;

  let errorMessage = `${nombrePropiedad} debe ser un valor entero`;
  if (min !== undefined) {
    optionsInt.min = min;
    errorMessage += ` mayor o igual a ${min}`;
  }

  if (max !== undefined) {
    optionsInt.max = max;
    errorMessage += `${min !== undefined ? ' y' : ''} menor o igual a ${max}`;
  }

  return {
    in: location,
    optional: optional && !emptyConditional,
    notEmpty,
    isInt: {
      errorMessage: errorMessage,
      bail: true,
      options: optionsInt,
    },
  };
};

const floatSchema = (nombrePropiedad, location = 'body', optional = true, { min, max, emptyConditional } = {}) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${nombrePropiedad} requerido`,
          bail: true,
        };

  const optionsFloat = min !== undefined || max !== undefined ? {} : undefined;

  let errorMessage = `${nombrePropiedad} debe ser un valor decimal`;
  if (min !== undefined) {
    optionsFloat.min = min;
    errorMessage += ` mayor o igual a ${min}`;
  }

  if (max !== undefined) {
    optionsFloat.max = max;
    errorMessage += `${min !== undefined ? ' y' : ''} menor o igual a ${max}`;
  }

  return {
    in: location,
    optional: optional && !emptyConditional,
    ...(notEmpty && { notEmpty }),
    isFloat: {
      errorMessage: errorMessage,
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
  customSanitizer = undefined,
  { emptyConditional } = {}
) => {
  const errorMessage = `${nombrePropiedad} debe ser ${options.slice(0, -1).join(', ')} o ${options.slice(-1)}`;
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
    optional: optional && !emptyConditional,
    notEmpty,
    isIn: {
      options: [options],
      errorMessage: errorMessage,
    },
    customSanitizer,
  };
};

const booleanSchema = (nombrePropiedad, location, optional = true, { emptyConditional } = {}) => {
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
    optional: optional && !emptyConditional,
    ...(notEmpty && { notEmpty }),
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
    customSanitizer: {
      options: (value) => !!value,
    },
  };
};

const arraySchema = (nombrePropiedad, location, optional = true, unique = true, { emptyConditional } = {}) => {
  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
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
    optional: optional && !emptyConditional,
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

const dateSchema = (
  nombrePropiedad,
  location = 'body',
  optional = true,
  isoDate = false,
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

  const minDate = min
    ? {
        isAfter: min,
        errorMessage: `${nombrePropiedad} debe ser posterior a ${min}`,
        bail: true,
      }
    : undefined;

  const maxDate = max
    ? {
        isBefore: max,
        errorMessage: `${nombrePropiedad} debe ser anterior a ${max}`,
        bail: true,
      }
    : undefined;

  return {
    in: location,
    optional: optional,
    notEmpty,
    isDate,
    isISO8601,
    custom: {
      options: (value) => {
        if (minDate && new Date(value) < new Date(min)) {
          throw new Error(`${nombrePropiedad} debe ser posterior a ${min}`);
        }

        if (maxDate && new Date(value) > new Date(max)) {
          throw new Error(`${nombrePropiedad} debe ser anterior a ${max}`);
        }
        return true;
      },
    },
  };
};

const dateRangeSchema = (nombrePropiedad, location, optional = true, { min, max, emptyConditional } = {}) => {
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
    optional: optional,
    notEmpty,
    custom: {
      options: (value) => {
        const regex = /^(\d{4}-\d{2}-\d{2})\s*[-,]\s*(\d{4}-\d{2}-\d{2})$/;

        const fechas = value.match(regex);

        if (!fechas) {
          throw new Error('Formato de rango de fechas inválido');
        }

        const fechaInicio = new Date(fechas[1]).getTime();
        const fechaFin = new Date(fechas[2]).getTime();

        if (isNaN(fechaInicio) || isNaN(fechaFin)) {
          throw new Error('Fechas inválidas en el rango');
        }

        let mensajeMinMax = '';

        if (min && fechaInicio < new Date(min).getTime()) {
          mensajeMinMax += `La fecha inicial es menor a ${min}`;
        }

        if (max && fechaFin > new Date(max).getTime()) {
          mensajeMinMax += mensajeMinMax !== '' ? ' y la ' : 'La ';

          mensajeMinMax += `fecha final es mayor a ${max}`;
        }

        if (mensajeMinMax !== '') {
          throw new Error(mensajeMinMax);
        }

        return true;
      },
    },
  };
};

const isBase64Schema = (nombrePropiedad, location, optional = true, type, { emptyConditional } = {}) => {
  // Función para verificar si una cadena Base64 representa una imagen
  const isBase64Image = (base64String) => {
    // Expresión regular para verificar si la cadena comienza con "data:image" y tiene el formato adecuado
    var imageRegex = /^data:image\/(jpeg|jpg|png|gif);base64,/;
    return imageRegex.test(base64String);
  };

  // Función para verificar si una cadena Base64 representa un documento
  const isBase64Document = (base64String) => {
    // Expresión regular para verificar si la cadena comienza con "data:application" y tiene el formato adecuado
    var documentRegex = /^data:application\/(pdf|docx);base64,/;
    return documentRegex.test(base64String);
  };

  const notEmpty =
    optional && !emptyConditional
      ? undefined
      : {
          if: emptyConditional ?? undefined,
          errorMessage: `${nombrePropiedad} requerido`,
          bail: true,
        };

  const base64Check = (value) => {
    if (type === 'imagen') {
      return isBase64Image(value);
    } else if (type === 'documento') {
      return isBase64Document(value);
    }

    // Tipo no reconocido
    return false;
  };

  return {
    in: location,
    optional: optional && !emptyConditional,
    ...(notEmpty && { notEmpty }),
    custom: {
      options: (value) => {
        return base64Check(value);
      },
      errorMessage: `${nombrePropiedad} no cumple con los requisitos de seguridad o no es del tipo especificado`,
    },
  };
};

// -------------------------------------------------------------------------------------------------------------------------- //

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
  dateRangeSchema,
  arraySchema,
  booleanSchema,
  boolSchema,
  objectSchema,
  floatSchema,
  passwordSchema,
  arrayStringSchema,
  isBase64Schema,
};
