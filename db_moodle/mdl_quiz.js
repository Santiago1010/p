const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    timeopen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeclose: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timelimit: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    overduehandling: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "autoabandon"
    },
    graceperiod: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    preferredbehaviour: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    canredoquestions: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    attempts: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    attemptonlast: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    grademethod: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    decimalpoints: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2
    },
    questiondecimalpoints: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: -1
    },
    reviewattempt: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    reviewcorrectness: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    reviewmarks: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    reviewspecificfeedback: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    reviewgeneralfeedback: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    reviewrightanswer: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    reviewoverallfeedback: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    questionsperpage: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    navmethod: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "free"
    },
    shuffleanswers: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    sumgrades: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    subnet: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    browsersecurity: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    delay1: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    delay2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    showuserpicture: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    showblocks: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    completionattemptsexhausted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    completionpass: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    allowofflineattempts: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz',
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
        name: "mdl_quiz_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
