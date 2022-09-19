const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshopform_numerrors_map', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workshopid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    nonegative: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_workshopform_numerrors_map',
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
        name: "mdl_worknumemap_wornon_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "workshopid" },
          { name: "nonegative" },
        ]
      },
      {
        name: "mdl_worknumemap_wor_ix",
        using: "BTREE",
        fields: [
          { name: "workshopid" },
        ]
      },
    ]
  });
};
