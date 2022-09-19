const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_user_devices', {
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
    appid: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    model: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    platform: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    version: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    pushid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_user_devices',
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
        name: "mdl_userdevi_pususe_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pushid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_userdevi_uuiuse_ix",
        using: "BTREE",
        fields: [
          { name: "uuid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_userdevi_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
