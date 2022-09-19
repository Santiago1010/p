const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_dataprivacy_ctxinstance', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_tooldatactxi_con_uix"
    },
    purposeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usermodified: {
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
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_dataprivacy_ctxinstance',
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
        name: "mdl_tooldatactxi_con_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_tooldatactxi_pur_ix",
        using: "BTREE",
        fields: [
          { name: "purposeid" },
        ]
      },
      {
        name: "mdl_tooldatactxi_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
    ]
  });
};
