const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_forum', {
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
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "general"
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
    duedate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    cutoffdate: {
      type: DataTypes.BIGINT,
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
    grade_forum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    grade_forum_notify: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    maxbytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    maxattachments: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    forcesubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    trackingtype: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
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
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    warnafter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    blockafter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    blockperiod: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    completiondiscussions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    completionreplies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    completionposts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    displaywordcount: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    lockdiscussionafter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_forum',
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
        name: "mdl_foru_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
