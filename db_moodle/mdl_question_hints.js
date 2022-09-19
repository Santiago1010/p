const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_hints', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hint: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hintformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    shownumcorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    clearwrong: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    options: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_question_hints',
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
        name: "mdl_queshint_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
    ]
  });
};
