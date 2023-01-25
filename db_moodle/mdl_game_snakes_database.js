const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_snakes_database',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      usedcols: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      usedrows: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      data: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fileboard: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      direction: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      headerx: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      headery: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      footerx: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      footery: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      width: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      height: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_snakes_database',
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
