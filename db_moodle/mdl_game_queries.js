const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_game_queries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    attemptid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gamekind: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gameid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sourcemodule: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    glossaryentryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    questiontext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    timelastattempt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    studentanswer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mycol: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    myrow: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    horizontal: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    answertext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correct: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    answerid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tries: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_game_queries',
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
        name: "mdl_gamequer_att_ix",
        using: "BTREE",
        fields: [
          { name: "attemptid" },
        ]
      },
    ]
  });
};
