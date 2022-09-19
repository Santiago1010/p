const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_application', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    display_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    xmlrpc_server_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sso_land_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sso_jump_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_application',
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
