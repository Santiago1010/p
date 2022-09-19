const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_wiki_pages', {
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "title"
    },
    cachedcontent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timerendered: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pageviews: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    readonly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_wiki_pages',
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
        name: "mdl_wikipage_subtituse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subwikiid" },
          { name: "title" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_wikipage_sub_ix",
        using: "BTREE",
        fields: [
          { name: "subwikiid" },
        ]
      },
    ]
  });
};
