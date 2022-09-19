const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_messageinbound_handlers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    classname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_messhand_cla_uix"
    },
    defaultexpiration: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 86400
    },
    validateaddress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_messageinbound_handlers',
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
        name: "mdl_messhand_cla_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "classname" },
        ]
      },
    ]
  });
};
