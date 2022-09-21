const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_certificados_usuarios', {
    id_curso_certificado_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos',
        key: 'id_curso'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    fecha: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_cursos_certificados_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_certificado_usuario" },
        ]
      },
      {
        name: "id_curso_id_usuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso" },
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_web_cursos_certificados_usuarios_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
