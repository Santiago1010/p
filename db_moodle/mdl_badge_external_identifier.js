const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_external_identifier', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sitebackpackid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    internalid: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    externalid: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_external_identifier',
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
        name: "mdl_badgexteiden_sitintext_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sitebackpackid" },
          { name: "internalid" },
          { name: "externalid" },
          { name: "type" },
        ]
      },
      {
        name: "mdl_badgexteiden_sit_ix",
        using: "BTREE",
        fields: [
          { name: "sitebackpackid" },
        ]
      },
    ]
  });
};
