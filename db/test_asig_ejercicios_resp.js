const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_asig_ejercicios_resp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_evld: {
      type: DataTypes.STRING(50),
      allowNull: true,
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
      allowNull: true,
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
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    id_resp_padre_madre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    id_resp_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      }
    },
    id_resp_empleado: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    tipo: {
      type: DataTypes.ENUM('Estudiante','Padre','Madre','Empleado'),
      allowNull: true
    },
    asignacion: {
      type: DataTypes.ENUM('General','Especifica'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_asig_ejercicios_resp',
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
        name: "FK_test_asig_ejercicios_resp_gnr_parametros",
        using: "BTREE",
        fields: [
          { name: "cod_evld" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_config_grados",
        using: "BTREE",
        fields: [
          { name: "grado" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_test_cerebros",
        using: "BTREE",
        fields: [
          { name: "cer_dominante" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_matricula_estudiantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_matricula_familiares_2",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_resp_padre_madre" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_matricula_estudiantes",
        using: "BTREE",
        fields: [
          { name: "id_resp_estudiante" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "id_resp_empleado" },
        ]
      },
      {
        name: "FK_test_asig_ejercicios_resp_adm_empleados_2",
        using: "BTREE",
        fields: [
          { name: "id_empleado" },
        ]
      },
    ]
  });
};
