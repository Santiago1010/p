const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_forum_discussion_subs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    forum: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    discussion: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    preference: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_forum_discussion_subs',
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
        name: "mdl_forudiscsubs_usedis_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "discussion" },
        ]
      },
      {
        name: "mdl_forudiscsubs_for_ix",
        using: "BTREE",
        fields: [
          { name: "forum" },
        ]
      },
      {
        name: "mdl_forudiscsubs_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_forudiscsubs_dis_ix",
        using: "BTREE",
        fields: [
          { name: "discussion" },
        ]
      },
    ]
  });
};
