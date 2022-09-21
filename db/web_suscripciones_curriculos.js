const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos', {
    id_suscripcion_curriculo: {
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
    id_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_curriculos',
        key: 'id_curriculo'
      }
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_FK",
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
    ]
  });
};
