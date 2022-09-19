const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_forum_read', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    forumid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    discussionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    postid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    firstread: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastread: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_forum_read',
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
        name: "mdl_foruread_usefor_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "forumid" },
        ]
      },
      {
        name: "mdl_foruread_usedis_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "discussionid" },
        ]
      },
      {
        name: "mdl_foruread_posuse_ix",
        using: "BTREE",
        fields: [
          { name: "postid" },
          { name: "userid" },
        ]
      },
    ]
  });
};
