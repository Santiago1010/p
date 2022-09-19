const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_solicitud_retiro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_retiro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cod_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    cod_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes',
        key: 'id'
      }
    },
    cod_servicio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acd_solicitud_tipo',
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
    estado: {
      type: DataTypes.ENUM('Nuevo','En proceso','Permanencia','Desición de retiro'),
      allowNull: true,
      defaultValue: "Nuevo"
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    fecha_add: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado_cartera: {
      type: DataTypes.ENUM('Cartera en deuda','Cartera a paz y salvo','Pendiente entrega de documentos','Documentación entregada'),
      allowNull: true,
      comment: "0 =cartera con deuda \/\/ 1 = entrega documento \/\/ 2= paz y salvo"
    },
    observacion_cartera: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acd_solicitud_retiro',
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
        name: "FK_acd_solicitud_retiro_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_acd_solicitud_retiro_acd_solicitud_tipo",
        using: "BTREE",
        fields: [
          { name: "cod_servicio" },
        ]
      },
      {
        name: "FK_matricula_familiar_cod_familiar",
        using: "BTREE",
        fields: [
          { name: "cod_familiar" },
        ]
      },
      {
        name: "FK_matriculas_estudiante_cod_estudiante",
        using: "BTREE",
        fields: [
          { name: "cod_estudiante" },
        ]
      },
      {
        name: "FK_config_anio_id_anio",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
