const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_sso_access_control', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    mnet_host_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    accessctrl: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "allow"
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_sso_access_control',
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
        name: "mdl_mnetssoaccecont_mneuse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mnet_host_id" },
          { name: "username" },
        ]
      },
    ]
  });
};
