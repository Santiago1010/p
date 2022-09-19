const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_familiares', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes',
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
    tipo_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_tipos_familiares',
        key: 'id'
      }
    },
    respeconomico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_familiares',
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
        name: "id_estudiante_id_familiar",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_familiares_admision_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_familiares_admision_aspirantes",
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
        ]
      },
      {
        name: "matricula_estudiantes_familiares_FK",
        using: "BTREE",
        fields: [
          { name: "tipo_familiar" },
        ]
      },
    ]
  });
};
