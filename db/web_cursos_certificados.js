const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_certificados', {
    id_curso_certificado: {
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
      },
      unique: "FK_web_cursos_certificados_web_cursos"
    },
    id_certificado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_certificados',
        key: 'id_certificados'
      },
      unique: "FK_web_cursos_certificados_web_certificados"
    }
  }, {
    sequelize,
    tableName: 'web_cursos_certificados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_certificado" },
        ]
      },
      {
        name: "id_curso",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
      {
        name: "id_certificado",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_certificado" },
        ]
      },
    ]
  });
};
