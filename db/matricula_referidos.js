const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_referidos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_familiar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    id_beneficiario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_grados',
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
    ident: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    edad: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    institucion: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    nombre_padre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    nombre_madre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    email_padre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    email_madre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    celular_padre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    celular_madre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    observacion: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: ""
    },
    observacion_aprob: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: ""
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.ENUM('Nuevo','Aprobado','No aprobado','En cartera'),
      allowNull: false,
      defaultValue: "Nuevo"
    }
  }, {
    sequelize,
    tableName: 'matricula_referidos',
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
        name: "FK_matricula_referidos_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_matricula_referidos_matricula_estudiantes_anio_2",
        using: "BTREE",
        fields: [
          { name: "id_beneficiario" },
        ]
      },
      {
        name: "FK_matricula_referidos_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_matricula_referidos_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
