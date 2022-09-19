const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_remote_rpc', {
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
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_remote_rpc',
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
