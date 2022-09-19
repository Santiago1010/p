const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_modulecomp', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: false
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
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    competencyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ruleoutcome: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_competency_modulecomp',
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
        name: "mdl_compmodu_cmicom_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cmid" },
          { name: "competencyid" },
        ]
      },
      {
        name: "mdl_compmodu_cmirul_ix",
        using: "BTREE",
        fields: [
          { name: "cmid" },
          { name: "ruleoutcome" },
        ]
      },
      {
        name: "mdl_compmodu_cmi_ix",
        using: "BTREE",
        fields: [
          { name: "cmid" },
        ]
      },
      {
        name: "mdl_compmodu_com_ix",
        using: "BTREE",
        fields: [
          { name: "competencyid" },
        ]
      },
    ]
  });
};
