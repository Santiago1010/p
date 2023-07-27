const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_eventos_asistencias',
    {
      id_evento_asistencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
      },
      id_evento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_eventos',
          key: 'id_eventos',
        },
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      vista: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      join_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      leave_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      leave_reason: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      ip_address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      network_type: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      user_name: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      device: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      uuid: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      meet_date: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
        comment: '1 = asistion, 2 = no asistio, 3 = con excusa',
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
      tableName: 'web_eventos_asistencias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_evento_asistencia' }],
        },
        {
          name: 'FK_web_eventos_asistencias_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'FK_web_eventos_asistencias_web_eventos',
          using: 'BTREE',
          fields: [{ name: 'id_evento' }],
        },
      ],
    }
  );
};
