const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_evalestudiantes', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    codpre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resppre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    codevld: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ciclo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    coddoc: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    codgrado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'evl_evalestudiantes',
    timestamps: false
  });
};
