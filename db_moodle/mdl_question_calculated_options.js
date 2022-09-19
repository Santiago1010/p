const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_calculated_options', {
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
    synchronize: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    single: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    shuffleanswers: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    correctfeedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correctfeedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    partiallycorrectfeedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    partiallycorrectfeedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    incorrectfeedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    incorrectfeedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    answernumbering: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "abc"
    },
    shownumcorrect: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_question_calculated_options',
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
        name: "mdl_quescalcopti_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
