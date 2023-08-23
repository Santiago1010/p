const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_insumos_productos_lugares',
    {
      id_producto_lugar: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_productos',
          key: 'id_producto',
        },
      },
      id_lugar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_lugares',
          key: 'id_lugar',
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Stock actual del producto en un lugar especifico',
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
      tableName: 'adm_insumos_productos_lugares',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_producto_lugar' }],
        },
        {
          name: 'id_producto',
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
        {
          name: 'id_lugar',
          using: 'BTREE',
          fields: [{ name: 'id_lugar' }],
        },
      ],
    }
  );
};
