const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_curriculos_categorias', {
    id_curriculo_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_productos',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'web_curriculos_categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curriculo_categoria" },
        ]
      },
      {
        name: "web_curriculos_categorias_FK",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
