const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_grupos_asistencias', {
    id_suscripcion_curriculo_grupo_asistencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_curriculo_grupo_cronograma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_suscripciones_curriculos_grupos_cronograma',
        key: 'id_suscripcion_curriculo_grupo_cronograma'
      }
    },
    id_suscripcion_curriculo_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_suscripciones_curriculos_estudiantes',
        key: 'id_suscripcion_curriculo_estudiante'
      }
    },
    estado_asistencia: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1=No asistio,2=asistio, 3=con excusa"
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_grupos_asistencias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo_asistencia" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_asistencias_FK",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo_cronograma" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_asistencias_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_estudiante" },
        ]
      },
    ]
  });
};
