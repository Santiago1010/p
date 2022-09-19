const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_user_actions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    action: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_message_user_actions',
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
        name: "mdl_messuseracti_usemesact_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "messageid" },
          { name: "action" },
        ]
      },
      {
        name: "mdl_messuseracti_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_messuseracti_mes_ix",
        using: "BTREE",
        fields: [
          { name: "messageid" },
        ]
      },
    ]
  });
};
