const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      course: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      intro: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      introformat: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      sourcemodule: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      timeopen: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      timeclose: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      quizid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      glossaryid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      glossarycategoryid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      questioncategoryid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bookid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      gamekind: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      param1: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param2: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param3: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param4: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param5: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param6: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param7: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param8: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      param9: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      param10: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      shuffle: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      gameinputid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      toptext: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      bottomtext: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      grademethod: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      grade: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      decimalpoints: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      popup: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      review: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      attempts: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      glossaryid2: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      glossarycategoryid2: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      subcategories: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      maxattempts: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      userlanguage: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      disablesummarize: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      glossaryonlyapproved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
      },
      completionattemptsexhausted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
      },
      completionpass: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
      },
      highscore: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
};
