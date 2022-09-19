const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actualizar_pagos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vaucher: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    medio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lugar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actualizar_pagos',
    timestamps: false
  });
};
