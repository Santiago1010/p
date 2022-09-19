const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_messages', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    useridfrom: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    conversationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fullmessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fullmessageformat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    fullmessagehtml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    smallmessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    fullmessagetrust: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    customdata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_messages',
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
        name: "mdl_mess_contim_ix",
        using: "BTREE",
        fields: [
          { name: "conversationid" },
          { name: "timecreated" },
        ]
      },
      {
        name: "mdl_mess_use_ix",
        using: "BTREE",
        fields: [
          { name: "useridfrom" },
        ]
      },
      {
        name: "mdl_mess_con_ix",
        using: "BTREE",
        fields: [
          { name: "conversationid" },
        ]
      },
    ]
  });
};
