const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_choice',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      course: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      intro: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      introformat: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      publish: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      showresults: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      display: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      allowupdate: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      allowmultiple: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      showunanswered: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      includeinactive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      limitanswers: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      timeopen: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      timeclose: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      showpreview: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      completionsubmit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_choice',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_choi_cou_ix',
          using: 'BTREE',
          fields: [{ name: 'course' }],
        },
      ],
    }
  );
};
