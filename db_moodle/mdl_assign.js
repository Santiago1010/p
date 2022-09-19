const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assign', {
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
    alwaysshowdescription: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    nosubmissions: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    submissiondrafts: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sendnotifications: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sendlatenotifications: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    duedate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    allowsubmissionsfromdate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    requiresubmissionstatement: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    completionsubmit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    cutoffdate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    gradingduedate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    teamsubmission: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    requireallteammemberssubmit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    teamsubmissiongroupingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    blindmarking: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    hidegrader: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    revealidentities: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    attemptreopenmethod: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "none"
    },
    maxattempts: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: -1
    },
    markingworkflow: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    markingallocation: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sendstudentnotifications: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    preventsubmissionnotingroup: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assign',
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
        name: "mdl_assi_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_assi_tea_ix",
        using: "BTREE",
        fields: [
          { name: "teamsubmissiongroupingid" },
        ]
      },
    ]
  });
};
