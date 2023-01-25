const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_hvp_counters',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING(63),
        allowNull: false,
        defaultValue: '',
      },
      library_name: {
        type: DataTypes.STRING(127),
        allowNull: false,
        defaultValue: '',
      },
      library_version: {
        type: DataTypes.STRING(31),
        allowNull: false,
        defaultValue: '',
      },
      num: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'mdl_hvp_counters',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_hvpcoun_typliblib_ix',
          using: 'BTREE',
          fields: [{ name: 'type' }, { name: 'library_name' }, { name: 'library_version' }],
        },
      ],
    }
  );
};
