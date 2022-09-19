const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_allow_override', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    allowoverride: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_role_allow_override',
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
        name: "mdl_rolealloover_rolall_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "allowoverride" },
        ]
      },
      {
        name: "mdl_rolealloover_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_rolealloover_all_ix",
        using: "BTREE",
        fields: [
          { name: "allowoverride" },
        ]
      },
    ]
  });
};
