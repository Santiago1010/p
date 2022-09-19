const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_dataprivacy_ctxexpired', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_tooldatactxe_con_uix"
    },
    unexpiredroles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expiredroles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    defaultexpired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'mdl_tool_dataprivacy_ctxexpired',
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
        name: "mdl_tooldatactxe_con_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
