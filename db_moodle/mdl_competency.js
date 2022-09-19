const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shortname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    competencyframeworkid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    parentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ruletype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ruleoutcome: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ruleconfig: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scaleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    scaleconfiguration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_competency',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mdl_comp_comidn_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "competencyframeworkid" },
          { name: "idnumber" },
        ]
      },
      {
        name: "mdl_comp_rul_ix",
        using: "BTREE",
        fields: [
          { name: "ruleoutcome" },
        ]
      },
    ]
  });
};
