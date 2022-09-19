const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_users', {
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
    toolid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    serviceurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sourceid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consumerkey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consumersecret: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    membershipsurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    membershipsid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    lastaccess: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_users',
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
        name: "mdl_enroltiuser_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_enroltiuser_too_ix",
        using: "BTREE",
        fields: [
          { name: "toolid" },
        ]
      },
    ]
  });
};
