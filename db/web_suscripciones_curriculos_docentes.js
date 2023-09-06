const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos_docentes',
    {
      id_suscripcion_curriculo_docente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion_curriculo_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: 'web_suscripciones_curriculos_docentes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_docente' }],
        },
        {
          name: 'FK_web_suscripciones_curriculos_docentes_web_usuarios_empresas',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }, { name: 'id_suscripcion_curriculo_grupo' }],
        },
        {
          name: 'FK_web_suscripciones_curriculos_docentes_grupos',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_grupo' }],
        },
      ],
    }
  );
};
