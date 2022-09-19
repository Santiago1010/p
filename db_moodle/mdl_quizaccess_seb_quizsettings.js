const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quizaccess_seb_quizsettings', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    quizid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_quizsebquiz_qui_uix"
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_quizsebquiz_cmi_uix"
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    requiresafeexambrowser: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    showsebtaskbar: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    showwificontrol: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    showreloadbutton: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    showtime: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    showkeyboardlayout: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allowuserquitseb: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    quitpassword: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkquitseb: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userconfirmquit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    enableaudiocontrol: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    muteonstartup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allowspellchecking: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allowreloadinexam: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    activateurlfiltering: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    filterembeddedcontent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    expressionsallowed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    regexallowed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expressionsblocked: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    regexblocked: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    allowedbrowserexamkeys: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    showsebdownloadlink: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
    }
  }, {
    sequelize,
    tableName: 'mdl_quizaccess_seb_quizsettings',
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
        name: "mdl_quizsebquiz_qui_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quizid" },
        ]
      },
      {
        name: "mdl_quizsebquiz_cmi_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cmid" },
        ]
      },
      {
        name: "mdl_quizsebquiz_tem_ix",
        using: "BTREE",
        fields: [
          { name: "templateid" },
        ]
      },
      {
        name: "mdl_quizsebquiz_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
    ]
  });
};
