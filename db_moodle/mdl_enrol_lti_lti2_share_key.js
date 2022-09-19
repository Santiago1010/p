const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_lti2_share_key', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sharekey: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_enroltilti2sharkey_sha_uix"
    },
    resourcelinkid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_enroltilti2sharkey_res_uix"
    },
    autoapprove: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_lti2_share_key',
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
        name: "mdl_enroltilti2sharkey_sha_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sharekey" },
        ]
      },
      {
        name: "mdl_enroltilti2sharkey_res_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resourcelinkid" },
        ]
      },
    ]
  });
};
