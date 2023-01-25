const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_folder',
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
        allowNull: true,
      },
      introformat: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      revision: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      display: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      showexpanded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      showdownloadfolder: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'mdl_folder',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_fold_cou_ix',
          using: 'BTREE',
          fields: [{ name: 'course' }],
        },
      ],
    }
  );
};
