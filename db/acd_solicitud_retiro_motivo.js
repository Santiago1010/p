const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_solicitud_retiro_motivo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_motivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_solicitud_motivo',
        key: 'id'
      }
    },
    id_solicitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_solicitud_retiro',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'acd_solicitud_retiro_motivo',
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
        name: "acd_solicitud_retiro_motivo_FK",
        using: "BTREE",
        fields: [
          { name: "id_motivo" },
        ]
      },
      {
        name: "acd_solicitud_retiro_motivo_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_solicitud" },
        ]
      },
    ]
  });
};
