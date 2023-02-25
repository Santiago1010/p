// Helper para hacer validaciones en base de datos,
// principalmente cuando se chequea el esquema con express-validator
class DbValidator {
  static async existsInModelById(Model, id, { paranoid } = {}) {
    const optionQuery = {
      paranoid: paranoid != undefined ? paranoid : undefined,
    };
    const element = await Model.findByPk(id, optionQuery);
    if (!element) {
      throw new Error(`${Model.getTableName()}:Id ${id} no existe`);
    }
    return true;
  }

  static async existsInModelByField(Model, fieldname = '', fieldvalue) {
    let field = {};
    field[`${fieldname}`] = fieldvalue;

    const element = await Model.findOne({ where: field });
    if (!element) {
      throw new Error(`${Model.getTableName()}(${fieldname}):${fieldvalue} no existe`);
    }
    return true;
  }

  static async uniqueInModelByField(Model, fieldname = '', fieldvalue) {
    let field = {};
    field[`${fieldname}`] = fieldvalue;
    const element = await Model.findOne({ where: field });
    if (element) {
      throw new Error(`${Model.getTableName()}(${fieldname}):${fieldvalue} ya existe en la base de datos`);
    }
    return true;
  }
}

module.exports = DbValidator;
