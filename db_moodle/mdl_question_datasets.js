const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_datasets', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    datasetdefinition: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_question_datasets',
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
        name: "mdl_quesdata_quedat_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
          { name: "datasetdefinition" },
        ]
      },
      {
        name: "mdl_quesdata_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
      {
        name: "mdl_quesdata_dat_ix",
        using: "BTREE",
        fields: [
          { name: "datasetdefinition" },
        ]
      },
    ]
  });
};
