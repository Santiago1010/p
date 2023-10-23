const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_solicitudes',
    {
      id_solicitud: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_genera: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_area_resp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_areas_responsables',
          key: 'id_area_resp',
        },
      },
      tipo: {
        type: DataTypes.ENUM(
          'desinstalacion',
          'instalacion',
          'correctivo',
          'preventivo',
          'seguimiento',
          'predictivo',
          'capacitacion'
        ),
        allowNull: false,
        defaultValue: 'correctivo',
      },
      descripcion: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM('nueva', 'progreso', 'entregada', 'finalizada', 'denegada'),
        allowNull: false,
        defaultValue: 'nueva',
        comment: 'Estado de la solicitud',
      },
      justificacion_denegada: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      id_plan_mantenimiento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'acf_plan_mantenimiento',
          key: 'id_plan_mantenimiento',
        },
      },
      fecha: {
        type: DataTypes.DATEONLY,
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
      tableName: 'acf_solicitudes',
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
          name: 'id_area_resp',
          using: 'BTREE',
          fields: [{ name: 'id_area_resp' }],
        },
        {
          name: 'id_plan_mantenimiento',
          using: 'BTREE',
          fields: [{ name: 'id_plan_mantenimiento' }],
        },
        {
          name: 'acf_solicitudes_id_empleado_genera_foreign_idx',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_genera' }],
        },
      ],
    }
  );
};
