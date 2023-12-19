const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'crm_productos_responsables',
    {
      id_producto_responsable: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'crm_productos',
          key: 'id_producto',
        },
      },
      id_responsable: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
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
      tableName: 'crm_productos_responsables',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_producto_responsable' }],
        },
        {
          name: 'producto_responsable_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_producto' }, { name: 'id_responsable' }],
        },
        {
          name: 'id_responsable',
          using: 'BTREE',
          fields: [{ name: 'id_responsable' }],
        },
      ],
    }
  );
};
