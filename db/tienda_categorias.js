const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_categorias', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    porcentaje_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    visible_web: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tienda_categorias',
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
