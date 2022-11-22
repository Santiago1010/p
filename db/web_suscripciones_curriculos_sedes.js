const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_sedes', {
    id_sede_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_suscripciones',
        key: 'id_suscripcion'
      }
    },
    nombre_sede: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_sedes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sede_curriculo" },
        ]
      },
      {
        name: "FK_web_suscripciones_curriculos_sedes_web_suscripciones",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
    ]
  });
};
