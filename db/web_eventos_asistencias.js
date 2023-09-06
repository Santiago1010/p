const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_eventos_asistencias',
    {
      id_evento_asistencia: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Id del usuario ligado a la asistencia, null si no hay usuario ligado',
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
      },
      id_evento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Id del evento asociado a la asistencia',
        references: {
          model: 'web_eventos',
          key: 'id_eventos',
        },
      },
      nombre: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: 'Nombre del usuario desde Zoom',
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: 'Email del usuario desde Zoom',
      },
      tipo: {
        type: DataTypes.ENUM('enVivo', 'grabacion'),
        allowNull: false,
        defaultValue: 'enVivo',
        comment: 'Tipo de asistencia del usuario al evento',
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
          name: 'id_usuario_evento_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }, { name: 'id_evento' }],
        },
        {
          name: 'email_evento_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'email' }, { name: 'id_evento' }],
        },
        {
          name: 'web_eventos_asistencias_id_evento_foreign_idx',
          using: 'BTREE',
          fields: [{ name: 'id_evento' }],
        },
      ],
    }
  );
};
