const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_test',
    {
      id_suscripcion_test: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      categoria: {
        type: DataTypes.ENUM('Basico', 'Avanzado'),
        allowNull: true,
        defaultValue: 'Basico',
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
      tableName: 'web_suscripciones_test',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_test' }],
        },
        {
          name: 'id_test_id_suscripcion',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
      ],
    }
  );
};
