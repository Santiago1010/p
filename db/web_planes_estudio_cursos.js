const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
  return sequelize.define('web_planes_estudio_cursos', {
    id_planes_cursos: {
=======
  return sequelize.define('web_curriculos_modulos', {
    id_modulo_curriculo: {
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
=======
  return sequelize.define('web_planes_estudio_cursos', {
    id_planes_cursos: {
>>>>>>> dev_m
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
<<<<<<< HEAD
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
    id_plan_estudio: {
      type: DataTypes.INTEGER,
      allowNull: true,
=======
    id_plan_estudio: {
      type: DataTypes.INTEGER,
      allowNull: false,
>>>>>>> dev_m
      references: {
        model: 'web_planes_estudio',
        key: 'id_plan_estudio'
      }
    },
    id_curso: {
<<<<<<< HEAD
=======
    id_curriculo: {
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
=======
      type: DataTypes.INTEGER,
      allowNull: false,
>>>>>>> dev_m
      references: {
        model: 'web_cursos',
        key: 'id_curso'
      }
    },
<<<<<<< HEAD
    nombre_modulo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    orden_modulo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
    tableName: 'web_planes_estudio_cursos',
=======
    tableName: 'web_curriculos_modulos',
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
=======
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_planes_estudio_cursos',
>>>>>>> dev_m
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
<<<<<<< HEAD
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
=======
>>>>>>> dev_m
          { name: "id_planes_cursos" },
        ]
      },
      {
<<<<<<< HEAD
        name: "id_plan_estudio",
=======
          { name: "id_modulo_curriculo" },
        ]
      },
      {
        name: "FK_web_curriculos_modulos_web_curriculos",
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
        using: "BTREE",
        fields: [
          { name: "id_plan_estudio" },
        ]
      },
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
=======
        name: "plan_estudio_curso_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_plan_estudio" },
          { name: "id_curso" },
        ]
      },
>>>>>>> dev_m
      {
        name: "id_curso",
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
<<<<<<< HEAD
=======
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
=======
>>>>>>> dev_m
    ]
  });
};
