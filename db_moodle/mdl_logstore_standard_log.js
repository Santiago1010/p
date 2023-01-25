const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_logstore_standard_log',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      eventname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      component: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      action: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      target: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      objecttable: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      objectid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      crud: {
        type: DataTypes.STRING(1),
        allowNull: false,
        defaultValue: '',
      },
      edulevel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      contextid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      contextlevel: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      contextinstanceid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      courseid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      relateduserid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      anonymous: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      other: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      timecreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ip: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      realuserid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_logstore_standard_log',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl5_logsstanlog_tim_ix',
          using: 'BTREE',
          fields: [{ name: 'timecreated' }],
        },
        {
          name: 'mdl5_logsstanlog_couanotim_ix',
          using: 'BTREE',
          fields: [{ name: 'courseid' }, { name: 'anonymous' }, { name: 'timecreated' }],
        },
        {
          name: 'mdl5_logsstanlog_useconconc_ix',
          using: 'BTREE',
          fields: [
            { name: 'userid' },
            { name: 'contextlevel' },
            { name: 'contextinstanceid' },
            { name: 'crud' },
            { name: 'edulevel' },
            { name: 'timecreated' },
          ],
        },
      ],
    }
  );
};
