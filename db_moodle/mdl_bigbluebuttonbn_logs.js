const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_bigbluebuttonbn_logs',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      courseid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      bigbluebuttonbnid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      timecreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      meetingid: {
        type: DataTypes.STRING(256),
        allowNull: false,
        defaultValue: '',
      },
      log: {
        type: DataTypes.STRING(32),
        allowNull: false,
        defaultValue: '',
      },
      meta: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_bigbluebuttonbn_logs',
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
