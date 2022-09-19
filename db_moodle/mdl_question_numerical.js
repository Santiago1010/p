const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_numerical', {
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
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0.0"
    }
  }, {
    sequelize,
    tableName: 'mdl_question_numerical',
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
        name: "mdl_quesnume_ans_ix",
        using: "BTREE",
        fields: [
          { name: "answer" },
        ]
      },
      {
        name: "mdl_quesnume_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
