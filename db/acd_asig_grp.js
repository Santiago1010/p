const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_asig_grp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codasigrp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_asignaturas',
        key: 'codasig'
      }
    },
    codsed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_sedes',
        key: 'codsed'
      }
    },
    codgrdgrp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados_grupos_anios',
        key: 'id'
      }
    },
    coddoc: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    codplatf: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    inthra: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idioma: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: "1"
    },
    hablidades: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1= Activo, 0 = Inactivo"
    },
    principal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'acd_asig_grp',
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
        name: "FK_asig_grp_asignaturas",
        using: "BTREE",
        fields: [
          { name: "codasigrp" },
        ]
      },
      {
        name: "FK_acd_asig_grp_adm_sedes",
        using: "BTREE",
        fields: [
          { name: "codsed" },
        ]
      },
      {
        name: "FK_acd_asig_grp_config_grados_grupos_anios",
        using: "BTREE",
        fields: [
          { name: "codgrdgrp" },
        ]
      },
    ]
  });
};
