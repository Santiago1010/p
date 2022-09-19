const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_email_messages', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    useridto: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    conversationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_message_email_messages',
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
        name: "mdl_messemaimess_use_ix",
        using: "BTREE",
        fields: [
          { name: "useridto" },
        ]
      },
      {
        name: "mdl_messemaimess_con_ix",
        using: "BTREE",
        fields: [
          { name: "conversationid" },
        ]
      },
      {
        name: "mdl_messemaimess_mes_ix",
        using: "BTREE",
        fields: [
          { name: "messageid" },
        ]
      },
    ]
  });
};
