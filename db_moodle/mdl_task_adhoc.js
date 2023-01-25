const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_task_adhoc',
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
      },
      nextruntime: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      faildelay: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      customdata: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      blocking: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_task_adhoc',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_taskadho_nex_ix',
          using: 'BTREE',
          fields: [{ name: 'nextruntime' }],
        },
        {
          name: 'mdl_taskadho_use_ix',
          using: 'BTREE',
          fields: [{ name: 'userid' }],
        },
      ],
    }
  );
};
