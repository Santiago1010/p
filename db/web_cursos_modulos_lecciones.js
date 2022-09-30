const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_modulos_lecciones', {
    id_curso_modulo_leccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso_modulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos_modulos',
        key: 'id_curso_modulo'
      }
    },
    nombre_leccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion_leccion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    tipo_recurso_leccion: {
      type: DataTypes.ENUM('Video','Audio','Parrafo'),
      allowNull: true,
      defaultValue: "Video"
    },
    recurso_leccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tiempo_leccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_leccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    test_codpre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_preguntas',
        key: 'codpre'
      }
    }
  }, {
    sequelize,
    tableName: 'web_cursos_modulos_lecciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo_leccion" },
        ]
      },
      {
        name: "FK_web_cursos_modulos_lecciones_web_cursos_modulos",
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_FK",
        using: "BTREE",
        fields: [
          { name: "test_codpre" },
        ]
      },
    ]
  });
};
