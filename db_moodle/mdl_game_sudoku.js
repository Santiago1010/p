const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_sudoku',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      level: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
      data: {
        type: DataTypes.STRING(81),
        allowNull: false,
        defaultValue: '',
      },
      opened: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      guess: {
        type: DataTypes.STRING(81),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_sudoku',
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
