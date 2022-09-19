const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_evaluadores', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    },
    codusr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codgrd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    angevl: {
      type: DataTypes.DATE(4),
      allowNull: false,
      primaryKey: true
    },
    prdevl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idplanilla: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pevl_evaluacion_grupos',
        key: 'id'
      }
    },
    tipevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'acd_elementos',
        key: 'codelm'
      }
    },
    fchevl: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fchini: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fchfin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    codprf: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    ipeval: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nomeqp: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'evl_evaluadores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codusr" },
          { name: "angevl" },
          { name: "prdevl" },
          { name: "codevl" },
        ]
      },
      {
        name: "FK_evaluadores_parametros",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
      {
        name: "FK_evaluadores_elementos",
        using: "BTREE",
        fields: [
          { name: "tipevl" },
        ]
      },
      {
        name: "FK_evl_evaluadores_pevl_evaluacion_grupos",
        using: "BTREE",
        fields: [
          { name: "idplanilla" },
        ]
      },
    ]
  });
};
