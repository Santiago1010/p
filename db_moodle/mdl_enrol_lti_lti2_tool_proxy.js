const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_lti2_tool_proxy', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    toolproxykey: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_enroltilti2toolprox_to_uix"
    },
    consumerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    toolproxy: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_lti2_tool_proxy',
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
        name: "mdl_enroltilti2toolprox_to_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "toolproxykey" },
        ]
      },
      {
        name: "mdl_enroltilti2toolprox_con_ix",
        using: "BTREE",
        fields: [
          { name: "consumerid" },
        ]
      },
    ]
  });
};
