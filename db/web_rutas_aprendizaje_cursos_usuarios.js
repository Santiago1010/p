const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_rutas_aprendizaje_cursos_usuarios', {
    id_web_ruta_aprendizaje_curso_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_web_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_web_curso: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_rutas_aprendizaje_cursos_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_web_ruta_aprendizaje_curso_usuario" },
        ]
      },
    ]
  });
};
