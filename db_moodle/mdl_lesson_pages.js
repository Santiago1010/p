const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lesson_pages', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lessonid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    prevpageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    nextpageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    qtype: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    qoption: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    layout: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    display: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contentsformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_lesson_pages',
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
        name: "mdl_lesspage_les_ix",
        using: "BTREE",
        fields: [
          { name: "lessonid" },
        ]
      },
    ]
  });
};
