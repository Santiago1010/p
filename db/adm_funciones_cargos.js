const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_funciones_cargos',
    {
      idcargo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'adm_cargos',
          key: 'codcrg',
        },
      },
      idfuncion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'adm_funciones',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'adm_funciones_cargos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idcargo' }, { name: 'idfuncion' }],
        },
        {
          name: 'FK_adm_funciones_cargos_adm_funciones',
          using: 'BTREE',
          fields: [{ name: 'idfuncion' }],
        },
      ],
    }
  );
};
