const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnetservice_enrol_courses', {
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
    remoteid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    categoryname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    fullname: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    shortname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summaryformat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    startdate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rolename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_mnetservice_enrol_courses',
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
        name: "mdl_mnetenrocour_hosrem_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hostid" },
          { name: "remoteid" },
        ]
      },
    ]
  });
};
