const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_compras_solicitudes',
    {
      id_solicitud: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM('nueva', 'aprobada', 'denegada', 'tramite', 'progreso', 'entregada'),
        allowNull: false,
        defaultValue: 'nueva',
        comment: 'Estado de solicitud',
      },
      descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      observacion_denegada: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'departamentos',
          key: 'id',
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
      tableName: 'ctb_compras_solicitudes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud' }],
        },
        {
          name: 'id_empleado',
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }],
        },
        {
          name: 'id_departamento',
          using: 'BTREE',
          fields: [{ name: 'id_departamento' }],
        },
      ],
    }
  );
};
