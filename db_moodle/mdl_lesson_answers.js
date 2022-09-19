const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lesson_answers', {
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
    pageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    jumpto: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    flags: {
      type: DataTypes.SMALLINT,
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
    answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answerformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responseformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_lesson_answers',
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
        name: "mdl_lessansw_les_ix",
        using: "BTREE",
        fields: [
          { name: "lessonid" },
        ]
      },
      {
        name: "mdl_lessansw_pag_ix",
        using: "BTREE",
        fields: [
          { name: "pageid" },
        ]
      },
    ]
  });
};
