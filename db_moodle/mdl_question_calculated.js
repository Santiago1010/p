const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_calculated', {
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
    answer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    tolerance: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "0.0"
    },
    tolerancetype: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    correctanswerlength: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 2
    },
    correctanswerformat: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 2
    }
  }, {
    sequelize,
    tableName: 'mdl_question_calculated',
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
        name: "mdl_quescalc_ans_ix",
        using: "BTREE",
        fields: [
          { name: "answer" },
        ]
      },
      {
        name: "mdl_quescalc_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
