const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_certificados', {
    id_suscripcion_certificado: {
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
    id_certificado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_certificados',
        key: 'id_certificado'
      }
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_certificados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_certificado" },
        ]
      },
      {
        name: "FK_web_suscripciones_certificados_web_suscripciones",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
      {
        name: "FK_web_suscripciones_certificados_web_certificados",
        using: "BTREE",
        fields: [
          { name: "id_certificado" },
        ]
      },
    ]
  });
};
