const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_attempts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    quiz: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    attempt: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    uniqueid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      unique: "mdl_quizatte_uni_uix"
    },
    layout: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    currentpage: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    preview: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    state: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "inprogress"
    },
    timestart: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timefinish: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodifiedoffline: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecheckstate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    sumgrades: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_attempts',
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
        name: "mdl_quizatte_quiuseatt_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quiz" },
          { name: "userid" },
          { name: "attempt" },
        ]
      },
      {
        name: "mdl_quizatte_uni_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uniqueid" },
        ]
      },
      {
        name: "mdl_quizatte_statim_ix",
        using: "BTREE",
        fields: [
          { name: "state" },
          { name: "timecheckstate" },
        ]
      },
      {
        name: "mdl_quizatte_qui_ix",
        using: "BTREE",
        fields: [
          { name: "quiz" },
        ]
      },
      {
        name: "mdl_quizatte_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
