const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_insumos_ordenes',
    {
      id_orden: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
        type: DataTypes.ENUM('entrada', 'salida'),
        allowNull: false,
        defaultValue: 'entrada',
        comment: 'Ingreso y salidas de insumos',
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: 'Empleado que genera la orden',
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_proveedores',
          key: 'id',
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
      observacion: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      precio_total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      tipo_persona: {
        type: DataTypes.ENUM('interno', 'externo'),
        allowNull: false,
        defaultValue: 'interno',
        comment: 'Tipo persona que recibe la orden',
      },
      documento: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      celular: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      firma_recibe: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      fecha_recibido: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      nro_factura: {
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
      tableName: 'adm_insumos_ordenes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_orden' }],
        },
        {
          name: 'id_empleado',
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }],
        },
        {
          name: 'id_proveedor',
          using: 'BTREE',
          fields: [{ name: 'id_proveedor' }],
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
