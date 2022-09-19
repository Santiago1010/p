const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assign_plugin_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assignment: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    plugin: {
      type: DataTypes.STRING(28),
      allowNull: false,
      defaultValue: ""
    },
    subtype: {
      type: DataTypes.STRING(28),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(28),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_assign_plugin_config',
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
        name: "mdl_assiplugconf_plu_ix",
        using: "BTREE",
        fields: [
          { name: "plugin" },
        ]
      },
      {
        name: "mdl_assiplugconf_sub_ix",
        using: "BTREE",
        fields: [
          { name: "subtype" },
        ]
      },
      {
        name: "mdl_assiplugconf_nam_ix",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "mdl_assiplugconf_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
    ]
  });
};
