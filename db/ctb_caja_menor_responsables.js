const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_caja_menor_responsables',
    {
      id_caja_resp: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_caja_menor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_caja_menor',
          key: 'id_caja_menor',
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'ctb_caja_menor_responsables',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_caja_resp' }],
        },
        {
          name: 'caja_menor_responsable_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }, { name: 'id_caja_menor' }],
        },
        {
          name: 'id_caja_menor',
          using: 'BTREE',
          fields: [{ name: 'id_caja_menor' }],
        },
      ],
    }
  );
};
