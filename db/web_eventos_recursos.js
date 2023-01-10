const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_eventos_recursos', {
    id_evento_recurso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_eventos',
        key: 'id_eventos'
      }
    },
    nombre_recurso: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tipo_recurso: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    recurso: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_eventos_recursos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_evento_recurso" },
        ]
      },
      {
        name: "FK_web_eventos_recursos_web_eventos",
        using: "BTREE",
        fields: [
          { name: "id_evento" },
        ]
      },
    ]
  });
};
