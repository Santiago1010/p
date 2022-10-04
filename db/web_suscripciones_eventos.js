const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_eventos', {
    id_suscripcion_evento: {
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
    id_evento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_eventos',
        key: 'id_eventos'
      }
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_eventos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_evento" },
        ]
      },
      {
        name: "FK_web_suscripciones_eventos_web_suscripciones",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
      {
        name: "FK_web_suscripciones_eventos_web_eventos",
        using: "BTREE",
        fields: [
          { name: "id_evento" },
        ]
      },
    ]
  });
};
