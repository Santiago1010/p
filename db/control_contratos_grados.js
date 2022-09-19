const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('control_contratos_grados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_contrato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'control_contratos',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'control_contratos_grados',
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
        name: "id_contrato_id_grado",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_contrato" },
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_control_contratos_grados_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
    ]
  });
};
