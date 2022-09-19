const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_multianswer', {
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
    sequence: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_question_multianswer',
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
        name: "mdl_quesmult_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
