const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_forum_queue', {
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
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_forum_queue',
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
        name: "mdl_foruqueu_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_foruqueu_dis_ix",
        using: "BTREE",
        fields: [
          { name: "discussionid" },
        ]
      },
      {
        name: "mdl_foruqueu_pos_ix",
        using: "BTREE",
        fields: [
          { name: "postid" },
        ]
      },
    ]
  });
};
