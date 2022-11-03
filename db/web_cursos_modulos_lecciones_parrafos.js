const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_modulos_lecciones_parrafos', {
    id_web_curso_modulo_leccion_parrafo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso_modulo_leccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos_modulos_lecciones',
        key: 'id_curso_modulo_leccion'
      }
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parrafo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recurso: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    imagetext: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    textimagen: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_cursos_modulos_lecciones_parrafos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_web_curso_modulo_leccion_parrafo" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_parrafos_FK",
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo_leccion" },
        ]
      },
    ]
  });
};
