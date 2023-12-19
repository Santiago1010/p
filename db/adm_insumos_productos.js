const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_insumos_productos',
    {
      id_producto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_productos_categorias',
          key: 'id_categoria',
        },
      },
      nombre: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      presentacion: {
        type: DataTypes.ENUM('caja', 'unidad'),
        allowNull: false,
        defaultValue: 'unidad',
        comment: 'Presentación de productos segun su empaque',
      },
      stock_minimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Stock minimo para validar existencias para compras',
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
      tableName: 'adm_insumos_productos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
        {
          name: 'id_categoria',
          using: 'BTREE',
          fields: [{ name: 'id_categoria' }],
        },
      ],
    }
  );
};
