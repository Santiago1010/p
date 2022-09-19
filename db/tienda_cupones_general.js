const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cupones_general', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cupon: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    porcentaje_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    limite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_cupones_general',
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
        name: "FK_tienda_cupones_general_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
