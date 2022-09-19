const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_bodegas_ajustes_productos', {
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
    id_ajustes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_bodegas_ajustes',
        key: 'id'
      }
    },
    bodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos_bodega',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity_actual: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tienda_bodegas_ajustes_productos',
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
        name: "FK_tienda_bodegas_ajustes_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "FK_tienda_bodegas_ajustes_bodegas_ajustes",
        using: "BTREE",
        fields: [
          { name: "id_ajustes" },
        ]
      },
      {
        name: "FK_tienda_bodegas_ajustes_productos_tienda_productos_bodega",
        using: "BTREE",
        fields: [
          { name: "bodega" },
        ]
      },
    ]
  });
};
