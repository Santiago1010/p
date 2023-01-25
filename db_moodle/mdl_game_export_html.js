const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_game_export_html',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      filename: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      checkbutton: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      printbutton: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      inputsize: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      maxpicturewidth: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      maxpictureheight: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_game_export_html',
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
