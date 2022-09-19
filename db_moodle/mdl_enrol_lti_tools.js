const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_tools', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    enrolid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    institution: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    lang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "en"
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "99"
    },
    maxenrolled: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    maildisplay: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    city: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    gradesync: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    gradesynccompletion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    membersync: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    membersyncmode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    roleinstructor: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rolelearner: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    secret: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_tools',
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
        name: "mdl_enroltitool_enr_ix",
        using: "BTREE",
        fields: [
          { name: "enrolid" },
        ]
      },
      {
        name: "mdl_enroltitool_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
