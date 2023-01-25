const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_task_scheduled',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      component: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      classname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
        unique: 'mdl_tasksche_cla_uix',
      },
      lastruntime: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      nextruntime: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      blocking: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      minute: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      hour: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      day: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      month: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      dayofweek: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      faildelay: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      customised: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_task_scheduled',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_tasksche_cla_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'classname' }],
        },
      ],
    }
  );
};
