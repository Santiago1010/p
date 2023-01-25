const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_hiddenpicture',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      correct: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
      wrong: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
      found: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_hiddenpicture',
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
