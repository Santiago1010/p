const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_host', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    wwwroot: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    public_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    public_key_expires: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    transport: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    portno: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    last_connect_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    last_log_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    force_theme: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    theme: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    applicationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    sslverification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_host',
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
        name: "mdl_mnethost_app_ix",
        using: "BTREE",
        fields: [
          { name: "applicationid" },
        ]
      },
    ]
  });
};
