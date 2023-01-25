const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'config_anios',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'codigo',
      },
      anio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      estado_admision: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      estado_paz_salvo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'config_anios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'codigo',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codigo' }],
        },
      ],
    }
  );
};
