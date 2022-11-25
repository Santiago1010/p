const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_docentes_grupos', {
    id_suscripcion_curriculo_docente_grupo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_curriculo_docente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos_docentes',
        key: 'id_suscripcion_curriculo_docente'
      }
    },
    id_suscripcion_curriculo_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_curriculos_grupos',
        key: 'id_suscripcion_curriculo_grupo'
      }
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_docentes_grupos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_docente_grupo" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_docentes_grupos_FK",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_docente" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_docentes_grupos_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo" },
        ]
      },
    ]
  });
};
