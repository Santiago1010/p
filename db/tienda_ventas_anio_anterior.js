const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_anio_anterior', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    codconcepto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codempresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codestadocuenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codestumatricula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombreconcepto: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    valorapagado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    valorapagar: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_anio_anterior',
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
        name: "FK_tienda_ventas_anio_anterior_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
    ]
  });
};
