const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_feedback', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    quizid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    feedbacktext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    feedbacktextformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mingrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    maxgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_feedback',
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
        name: "mdl_quizfeed_qui_ix",
        using: "BTREE",
        fields: [
          { name: "quizid" },
        ]
      },
    ]
  });
};
