const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_wiki_synonyms', {
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
    pageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pagesynonym: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Pagesynonym"
    }
  }, {
    sequelize,
    tableName: 'mdl_wiki_synonyms',
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
        name: "mdl_wikisyno_pagpag_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pageid" },
          { name: "pagesynonym" },
        ]
      },
    ]
  });
};
