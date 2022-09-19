const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm', {
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
    scormtype: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "local"
    },
    reference: {
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
    version: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    maxgrade: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    grademethod: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    whatgrade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    maxattempt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    forcecompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    forcenewattempt: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    lastattemptlock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    masteryoverride: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    displayattemptstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    displaycoursestructure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    updatefreq: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sha1hash: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    md5hash: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    revision: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    launch: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    skipview: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    hidebrowse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    hidetoc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    nav: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    navpositionleft: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: -100
    },
    navpositiontop: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: -100
    },
    auto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    popup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    options: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    width: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 100
    },
    height: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 600
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
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    completionstatusrequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    completionscorerequired: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    completionstatusallscos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    displayactivityname: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    autocommit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm',
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
        name: "mdl_scor_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
