const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_wiki_links', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subwikiid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    frompageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    topageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    tomissingpage: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_wiki_links',
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
        name: "mdl_wikilink_fro_ix",
        using: "BTREE",
        fields: [
          { name: "frompageid" },
        ]
      },
      {
        name: "mdl_wikilink_sub_ix",
        using: "BTREE",
        fields: [
          { name: "subwikiid" },
        ]
      },
    ]
  });
};
