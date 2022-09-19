const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_solicitud_motivo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    id_tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acd_solicitud_tipo',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'acd_solicitud_motivo',
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
        name: "FK_acd_solitud_motivo_acd_solicitud_tipo",
        using: "BTREE",
        fields: [
          { name: "id_tipo" },
        ]
      },
    ]
  });
};
