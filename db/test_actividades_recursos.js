const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_actividades_recursos',
    {
      id_recurso: {
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
        unique: 'test_actividades_recursos_ibfk_1',
      },
      tipo: {
        type: DataTypes.ENUM('audioVisual', 'curso', 'evaluacion', 'autoEvaluacion'),
        allowNull: false,
        defaultValue: 'audioVisual',
      },
      recurso: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Para tipo audioVisual y se refiere al link del recurso',
      },
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Para tipo curso',
        references: {
          model: 'web_cursos',
          key: 'id_curso',
        },
      },
      id_test: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Para tipo  evaluacion o autoEvaluacion',
        references: {
          model: 'test_general',
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
      tableName: 'test_actividades_recursos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_recurso' }],
        },
        {
          name: 'recurso_actividad_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_actividad' }],
        },
        {
          name: 'id_curso',
          using: 'BTREE',
          fields: [{ name: 'id_curso' }],
        },
        {
          name: 'id_test',
          using: 'BTREE',
          fields: [{ name: 'id_test' }],
        },
      ],
    }
  );
};
