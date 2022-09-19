const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshop', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    instructauthors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructauthorsformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    instructreviewers: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructreviewersformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    phase: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    useexamples: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    usepeerassessment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    useselfassessment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true,
      defaultValue: 80.00000
    },
    gradinggrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true,
      defaultValue: 20.00000
    },
    strategy: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    evaluation: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    gradedecimals: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    submissiontypetext: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    submissiontypefile: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    nattachments: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    submissionfiletypes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    latesubmissions: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    maxbytes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 100000
    },
    examplesmode: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    submissionstart: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    submissionend: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    assessmentstart: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    assessmentend: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    phaseswitchassessment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    conclusion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conclusionformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    overallfeedbackmode: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    overallfeedbackfiles: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    overallfeedbackfiletypes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    overallfeedbackmaxbytes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 100000
    }
  }, {
    sequelize,
    tableName: 'mdl_workshop',
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
        name: "mdl_work_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
