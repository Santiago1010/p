const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_workshop_grades',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      assessmentid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      strategy: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: '',
      },
      dimensionid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      grade: {
        type: DataTypes.DECIMAL(10, 5),
        allowNull: false,
      },
      peercomment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      peercommentformat: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_workshop_grades',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_workgrad_assstrdim_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'assessmentid' }, { name: 'strategy' }, { name: 'dimensionid' }],
        },
        {
          name: 'mdl_workgrad_ass_ix',
          using: 'BTREE',
          fields: [{ name: 'assessmentid' }],
        },
      ],
    }
  );
};
