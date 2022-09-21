const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_rutas_aprendizajes_sugerencias', {
    id_ruta_aprendizaje_sugerencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_ruta_aprendizaje_origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_rutas_aprendizaje',
        key: 'id_ruta_aprendizaje'
      }
    },
    id_ruta_aprendizaje_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_rutas_aprendizaje',
        key: 'id_ruta_aprendizaje'
      }
    }
  }, {
    sequelize,
    tableName: 'web_rutas_aprendizajes_sugerencias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje_sugerencia" },
        ]
      },
      {
        name: "id_ruta_aprendizaje_origen_id_ruta_aprendizaje_destino",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje_origen" },
          { name: "id_ruta_aprendizaje_destino" },
        ]
      },
      {
        name: "FK__web_rutas_aprendizaje_2",
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje_destino" },
        ]
      },
    ]
  });
};
