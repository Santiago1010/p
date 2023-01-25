const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_bookquiz',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      lastchapterid: {
        type: DataTypes.STRING(81),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_bookquiz',
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
