const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_rpc', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    functionname: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    xmlrpcpath: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    plugintype: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    pluginname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    help: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    classname: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    static: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_rpc',
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
        name: "mdl_mnetrpc_enaxml_ix",
        using: "BTREE",
        fields: [
          { name: "enabled" },
          { name: "xmlrpcpath" },
        ]
      },
    ]
  });
};
