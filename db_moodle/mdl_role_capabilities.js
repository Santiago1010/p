const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_capabilities', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    capability: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    permission: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    modifierid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_role_capabilities',
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
        name: "mdl_rolecapa_rolconcap_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "contextid" },
          { name: "capability" },
        ]
      },
      {
        name: "mdl_rolecapa_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_rolecapa_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_rolecapa_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modifierid" },
        ]
      },
      {
        name: "mdl_rolecapa_cap_ix",
        using: "BTREE",
        fields: [
          { name: "capability" },
        ]
      },
    ]
  });
};
