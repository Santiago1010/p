const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_resgeneral', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codest: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
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
    id_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes_anio',
        key: 'id'
      }
    },
    id_asp_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_familiares',
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
    id_prsexterno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    grado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    derecho: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    central: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    izquierdo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    derecho_ejec: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    derecho_sup: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    derecho_ase: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    derecho_com: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_ejec: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_sup: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_ase: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_com: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_ejec: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_sup: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_ase: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_com: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    solucion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    espacio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cronologia_ini: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cronologia_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cronologia_hora: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    personaje: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    otropersonaje: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    proced_actividades: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_ejecutadas: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_hacer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_recursos: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_indicadores: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_exigidor: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    proced_sanciones: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usradd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    revDocente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'test_resgeneral',
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
        name: "codest_codevl",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codest" },
          { name: "codevl" },
        ]
      },
      {
        name: "FK_test_resgeneral_matricula_estudiantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
      {
        name: "FK_test_resgeneral_gnr_parametros",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
      {
        name: "FK_test_resgeneral_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_test_resgeneral_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "id_empleado" },
        ]
      },
      {
        name: "FK_test_resgeneral_admision_aspirantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
      {
        name: "FK_test_resgeneral_admision_familiares",
        using: "BTREE",
        fields: [
          { name: "id_asp_familiar" },
        ]
      },
    ]
  });
};
