const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_eventos_categorias',
    {
      id_suscripcion_evento_categoria: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
      },
      id_evento_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_eventos_categorias',
          key: 'id_evento_categoria',
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
      tableName: 'web_suscripciones_eventos_categorias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_evento_categoria' }],
        },
        {
          name: 'id_suscripcion',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
        {
          name: 'id_evento_categoria',
          using: 'BTREE',
          fields: [{ name: 'id_evento_categoria' }],
        },
      ],
    }
  );
};
