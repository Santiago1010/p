const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_anio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes',
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
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_grado_admitido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_user_moodle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = no pagado, 1 = pagado, 2=datos completos, 3 = documentos, 4=entrevistas, 5= Admitido,  6=proceso expirado 7 = no admitido, 8 = proceso cancelado"
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    llamada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    encuesta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    matriculado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    matriculado_resp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    escolarizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    financiero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    capacidad_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    capacidad_pago_diag: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    desistir_observacion: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    proceso_observacion: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    test_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    test_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    test_pass: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_anio',
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
        name: "FK_admision_aspirantes_anio_admision_aspirantes",
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
      {
        name: "FK_admision_aspirantes_anio_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_admision_aspirantes_anio_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "id_user_moodle",
        using: "BTREE",
        fields: [
          { name: "id_user_moodle" },
        ]
      },
      {
        name: "FK_admision_aspirantes_anio_config_grados_2",
        using: "BTREE",
        fields: [
          { name: "id_grado_admitido" },
        ]
      },
    ]
  });
};
