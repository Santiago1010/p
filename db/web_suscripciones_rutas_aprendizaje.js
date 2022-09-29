const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_rutas_aprendizaje', {
    id_suscripcion_ruta_aprendizaje: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones',
        key: 'id_suscripcion'
      }
    },
    id_ruta_aprendizaje: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_rutas_aprendizaje',
        key: 'id_ruta_aprendizaje'
      }
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_rutas_aprendizaje',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_ruta_aprendizaje" },
        ]
      },
      {
        name: "id_escuela_id_ruta_aprendizaje",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
          { name: "id_ruta_aprendizaje" },
        ]
      },
      {
        name: "FK_web_escuelas_rutas_aprendizaje_web_rutas_aprendizaje",
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje" },
        ]
      },
    ]
  });
};