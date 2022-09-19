const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_escuelas_sedes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codesc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acd_escuelas',
        key: 'codesc'
      }
    },
    codesc_ctrl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codesc_ctrl_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codsed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_sedes',
        key: 'codsed'
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
    id_instructor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acd_escuelas_instructores',
        key: 'id'
      }
    },
    nivel: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    cupos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inscritos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'acd_escuelas_sedes',
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
        name: "FK_acd_escuelas_sedes_acd_escuelas",
        using: "BTREE",
        fields: [
          { name: "codesc" },
        ]
      },
      {
        name: "FK_acd_escuelas_sedes_adm_sedes",
        using: "BTREE",
        fields: [
          { name: "codsed" },
        ]
      },
      {
        name: "FK_acd_escuelas_sedes_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_acd_escuelas_sedes_acd_escuelas_instructores",
        using: "BTREE",
        fields: [
          { name: "id_instructor" },
        ]
      },
      {
        name: "codesc_ctrl",
        using: "BTREE",
        fields: [
          { name: "codesc_ctrl" },
        ]
      },
      {
        name: "codesc_ctrl_grupo",
        using: "BTREE",
        fields: [
          { name: "codesc_ctrl_grupo" },
        ]
      },
    ]
  });
};
