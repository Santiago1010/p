const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_search_simpledb_index', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_searsimpinde_doc_uix"
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    areaid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    owneruserid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    modified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    description1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description2: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_search_simpledb_index',
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
        name: "mdl_searsimpinde_doc_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "docid" },
        ]
      },
      {
        name: "mdl_searsimpinde_owncon_ix",
        using: "BTREE",
        fields: [
          { name: "owneruserid" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_search_simpledb_index_index",
        type: "FULLTEXT",
        fields: [
          { name: "title" },
          { name: "content" },
          { name: "description1" },
          { name: "description2" },
        ]
      },
    ]
  });
};
