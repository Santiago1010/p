const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_grupos_ventas', {
    id_suscripcion_curriculo_grupo_venta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_curriculo_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_suscripciones_curriculos_grupos',
        key: 'id_suscripcion_curriculo_grupo'
      }
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000
    },
    moneda: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_grupos_ventas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo_venta" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_ventas_FK",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo" },
        ]
      },
    ]
  });
};
