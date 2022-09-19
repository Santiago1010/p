const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_codeudor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      },
      unique: "FK_matricula_estudiantes_codeudor_matricula_estudiantes_anio"
    },
    ident: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_codeudor',
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
        name: "id_matricula",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
    ]
  });
};
