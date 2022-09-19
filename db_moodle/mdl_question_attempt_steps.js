const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_attempt_steps', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionattemptid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sequencenumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    fraction: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_question_attempt_steps',
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
        name: "mdl_quesattestep_queseq_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questionattemptid" },
          { name: "sequencenumber" },
        ]
      },
      {
        name: "mdl_quesattestep_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionattemptid" },
        ]
      },
      {
        name: "mdl_quesattestep_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
