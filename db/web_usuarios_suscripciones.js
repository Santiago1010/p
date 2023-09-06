const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_suscripciones',
    {
      id_usuario_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_suscripcion: {
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
      tableName: 'web_usuarios_suscripciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_suscripcion' }],
        },
        {
          name: 'id_usuario_id_escuela',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }, { name: 'id_suscripcion' }],
        },
        {
          name: 'FK__web_escuelas',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
      ],
    }
  );
};
