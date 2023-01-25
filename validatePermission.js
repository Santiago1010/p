const initModels = require('../models/db/init-models');
const { sequelize } = require('../database/config');
const { usuarios_permisos_opciones, opciones } = initModels(sequelize);
const { validarOpcion } = require('../helpers/dbValidators');

const validatePermission = async (req, res, next) => {
  // validar si el usuario tiene permiso
  const { id, nombre } = req.user;
  let { method, path } = req.body;
  if (!method && !path) {
    method = req.method;
    path = req.path;
  }

  console.log('validando', path);
  const permiso = await validarOpcion(path, method, id);

  /*
    usuarios_permisos_opciones.findOne({
        where: { id_usuario: id, metodo: method },
        include: [
            {
                model: opciones,
                as: "id_opcion_opcione",
                required: true,
                attributes: [],
                where: {
                    url_api: path
                }
            }
        ]
    })
    */

  if (!permiso) {
    return res.status(400).json({
      msg: `${nombre}, usted no tiene permiso para realizar esta acción`,
    });
  }

  next();
};

module.exports = {
  validatePermission,
};
