const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_filter_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    filter: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_filter_config',
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
        name: "mdl_filtconf_confilnam_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "filter" },
          { name: "name" },
        ]
      },
      {
        name: "mdl_filtconf_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
