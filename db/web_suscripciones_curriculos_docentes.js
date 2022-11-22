const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_curriculos_docentes', {
    id_suscripcion_curriculo_docente: {
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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_usuarios_empresas',
        key: 'id_usuario_empresa'
      }
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_curriculos_docentes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_curriculo_docente" },
        ]
      },
      {
        name: "FK_web_suscripciones_curriculos_docentes_web_usuarios_empresas",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_suscripcion" },
        ]
      },
      {
        name: "FK_web_suscripciones_curriculos_docentes_web_suscripciones",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
    ]
  });
};
