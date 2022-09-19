const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshopform_rubric_levels', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dimensionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    definitionformat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_workshopform_rubric_levels',
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
        name: "mdl_workrubrleve_dim_ix",
        using: "BTREE",
        fields: [
          { name: "dimensionid" },
        ]
      },
    ]
  });
};
