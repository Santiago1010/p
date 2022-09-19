const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lti_tool_proxies', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Tool Provider"
    },
    regurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "mdl_ltitoolprox_gui_uix"
    },
    secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vendorcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    capabilityoffered: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    serviceoffered: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    toolproxy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdby: {
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
    tableName: 'mdl_lti_tool_proxies',
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
        name: "mdl_ltitoolprox_gui_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guid" },
        ]
      },
    ]
  });
};
