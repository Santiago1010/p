const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_programas_formacion_calendario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_programa_formacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_programas_formacion',
        key: 'id_programa_formacion'
      }
    },
    id_suscripcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_suscripciones',
        key: 'id_suscripcion'
      }
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enviados: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    informe: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_programas_formacion_calendario',
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
        name: "FK_web_programas_formacion_calendario_web_programas_formacion",
        using: "BTREE",
        fields: [
          { name: "id_programa_formacion" },
        ]
      },
      {
        name: "FK_web_programas_formacion_calendario_web_suscripciones",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
    ]
  });
};
