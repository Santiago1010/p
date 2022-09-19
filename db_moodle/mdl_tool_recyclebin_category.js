const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_recyclebin_category', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    shortname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_recyclebin_category',
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
        name: "mdl_toolrecycate_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timecreated" },
        ]
      },
      {
        name: "mdl_toolrecycate_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
    ]
  });
};
