const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_attempts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionusageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slot: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    behaviour: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    variant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    maxmark: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false
    },
    minfraction: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false
    },
    maxfraction: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false,
      defaultValue: 1.0000000
    },
    flagged: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    questionsummary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rightanswer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responsesummary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_question_attempts',
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
        name: "mdl_quesatte_queslo_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questionusageid" },
          { name: "slot" },
        ]
      },
      {
        name: "mdl_quesatte_beh_ix",
        using: "BTREE",
        fields: [
          { name: "behaviour" },
        ]
      },
      {
        name: "mdl_quesatte_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
      {
        name: "mdl_quesatte_que2_ix",
        using: "BTREE",
        fields: [
          { name: "questionusageid" },
        ]
      },
    ]
  });
};
