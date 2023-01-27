const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_grupos';
const MODEL_NAME = 'webCurriculosGrupos';

const Schema = {
  idGrupoCurriculo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_grupo_curriculo',
  },
  idSedeCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_curriculos_sedes',
      key: 'id_sede_curriculo',
    },
    field: 'id_sede_curriculo',
  },
  nombreGrupo: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_grupo',
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webSuscripcionesCurriculosGrupos, {
      as: 'curriculosGrupos',
      foreignKey: 'idGrupoCurriculo',
    });
    this.belongsTo(models.webCurriculosSedes, {
      as: 'sede',
      foreignKey: 'idSedeCurriculo',
    });
    this.hasMany(models.webCurriculosGruposVentas, { as: 'ventas', foreignKey: 'idGrupoCurriculo' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
