const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_bigbluebuttonbn', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
      defaultValue: 1
    },
    meetingid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    moderatorpass: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    viewerpass: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    wait: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    record: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    recordallfromstart: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    recordhidebutton: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    welcome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicebridge: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    openingtime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    closingtime: {
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
    presentation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    participants: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userlimit: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    recordings_html: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    recordings_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    recordings_imported: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    recordings_preview: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    clienttype: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    muteonstart: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_bigbluebuttonbn',
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
    ]
  });
};
