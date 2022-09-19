const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    shortname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_role_sho_uix"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      unique: "mdl_role_sor_uix"
    },
    archetype: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_role',
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
        name: "mdl_role_sor_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sortorder" },
        ]
      },
      {
        name: "mdl_role_sho_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shortname" },
        ]
      },
    ]
  });
};
