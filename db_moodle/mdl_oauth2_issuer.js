const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_oauth2_issuer', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    baseurl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clientid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clientsecret: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loginscopes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loginscopesoffline: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loginparams: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loginparamsoffline: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alloweddomains: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scopessupported: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    showonloginpage: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    basicauth: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    requireconfirmation: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_oauth2_issuer',
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
    ]
  });
};
