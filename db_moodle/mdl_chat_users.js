const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_chat_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    chatid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    version: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    firstping: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastping: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastmessageping: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    sid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_chat_users',
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
        name: "mdl_chatuser_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_chatuser_las_ix",
        using: "BTREE",
        fields: [
          { name: "lastping" },
        ]
      },
      {
        name: "mdl_chatuser_gro_ix",
        using: "BTREE",
        fields: [
          { name: "groupid" },
        ]
      },
      {
        name: "mdl_chatuser_cha_ix",
        using: "BTREE",
        fields: [
          { name: "chatid" },
        ]
      },
    ]
  });
};
