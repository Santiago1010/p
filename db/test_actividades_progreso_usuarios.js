const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_actividades_progreso_usuarios',
    {
      id_progreso: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_actividad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_actividades',
          key: 'id_actividad',
        },
      },
      id_usuario_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_usuarios_empresas',
          key: 'id_usuario_empresa',
        },
      },
      progreso: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '0: pendiente, 1: completado',
      },
      puntaje: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        comment: 'Puntaje de actividades tipo evaluacion o autoEvaluacion',
      },
      id_prueba: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas_test_pruebas',
          key: 'id_prueba',
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
      tableName: 'test_actividades_progreso_usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_progreso' }],
        },
        {
          name: 'id_usuario_empresa',
          using: 'BTREE',
          fields: [{ name: 'id_usuario_empresa' }],
        },
        {
          name: 'id_prueba',
          using: 'BTREE',
          fields: [{ name: 'id_prueba' }],
        },
        {
          name: 'test_actividades_progreso_usuarios_id_actividad_foreign_idx',
          using: 'BTREE',
          fields: [{ name: 'id_actividad' }],
        },
      ],
    }
  );
};
