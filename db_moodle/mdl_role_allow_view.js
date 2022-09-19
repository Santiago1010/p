const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_allow_view', {
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
    allowview: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_role_allow_view',
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
        name: "mdl_rolealloview_rolall_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "allowview" },
        ]
      },
      {
        name: "mdl_rolealloview_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_rolealloview_all_ix",
        using: "BTREE",
        fields: [
          { name: "allowview" },
        ]
      },
    ]
  });
};
