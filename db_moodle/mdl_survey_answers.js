const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_survey_answers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    survey: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    answer1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer2: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_survey_answers',
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
        name: "mdl_survansw_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_survansw_sur_ix",
        using: "BTREE",
        fields: [
          { name: "survey" },
        ]
      },
      {
        name: "mdl_survansw_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
