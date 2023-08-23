const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_traslados',
    {
      id_traslado: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
        type: DataTypes.ENUM('prestamo', 'permanente', 'devolucion'),
        allowNull: false,
        defaultValue: 'permanente',
        comment: 'Traslados de equipos',
      },
      fecha_traslado: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_devolucion: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      justificacion: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      id_ubicacion_origen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_ubicaciones',
          key: 'id_ubicacion',
        },
      },
      id_ubicacion_destino: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'acf_ubicaciones',
          key: 'id_ubicacion',
        },
      },
      tipo_persona: {
        type: DataTypes.ENUM('interno', 'externo'),
        allowNull: false,
        defaultValue: 'interno',
        comment: 'tipo persona quien recibe el traslado',
      },
      id_empleado_genera: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_recibe: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      documento_ext: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      nombres_ext: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      email_ext: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      telefono_ext: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      direccion_ext: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      ubicacion_destino_ext: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      firma_recibe: {
        type: DataTypes.STRING(200),
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
      tableName: 'acf_traslados',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_traslado' }],
        },
        {
          name: 'id_ubicacion_origen',
          using: 'BTREE',
          fields: [{ name: 'id_ubicacion_origen' }],
        },
        {
          name: 'id_ubicacion_destino',
          using: 'BTREE',
          fields: [{ name: 'id_ubicacion_destino' }],
        },
        {
          name: 'id_empleado_genera',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_genera' }],
        },
        {
          name: 'id_empleado_recibe',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_recibe' }],
        },
      ],
    }
  );
};
