const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_glossary', {
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
    allowduplicatedentries: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    displayformat: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "dictionary"
    },
    mainglossary: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    showspecial: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    showalphabet: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    showall: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    allowcomments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    allowprintview: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    usedynalink: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    defaultapproval: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    approvaldisplayformat: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "default"
    },
    globalglossary: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    entbypage: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 10
    },
    editalways: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    rsstype: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    rssarticles: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    assessed: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    assesstimestart: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    assesstimefinish: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    scale: {
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
    },
    completionentries: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_glossary',
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
        name: "mdl_glos_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
