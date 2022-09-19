const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_resoluciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    resolucion_dian: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prefijo_dian: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    facturas_dian: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    clavetecnica_dian: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    desde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dian: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tienda_resoluciones',
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
    ]
  });
};
