const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_asig_evaluaciones', {
    codemp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    codevaludo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'evl_asig_evaluaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codemp" },
          { name: "codevaludo" },
          { name: "anio" },
        ]
      },
      {
        name: "FK_evl_asignacion_directivos_adm_empleados_2",
        using: "BTREE",
        fields: [
          { name: "codevaludo" },
        ]
      },
      {
        name: "FK_evl_asig_evaluaciones_config_anios",
        using: "BTREE",
        fields: [
          { name: "anio" },
        ]
      },
    ]
  });
};
