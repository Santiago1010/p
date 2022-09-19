const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_anio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "id_matricula"
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes',
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
        model: 'config_grados_grupos_anios',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    procesos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    control: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    desistimiento_seguro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    eps: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    eps_contacto: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    eps_confirmacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_anio',
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
      {
        name: "FK_matricula_estudiantes_anio_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_anio_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_anio_matricula_estudiantes",
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
        ]
      },
    ]
  });
};
