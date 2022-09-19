const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_gradingform_rubric_levels', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    criterionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    score: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    definitionformat: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_gradingform_rubric_levels',
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
        name: "mdl_gradrubrleve_cri_ix",
        using: "BTREE",
        fields: [
          { name: "criterionid" },
        ]
      },
    ]
  });
};
