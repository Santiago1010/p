const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_block_xp_filters',
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
      category: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      ruledata: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      points: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      sortorder: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_block_xp_filters',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_blocxpfilt_cou_ix',
          using: 'BTREE',
          fields: [{ name: 'courseid' }],
        },
        {
          name: 'mdl_blocxpfilt_coucat_ix',
          using: 'BTREE',
          fields: [{ name: 'courseid' }, { name: 'category' }],
        },
      ],
    }
  );
};
