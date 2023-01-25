const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_componentes_categorias',
    {
      id_componente_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_componente_categoria: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_productos',
          key: 'id_producto',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_componentes_categorias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_componente_categoria' }],
        },
        {
          name: 'web_componentes_categorias_ctb_productos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
      ],
    }
  );
};
