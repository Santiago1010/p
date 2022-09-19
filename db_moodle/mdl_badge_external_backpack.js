const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_external_backpack', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    backpackapiurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_badgexteback_bac_uix"
    },
    backpackweburl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_badgexteback_bac2_uix"
    },
    apiversion: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "1.0"
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_external_backpack',
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
        name: "mdl_badgexteback_bac_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "backpackapiurl" },
        ]
      },
      {
        name: "mdl_badgexteback_bac2_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "backpackweburl" },
        ]
      },
    ]
  });
};
