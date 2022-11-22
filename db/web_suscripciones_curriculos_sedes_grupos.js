const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_sedes_grupos', {
    id_suscripcion_curriculo_sede_grupo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_curriculo_sede: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos_sedes',
        key: 'id_sede_curriculo'
      }
    },
    nombre_grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_sedes_grupos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_sede_grupo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_sedes_grupos_FK",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_sede" },
        ]
      },
    ]
  });
};
