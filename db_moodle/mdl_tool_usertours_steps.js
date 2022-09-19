const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_usertours_steps', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tourid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    targettype: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    targetvalue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    configdata: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_usertours_steps',
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
        name: "mdl_tooluserstep_tousor_ix",
        using: "BTREE",
        fields: [
          { name: "tourid" },
          { name: "sortorder" },
        ]
      },
      {
        name: "mdl_tooluserstep_tou_ix",
        using: "BTREE",
        fields: [
          { name: "tourid" },
        ]
      },
    ]
  });
};
