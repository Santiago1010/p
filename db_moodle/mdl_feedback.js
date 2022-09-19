const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_feedback', {
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
    anonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    email_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    multiple_submit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    autonumbering: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    site_after_submit: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    page_after_submit: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page_after_submitformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    publish_stats: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    completionsubmit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_feedback',
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
        name: "mdl_feed_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
