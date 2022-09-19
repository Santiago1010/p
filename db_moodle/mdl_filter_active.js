const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_filter_active', {
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
    active: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_filter_active',
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
        name: "mdl_filtacti_confil_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "filter" },
        ]
      },
      {
        name: "mdl_filtacti_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
