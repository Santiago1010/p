const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_test',
    {
      id_suscripcion_test: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_test: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'test_general',
          key: 'id',
        },
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
      },
      categoria: {
        type: DataTypes.ENUM('Basico', 'Avanzado'),
        allowNull: true,
        defaultValue: 'Basico',
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
          fields: [{ name: 'id_test' }, { name: 'id_suscripcion' }],
        },
        {
          name: 'FK_web_suscripciones_test_web_suscripciones',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
      ],
    }
  );
};
