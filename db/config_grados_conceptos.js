const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_grados_conceptos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_concepto_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_categorias',
        key: 'id'
      }
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_letras: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_grados_conceptos',
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
        name: "FK_config_grados_conceptos_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_config_grados_conceptos_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_config_grados_conceptos_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_concepto_categoria" },
        ]
      },
    ]
  });
};
