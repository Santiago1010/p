const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_hvp_contents_libraries',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      hvp_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      library_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      dependency_type: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: '',
      },
      drop_css: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      weight: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'mdl_hvp_contents_libraries',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_hvpcontlibr_dro_ix',
          using: 'BTREE',
          fields: [{ name: 'drop_css' }],
        },
      ],
    }
  );
};
