const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_names', {
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
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_role_names',
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
        name: "mdl_rolename_rolcon_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_rolename_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_rolename_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
