const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_datosmedicos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    utiliza_medicamentos_preescritos: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    utiliza_medicamentos_preescritos_cual: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    utiliza_medicamentos_preescritos_cual_dosis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presenta_alergias: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    cuales_alergias: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tratamiento_alergias: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    presenta_alergias_alimento: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    presenta_alergias_alimento_cuales: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    dieta_normal: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    dieta_normal_cual: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    seguro_accidente: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    ANTIALERGICOS_LORATADINA: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    ANALGESICOS_DOLEX: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    ANTIACIDO_MILANTA: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    ANTIESPASMODICO_BUSCAPINA: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    Seguro_EPS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_eps',
        key: 'id'
      }
    },
    nombre_medico: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    telefono_medico: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    clinica_preferencia: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    numero_afiliacion: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    enfermedad_ojos: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    lentes_permanentes: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    asma: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    enfermedades_respiratorias: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    enfermedades_cardiacas: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    enfermedades_gastricas: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    diabetes: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    convulciones: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    celiaquismo: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    problemasPsiquiatricos: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    hepatitis: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    anemia: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    hipertension_alterial: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    hipotension_alterial: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    epilepsia: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    hernias: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    migranias: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    fractura_traumas: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    accidente_cerebrovascular: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    artritis_reumatoidea: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    desnutricion: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    obesidad: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    cancer: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    VIH: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    enfermedad_renal_cronica: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    Otros: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    protesis: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    cirugias: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    estudiante_convulsionado_perdido_conocimiento: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    enfermedad_actual: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    medicamentos_no_puede_recibir: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    condiciones_especiales_salud: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    presenta_alergias_alimento_tratamiento: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_datosmedicos',
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
        name: "datos_medicos_FK",
        using: "BTREE",
        fields: [
          { name: "Seguro_EPS" },
        ]
      },
    ]
  });
};
