const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_repetitions',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      gameid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      questionid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      glossaryentryid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      repetitions: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_repetitions',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_gamerepe_gamusequeglo_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'gameid' }, { name: 'userid' }, { name: 'questionid' }, { name: 'glossaryentryid' }],
        },
      ],
    }
  );
};
