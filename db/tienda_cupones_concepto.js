const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cupones_concepto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_concepto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    id_cupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_cupones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_cupones_concepto',
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
        name: "id_concepto_id_cupon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_concepto" },
          { name: "id_cupon" },
        ]
      },
      {
        name: "tienda_cupones_concepto_FK",
        using: "BTREE",
        fields: [
          { name: "id_cupon" },
        ]
      },
      {
        name: "tienda_cupones_concepto_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_concepto" },
        ]
      },
    ]
  });
};
