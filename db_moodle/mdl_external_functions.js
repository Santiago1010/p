const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_external_functions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_extefunc_nam_uix"
    },
    classname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    methodname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    classpath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    capabilities: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    services: {
      type: DataTypes.STRING(1333),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_external_functions',
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
        name: "mdl_extefunc_nam_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
