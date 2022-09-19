const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_grados_cupos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    cupos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cupos_proceso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cupos_inscritos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'config_grados_cupos',
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
        name: "FK_config_grados_cupos_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_config_grados_cupos_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
