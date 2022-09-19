const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_allow_switch', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    allowswitch: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_role_allow_switch',
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
        name: "mdl_rolealloswit_rolall_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "allowswitch" },
        ]
      },
      {
        name: "mdl_rolealloswit_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_rolealloswit_all_ix",
        using: "BTREE",
        fields: [
          { name: "allowswitch" },
        ]
      },
    ]
  });
};
