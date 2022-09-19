const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_role_assignments', {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    modifierid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_role_assignments',
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
        name: "mdl_roleassi_sor_ix",
        using: "BTREE",
        fields: [
          { name: "sortorder" },
        ]
      },
      {
        name: "mdl_roleassi_rolcon_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_roleassi_useconrol_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "contextid" },
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_roleassi_comiteuse_ix",
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "itemid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_roleassi_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_roleassi_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_roleassi_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
