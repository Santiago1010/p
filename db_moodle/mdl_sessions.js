const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_sessions',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      state: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      sid: {
        type: DataTypes.STRING(128),
        allowNull: false,
        defaultValue: '',
        unique: 'mdl_sess_sid_uix',
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      sessdata: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      timecreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      firstip: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      lastip: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_sessions',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_sess_sid_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'sid' }],
        },
        {
          name: 'mdl_sess_sta_ix',
          using: 'BTREE',
          fields: [{ name: 'state' }],
        },
        {
          name: 'mdl_sess_tim_ix',
          using: 'BTREE',
          fields: [{ name: 'timecreated' }],
        },
        {
          name: 'mdl_sess_tim2_ix',
          using: 'BTREE',
          fields: [{ name: 'timemodified' }],
        },
        {
          name: 'mdl_sess_use_ix',
          using: 'BTREE',
          fields: [{ name: 'userid' }],
        },
      ],
    }
  );
};
