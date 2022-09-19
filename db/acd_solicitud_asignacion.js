const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_solicitud_asignacion', {
    cod_servicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'acd_solicitud_tipo',
        key: 'id'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'acd_solicitud_asignacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_servicio" },
          { name: "id_usuario" },
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_acd_solicitud_asignacion_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_acd_solicitud_asignacion_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
    ]
  });
};
