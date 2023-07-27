const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_evaluaciones_resgeneral',
    {
      id_resgeneral: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_evaluacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_curriculos_evaluaciones',
          key: 'id_evaluacion',
        },
      },
      id_web_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Respuesta estudiante evaluación de referencia',
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
      },
      id_biz_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Respuesta docente evaluación de seguimiento',
        references: {
          model: 'biz_usuarios',
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
      tableName: 'web_curriculos_evaluaciones_resgeneral',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_resgeneral' }],
        },
        {
          name: 'id_evaluacion',
          using: 'BTREE',
          fields: [{ name: 'id_evaluacion' }],
        },
        {
          name: 'id_web_usuario',
          using: 'BTREE',
          fields: [{ name: 'id_web_usuario' }],
        },
        {
          name: 'id_biz_usuario',
          using: 'BTREE',
          fields: [{ name: 'id_biz_usuario' }],
        },
      ],
    }
  );
};
