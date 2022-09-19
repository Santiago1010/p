const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_customlang', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lang: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    componentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stringid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    original: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    master: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    local: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecustomized: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    outdated: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    modified: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_customlang',
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
        name: "mdl_toolcust_lancomstr_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang" },
          { name: "componentid" },
          { name: "stringid" },
        ]
      },
      {
        name: "mdl_toolcust_com_ix",
        using: "BTREE",
        fields: [
          { name: "componentid" },
        ]
      },
    ]
  });
};
