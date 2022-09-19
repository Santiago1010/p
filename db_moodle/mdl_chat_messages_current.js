const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_chat_messages_current', {
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
    issystem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_chat_messages_current',
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
        name: "mdl_chatmesscurr_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_chatmesscurr_gro_ix",
        using: "BTREE",
        fields: [
          { name: "groupid" },
        ]
      },
      {
        name: "mdl_chatmesscurr_timcha_ix",
        using: "BTREE",
        fields: [
          { name: "timestamp" },
          { name: "chatid" },
        ]
      },
      {
        name: "mdl_chatmesscurr_cha_ix",
        using: "BTREE",
        fields: [
          { name: "chatid" },
        ]
      },
    ]
  });
};
