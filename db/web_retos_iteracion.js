const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_retos_iteracion',
    {
      id_reto_iteracion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_reto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_retos',
          key: 'id_reto',
        },
        unique: 'web_retos_iteracion_ibfk_1',
      },
      numero_iteraciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'web_retos_iteracion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto_iteracion' }],
        },
        {
          name: 'id_reto',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto' }],
        },
      ],
    }
  );
};
