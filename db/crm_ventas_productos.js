const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'crm_ventas_productos',
    {
      id_venta_producto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'crm_productos',
          key: 'id_producto_promocion',
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      id_venta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'crm_ventas',
          key: 'id_venta',
        },
      },
      id_responsable: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id',
        },
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '0=Enviado, 1=Recibido, 2= Proceso, 3= Entregado, 4= Entregado con observacion, 5=Finalizado',
      },
      fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      observacion_entrega: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      addusr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      addfch: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'crm_ventas_productos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_venta_producto' }],
        },
        {
          name: 'FK_crm_ventas_productos_crm_productos',
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
        {
          name: 'FK_crm_ventas_productos_crm_ventas',
          using: 'BTREE',
          fields: [{ name: 'id_venta' }],
        },
        {
          name: 'FK_crm_ventas_productos_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_responsable' }],
        },
      ],
    }
  );
};
