const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    remoteid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    coursename: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    module: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    action: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    info: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_log',
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
        name: "mdl_mnetlog_hosusecou_ix",
        using: "BTREE",
        fields: [
          { name: "hostid" },
          { name: "userid" },
          { name: "course" },
        ]
      },
    ]
  });
};
