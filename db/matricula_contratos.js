const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_contratos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1='Obligatorio', 0='Opcional',2='final'"
    },
    servicio: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cabecera: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cuerpo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cuerpo_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publicado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    desc_anio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    vst_contrato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "08-21"
    },
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "DO-AD-02"
    }
  }, {
    sequelize,
    tableName: 'matricula_contratos',
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
        name: "FK_matricula_contratos_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
