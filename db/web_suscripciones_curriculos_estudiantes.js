const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_estudiantes', {
    id_suscripcion_curriculo_estudiante: {
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
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_usuarios_empresas',
        key: 'id_usuario_empresa'
      }
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_estudiantes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_estudiante" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_estudiantes_FK",
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
        ]
      },
      {
        name: "web_suscripciones_curriculos_estudiantes_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_grupo" },
        ]
      },
    ]
  });
};
