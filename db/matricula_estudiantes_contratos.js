const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_contratos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_contrato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_contratos',
        key: 'id'
      }
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    firma_codeudor: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    firma_acudiente: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    origen: {
      type: DataTypes.ENUM('web','dashboard'),
      allowNull: true,
      defaultValue: "web"
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    control: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_contratos',
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
        name: "FK_matricula_estudiantes_contratos_matricula_contratos",
        using: "BTREE",
        fields: [
          { name: "id_contrato" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_contratos_matricula_estudiantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_contratos_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_contratos_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
    ]
  });
};
