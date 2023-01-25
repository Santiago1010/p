const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_eventos_categorias',
    {
      id_evento_categoria: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_evento_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '0',
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
      tableName: 'web_eventos_categorias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_evento_categoria' }],
        },
        {
          name: 'FK_web_eventos_categorias_ctb_productos',
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
      ],
    }
  );
};
