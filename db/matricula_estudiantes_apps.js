const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_apps', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      }
    },
    id_apps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula_apps',
        key: 'id'
      }
    },
    usuario: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_apps',
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
        name: "id_matricula_id_apps",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
          { name: "id_apps" },
        ]
      },
      {
        name: "FK__apps_matricula_apps",
        using: "BTREE",
        fields: [
          { name: "id_apps" },
        ]
      },
    ]
  });
};
