const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_host2service', {
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
    serviceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    publish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    subscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_host2service',
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
        name: "mdl_mnethost_hosser_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hostid" },
          { name: "serviceid" },
        ]
      },
    ]
  });
};
