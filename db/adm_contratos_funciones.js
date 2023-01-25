const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_contratos_funciones',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idfuncion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_funciones',
          key: 'id',
        },
      },
      codcrg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_cargos',
          key: 'codcrg',
        },
      },
      codcontrato: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
          model: 'adm_empleados_contrato',
          key: 'codcontrato',
        },
      },
    },
    {
      sequelize,
      tableName: 'adm_contratos_funciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'adm_contratos_funciones_FK',
          using: 'BTREE',
          fields: [{ name: 'codcrg' }],
        },
        {
          name: 'adm_contratos_funciones_FK_1',
          using: 'BTREE',
          fields: [{ name: 'idfuncion' }],
        },
        {
          name: 'adm_contratos_funciones_FK_codcontrato',
          using: 'BTREE',
          fields: [{ name: 'codcontrato' }],
        },
      ],
    }
  );
};
