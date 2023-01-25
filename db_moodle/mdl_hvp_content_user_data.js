const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_hvp_content_user_data',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      hvp_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      sub_content_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      data_id: {
        type: DataTypes.STRING(127),
        allowNull: true,
      },
      data: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      preloaded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      delete_on_content_change: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'mdl_hvp_content_user_data',
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
