const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_planes_estudio_cursos', {
    id_planes_cursos: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_plan_estudio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_planes_estudio',
        key: 'id_plan_estudio'
      }
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos',
        key: 'id_curso'
      }
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_planes_estudio_cursos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_planes_cursos" },
        ]
      },
      {
        name: "plan_estudio_curso_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_plan_estudio" },
          { name: "id_curso" },
        ]
      },
      {
        name: "id_curso",
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
    ]
  });
};
