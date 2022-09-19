const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshopeval_best_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workshopid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_workbestsett_wor_uix"
    },
    comparison: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 5
    }
  }, {
    sequelize,
    tableName: 'mdl_workshopeval_best_settings',
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
        name: "mdl_workbestsett_wor_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "workshopid" },
        ]
      },
    ]
  });
};
