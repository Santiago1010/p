const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_answers', {
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
      type: DataTypes.TEXT,
      allowNull: false
    },
    answerformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    fraction: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false,
      defaultValue: 0.0000000
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    feedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_question_answers',
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
        name: "mdl_quesansw_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
