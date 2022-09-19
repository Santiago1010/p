const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_post', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    module: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    moduleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    coursemoduleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    subject: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uniquehash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    rating: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    format: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    summaryformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    publishstate: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "draft"
    },
    lastmodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    created: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_post',
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
        name: "mdl_post_iduse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_post_las_ix",
        using: "BTREE",
        fields: [
          { name: "lastmodified" },
        ]
      },
      {
        name: "mdl_post_mod_ix",
        using: "BTREE",
        fields: [
          { name: "module" },
        ]
      },
      {
        name: "mdl_post_sub_ix",
        using: "BTREE",
        fields: [
          { name: "subject" },
        ]
      },
      {
        name: "mdl_post_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
    ]
  });
};
