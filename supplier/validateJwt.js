const jwt = require('jsonwebtoken');
const initModels = require('../../models/db/init-models');
const { sequelize } = require('../../database/config');
const { ctb_proveedores } = initModels(sequelize);

const validateJwt = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({
      msg: 'token requerido - 1',
    });
  }
  try {
    const { id } = jwt.verify(token, process.env.PRIVATEKEY);
    const usuario = await ctb_proveedores.findOne({ where: { id } });
    if (!usuario) {
      return res.status(401).send({
        msg: 'token no valido - 2',
      });
    }
    req.user = usuario;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      msg: 'token no valido - 3',
    });
  }
};

module.exports = {
  validateJwt,
};
