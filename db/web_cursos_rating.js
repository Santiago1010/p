const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_rating', {
    id_curso_rating: {
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
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recomendacion: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      comment: "0= NO, 1 = Si (Recomiendas este curso)"
    },
    observacion: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: "Cuéntale a todos qué es lo más TOP de este curso"
    },
    visible: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_cursos_rating',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_rating" },
        ]
      },
      {
        name: "web_cursos_raiting_usuario_curso_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso" },
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_web_cursos_raiting_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
