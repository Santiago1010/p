const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_airnotifier_devices', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userdeviceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_messairndevi_use_uix"
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_message_airnotifier_devices',
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
        name: "mdl_messairndevi_use_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userdeviceid" },
        ]
      },
    ]
  });
};
