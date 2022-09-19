const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnr_parametros', {
    codpar: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    fchinipar: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fchfinpar: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    prfpar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios_perfil',
        key: 'id'
      }
    },
    perevl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'config_periodo',
        key: 'codprd'
      }
    },
    aniopar: {
      type: DataTypes.DATE(4),
      allowNull: false
    },
    tipoevl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sede: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    perfil: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Estudiante",
      references: {
        model: 'gnr_parametros_perfiles',
        key: 'descipcion'
      }
    }
  }, {
    sequelize,
    tableName: 'gnr_parametros',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codpar" },
        ]
      },
      {
        name: "parametro_prdevl",
        using: "BTREE",
        fields: [
          { name: "perevl" },
        ]
      },
      {
        name: "FK_gnr_parametros_usuarios_perfil",
        using: "BTREE",
        fields: [
          { name: "prfpar" },
        ]
      },
      {
        name: "FK_gnr_parametros_gnr_parametros_perfiles",
        using: "BTREE",
        fields: [
          { name: "perfil" },
        ]
      },
    ]
  });
};
