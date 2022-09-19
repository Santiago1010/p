const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_config_plugins', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    plugin: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "core"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_config_plugins',
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
        name: "mdl_confplug_plunam_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plugin" },
          { name: "name" },
        ]
      },
    ]
  });
};
