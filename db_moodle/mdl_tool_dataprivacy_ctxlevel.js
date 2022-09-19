const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_dataprivacy_ctxlevel', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextlevel: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      unique: "mdl_tooldatactxl_con_uix"
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
    tableName: 'mdl_tool_dataprivacy_ctxlevel',
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
        name: "mdl_tooldatactxl_con_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextlevel" },
        ]
      },
      {
        name: "mdl_tooldatactxl_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
      {
        name: "mdl_tooldatactxl_pur_ix",
        using: "BTREE",
        fields: [
          { name: "purposeid" },
        ]
      },
    ]
  });
};
