const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_productos_relacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    id_producto_relacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_productos_relacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_tienda_productos_relacion_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "FK_tienda_productos_relacion_tienda_productos_2",
        using: "BTREE",
        fields: [
          { name: "id_producto_relacion" },
        ]
      },
    ]
  });
};
