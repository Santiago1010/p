const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_auth_oauth2_linked_login', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    confirmtoken: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    confirmtokenexpires: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_auth_oauth2_linked_login',
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
        name: "mdl_authoautlinklogi_useis_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "issuerid" },
          { name: "username" },
        ]
      },
      {
        name: "mdl_authoautlinklogi_issuse_ix",
        using: "BTREE",
        fields: [
          { name: "issuerid" },
          { name: "username" },
        ]
      },
      {
        name: "mdl_authoautlinklogi_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_authoautlinklogi_use2_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_authoautlinklogi_iss_ix",
        using: "BTREE",
        fields: [
          { name: "issuerid" },
        ]
      },
    ]
  });
};
