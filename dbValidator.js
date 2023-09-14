// Helper para hacer validaciones en base de datos,
// principalmente cuando se chequea el esquema con express-validator

const { env } = require('../config');

class DbValidator {
  static async existsInModelById(Model, id, { paranoid, attributes } = {}) {
    const optionQuery = {
      attributes: attributes ? attributes : [Model.primaryKeyAttribute],
      paranoid: paranoid != undefined ? paranoid : undefined,
    };
    const element = await Model.findByPk(id, optionQuery);
    if (!element) {
      let msg = env == 'production' ? 'Valor invalido' : `${Model.getTableName()}:Id ${id} no existe`;
      throw new Error(msg);
    }
    return true;
  }

  static async existsInModelByField(Model, fieldname = '', fieldvalue, { paranoid } = {}) {
    let field = {};
    field[`${fieldname}`] = fieldvalue;

    const element = await Model.findOne({ where: field, paranoid: paranoid != undefined ? paranoid : undefined });
    if (!element) {
      let msg = env == 'production' ? `Valor invalido` : `${Model.getTableName()}:Id ${fieldvalue} no existe`;
      throw new Error(msg);
    }
    return true;
  }

  static async uniqueInModelByField(Model, fieldname = '', fieldvalue, { paranoid } = {}) {
    let field = {};
    field[`${fieldname}`] = fieldvalue;
    const element = await Model.findOne({ where: field, paranoid: paranoid != undefined ? paranoid : undefined });
    if (element) {
      let msg = env == 'production' ? 'Valor duplicado' : `${Model.getTableName()}:Id ${fieldvalue} ya existe`;
      throw new Error(msg);
    }
    return true;
  }
}

module.exports = DbValidator;
