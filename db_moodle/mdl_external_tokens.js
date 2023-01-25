const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_external_tokens',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      token: {
        type: DataTypes.STRING(128),
        allowNull: false,
        defaultValue: '',
      },
      privatetoken: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      tokentype: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      externalserviceid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      sid: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      contextid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      creatorid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 1,
      },
      iprestriction: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      validuntil: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      timecreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      lastaccess: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_external_tokens',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_extetoke_use_ix',
          using: 'BTREE',
          fields: [{ name: 'userid' }],
        },
        {
          name: 'mdl_extetoke_ext_ix',
          using: 'BTREE',
          fields: [{ name: 'externalserviceid' }],
        },
        {
          name: 'mdl_extetoke_con_ix',
          using: 'BTREE',
          fields: [{ name: 'contextid' }],
        },
        {
          name: 'mdl_extetoke_cre_ix',
          using: 'BTREE',
          fields: [{ name: 'creatorid' }],
        },
      ],
    }
  );
};
