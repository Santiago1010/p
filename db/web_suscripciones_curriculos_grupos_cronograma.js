const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_grupos_cronograma', {
    id_suscripcion_curriculo_grupo_cronograma: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_curriculo_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos_grupos',
        key: 'id_suscripcion_curriculo_grupo'
      }
    },
    fecha_clase: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0=Pendiente, 1=Proceso, 2=Finalizado"
    },
    fecha_add: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_grupos_cronograma',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo_cronograma" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_grupos_cronograma_FK",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo" },
        ]
      },
    ]
  });
};
