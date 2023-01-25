const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'evl_autempleados',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codevl: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
          model: 'gnr_parametros',
          key: 'codpar',
        },
      },
      codpreg: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pelv_indicadores',
          key: 'id',
        },
      },
      respreg: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      desresp: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      codevld: {
        type: DataTypes.STRING(20),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      codplanilla: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pevl_evaluacion_grupos',
          key: 'id',
        },
      },
      fchapl: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'evl_autempleados',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_evl_autempleados_adm_empleados',
          using: 'BTREE',
          fields: [{ name: 'codevl' }],
        },
        {
          name: 'FK_evl_autempleados_gnr_parametros',
          using: 'BTREE',
          fields: [{ name: 'codevld' }],
        },
        {
          name: 'FK_evl_autempleados_pevl_evaluacion_grupos',
          using: 'BTREE',
          fields: [{ name: 'codplanilla' }],
        },
        {
          name: 'FK_evl_autempleados_pelv_indicadores',
          using: 'BTREE',
          fields: [{ name: 'codpreg' }],
        },
      ],
    }
  );
};
