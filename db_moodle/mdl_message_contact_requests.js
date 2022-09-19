const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_contact_requests', {
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
    requesteduserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_message_contact_requests',
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
        name: "mdl_messcontrequ_usereq_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "requesteduserid" },
        ]
      },
      {
        name: "mdl_messcontrequ_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_messcontrequ_req_ix",
        using: "BTREE",
        fields: [
          { name: "requesteduserid" },
        ]
      },
    ]
  });
};
