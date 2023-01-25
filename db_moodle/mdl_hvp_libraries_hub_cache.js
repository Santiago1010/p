const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_hvp_libraries_hub_cache',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      machine_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      major_version: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      minor_version: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      patch_version: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      h5p_major_version: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      h5p_minor_version: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING(511),
        allowNull: false,
        defaultValue: '',
      },
      created_at: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      is_recommended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      popularity: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      screenshots: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      license: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      example: {
        type: DataTypes.STRING(511),
        allowNull: false,
        defaultValue: '',
      },
      tutorial: {
        type: DataTypes.STRING(511),
        allowNull: true,
      },
      keywords: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      categories: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      owner: {
        type: DataTypes.STRING(511),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_hvp_libraries_hub_cache',
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
