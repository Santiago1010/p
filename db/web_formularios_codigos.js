const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_formularios_codigos',
    {
      codigo: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
      },
      id_formulario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_formularios',
          key: 'id_formulario',
        },
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
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
      tableName: 'web_formularios_codigos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codigo' }],
        },
        {
          name: 'codigo_formulario_usuario_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario' }, { name: 'id_usuario' }],
        },
        {
          name: 'id_usuario',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
      ],
    }
  );
};
