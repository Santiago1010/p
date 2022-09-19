const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_asig_ejercicios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_ejercicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_ejer_actividad',
        key: 'cod_ejercicio'
      }
    },
    cod_evld: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    },
    grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    cer_dominante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_cerebros',
        key: 'id'
      }
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
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
    id_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    id_empleado: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    tipo: {
      type: DataTypes.ENUM('General','Especifica'),
      allowNull: false,
      defaultValue: "General"
    },
    responsable: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'test_asig_ejercicios',
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
        name: "FK_test_asig_ejercicios_gnr_parametros",
        using: "BTREE",
        fields: [
          { name: "cod_evld" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_test_ejer_actividad",
        using: "BTREE",
        fields: [
          { name: "cod_ejercicio" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_acd_grados",
        using: "BTREE",
        fields: [
          { name: "grado" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_test_cerebros",
        using: "BTREE",
        fields: [
          { name: "cer_dominante" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_matricula_estudiantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "id_empleado" },
        ]
      },
    ]
  });
};
