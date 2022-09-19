const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshopform_rubric_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workshopid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_workrubrconf_wor_uix"
    },
    layout: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "list"
    }
  }, {
    sequelize,
    tableName: 'mdl_workshopform_rubric_config',
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
        name: "mdl_workrubrconf_wor_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "workshopid" },
        ]
      },
    ]
  });
};
