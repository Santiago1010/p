const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos_ciclos',
    {
      id_suscripcion_curriculo_ciclo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_ciclo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize,
      tableName: 'web_suscripciones_curriculos_ciclos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_ciclo' }],
        },
      ],
    }
  );
};
