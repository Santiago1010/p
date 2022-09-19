const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lti', {
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
      allowNull: true,
      defaultValue: 0
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
    typeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    toolurl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    securetoolurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructorchoicesendname: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    instructorchoicesendemailaddr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    instructorchoiceallowroster: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    instructorchoiceallowsetting: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    instructorcustomparameters: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instructorchoiceacceptgrades: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 100
    },
    launchcontainer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    resourcekey: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    debuglaunch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    showtitlelaunch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    showdescriptionlaunch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    servicesalt: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secureicon: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_lti',
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
        name: "mdl_lti_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
