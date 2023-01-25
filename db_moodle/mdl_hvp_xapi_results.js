const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_hvp_xapi_results',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      content_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      parent_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      interaction_type: {
        type: DataTypes.STRING(127),
        allowNull: false,
        defaultValue: '',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      correct_responses_pattern: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      response: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      additionals: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      raw_score: {
        type: DataTypes.MEDIUMINT,
        allowNull: true,
      },
      max_score: {
        type: DataTypes.MEDIUMINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_hvp_xapi_results',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_hvpxapiresu_conuse_ix',
          using: 'BTREE',
          fields: [{ name: 'content_id' }, { name: 'user_id' }],
        },
      ],
    }
  );
};
