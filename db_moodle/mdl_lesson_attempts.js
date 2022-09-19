const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lesson_attempts', {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    answerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    retry: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    correct: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    useranswer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timeseen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_lesson_attempts',
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
        name: "mdl_lessatte_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_lessatte_les_ix",
        using: "BTREE",
        fields: [
          { name: "lessonid" },
        ]
      },
      {
        name: "mdl_lessatte_pag_ix",
        using: "BTREE",
        fields: [
          { name: "pageid" },
        ]
      },
      {
        name: "mdl_lessatte_ans_ix",
        using: "BTREE",
        fields: [
          { name: "answerid" },
        ]
      },
    ]
  });
};
