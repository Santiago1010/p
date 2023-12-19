const initModels = require('../models/db/init-models');
const { sequelize } = require('../database/config');
const {
  usuarios,
  calendario,
  tienda_bodegas,
  tienda_categorias,
  tienda_productos,
  usuarios_permisos_opciones,
  opciones,
  admision_procesos_usuarios,
} = initModels(sequelize);
const { Op } = require('sequelize');

const emailExists = async (email = '') => {
  // Verificar si el email existe
  const existsEmail = await usuarios.findOne({ where: { email } });
  if (existsEmail) {
    throw new Error(`El email: ${email}, ya está registrado`);
  }
};

const calendarIDExists = async (id) => {
  const existeCalendario = await calendario.findOne({ where: { id, fecha_fin: { [Op.gt]: new Date() } } });
  if (!existeCalendario) {
    throw new Error(`Acción no permitida, fecha del evento ya ha finalizado`);
  }
};

const bodegaIDExists = async (id) => {
  const existeBodega = await tienda_bodegas.findOne({ where: { id } });
  if (!existeBodega) {
    throw new Error(`Acción no permitida, id no encontrado`);
  }
};

const categoriaIDExists = async (id) => {
  const existe = await tienda_categorias.findOne({ where: { id } });
  if (!existe) {
    throw new Error(`Acción no permitida, id no encontrado`);
  }
};

const productoIDExists = async (id) => {
  const existe = await tienda_productos.findOne({ where: { id } });
  if (!existe) {
    throw new Error(`Acción no permitida, id no encontrado`);
  }
};

const validarOpcion = async (path, method, user) => {
  const permiso = await usuarios_permisos_opciones.findOne({
    where: { id_usuario: user, metodo: method },
    include: [
      {
        model: opciones,
        as: 'id_opcion_opcione',
        required: true,
        attributes: [],
        where: {
          url_api: path,
        },
      },
    ],
  });

  return permiso;
};

const validarPermisoProceso = async (proceso, user) => {
  const permiso = await admision_procesos_usuarios.findOne({
    where: { id_usuario: user, proceso },
  });
  return permiso;
};

module.exports = {
  emailExists,
  calendarIDExists,
  bodegaIDExists,
  categoriaIDExists,
  productoIDExists,
  validarOpcion,
  validarPermisoProceso,
};
