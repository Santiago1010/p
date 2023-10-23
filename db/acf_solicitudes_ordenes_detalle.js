const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_solicitudes_ordenes_detalle',
    {
      id_solicitud_orden_detalle: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_solicitud_orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_solicitudes_ordenes',
          key: 'id_solicitud_orden',
        },
      },
      id_solicitud_detalle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_solicitudes_detalle',
          key: 'id_solicitud_detalle',
        },
        unique: 'acf_solicitudes_ordenes_detalle_ibfk_2',
      },
      diagnostico: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      trabajo: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      fecha_trabajo: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      estado: {
        type: DataTypes.ENUM('nueva', 'progreso', 'finalizado'),
        allowNull: false,
        defaultValue: 'nueva',
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
      tableName: 'acf_solicitudes_ordenes_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_orden_detalle' }],
        },
        {
          name: 'id_solicitud_detalle',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_detalle' }],
        },
        {
          name: 'id_solicitud_orden',
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_orden' }],
        },
      ],
    }
  );
};
