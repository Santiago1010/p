const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_bodegas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "codigo"
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    impuesto_incluido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 el impuesto ya esta incluido en el precio del formulario"
    },
    impuesto_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 significa iva, el 2 ipoconsumo, el 3 ninguno"
    },
    id_consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_consecutivos',
        key: 'id'
      }
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    tipo: {
      type: DataTypes.ENUM('conceptos','tienda'),
      allowNull: false,
      defaultValue: "tienda"
    }
  }, {
    sequelize,
    tableName: 'tienda_bodegas',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_tienda_bodegas_tienda_consecutivos",
        using: "BTREE",
        fields: [
          { name: "id_consecutivo" },
        ]
      },
    ]
  });
};
