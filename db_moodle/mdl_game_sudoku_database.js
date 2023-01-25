const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_sudoku_database',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      level: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      opened: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      data: {
        type: DataTypes.STRING(81),
        allowNull: true,
        unique: 'mdl_gamesudodata_dat_uix',
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_sudoku_database',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_gamesudodata_dat_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'data' }],
        },
      ],
    }
  );
};
