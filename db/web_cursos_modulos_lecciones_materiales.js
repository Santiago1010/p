const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_modulos_lecciones_materiales', {
    id_curso_material: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso_modulo_leccion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nombre_material: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_material: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    url_material: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_cursos_modulos_lecciones_materiales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_material" },
        ]
      },
      {
        name: "FK_web_cursos_materiales_web_cursos",
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo_leccion" },
        ]
      },
    ]
  });
};
