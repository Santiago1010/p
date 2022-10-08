const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_recomendaciones_detalle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    id_recomendacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_recomendaciones',
        key: 'id'
      }
    },
    id_cerebro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_cerebros',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'test_recomendaciones_detalle',
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
        name: "FK_test_recomendaciones_detalle_test_recomendaciones",
        using: "BTREE",
        fields: [
          { name: "id_recomendacion" },
        ]
      },
      {
        name: "FK_test_recomendaciones_detalle_test_cerebros",
        using: "BTREE",
        fields: [
          { name: "id_cerebro" },
        ]
      },
    ]
  });
};
