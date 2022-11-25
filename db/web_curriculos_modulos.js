const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  return sequelize.define('web_curriculos_modulos', {
    id_modulo_curriculo: {
=======
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
  return sequelize.define('web_planes_estudio_cursos', {
    id_planes_cursos: {
=======
  return sequelize.define('web_curriculos_modulos', {
    id_modulo_curriculo: {
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
>>>>>>> dev_m
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
<<<<<<< HEAD
    id_curriculo: {
=======
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
    id_plan_estudio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_planes_estudio',
        key: 'id_plan_estudio'
      }
    },
    id_curso: {
=======
    id_curriculo: {
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
>>>>>>> dev_m
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
<<<<<<< HEAD
        model: 'web_curriculos',
        key: 'id_curriculo'
=======
        model: 'web_cursos',
        key: 'id_curso'
>>>>>>> dev_m
      }
    },
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
<<<<<<< HEAD
    tableName: 'web_curriculos_modulos',
=======
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
    tableName: 'web_planes_estudio_cursos',
=======
    tableName: 'web_curriculos_modulos',
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
>>>>>>> dev_m
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
<<<<<<< HEAD
=======
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
          { name: "id_planes_cursos" },
        ]
      },
      {
        name: "id_plan_estudio",
=======
>>>>>>> dev_m
          { name: "id_modulo_curriculo" },
        ]
      },
      {
        name: "FK_web_curriculos_modulos_web_curriculos",
<<<<<<< HEAD
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
=======
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
        using: "BTREE",
        fields: [
          { name: "id_plan_estudio" },
        ]
      },
<<<<<<< HEAD:models/db/web_planes_estudio_cursos.js
      {
        name: "id_curso",
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
=======
>>>>>>> dev_m:models/db/web_curriculos_modulos.js
>>>>>>> dev_m
    ]
  });
};
