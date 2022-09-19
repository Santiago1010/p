const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_capabilities', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_capa_nam_uix"
    },
    captype: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    contextlevel: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    riskbitmask: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_capabilities',
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
        name: "mdl_capa_nam_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
