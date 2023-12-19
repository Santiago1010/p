const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_recomendaciones';
const MODEL_NAME = 'testRecomendaciones';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  categoria: {
    type: DataTypes.ENUM('estandar', 'especial'),
    allowNull: true,
    defaultValue: 'estandar',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.testRecomendacionesDetalle, { as: 'detalles', foreignKey: 'idRecomendacion' });
    this.belongsToMany(models.testCerebros, {
      through: { model: models.testRecomendacionesDetalle },
      as: 'cerebros',
      foreignKey: 'idRecomendacion',
    });
    this.belongsToMany(models.webEmpresas, {
      through: { model: models.webEmpresasTestRecomendaciones },
      as: 'empresas',
      foreignKey: 'idRecomendacion',
    });
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
