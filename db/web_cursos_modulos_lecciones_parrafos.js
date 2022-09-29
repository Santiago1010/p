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
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parrafo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    recurso: {
      type: DataTypes.BIGINT,
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
    ]
  });
};
