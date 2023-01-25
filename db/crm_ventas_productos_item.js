const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'crm_ventas_productos_item',
    {
      id_venta_producto_item: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_venta_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'crm_ventas_productos',
          key: 'id_venta_producto',
        },
      },
      nombre_producto_item: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      tipo_responsable: {
        type: DataTypes.ENUM('Interno', 'Externo'),
        allowNull: true,
      },
      nombre_responsable: {
        type: DataTypes.STRING(120),
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '0=Pendiente, 1=Proceso, 2=Finalizado',
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'crm_ventas_productos_item',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_venta_producto_item' }],
        },
        {
          name: 'FK_crm_ventas_productos_item_crm_ventas_productos',
          using: 'BTREE',
          fields: [{ name: 'id_venta_producto' }],
        },
      ],
    }
  );
};
