const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lesson', {
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
      allowNull: true
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    practice: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    modattempts: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    usepassword: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    dependency: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    conditions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    custom: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    ongoing: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    usemaxgrade: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    maxanswers: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 4
    },
    maxattempts: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 5
    },
    review: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    nextpagedefault: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    feedback: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    minquestions: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    maxpages: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    timelimit: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    retake: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    activitylink: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mediafile: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    mediaheight: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 100
    },
    mediawidth: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 650
    },
    mediaclose: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    slideshow: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    width: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 640
    },
    height: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 480
    },
    bgcolor: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "#FFFFFF"
    },
    displayleft: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    displayleftif: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    progressbar: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    available: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    deadline: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    completionendreached: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    completiontimespent: {
      type: DataTypes.BIGINT,
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
    tableName: 'mdl_lesson',
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
        name: "mdl_less_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
