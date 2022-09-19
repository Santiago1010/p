const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnetservice_enrol_enrolments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hostid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    remotecourseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rolename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    enroltime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    enroltype: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_mnetservice_enrol_enrolments',
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
        name: "mdl_mnetenroenro_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_mnetenroenro_hos_ix",
        using: "BTREE",
        fields: [
          { name: "hostid" },
        ]
      },
    ]
  });
};
