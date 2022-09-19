const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_evalempleados', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    codpreg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codresp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codemp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    codevaluado: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'evl_evalempleados',
    timestamps: false
  });
};
