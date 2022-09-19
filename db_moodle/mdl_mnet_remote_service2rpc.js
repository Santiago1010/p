const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_remote_service2rpc', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    serviceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    rpcid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_remote_service2rpc',
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
        name: "mdl_mnetremoserv_rpcser_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rpcid" },
          { name: "serviceid" },
        ]
      },
    ]
  });
};
