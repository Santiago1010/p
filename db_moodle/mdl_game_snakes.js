const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_snakes',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      snakesdatabaseid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      position: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      queryid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      dice: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_snakes',
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
