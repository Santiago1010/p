const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_solicitudes_ordenes',
    {
      id_solicitud_orden: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_solicitud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_solicitudes',
          key: 'id_solicitud',
        },
      },
      tipo: {
        type: DataTypes.ENUM('interno', 'externo'),
        allowNull: false,
        defaultValue: 'interno',
        comment: 'Tipo de persona ejecutar la orden',
      },
      id_empleado_genera: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_ejecuta: {
        type: DataTypes.STRING(30),
        allowNull: true,
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
      prioridad: {
        type: DataTypes.ENUM('alto', 'medio', 'bajo'),
        allowNull: false,
        defaultValue: 'medio',
      },
      estado: {
        type: DataTypes.ENUM('progeso', 'finalizado'),
        allowNull: false,
        defaultValue: 'progeso',
        comment: 'Estado de la orden de trabajo',
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
      tableName: 'acf_solicitudes_ordenes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_orden' }],
        },
        {
          name: 'id_solicitud',
          using: 'BTREE',
          fields: [{ name: 'id_solicitud' }],
        },
        {
          name: 'id_empleado_genera',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_genera' }],
        },
        {
          name: 'id_empleado_ejecuta',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_ejecuta' }],
        },
        {
          name: 'id_proveedor',
          using: 'BTREE',
          fields: [{ name: 'id_proveedor' }],
        },
      ],
    }
  );
};
