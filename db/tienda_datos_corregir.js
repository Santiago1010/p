const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_datos_corregir', {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    'Columna 2': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vaucher: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Columna 4': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Columna 5': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Columna 6': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Columna 7': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Columna 8': {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_datos_corregir',
    timestamps: false
  });
};
