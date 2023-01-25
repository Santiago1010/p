const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_hangman',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      queryid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      letters: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      allletters: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      try: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      maxtries: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      finishedword: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      corrects: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      iscorrect: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_hangman',
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
