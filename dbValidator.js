// Helper para hacer validaciones en base de datos,
// principalmente cuando se chequea el esquema con express-validator
class DbValidator {
  static async existsInModelById(Model, id, { paranoid, attributes } = {}) {
    const optionQuery = {
      attributes: attributes ? attributes : [Model.primaryKeyAttribute],
      paranoid: paranoid != undefined ? paranoid : undefined,
    };
    const element = await Model.findByPk(id, optionQuery);
    if (!element) {
      throw new Error(`${Model.getTableName()}:Id ${id} no existe`);
    }
    return true;
  }

  static async existsInModelByField(Model, fieldname = '', fieldvalue, { paranoid } = {}) {
    let field = {};
    field[`${fieldname}`] = fieldvalue;

    const element = await Model.findOne({ where: field, paranoid: paranoid != undefined ? paranoid : undefined });
    if (!element) {
      throw new Error(`${Model.getTableName()}(${fieldname}):${fieldvalue} no existe`);
    }
    return true;
  }

  static async uniqueInModelByField(Model, fieldname = '', fieldvalue, { paranoid } = {}) {
    let field = {};
    field[`${fieldname}`] = fieldvalue;
    const element = await Model.findOne({ where: field, paranoid: paranoid != undefined ? paranoid : undefined });
    if (element) {
      throw new Error(`${fieldvalue} ya existe en la base de datos`);
    }
    return true;
  }
}

module.exports = DbValidator;
