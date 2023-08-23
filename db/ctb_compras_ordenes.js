const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_compras_ordenes',
    {
      id_orden_compra: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_solicitud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_compras_solicitudes',
          key: 'id_solicitud',
        },
      },
      id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_proveedores',
          key: 'id',
        },
      },
      observacion: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      descuento: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      iva: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      cotizacion: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      cotizacion_ad1: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      cotizacion_ad2: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      id_empleado_autoriza: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha_autoriza: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      observacion_proveedor: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      valoracion_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      observacion_orden: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      valoracion_orden: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      tableName: 'ctb_compras_ordenes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_orden_compra' }],
        },
        {
          name: 'id_solicitud',
          using: 'BTREE',
          fields: [{ name: 'id_solicitud' }],
        },
        {
          name: 'id_proveedor',
          using: 'BTREE',
          fields: [{ name: 'id_proveedor' }],
        },
        {
          name: 'id_empleado_autoriza',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_autoriza' }],
        },
      ],
    }
  );
};
