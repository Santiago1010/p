const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_bookquiz_chapters',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      attemptid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      chapterid: {
        type: DataTypes.STRING(81),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_bookquiz_chapters',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_gamebookchap_attcha_ix',
          using: 'BTREE',
          fields: [{ name: 'attemptid' }, { name: 'chapterid' }],
        },
      ],
    }
  );
};
