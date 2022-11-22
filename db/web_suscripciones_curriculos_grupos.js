const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_grupos', {
    id_suscripcion_curriculo_grupo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos',
        key: 'id_suscripcion_curriculo'
      }
    },
    id_suscripcion_curriculo_sede_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos_sedes_grupos',
        key: 'id_suscripcion_curriculo_sede_grupo'
      }
    },
    id_suscripcion_curriculo_ciclo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos_ciclos',
        key: 'id_suscripcion_curriculo_ciclo'
      }
    },
    nro_matriculados: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_grupos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_FK",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_ciclo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_sede_grupo" },
        ]
      },
    ]
  });
};
