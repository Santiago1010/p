const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_wiki_subwikis', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    wikiid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_wiki_subwikis',
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
        name: "mdl_wikisubw_wikgrouse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wikiid" },
          { name: "groupid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_wikisubw_wik_ix",
        using: "BTREE",
        fields: [
          { name: "wikiid" },
        ]
      },
    ]
  });
};
