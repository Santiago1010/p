const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_allow_assign', {
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
    allowassign: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_role_allow_assign',
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
        name: "mdl_rolealloassi_rolall_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "allowassign" },
        ]
      },
      {
        name: "mdl_rolealloassi_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_rolealloassi_all_ix",
        using: "BTREE",
        fields: [
          { name: "allowassign" },
        ]
      },
    ]
  });
};
