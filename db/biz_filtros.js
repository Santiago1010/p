const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'biz_filtros',
    {
      id_filtro: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      id_filtro_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'biz_filtros_categorias',
          key: 'id_filtro_categoria',
        },
      },
      nombre_filtro: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      principal: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
      },
      depende: {
        type: DataTypes.STRING(15),
        allowNull: true,
        references: {
          model: 'biz_filtros',
          key: 'id_filtro',
        },
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'biz_filtros',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_filtro' }],
        },
        {
          name: 'FK_biz_filtros_biz_filtros',
          using: 'BTREE',
          fields: [{ name: 'depende' }],
        },
        {
          name: 'FK_biz_filtros_biz_filtros_categorias',
          using: 'BTREE',
          fields: [{ name: 'id_filtro_categoria' }],
        },
      ],
    }
  );
};
