const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_qtype_multichoice_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      unique: "mdl_qtypmultopti_que_uix"
    },
    layout: {
      type: DataTypes.SMALLINT,
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
      defaultValue: 1
    },
    correctfeedback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    correctfeedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    partiallycorrectfeedback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    partiallycorrectfeedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    incorrectfeedback: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'mdl_qtype_multichoice_options',
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
        name: "mdl_qtypmultopti_que_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
    ]
  });
};
