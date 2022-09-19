const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_users_blocked', {
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
    blockeduserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_message_users_blocked',
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
        name: "mdl_messuserbloc_useblo_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "blockeduserid" },
        ]
      },
      {
        name: "mdl_messuserbloc_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_messuserbloc_blo_ix",
        using: "BTREE",
        fields: [
          { name: "blockeduserid" },
        ]
      },
    ]
  });
};
