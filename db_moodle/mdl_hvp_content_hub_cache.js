const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_hvp_content_hub_cache',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      language: {
        type: DataTypes.STRING(31),
        allowNull: false,
        defaultValue: '',
        unique: 'mdl_hvpconthubcach_lan_uix',
      },
      json: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      last_checked: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'mdl_hvp_content_hub_cache',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_hvpconthubcach_lan_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'language' }],
        },
      ],
    }
  );
};
