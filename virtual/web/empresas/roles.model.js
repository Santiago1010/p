'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_roles';
const MODEL_NAME = 'webEmpresasRoles';

const Schema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  descripcion: DataTypes.STRING(100),
  idEmpresa: {
    field: 'id_empresa',
    type: DataTypes.INTEGER,
  },
  estado: DataTypes.INTEGER,
  estadoString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Pendiente',
        1: 'Progreso',
        2: 'Finalizado',
        3: 'Aprobado',
      };
      const estado = this.getDataValue('estado');
      return dicEstado[estado];
    },
  },
  addusr: DataTypes.STRING(50),
  fchadd: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.hasMany(models.webUsuariosEmpresas, { as: 'usuarios', foreignKey: 'rolEmpresa' });
    this.belongsToMany(models.testSessionReportes, {
      through: { model: models.webEmpresasTestReportes },
      as: 'reportes',
      foreignKey: 'rolEmpresa',
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
