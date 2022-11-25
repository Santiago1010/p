const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_contratos_validate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    id_curso_instructor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos_instructores',
        key: 'id_curso_instructor'
      }
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'web_cursos_contratos_validate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_web_cursos_contratos_validate",
        using: "BTREE",
        fields: [
          { name: "id_curso_instructor" },
        ]
      },
    ]
  });
};
